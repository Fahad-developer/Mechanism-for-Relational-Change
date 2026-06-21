import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/lib/User";

export async function POST(request: Request) {
  const { username } = await request.json();
  if (!username) {
    return NextResponse.json({ error: "Username required" }, { status: 400 });
  }

  try {
    await connectDB();
    const count = await User.countDocuments();
    if (count <= 1) {
      return NextResponse.json(
        { error: "Cannot delete the last account. At least one admin account must remain." },
        { status: 400 }
      );
    }
    await User.deleteOne({ username });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
