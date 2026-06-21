import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const dir = path.join(process.cwd(), "public", "gallery");
    const files = fs.readdirSync(dir).filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));
    return NextResponse.json({ images: files, count: files.length });
  } catch {
    return NextResponse.json({ images: [], count: 0 });
  }
}
