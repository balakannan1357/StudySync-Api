import { ISubTopic } from '@/interfaces/subTopic.interface';
import mongoose, { Document, Schema } from 'mongoose';

const subTopicSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  name: {
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

const SubTopicModel = mongoose.model<ISubTopic & Document>('SubTopic', subTopicSchema);

export { SubTopicModel };
