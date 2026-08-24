import type { Metadata } from "next"
import Link from "next/link"
import { mentionsLegales } from "@/lib/data"

export const metadata: Metadata = {
  title: "Mentions légales — Simon Le Roux",
  description: "Mentions légales du site : éditeur, hébergement, propriété intellectuelle et données personnelles.",
  alternates: { canonical: "https://simnlrx.fr/mentions-legales" },
  robots: { index: true, follow: true },
}

export default function MentionsLegalesPage() {
  return (
    <main
      style={{
        minHeight: "100svh",
        padding: "96px clamp(24px, 8vw, 160px) 80px",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div className="section-divider" style={{ marginBottom: "34px" }} />

        <p
          style={{
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "22px",
          }}
        >
          {mentionsLegales.label}
        </p>

        <h1
          style={{
            fontSize: "clamp(40px, 6.5vw, 72px)",
            fontWeight: 200,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "var(--text-primary)",
            marginBottom: "12px",
          }}
        >
          {mentionsLegales.title}
        </h1>

        <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "36px" }}>
          {mentionsLegales.sections.map((section) => (
            <section key={section.heading} style={{ paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
              <h2
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                  marginBottom: "16px",
                }}
              >
                {section.heading}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.75,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div style={{ marginTop: "48px" }}>
          <Link
            href="/"
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
              boxShadow: "var(--card-shadow)",
            }}
          >
            Revenir à l&apos;accueil
            <span style={{ fontSize: "16px" }}>→</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
