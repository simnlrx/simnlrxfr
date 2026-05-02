interface SectionLabelProps {
  company: string
  website?: string
  role: string
  period: string
  tagline?: string
  isCurrent?: boolean
}

export default function SectionLabel({ company, website, role, period, tagline, isCurrent }: SectionLabelProps) {
  return (
    <div style={{ marginBottom: "56px" }}>
      <style>{`
        .company-site-link:hover {
          color: var(--accent) !important;
          border-color: var(--accent-soft) !important;
        }
      `}</style>

      {/* Company name — visual anchor of the section */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: "14px", marginBottom: "12px", flexWrap: "wrap" }}>
        <h2
          style={{
            fontSize: "clamp(56px, 9vw, 108px)",
            fontWeight: 200,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "var(--text-primary)",
          }}
        >
          {company}
        </h2>
        {isCurrent && (
          <span
            className="pulse-dot"
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#30d158",
              flexShrink: 0,
              marginBottom: "14px",
              display: "inline-block",
            }}
          />
        )}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="company-site-link"
            data-analytics-label={`Site ${company}`}
            aria-label={`Site web de ${company}`}
            style={{
              marginBottom: "12px",
              padding: "5px 10px",
              border: "1px solid var(--border)",
              borderRadius: "100px",
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "color 0.2s ease, border-color 0.2s ease",
            }}
          >
            site ↗
          </a>
        )}
      </div>

      <div
        aria-hidden
        style={{
          width: "96px",
          height: "2px",
          borderRadius: "999px",
          background: "var(--section-stripe, var(--accent))",
          marginBottom: "18px",
        }}
      />

      {/* Role + period */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: tagline ? "20px" : "0",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "var(--accent)",
            letterSpacing: "-0.01em",
          }}
        >
          {role}
        </span>
        <span style={{ color: "var(--border)", userSelect: "none" }}>·</span>
        <span
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            letterSpacing: "0.01em",
          }}
        >
          {period}
        </span>
      </div>

      {/* Tagline — section signature */}
      {tagline && (
        <p
          style={{
            fontSize: "clamp(20px, 2.8vw, 32px)",
            fontWeight: 200,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            color: "var(--text-secondary)",
          }}
        >
          {tagline}
        </p>
      )}
    </div>
  )
}
