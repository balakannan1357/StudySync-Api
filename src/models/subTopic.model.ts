import { ISubTopic } from '@/interfaces/subTopic.interface';
import { Document, model, Schema } from 'mongoose';
import { creatorBaseSchema } from './creatorBase.model';

const subTopicSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    name: {
      type: String,
    },
    topic: {
      type: String,
    },
    lesson: {
      type: String,
    },
    subject: {
      type: String,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number,
    },
    ...creatorBaseSchema.obj,
  },
  { timestamps: true, collection: 'SubTopics' },
);

const SubTopicModel = model<ISubTopic & Document>('SubTopic', subTopicSchema);

export { SubTopicModel };

