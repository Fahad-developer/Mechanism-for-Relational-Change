import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import PaymentMethod from "@/lib/PaymentMethod";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const activeOnly = searchParams.get("active") === "true";
    const filter = activeOnly ? { isActive: true } : {};
    const methods = await PaymentMethod.find(filter).sort({ order: 1, createdAt: -1 });
    return NextResponse.json({ methods });
  } catch {
    return NextResponse.json({ error: "Failed to fetch payment methods" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const method = await PaymentMethod.create(body);
    return NextResponse.json({ success: true, method });
  } catch {
    return NextResponse.json({ error: "Failed to create payment method" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const { _id, ...data } = body;
    const method = await PaymentMethod.findByIdAndUpdate(_id, data, { new: true });
    if (!method) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ success: true, method });
  } catch {
    return NextResponse.json({ error: "Failed to update payment method" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const { _id } = await req.json();
    const method = await PaymentMethod.findByIdAndDelete(_id);
    if (!method) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete payment method" }, { status: 500 });
  }
}
