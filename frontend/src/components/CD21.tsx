"use client"

import type { CSSProperties } from "react"
import { useRef } from "react"
import FadeIn from "./FadeIn"
import SectionLabel from "./SectionLabel"
import ParallaxWatermark from "./ParallaxWatermark"
import { cd21 } from "@/lib/data"

export default function CD21() {
  const sectionRef = useRef<HTMLElement>(null)
  const pillarColors = ["#1d5fa7", "#d7a321", "#d71920"]

  return (
    <section
      id="cd21"
      ref={sectionRef}
      className="section-divider"
      style={{
        paddingBlock: "120px",
        paddingInline: "clamp(24px, 8vw, 160px)",
        position: "relative",
        overflow: "hidden",
        ...cd21.theme,
      } as CSSProperties}
    >
      <ParallaxWatermark targetRef={sectionRef} align="center" top="63%" opacity={0.68}>
        CD21
      </ParallaxWatermark>

      <div className="content-veil" style={{ maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <SectionLabel
            company={cd21.company}
            website={cd21.website}
            role={cd21.role}
            period={cd21.period}
            tagline={cd21.sectionTitle}
          />
        </FadeIn>

        <FadeIn delay={0.06}>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              maxWidth: "560px",
              marginBottom: "56px",
            }}
          >
            {cd21.intro}
          </p>
        </FadeIn>

        {/* Pillars — index + title/description + tags */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {cd21.pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={0.1 + i * 0.1}>
              <div
                className="pillar-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr auto",
                  gap: "32px",
                  alignItems: "start",
                  paddingBlock: "32px",
                  borderBottom:
                    i < cd21.pillars.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                {/* Index */}
                <span
                  style={{
                    fontSize: "12px",
                    color: pillarColors[i % pillarColors.length],
                    letterSpacing: "0.05em",
                    fontWeight: 300,
                    paddingTop: "3px",
                    opacity: 0.6,
                  }}
                >
                  0{i + 1}
                </span>

                {/* Title + description */}
                <div>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.015em",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {pillar.title}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                    }}
                  >
                    {pillar.description}
                  </span>
                </div>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    justifyContent: "flex-end",
                    maxWidth: "280px",
                    paddingTop: "2px",
                  }}
                >
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px",
                        padding: "3px 10px",
                        borderRadius: "100px",
                        border: `1px solid ${pillarColors[i % pillarColors.length]}44`,
                        color: "var(--text-secondary)",
                        letterSpacing: "0.03em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
