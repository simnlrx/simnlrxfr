import { createHash, timingSafeEqual } from "crypto"

export const analyticsCookieName = "analytics_session"

const sessionSeed = "analytics-session-v1"

function getAnalyticsPassword() {
  return process.env.ANALYTICS_PASSWORD?.trim() ?? ""
}

export function analyticsPasswordConfigured() {
  return getAnalyticsPassword().length >= 12
}

export function verifyAnalyticsPassword(candidate: string) {
  const password = getAnalyticsPassword()
  if (!analyticsPasswordConfigured()) return false

  const candidateBuffer = Buffer.from(candidate)
  const passwordBuffer = Buffer.from(password)

  if (candidateBuffer.length !== passwordBuffer.length) return false
  return timingSafeEqual(candidateBuffer, passwordBuffer)
}

function analyticsSessionValue() {
  return createHash("sha256").update(`${sessionSeed}:${getAnalyticsPassword()}`).digest("hex")
}

export function analyticsSessionCookie() {
  const secureCookie = process.env.ANALYTICS_SECURE_COOKIE?.trim().toLowerCase() === "true"

  return {
    name: analyticsCookieName,
    value: analyticsSessionValue(),
    httpOnly: true,
    sameSite: "strict" as const,
    secure: secureCookie,
    path: "/",
    maxAge: 60 * 60 * 8,
  }
}

export function hasAnalyticsSession(value?: string) {
  if (!value || !analyticsPasswordConfigured()) return false

  const valueBuffer = Buffer.from(value)
  const sessionBuffer = Buffer.from(analyticsSessionValue())

  if (valueBuffer.length !== sessionBuffer.length) return false
  return timingSafeEqual(valueBuffer, sessionBuffer)
}
