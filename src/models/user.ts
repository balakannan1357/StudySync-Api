import mongoose, { Document, Schema } from 'mongoose';

// Interface for the User document
interface IUser extends Document {
  user_id: string;
  name: string;
  email: string;
  phone_number: string;
  age: Number;
  school: String;
  area: string;
  time_preference: 'Nightowl' | 'Morning person';
}

// Mongoose Schema for the users table
const userSchema = new Schema<IUser>({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  phone_number: {
    type: String,
    required: true,
    match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'],
  },
  age: {
    type: Number,
    required: true,
  },
  school: {
    type: String,
  },
  area: {
    type: String,
  },
  time_preference: {
    type: String,
    enum: ['Nightowl', 'Morning person'],
    required: true,
  },
});

const User = mongoose.model<IUser>('User', userSchema);

export { User, IUser };
