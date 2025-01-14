import { Document } from 'mongoose';

// Interface for the Subtopic document
export interface ISubtopic extends Document {
  subtopic_id: string;
  subtopic_name: string;
  subject: string;
  no_of_hours: number;
  no_of_sessions: number;
}
