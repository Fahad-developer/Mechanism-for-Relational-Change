import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/lib/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  if (!username || !password) {
    return NextResponse.json({ error: "Username and password required" }, { status: 400 });
  }

  try {
    await connectDB();
    const existing = await User.findOne({ username });
    if (existing) {
      return NextResponse.json({ error: "Username already exists" }, { status: 409 });
    }

    const hashed = await bcrypt.hash(password, 12);
    const user = await User.create({ username, password: hashed, role: "admin" });
    return NextResponse.json({ success: true, user: { username: user.username, role: user.role } });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
