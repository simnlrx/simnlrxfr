import { NextResponse } from "next/server"
import { analyticsSessionCookie, verifyAnalyticsPassword } from "@/lib/analyticsAuth"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const attempts = new Map<string, { count: number; resetAt: number }>()

function requestKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "local"
}

function isRateLimited(key: string) {
  const now = Date.now()
  const current = attempts.get(key)

  if (!current || current.resetAt < now) {
    attempts.set(key, { count: 1, resetAt: now + 10 * 60 * 1000 })
    return false
  }

  current.count += 1
  return current.count > 8
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { password?: string }
  const key = requestKey(request)

  if (isRateLimited(key)) {
    return NextResponse.json({ ok: false }, { status: 429 })
  }

  if (!verifyAnalyticsPassword(body.password ?? "")) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  attempts.delete(key)
  const response = NextResponse.json({ ok: true })
  response.cookies.set(analyticsSessionCookie())
  return response
}
