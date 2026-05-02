"use client"

import { useRef } from "react"
import FadeIn from "./FadeIn"
import ParallaxWatermark from "./ParallaxWatermark"
import { contact } from "@/lib/data"
import { featureFlags } from "@/lib/featureFlags"

function LinkedInIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  )
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const contactItems = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    ...(featureFlags.showPhone
      ? [{ label: "Téléphone", value: contact.phone, href: `tel:${contact.phone}` }]
      : []),
    { label: "Localisation", value: contact.location, href: null },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-divider"
      style={{
        paddingBlock: "120px 80px",
        paddingInline: "clamp(24px, 8vw, 160px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ParallaxWatermark
        targetRef={sectionRef}
        align="center"
        top="68%"
        fontSize="clamp(118px, 18vw, 280px)"
        distance={92}
        opacity={0.58}
      >
        CONNECT
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
              marginBottom: "56px",
            }}
          >
            {contact.sectionTitle}
          </h2>
        </FadeIn>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          {contactItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08}>
              <div
                className="contact-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: "24px",
                  alignItems: "center",
                  paddingBlock: "16px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                  }}
                >
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    style={{
                      fontSize: "16px",
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    className="contact-link"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ fontSize: "16px", color: "var(--text-primary)" }}>{item.value}</span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <a
              href={`mailto:${contact.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                background: "var(--accent)",
                color: "#fff",
                borderRadius: "100px",
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
              className="cta-btn"
            >
              {contact.cta}
              <span style={{ fontSize: "16px" }}>→</span>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Simon Le Roux"
              className="linkedin-icon-link"
              style={{
                width: "48px",
                height: "48px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--border)",
                borderRadius: "50%",
                color: "var(--text-primary)",
                background: "var(--surface)",
                textDecoration: "none",
                transition: "color 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
              }}
            >
              <LinkedInIcon />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div
            style={{
              marginTop: "80px",
              fontSize: "12px",
              color: "var(--text-secondary)",
              letterSpacing: "0.04em",
            }}
          >
            <span>© 2026 ✽ Simon Le Roux</span>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .contact-link:hover { color: var(--accent) !important; }
        .cta-btn:hover { opacity: 0.85; transform: translateY(-1px); }
        .linkedin-icon-link:hover {
          color: var(--accent) !important;
          border-color: rgba(0, 113, 227, 0.3) !important;
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  )
}
