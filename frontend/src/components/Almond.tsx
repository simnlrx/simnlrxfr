"use client"

import type { CSSProperties } from "react"
import { useRef } from "react"
import FadeIn from "./FadeIn"
import CountUp from "./CountUp"
import SectionLabel from "./SectionLabel"
import ParallaxWatermark from "./ParallaxWatermark"
import { almond } from "@/lib/data"

export default function Almond() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="section-divider"
      style={{
        paddingBlock: "120px",
        paddingInline: "clamp(24px, 8vw, 160px)",
        position: "relative",
        overflow: "hidden",
        ...almond.theme,
      } as CSSProperties}
    >
      <ParallaxWatermark
        targetRef={sectionRef}
        right="-2%"
        fontSize="clamp(140px, 20vw, 280px)"
      >
        Almond
      </ParallaxWatermark>

      <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <SectionLabel
            company={almond.company}
            website={almond.website}
            role={almond.role}
            period={almond.period}
            tagline={almond.sectionTitle}
            isCurrent
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              maxWidth: "560px",
              marginBottom: "56px",
            }}
          >
            {almond.intro}
          </p>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "80px" }}>
          {almond.activities.map((activity, i) => (
            <FadeIn key={activity} delay={0.1 + i * 0.08}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  paddingBlock: "4px",
                }}
              >
                <span style={{ color: "var(--accent)", fontSize: "18px", lineHeight: 1 }}>→</span>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 300,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {activity}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "var(--border)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
            className="stats-grid"
          >
            {almond.stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--surface)",
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <CountUp
                  value={stat.value}
                  className=""
                  style={{
                    fontSize: "clamp(40px, 5vw, 64px)",
                    fontWeight: 200,
                    letterSpacing: "-0.03em",
                    color: "var(--text-primary)",
                  }}
                />
                <span
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
