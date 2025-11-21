# Setup Guide for ApexView Capital

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or cloud)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup MongoDB

You have three options:

#### Option A: MongoDB Atlas (Cloud - Recommended for Development)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (free tier available)
4. Click "Connect" and get your connection string
5. Update `server/.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

#### Option B: Docker (Easiest Local Setup)

1. Install Docker Desktop: https://www.docker.com/products/docker-desktop
2. Run:
```bash
docker compose up -d
```
3. MongoDB will be available at `mongodb://localhost:27017/portfolio`

#### Option C: Local MongoDB Installation

1. Download MongoDB Community Edition: https://www.mongodb.com/try/download/community
2. Install and start MongoDB service
3. MongoDB will be available at `mongodb://localhost:27017/portfolio`

### 3. Configure Environment Variables

Update `server/.env` with your settings:

```env
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your-super-secret-jwt-key-change-this
PORT=5000
NODE_ENV=development
```

**Important**: Change the JWT_SECRET to a random string for security!

### 4. Start the Application

Open two terminal windows:

**Terminal 1 - Backend Server:**
```bash
npm run server
```
Server will start on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
npm run dev
```
Frontend will start on http://localhost:8080

### 5. Test the Setup

1. Open http://localhost:8080 in your browser
2. Try registering a new account
3. Login and start tracking your portfolio

## API Testing

You can test the API endpoints using curl or Postman:

### Register a User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","fullName":"Test User"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Health Check
```bash
curl http://localhost:5000/api/health
```

## Troubleshooting

### MongoDB Connection Issues

**Error: "MongooseServerSelectionError"**
- Make sure MongoDB is running
- Check your MONGODB_URI in server/.env
- For Atlas, ensure your IP is whitelisted

### Port Already in Use

**Error: "Port 5000 is already in use"**
```bash
# Find and kill the process
lsof -ti:5000 | xargs kill -9
```

**Error: "Port 8080 is already in use"**
```bash
# Find and kill the process
lsof -ti:8080 | xargs kill -9
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Project Structure

```
mern-final-project-theeacademic/
├── server/                 # Backend API
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── middleware/        # Auth middleware
│   └── index.js           # Server entry point
├── src/                   # Frontend React app
│   ├── components/        # React components
│   ├── pages/            # Page components
│   └── lib/              # Utilities
├── public/               # Static assets
└── package.json          # Dependencies
```

## Next Steps

1. Customize the portfolio features
2. Add more stock symbols
3. Implement real-time price updates
4. Add charts and analytics
5. Deploy to production

## Support

For issues or questions, refer to:
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
