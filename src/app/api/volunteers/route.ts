import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Volunteer from "@/lib/Volunteer";

export async function GET() {
  try {
    await connectDB();
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    return NextResponse.json({ volunteers });
  } catch {
    return NextResponse.json({ error: "Failed to fetch volunteers" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const volunteer = await Volunteer.create(body);
    return NextResponse.json({ success: true, volunteer });
  } catch {
    return NextResponse.json({ error: "Failed to submit volunteer form" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();
    const { _id, status } = await req.json();
    const volunteer = await Volunteer.findByIdAndUpdate(_id, { status }, { new: true });
    if (!volunteer) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ success: true, volunteer });
  } catch {
    return NextResponse.json({ error: "Failed to update volunteer" }, { status: 500 });
  }
}
