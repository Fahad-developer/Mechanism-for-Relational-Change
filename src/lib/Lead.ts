import mongoose, { Schema, Document } from "mongoose";

export interface ILead extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "contacted" | "qualified" | "converted" | "closed";
  createdAt: Date;
}

const LeadSchema = new Schema<ILead>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: {
    type: String,
    enum: ["new", "contacted", "qualified", "converted", "closed"],
    default: "new",
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Lead ||
  mongoose.model<ILead>("Lead", LeadSchema);
