import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { analyticsCookieName, hasAnalyticsSession } from "@/lib/analyticsAuth"
import { getVisitSummary } from "@/lib/analyticsStore"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  const session = cookies().get(analyticsCookieName)?.value
  if (!hasAnalyticsSession(session)) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const summary = await getVisitSummary()
  return NextResponse.json({ ok: true, summary })
}
