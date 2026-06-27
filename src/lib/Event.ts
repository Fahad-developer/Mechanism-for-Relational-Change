import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
  title: string;
  date: Date;
  time: string;
  location: string;
  description: string;
  image: string;
  isUpcoming: boolean;
  createdAt: Date;
}

const EventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: "" },
  isUpcoming: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export const EventModel =
  mongoose.models.Event || mongoose.model<IEvent>("Event", EventSchema);
