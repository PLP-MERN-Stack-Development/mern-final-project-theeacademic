# Portfolio Backend API

## MongoDB Setup

### Database Structure

The application uses MongoDB with three main collections:

1. **Users** - User authentication and profile data
   - email (unique)
   - password (hashed)
   - fullName
   - avatarUrl
   - role (admin/user)

2. **PortfolioHoldings** - Current portfolio positions
   - userId (ref to User)
   - symbol (stock ticker)
   - totalQuantity
   - averageCost
   - currentPrice
   - lastUpdated

3. **Transactions** - Transaction history
   - userId (ref to User)
   - symbol
   - transactionType (buy/sell)
   - quantity
   - price
   - totalAmount
   - transactionDate
   - notes

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires auth)

### Portfolio
- `GET /api/portfolio` - Get all holdings (requires auth)
- `GET /api/portfolio/:symbol` - Get specific holding (requires auth)
- `PUT /api/portfolio/:symbol` - Update holding price (requires auth)

### Transactions
- `GET /api/transactions` - Get all transactions (requires auth)
- `POST /api/transactions` - Create new transaction (requires auth)
- `GET /api/transactions/:id` - Get specific transaction (requires auth)

## Running the Server

1. Make sure MongoDB is running locally or update MONGODB_URI in `.env`
2. Run: `npm run server`
3. Server will start on port 5000 (or PORT from .env)

## Environment Variables

Create a `.env` file in the server directory:

```
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your-secret-key-change-this-in-production
PORT=5000
NODE_ENV=development
```
