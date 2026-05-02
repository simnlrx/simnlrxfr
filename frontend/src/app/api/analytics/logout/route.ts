import { NextResponse } from "next/server"
import { analyticsCookieName } from "@/lib/analyticsAuth"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST() {
  const response = NextResponse.json({ ok: true })
  response.cookies.set({
    name: analyticsCookieName,
    value: "",
    path: "/",
    maxAge: 0,
  })
  return response
}
