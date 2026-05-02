"use client"

import { motion, useInView } from "framer-motion"
import type { CSSProperties } from "react"
import { useRef } from "react"
import FadeIn from "./FadeIn"
import SectionLabel from "./SectionLabel"
import CountUp from "./CountUp"
import ParallaxWatermark from "./ParallaxWatermark"
import { aprr } from "@/lib/data"

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontSize: "11px",
        padding: "3px 10px",
        borderRadius: "100px",
        border: "1px solid var(--border)",
        color: "var(--text-secondary)",
        letterSpacing: "0.03em",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  index,
}: {
  title: string
  description: string
  tags: string[]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 28, scale: 0.97 }}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="project-card"
      style={{
        position: "relative",
        background: "var(--card-gradient)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        padding: "36px 32px 28px",
        cursor: "default",
        overflow: "hidden",
        boxShadow: "var(--card-shadow)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {/* Accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 + 0.25 }}
        style={{
          position: "absolute",
          left: 0,
          top: "20%",
          bottom: "20%",
          width: "3px",
          background: "var(--accent)",
          borderRadius: "0 3px 3px 0",
          transformOrigin: "top",
        }}
      />

      {/* Ghost index */}
      <span
        style={{
          position: "absolute",
          top: "8px",
          right: "18px",
          fontSize: "80px",
          fontWeight: 200,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "var(--ghost-text)",
          userSelect: "none",
          fontVariantNumeric: "tabular-nums",
          pointerEvents: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3
        className="project-card-title"
        style={{
          fontSize: "21px",
          fontWeight: 500,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          transition: "color 0.25s ease",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--text-secondary)",
          flexGrow: 1,
        }}
      >
        {description}
      </p>

      {tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function APRR() {
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
        ...aprr.theme,
      } as CSSProperties}
    >
      <style>{`
        .project-card:hover {
          box-shadow: var(--card-shadow-hover) !important;
          border-color: var(--accent-soft) !important;
        }
        .project-card:hover .project-card-title {
          color: var(--accent) !important;
        }
      `}</style>

      <ParallaxWatermark targetRef={sectionRef} align="left" left="-2%">
        APRR
      </ParallaxWatermark>

      <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <SectionLabel
            company={aprr.company}
            website={aprr.website}
            role={aprr.role}
            period={aprr.period}
            tagline={aprr.sectionTitle}
          />
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
            {aprr.intro}
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "var(--border)",
              borderRadius: "16px",
              overflow: "hidden",
              marginBottom: "48px",
            }}
          >
            {aprr.stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--surface)",
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <CountUp
                  value={stat.value}
                  className=""
                  style={{
                    fontSize: "clamp(28px, 4vw, 48px)",
                    fontWeight: 200,
                    letterSpacing: "-0.03em",
                    color: "var(--text-primary)",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
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

        {/* Project cards — 2×2 grid */}
        <div
          className="project-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "16px",
          }}
        >
          {aprr.projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
