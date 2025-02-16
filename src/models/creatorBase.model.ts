import { Schema } from 'mongoose';

const creatorBaseSchema: Schema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date, index: true },
});

export { creatorBaseSchema };
