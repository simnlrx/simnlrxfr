"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import type { CSSProperties, RefObject } from "react"

interface ParallaxWatermarkProps {
  targetRef: RefObject<HTMLElement>
  children: React.ReactNode
  align?: "left" | "center" | "right"
  left?: string
  right?: string
  top?: string
  fontSize?: string
  distance?: number
  drift?: number
  opacity?: number
  style?: CSSProperties
}

export default function ParallaxWatermark({
  targetRef,
  children,
  align = "right",
  left = "-2%",
  right = "-1%",
  top = "50%",
  fontSize = "clamp(160px, 24vw, 380px)",
  distance = 140,
  drift = 56,
  opacity = 1,
  style,
}: ParallaxWatermarkProps) {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [distance, -distance])
  const x = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [drift, -drift])
  const placement =
    align === "left"
      ? { left }
      : align === "center"
        ? { left: "50%", transform: "translate(-50%, -50%)" }
        : { right }

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        top,
        transform: "translateY(-50%)",
        zIndex: 0,
        pointerEvents: "none",
        ...placement,
      }}
    >
      <motion.div
        style={{
          x,
          y,
          fontSize,
          fontWeight: 200,
          letterSpacing: "-0.04em",
          color: "var(--watermark-text)",
          opacity,
          userSelect: "none",
          lineHeight: 1,
          whiteSpace: "nowrap",
          textShadow:
            "0 1px 0 rgba(255, 255, 255, 0.18), 0 0 30px var(--watermark-glow), 0 0 86px var(--watermark-glow)",
          willChange: "transform",
          ...style,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
