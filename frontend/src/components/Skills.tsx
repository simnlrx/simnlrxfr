"use client"

import { useRef } from "react"
import FadeIn from "./FadeIn"
import ParallaxWatermark from "./ParallaxWatermark"
import { skills } from "@/lib/data"

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      id="competences"
      ref={sectionRef}
      className="section-divider"
      style={{
        paddingBlock: "120px",
        paddingInline: "clamp(24px, 8vw, 160px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ParallaxWatermark
        targetRef={sectionRef}
        right="-4%"
        fontSize="clamp(96px, 15vw, 240px)"
        distance={108}
        opacity={0.62}
      >
        COMPÉTENCES
      </ParallaxWatermark>

      <div className="content-veil" style={{ maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <h2
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 200,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
              marginBottom: "64px",
            }}
          >
            {skills.sectionTitle}
          </h2>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {skills.groups.map((group, gi) => (
            <FadeIn key={group.label} delay={gi * 0.1}>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "20px",
                    fontWeight: 500,
                  }}
                >
                  {group.label}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {group.items.map((item, ii) => (
                    <FadeIn key={item} delay={gi * 0.1 + ii * 0.04}>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "var(--text-secondary)",
                          padding: "8px 16px",
                          border: "1px solid var(--border)",
                          borderRadius: "100px",
                          letterSpacing: "0.01em",
                          display: "block",
                          transition: "color 0.2s ease, border-color 0.2s ease",
                        }}
                        className="skill-tag"
                      >
                        {item}
                      </span>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <style>{`
          .skill-tag:hover {
            color: var(--text-primary) !important;
            border-color: rgba(255,255,255,0.2) !important;
          }
        `}</style>
      </div>
    </section>
  )
}
