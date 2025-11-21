import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const usePortfolio = () => {
  return useQuery({
    queryKey: ["portfolio"],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) throw new Error("Not authenticated");

      const { data: holdings, error } = await supabase
        .from("portfolio_holdings")
        .select("*")
        .eq("user_id", user.id);

      if (error) throw error;

      return holdings || [];
    },
  });
};

export const useTransactions = () => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) throw new Error("Not authenticated");

      const { data: transactions, error } = await supabase
        .from("transactions")
        .select("*")
        .eq("user_id", user.id)
        .order("transaction_date", { ascending: false });

      if (error) throw error;

      return transactions || [];
    },
  });
};
