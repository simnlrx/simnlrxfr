import type { Metadata } from "next"
import Link from "next/link"
import { aPropos } from "@/lib/data"

export const metadata: Metadata = {
  title: "À propos — Simon Le Roux",
  description: "À propos de ce site : son objectif, la stack technique utilisée et le suivi des visites.",
  alternates: { canonical: "https://simnlrx.fr/a-propos" },
  robots: { index: true, follow: true },
}

export default function AProposPage() {
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
          {aPropos.label}
        </p>

        <h1
          style={{
            fontSize: "clamp(44px, 7vw, 84px)",
            fontWeight: 200,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "var(--text-primary)",
          }}
        >
          {aPropos.title}
        </h1>

        <div style={{ marginTop: "36px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {aPropos.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                maxWidth: "560px",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div style={{ marginTop: "48px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
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

          <Link
            href="/mentions-legales"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 28px",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              borderRadius: "100px",
              fontSize: "15px",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </main>
  )
}
