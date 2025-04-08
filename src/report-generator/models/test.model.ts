import { creatorBaseSchema } from '@/models/creatorBase.model';
import { Document, model, Schema } from 'mongoose';
import { QuestionCategory } from '../enums/questionCategory.enum';
import { ITest } from '../interfaces/test.interface';

const QuestionSchema: Schema = new Schema({
  subject: { type: String, required: true },
  chapter: { type: String, required: true },
  topic: { type: String, required: true },
  category: { type: String, enum: QuestionCategory, required: true },
  maxMarks: { type: Number, required: true },
});

const TestSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    course: { type: String, required: true },
    batch: { type: String, required: true },
    exam: { type: String, required: true },
    totalMarks: { type: Number, required: true },
    questions: { type: [QuestionSchema], required: true },
    ...creatorBaseSchema.obj,
  },
  { timestamps: true, collection: 'Tests' },
);

export const TestModel = model<ITest & Document>('Test', TestSchema);
