import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/lib/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  try {
    await connectDB();
    const user = await User.findOne({ username });

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = Buffer.from(
          JSON.stringify({ username: user.username, role: user.role, ts: Date.now() })
        ).toString("base64");
        return NextResponse.json({ success: true, token });
      }
    }
  } catch {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }

  return NextResponse.json(
    { success: false, error: "Invalid credentials" },
    { status: 401 }
  );
}
