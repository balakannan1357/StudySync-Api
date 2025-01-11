import mongoose, { Document, Schema } from 'mongoose';

// Interface for the Subtopic document
interface ISubtopic extends Document {
  subtopic_id: string;
  subtopic_name: string;
  subject: string;
  no_of_hours: number;
  no_of_sessions: number;
}

// Mongoose Schema for the subtopic table
const subtopicSchema = new Schema<ISubtopic>({
  subtopic_id: {
    type: String,
    required: true,
    unique: true,
  },
  subtopic_name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  no_of_hours: {
    type: Number,
    required: true,
    min: [0, 'Hours cannot be less than 0'],
  },
  no_of_sessions: {
    type: Number,
    required: true,
    min: [0, 'Number of sessions cannot be less than 0'],
  },
});

const Subtopic = mongoose.model<ISubtopic>('Subtopic', subtopicSchema);

export { Subtopic, ISubtopic };
