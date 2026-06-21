import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/lib/User";

export async function GET() {
  try {
    await connectDB();
    const users = await User.find({}, { password: 0, __v: 0 }).sort({ createdAt: -1 });
    return NextResponse.json({ users });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
