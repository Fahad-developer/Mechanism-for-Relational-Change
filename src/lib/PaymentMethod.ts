import mongoose, { Schema, Document } from "mongoose";

export interface IPaymentMethod extends Document {
  name: string;
  type: "bank" | "easypaisa" | "jazzcash" | "paypal" | "stripe" | "other";
  details: string;
  icon?: string;
  isActive: boolean;
  order: number;
  createdAt: Date;
}

const PaymentMethodSchema = new Schema<IPaymentMethod>({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["bank", "easypaisa", "jazzcash", "paypal", "stripe", "other"],
    required: true,
  },
  details: { type: String, required: true },
  icon: { type: String, default: "" },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.PaymentMethod ||
  mongoose.model<IPaymentMethod>("PaymentMethod", PaymentMethodSchema);
