"use client"

import FadeIn from "./FadeIn"
import { profile } from "@/lib/data"

export default function Profile() {
  return (
    <section
      className="section-divider"
      style={{
        paddingBlock: "96px",
        paddingInline: "clamp(24px, 8vw, 160px)",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <FadeIn>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--accent)",
              fontWeight: 500,
              marginBottom: "18px",
            }}
          >
            {profile.label}
          </p>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 64px)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              color: "var(--text-primary)",
              marginBottom: "28px",
              maxWidth: "760px",
            }}
          >
            {profile.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              lineHeight: 1.65,
              color: "var(--text-secondary)",
              maxWidth: "820px",
              fontWeight: 300,
              letterSpacing: "-0.01em",
              textAlign: "justify",
            }}
          >
            {profile.intro}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
