import { ISubtopic } from '@/interfaces/subTopic.interface';
import mongoose, { Document, Schema } from 'mongoose';

const subtopicSchema = new Schema({
  _id: {
    type: String,
  },
  subtopicName: {
    type: String,
  },
  subject: {
    type: String,
  },
  noOfHours: {
    type: Number,
  },
  noOfSessions: {
    type: Number,
  },
});

const Subtopic = mongoose.model<ISubtopic & Document>('Subtopic', subtopicSchema);

export { ISubtopic, Subtopic };

