import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './server/.env' });

const checkConnection = async () => {
  try {
    console.log('🔍 Checking MongoDB connection...');
    console.log(`📍 URI: ${process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio'}`);
    
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    
    console.log('✅ MongoDB connection successful!');
    console.log(`📊 Database: ${mongoose.connection.db.databaseName}`);
    
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`📁 Collections: ${collections.length}`);
    collections.forEach(col => console.log(`   - ${col.name}`));
    
    await mongoose.connection.close();
    console.log('\n✨ MongoDB is ready to use!');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ MongoDB connection failed!');
    console.error(`Error: ${error.message}`);
    console.log('\n💡 Troubleshooting:');
    console.log('1. Make sure MongoDB is running');
    console.log('2. Check your MONGODB_URI in server/.env');
    console.log('3. For local MongoDB: docker compose up -d');
    console.log('4. For cloud: Use MongoDB Atlas connection string');
    process.exit(1);
  }
};

checkConnection();
