"use client"

import { useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

interface CountUpProps {
  value: string
  className?: string
  style?: React.CSSProperties
}

export default function CountUp({ value, style }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  const numeric = parseInt(value.replace(/\D/g, ""), 10)
  const suffix = value.replace(/[0-9]/g, "")

  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 })

  useEffect(() => {
    if (inView) motionValue.set(numeric)
  }, [inView, numeric, motionValue])

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = Math.round(v) + suffix
      }
    })
  }, [spring, suffix])

  return (
    <span ref={ref} style={style}>
      0{suffix}
    </span>
  )
}
