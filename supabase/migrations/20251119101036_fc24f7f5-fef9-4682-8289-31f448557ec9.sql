-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Create user roles enum and table
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  UNIQUE(user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Function to check user roles (security definer to bypass RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- User roles policies
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

-- Create transactions table
CREATE TABLE public.transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  symbol TEXT NOT NULL,
  transaction_type TEXT NOT NULL CHECK (transaction_type IN ('buy', 'sell')),
  quantity DECIMAL(20, 8) NOT NULL CHECK (quantity > 0),
  price DECIMAL(20, 2) NOT NULL CHECK (price > 0),
  total_amount DECIMAL(20, 2) NOT NULL,
  transaction_date TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Transactions policies
CREATE POLICY "Users can view their own transactions"
  ON public.transactions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own transactions"
  ON public.transactions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own transactions"
  ON public.transactions FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own transactions"
  ON public.transactions FOR DELETE
  USING (auth.uid() = user_id);

-- Create portfolio holdings view with calculated metrics
CREATE TABLE public.portfolio_holdings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  symbol TEXT NOT NULL,
  total_quantity DECIMAL(20, 8) NOT NULL DEFAULT 0,
  average_cost DECIMAL(20, 2) NOT NULL DEFAULT 0,
  current_price DECIMAL(20, 2),
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  UNIQUE(user_id, symbol)
);

ALTER TABLE public.portfolio_holdings ENABLE ROW LEVEL SECURITY;

-- Portfolio holdings policies
CREATE POLICY "Users can view their own holdings"
  ON public.portfolio_holdings FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own holdings"
  ON public.portfolio_holdings FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own holdings"
  ON public.portfolio_holdings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own holdings"
  ON public.portfolio_holdings FOR DELETE
  USING (auth.uid() = user_id);

-- Function to calculate and update portfolio holdings after transaction
CREATE OR REPLACE FUNCTION public.update_portfolio_holdings()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  current_holding RECORD;
  new_quantity DECIMAL(20, 8);
  new_avg_cost DECIMAL(20, 2);
BEGIN
  -- Get current holding
  SELECT * INTO current_holding
  FROM public.portfolio_holdings
  WHERE user_id = NEW.user_id AND symbol = NEW.symbol;

  IF NEW.transaction_type = 'buy' THEN
    IF current_holding IS NULL THEN
      -- First purchase
      INSERT INTO public.portfolio_holdings (user_id, symbol, total_quantity, average_cost)
      VALUES (NEW.user_id, NEW.symbol, NEW.quantity, NEW.price);
    ELSE
      -- Calculate new average cost
      new_quantity := current_holding.total_quantity + NEW.quantity;
      new_avg_cost := ((current_holding.total_quantity * current_holding.average_cost) + (NEW.quantity * NEW.price)) / new_quantity;
      
      UPDATE public.portfolio_holdings
      SET total_quantity = new_quantity,
          average_cost = new_avg_cost,
          last_updated = NOW()
      WHERE user_id = NEW.user_id AND symbol = NEW.symbol;
    END IF;
  ELSIF NEW.transaction_type = 'sell' THEN
    IF current_holding IS NOT NULL THEN
      new_quantity := current_holding.total_quantity - NEW.quantity;
      
      IF new_quantity <= 0 THEN
        -- Sold all shares
        DELETE FROM public.portfolio_holdings
        WHERE user_id = NEW.user_id AND symbol = NEW.symbol;
      ELSE
        -- Update quantity (average cost stays the same)
        UPDATE public.portfolio_holdings
        SET total_quantity = new_quantity,
            last_updated = NOW()
        WHERE user_id = NEW.user_id AND symbol = NEW.symbol;
      END IF;
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

-- Trigger to update holdings after transaction
CREATE TRIGGER update_holdings_after_transaction
AFTER INSERT ON public.transactions
FOR EACH ROW
EXECUTE FUNCTION public.update_portfolio_holdings();

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  );
  
  -- Assign default 'user' role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

-- Trigger for new user creation
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Trigger for profiles updated_at
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at();