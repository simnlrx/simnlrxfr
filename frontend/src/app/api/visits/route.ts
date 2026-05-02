import { createHash, randomUUID } from "crypto"
import { NextRequest, NextResponse } from "next/server"
import { addVisit } from "@/lib/analyticsStore"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

function hash(value: string) {
  return createHash("sha256").update(value).digest("hex").slice(0, 16)
}

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.slice(0, maxLength) : ""
}

function header(request: NextRequest, names: string[]) {
  for (const name of names) {
    const value = request.headers.get(name)
    if (value) return decodeURIComponent(value).slice(0, 120)
  }

  return ""
}

function countryFromLanguage(language: string) {
  const locale = language.split(",")[0]?.trim()
  const country = locale?.split("-")[1]
  return country && country.length === 2 ? country.toUpperCase() : ""
}

function deviceFromUserAgent(userAgent: string) {
  const ua = userAgent.toLowerCase()
  if (/ipad|tablet/.test(ua)) return "Tablet"
  if (/mobi|android|iphone|ipod/.test(ua)) return "Mobile"
  if (/bot|crawler|spider|preview/.test(ua)) return "Bot"
  return "Desktop"
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      eventType?: "pageview" | "click"
      path?: string
      referrer?: string
      label?: string
      target?: string
      timezone?: string
      screen?: string
      viewport?: string
      platform?: string
    }
    const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    const ip = forwardedFor || request.headers.get("x-real-ip") || "unknown"
    const language = request.headers.get("accept-language") || ""
    const country =
      header(request, ["cf-ipcountry", "x-vercel-ip-country", "x-geo-country", "x-country-code"]) ||
      countryFromLanguage(language)

    await addVisit({
      id: randomUUID(),
      eventType: body.eventType === "click" ? "click" : "pageview",
      path: clean(body.path, 180) || "/",
      referrer: clean(body.referrer, 260),
      label: clean(body.label, 120),
      target: clean(body.target, 260),
      userAgent: request.headers.get("user-agent") || "",
      language,
      timezone: clean(body.timezone, 80),
      screen: clean(body.screen, 40),
      viewport: clean(body.viewport, 40),
      platform: clean(body.platform, 80),
      country,
      region: header(request, ["x-vercel-ip-country-region", "x-geo-region", "x-region-code"]),
      city: header(request, ["x-vercel-ip-city", "x-geo-city", "x-city"]),
      device: deviceFromUserAgent(request.headers.get("user-agent") || ""),
      ipHash: hash(ip),
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
