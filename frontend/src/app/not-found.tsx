import Link from "next/link"

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100svh",
        padding: "96px clamp(24px, 8vw, 160px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "clamp(-120px, -6vw, -40px)",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "clamp(180px, 34vw, 520px)",
          fontWeight: 200,
          letterSpacing: "-0.08em",
          lineHeight: 0.82,
          color: "var(--watermark-text)",
          textShadow:
            "0 1px 0 rgba(255, 255, 255, 0.18), 0 0 34px var(--watermark-glow), 0 0 92px var(--watermark-glow)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        404
      </div>

      <section
        className="content-veil"
        style={{
          width: "100%",
          maxWidth: "720px",
          position: "relative",
          zIndex: 1,
        }}
      >
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
          Erreur 404
        </p>

        <h1
          style={{
            fontSize: "clamp(52px, 9vw, 104px)",
            fontWeight: 200,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "var(--text-primary)",
          }}
        >
          Page introuvable.
        </h1>

        <p
          style={{
            marginTop: "28px",
            maxWidth: "520px",
            fontSize: "clamp(17px, 2.4vw, 22px)",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            fontWeight: 300,
          }}
        >
          Le lien demandé n&apos;existe plus, ou n&apos;a jamais vraiment été publié.
        </p>

        <Link
          href="/"
          style={{
            marginTop: "42px",
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
      </section>
    </main>
  )
}
