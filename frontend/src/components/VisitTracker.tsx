"use client"

import { useEffect } from "react"

export default function VisitTracker() {
  useEffect(() => {
    if (window.location.pathname.startsWith("/stats")) return

    const payload = JSON.stringify({
      path: window.location.pathname,
      referrer: document.referrer,
    })

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
  }, [])

  return null
}
