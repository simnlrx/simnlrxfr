import { createHash, randomUUID } from "crypto"
import { NextRequest, NextResponse } from "next/server"
import { addVisit } from "@/lib/analyticsStore"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

function hash(value: string) {
  return createHash("sha256").update(value).digest("hex").slice(0, 16)
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => ({}))) as { path?: string; referrer?: string }
    const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    const ip = forwardedFor || request.headers.get("x-real-ip") || "unknown"

    await addVisit({
      id: randomUUID(),
      path: body.path?.slice(0, 180) || "/",
      referrer: body.referrer?.slice(0, 260) || "",
      userAgent: request.headers.get("user-agent") || "",
      language: request.headers.get("accept-language") || "",
      ipHash: hash(ip),
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
