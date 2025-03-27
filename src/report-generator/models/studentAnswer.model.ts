import { creatorBaseSchema } from '@/models/creatorBase.model';
import { Document, Schema, model } from 'mongoose';
import { IStudentAnswer } from '../interfaces/studentAnswer.interface';

const AnswerSchema: Schema = new Schema({
  questionId: { type: String, required: true },
  selectedOptionId: { type: String, required: false },
  textAnswer: { type: String, required: false },
  marksAwarded: { type: Number, required: true },
});

const StudentAnswerSchema: Schema = new Schema(
  {
    testId: { type: String, required: true },
    studentId: { type: String, required: true },
    date: { type: String, required: true },
    answers: { type: [AnswerSchema], required: true },
    totalMarks: { type: Number, required: true },
    percentage: { type: Number, required: true },
    ...creatorBaseSchema.obj,
  },
  { timestamps: true, collection: 'StudentAnswers' },
);

export const StudentAnswerModel = model<IStudentAnswer & Document>(
  'StudentAnswer',
  StudentAnswerSchema,
);
