import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Donation from "@/lib/Donation";

export async function GET() {
  try {
    await connectDB();
    const donations = await Donation.find().sort({ createdAt: -1 });
    return NextResponse.json({ donations });
  } catch {
    return NextResponse.json({ error: "Failed to fetch donations" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const donation = await Donation.create(body);
    return NextResponse.json({ success: true, donation });
  } catch {
    return NextResponse.json({ error: "Failed to create donation" }, { status: 500 });
  }
}
