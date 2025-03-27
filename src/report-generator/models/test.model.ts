import { creatorBaseSchema } from '@/models/creatorBase.model';
import { Document, model, Schema } from 'mongoose';
import { QuestionType } from '../enums/questionType.enum';
import { ITest } from '../interfaces/test.interface';

const OptionSchema: Schema = new Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const QuestionSchema: Schema = new Schema({
  text: { type: String, required: true },
  options: { type: [OptionSchema], required: true },
  type: { type: String, enum: QuestionType, required: true },
  maxMarks: { type: Number, required: true },
});

const TestSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    questions: { type: [QuestionSchema], required: true },
    ...creatorBaseSchema.obj,
  },
  { timestamps: true, collection: 'Tests' },
);

export const TestModel = model<ITest & Document>('Test', TestSchema);
