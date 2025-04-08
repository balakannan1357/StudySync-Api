import { creatorBaseSchema } from '@/models/creatorBase.model';
import { Document, model, Schema } from 'mongoose';
import { IStudent } from '../interfaces/student.interface';

const StudentSchema: Schema = new Schema<IStudent>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    age: { type: Number, required: true, min: 1 },
    rollNum: { type: String, required: true},
    ...creatorBaseSchema.obj,
  },
  { timestamps: true, collection: 'Students' },
);

export const StudentModel = model<IStudent & Document>('Student', StudentSchema);
