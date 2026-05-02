"use client"

import { useRef } from "react"
import FadeIn from "./FadeIn"
import ParallaxWatermark from "./ParallaxWatermark"
import { formations } from "@/lib/data"

export default function Formations() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      id="formations"
      ref={sectionRef}
      className="section-divider"
      style={{
        paddingBlock: "120px",
        paddingInline: "clamp(24px, 8vw, 160px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .formation-card:hover {
          box-shadow: var(--card-shadow-hover) !important;
          border-color: rgba(0, 113, 227, 0.25) !important;
        }

        @media (max-width: 720px) {
          .formation-grid {
            grid-template-columns: 1fr !important;
          }

          .achievement-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <ParallaxWatermark
        targetRef={sectionRef}
        align="left"
        left="-3%"
        fontSize="clamp(120px, 18vw, 280px)"
      >
        DIPLOMES
      </ParallaxWatermark>

      <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <h2
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 200,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
              marginBottom: "20px",
            }}
          >
            {formations.sectionTitle}
          </h2>
        </FadeIn>

        <FadeIn delay={0.06}>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              maxWidth: "560px",
              marginBottom: "48px",
            }}
          >
            {formations.intro}
          </p>
        </FadeIn>

        <div
          className="formation-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "16px",
          }}
        >
          {formations.items.map((formation, index) => (
            <FadeIn key={formation.degree} delay={0.1 + index * 0.08}>
              <article
                className="formation-card"
                style={{
                  minHeight: "100%",
                  background: "var(--card-gradient)",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                  padding: "32px",
                  boxShadow: "var(--card-shadow)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "18px",
                    fontSize: "76px",
                    fontWeight: 200,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "var(--ghost-text)",
                    userSelect: "none",
                    pointerEvents: "none",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "18px",
                    fontWeight: 500,
                  }}
                >
                  {formation.period}
                </p>

                <h3
                  style={{
                    fontSize: "clamp(20px, 2.2vw, 26px)",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    maxWidth: "420px",
                    marginBottom: "12px",
                  }}
                >
                  {formation.degree}
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    marginBottom: "26px",
                  }}
                >
                  {formation.school} · {formation.location}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {formation.details.map((detail) => (
                    <span
                      key={detail}
                      style={{
                        fontSize: "12px",
                        color: "var(--text-secondary)",
                        padding: "6px 12px",
                        border: "1px solid var(--border)",
                        borderRadius: "100px",
                        lineHeight: 1.35,
                      }}
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.24}>
          <div
            style={{
              marginTop: "32px",
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "1px",
              background: "var(--border)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
            className="achievement-grid"
          >
            {formations.achievements.map((achievement) => (
              <div
                key={achievement.title}
                style={{
                  background: "var(--surface)",
                  padding: "24px",
                  minHeight: "132px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "18px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--accent)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {achievement.title}
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.45,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {achievement.detail}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ marginTop: "40px" }}>
            <p
              style={{
                fontSize: "12px",
                color: "var(--text-secondary)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Formations en cours
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {formations.inProgress.map((item) => (
                <div
                  className="in-progress-row"
                  key={item.title}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(220px, 0.45fr) 1fr",
                    gap: "24px",
                    alignItems: "center",
                    paddingBlock: "16px",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                    }}
                  >
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
