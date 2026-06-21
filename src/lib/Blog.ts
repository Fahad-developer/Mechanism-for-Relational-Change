import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  slug: string;
  views: number;
  createdAt: Date;
}

const BlogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, default: "" },
  slug: { type: String, required: true, unique: true },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export const BlogModel = mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
