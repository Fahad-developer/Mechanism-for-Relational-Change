import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { EventModel } from "@/lib/Event";

export async function GET() {
  try {
    await connectDB();
    const events = await EventModel.find().sort({ date: -1 });
    return NextResponse.json({ events });
  } catch {
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const event = await EventModel.create(body);
    return NextResponse.json({ event }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();
    const { _id, ...data } = await req.json();
    const event = await EventModel.findByIdAndUpdate(_id, data, { new: true });
    if (!event) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ event });
  } catch {
    return NextResponse.json({ error: "Failed to update event" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const { _id } = await req.json();
    await EventModel.findByIdAndDelete(_id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete event" }, { status: 500 });
  }
}
