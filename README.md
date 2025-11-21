# ApexView Capital - Real-Time Stock Portfolio Tracker

## 📋 Project Overview

ApexView Capital is a comprehensive full-stack web application designed to help investors track and manage their stock portfolios in real-time. The application provides professional-grade analytics, live market data integration, and secure user authentication to deliver a seamless portfolio management experience.

This project was developed as the capstone project for the MERN Stack Development course, demonstrating proficiency in modern web development technologies, database design, API integration, authentication, and deployment.

## 🎯 Problem Statement

Individual investors often struggle to track their portfolio performance across multiple holdings. They need a centralized platform that provides:
- Real-time portfolio valuation and performance metrics
- Accurate profit/loss calculations with cost basis tracking
- Visual analytics and performance charts
- Secure access to their financial data
- Responsive design for access across devices

ApexView Capital solves these challenges by providing an intuitive, secure, and feature-rich portfolio tracking solution.

## 🚀 Live Demo

**Deployed Application**: https://mern-final-project-theeacademic.vercel.app/

**Demo Video**: [Add your 5-10 minute video demonstration link here]

## ✨ Key Features

### Core Functionality
- **User Authentication & Authorization**: Secure signup/login with JWT-based authentication via Supabase
- **Real-Time Portfolio Tracking**: Monitor stock holdings with live market data
- **Advanced Analytics**: 
  - Total portfolio value calculation
  - Profit/Loss tracking (realized and unrealized)
  - Cost basis and average price calculations
  - Performance metrievelopment server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 🛠️ MongoDB Setup

This project uses MongoDB for the backend database. You have two options:

### Option 1: Using Docker (Recommended)

1. Install Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop)
2. Start MongoDB:
```bash
docker-compose up -d
```

### Option 2: Local MongoDB Installation

1. Install MongoDB Community Edition from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service:
```bash
# On Linux
sudo systemctl start mongod

# On macOS
brew services start mongodb-community

# On Windows
net start MongoDB
```

### Verify MongoDB Connection

```bash
# Check if MongoDB is running
mongosh --eval "db.version()"
```

## 🚀 Running the Application

### Start Frontend (Port 8080)
```bash
npm run dev
```

### Start Backend API (Port 5000)
```bash
npm run server
```

The frontend will be available at `http://localhost:8080` and the backend API at `http://localhost:5000`.

## 📚 API Documentation

See [server/README.md](server/README.md) for detailed API documentation including:
- Authentication endpoints
- Portfolio management endpoints
- Transaction endpoints
- Database schema

## 🧪 Testing

```bash
# Run tests (to be implemented)
npm test
```

## 🚢 Deployment

### Frontend Deployment
The frontend can be deployed to platforms like:
- Vercel
- Netlify
- GitHub Pages

### Backend Deployment
The backend can be deployed to:
- Heroku
- Railway
- Render
- AWS/DigitalOcean

### Database Deployment
For production, use:
- MongoDB Atlas (recommended)
- Self-hosted MongoDB instance
