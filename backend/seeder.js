import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/User.js';
import Product from './models/Product.js';
import Order from './models/Order.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const admin = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: admin };
    });
    await Product.insertMany(sampleProducts);
    console.log('Imported ...');
    process.exit(1);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};

const clearData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log('Cleared ...');
    process.exit(1);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  clearData();
} else {
  importData();
}
