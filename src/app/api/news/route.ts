import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { NewsModel } from "@/lib/News";

export async function GET() {
  try {
    await connectDB();
    const news = await NewsModel.find().sort({ createdAt: -1 });
    return NextResponse.json({ news });
  } catch {
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const news = await NewsModel.create(body);
    return NextResponse.json({ news }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create news" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();
    const { _id, ...data } = await req.json();
    const news = await NewsModel.findByIdAndUpdate(_id, data, { new: true });
    if (!news) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ news });
  } catch {
    return NextResponse.json({ error: "Failed to update news" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const { _id } = await req.json();
    await NewsModel.findByIdAndDelete(_id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete news" }, { status: 500 });
  }
}
