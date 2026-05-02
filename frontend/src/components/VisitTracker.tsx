"use client"

import { useEffect } from "react"

type AnalyticsEvent = {
  eventType: "pageview" | "click"
  path: string
  referrer?: string
  label?: string
  target?: string
  timezone?: string
  screen?: string
  viewport?: string
  platform?: string
}

function browserContext() {
  return {
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: `${window.screen.width}x${window.screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    platform: navigator.platform,
  }
}

function sendAnalytics(event: AnalyticsEvent) {
  const payload = JSON.stringify({ ...browserContext(), ...event })

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/visits", new Blob([payload], { type: "application/json" }))
    return
  }

  void fetch("/api/visits", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  })
}

function clickLabel(element: HTMLElement) {
  return (
    element.dataset.analyticsLabel ||
    element.getAttribute("aria-label") ||
    element.textContent?.replace(/\s+/g, " ").trim() ||
    element.tagName.toLowerCase()
  )
}

export default function VisitTracker() {
  useEffect(() => {
    if (window.location.pathname.startsWith("/stats")) return

    sendAnalytics({
      eventType: "pageview",
      path: window.location.pathname,
      referrer: document.referrer,
    })

    function trackClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest("a, button") : null
      if (!(target instanceof HTMLElement)) return

      const href = target instanceof HTMLAnchorElement ? target.href : ""

      sendAnalytics({
        eventType: "click",
        path: window.location.pathname,
        label: clickLabel(target),
        target: href || target.dataset.analyticsTarget || target.getAttribute("aria-label") || target.tagName.toLowerCase(),
      })
    }

    document.addEventListener("click", trackClick, { capture: true })
    return () => document.removeEventListener("click", trackClick, { capture: true })
  }, [])

  return null
}
