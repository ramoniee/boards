// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Try cloud providers' headers first
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] || // Vercel/Proxy
    req.headers.get("x-real-ip") ||                      // Nginx
    "Unknown IP";

  return NextResponse.next();
}