import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Lead from "@/lib/Lead";

export async function GET() {
  try {
    await connectDB();
    const leads = await Lead.find().sort({ createdAt: -1 });
    return NextResponse.json({ leads });
  } catch {
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const lead = await Lead.create(body);
    return NextResponse.json({ success: true, lead });
  } catch {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();
    const { _id, status } = await req.json();
    const lead = await Lead.findByIdAndUpdate(_id, { status }, { new: true });
    if (!lead) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ success: true, lead });
  } catch {
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
  }
}
