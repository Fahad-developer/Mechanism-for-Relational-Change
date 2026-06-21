import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { BlogModel } from "@/lib/Blog";

export async function GET() {
  try {
    await connectDB();
    const blogs = await BlogModel.find().sort({ createdAt: -1 });
    return NextResponse.json({ blogs });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

const MAX_BLOGS = 30;

export async function POST(request: Request) {
  try {
    await connectDB();
    const count = await BlogModel.countDocuments();
    if (count >= MAX_BLOGS) {
      return NextResponse.json(
        { error: `Maximum of ${MAX_BLOGS} blog posts reached. Delete an existing post to create a new one.` },
        { status: 400 }
      );
    }
    const body = await request.json();
    const blog = await BlogModel.create(body);
    return NextResponse.json({ blog }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await connectDB();
    const { _id, ...data } = await request.json();
    const blog = await BlogModel.findByIdAndUpdate(_id, data, { new: true });
    return NextResponse.json({ blog });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    await connectDB();
    const { _id } = await request.json();
    await BlogModel.findByIdAndDelete(_id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
