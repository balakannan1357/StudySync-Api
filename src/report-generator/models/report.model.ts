import { creatorBaseSchema } from '@/models/creatorBase.model';
import { Document, model, Schema } from 'mongoose';
import { QuestionCategory } from '../enums/questionCategory.enum';
import { IReport } from '../interfaces/report.interface';

const EvaluationEntrySchema: Schema = new Schema({
  subject: { type: String, required: true },
  chapter: { type: String, required: true },
  topic: { type: String, required: true },
  category: { type: String, enum: QuestionCategory, required: true },
  maxMarks: { type: Number, required: true },
  obtainedMarks: { type: Number, required: true },
});

const ReportSchema: Schema = new Schema(
  {
    studentName: { type: String, required: true },
    course: { type: String, required: true },
    batch: { type: String, required: true },
    exam: { type: String, required: true },
    date: { type: String, required: true },
    totalMarks: { type: Number, required: true },
    obtainedMarks: { type: Number, required: true },
    items: { type: [EvaluationEntrySchema], required: true },
    ...creatorBaseSchema.obj,
  },
  { timestamps: true, collection: 'Reports' },
);

export const ReportModel = model<IReport & Document>('Report', ReportSchema);
