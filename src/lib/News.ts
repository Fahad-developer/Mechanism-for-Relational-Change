import mongoose, { Schema, Document } from "mongoose";

export interface INews extends Document {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  slug: string;
  isPublished: boolean;
  createdAt: Date;
}

const NewsSchema = new Schema<INews>({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, default: "" },
  slug: { type: String, required: true, unique: true },
  isPublished: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export const NewsModel =
  mongoose.models.News || mongoose.model<INews>("News", NewsSchema);
