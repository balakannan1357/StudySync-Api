import { Schema } from 'mongoose';

const creatorBaseSchema: Schema = new Schema({
  createdBy: { type: String },
  updatedBy: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date, index: true },
});

export { creatorBaseSchema };
