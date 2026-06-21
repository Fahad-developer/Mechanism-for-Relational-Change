import mongoose, { Schema, Document } from "mongoose";

export interface IVolunteer extends Document {
  name: string;
  email: string;
  phone: string;
  skills: string;
  availability: string;
  message?: string;
  status: "new" | "contacted" | "approved" | "declined";
  createdAt: Date;
}

const VolunteerSchema = new Schema<IVolunteer>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  skills: { type: String, required: true },
  availability: { type: String, required: true },
  message: { type: String },
  status: {
    type: String,
    enum: ["new", "contacted", "approved", "declined"],
    default: "new",
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Volunteer ||
  mongoose.model<IVolunteer>("Volunteer", VolunteerSchema);
