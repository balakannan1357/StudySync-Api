import { MONGO_URL, NODE_ENV } from '@config';
import mongoose from 'mongoose';

let isConnected: boolean = false;

export const dbConnection = async () => {
  if (isConnected) return;

  if (NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }

  await mongoose.connect(MONGO_URL);
  isConnected = true;
};
