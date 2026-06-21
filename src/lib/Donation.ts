import mongoose, { Schema, Document } from "mongoose";

export interface IDonation extends Document {
  name: string;
  email: string;
  phone?: string;
  amount: number;
  paymentMethod: string;
  message?: string;
  status: "pending" | "completed" | "failed";
  createdAt: Date;
}

const DonationSchema = new Schema<IDonation>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  message: { type: String },
  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Donation ||
  mongoose.model<IDonation>("Donation", DonationSchema);
