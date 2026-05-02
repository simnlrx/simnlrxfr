"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { hero } from "@/lib/data"
import { featureFlags } from "@/lib/featureFlags"

export default function Hero() {
  const openToWork = featureFlags.openToWork

  return (
    <section
      className="relative flex flex-col items-center justify-center"
      style={{ minHeight: "100svh", paddingInline: "24px" }}
    >
      <style>{`
        .hero-portrait {
          width: clamp(132px, 16vw, 184px);
          aspect-ratio: 1;
        }

        .hero-portrait img {
          width: 150%;
          height: 150%;
          object-fit: cover;
          object-position: 50% 8%;
          transform: translate(-4%, -10%);
          filter: drop-shadow(0 24px 34px rgba(0, 0, 0, 0.35));
        }

        @media (max-height: 720px) {
          .hero-portrait {
            width: clamp(112px, 14vw, 148px);
          }
        }
      `}</style>

      <div className="text-center" style={{ maxWidth: "800px" }}>
        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
          style={{
            position: "relative",
            margin: "0 auto 34px",
            borderRadius: "50%",
            border: "1px solid var(--border)",
            background:
              "radial-gradient(circle at 50% 34%, rgba(255, 255, 255, 0.12), transparent 56%), var(--surface)",
            boxShadow: "var(--card-shadow)",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/simon-le-roux-photo.png"
            alt="Portrait professionnel de Simon Le Roux"
            fill
            priority
            sizes="(max-width: 720px) 132px, 184px"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          style={{
            marginBottom: "14px",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          {hero.name}
        </motion.p>

        {openToWork && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.14 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "18px",
              padding: "6px 12px",
              border: "1px solid var(--border)",
              borderRadius: "100px",
              color: "var(--text-secondary)",
              fontSize: "12px",
              letterSpacing: "0.04em",
              background: "var(--surface)",
            }}
          >
            <span
              aria-hidden
              className="pulse-dot"
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#30d158",
                display: "inline-block",
              }}
            />
            Open to work
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.12 }}
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 200,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "var(--text-primary)",
          }}
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
          style={{
            marginTop: "24px",
            fontSize: "clamp(18px, 2.5vw, 24px)",
            fontWeight: 300,
            color: "var(--text-secondary)",
            letterSpacing: "0.01em",
          }}
        >
          {hero.tagline}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--text-secondary)" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "32px",
            background: "linear-gradient(to bottom, var(--text-secondary), transparent)",
          }}
        />
      </motion.div>
    </section>
  )
}
