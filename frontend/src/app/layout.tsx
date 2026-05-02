import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeToggle from "@/components/ThemeToggle"
import VisitTracker from "@/components/VisitTracker"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://simnlrx.fr"),
  title: "Simon Le Roux — Ingénieur Cybersécurité",
  description:
    "Consultant Cybersécurité chez Almond. Audits techniques et organisationnels, conformité ISO 27001, DORA, NIS2, pilotage de projets sécurité. Basé à Lyon.",
  keywords: [
    "Simon Le Roux",
    "ingénieur cybersécurité",
    "consultant cybersécurité",
    "ISO 27001",
    "DORA",
    "NIS2",
    "audit sécurité",
    "RSSI externalisé",
    "gouvernance sécurité",
    "cybersécurité Lyon",
    "Almond",
    "GRC",
    "EBIOS RM",
  ],
  authors: [{ name: "Simon Le Roux", url: "https://simnlrx.fr" }],
  creator: "Simon Le Roux",
  alternates: {
    canonical: "https://simnlrx.fr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Simon Le Roux — Ingénieur Cybersécurité",
    description:
      "Consultant Cybersécurité chez Almond. Audits, conformité ISO 27001 / DORA / NIS2, pilotage de projets sécurité. Basé à Lyon.",
    url: "https://simnlrx.fr",
    siteName: "Simon Le Roux",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Simon Le Roux — Ingénieur Cybersécurité",
      },
    ],
    locale: "fr_FR",
    type: "profile",
    firstName: "Simon",
    lastName: "Le Roux",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Le Roux — Ingénieur Cybersécurité",
    description: "Consultant Cybersécurité chez Almond. Audits, conformité ISO 27001 / DORA / NIS2.",
    images: ["/images/og-cover.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Simon Le Roux",
  url: "https://simnlrx.fr",
  image: "https://simnlrx.fr/images/simon-le-roux-photo.png",
  jobTitle: "Ingénieur Cybersécurité",
  worksFor: {
    "@type": "Organization",
    name: "Almond",
    url: "https://almond.eu/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lyon",
    addressCountry: "FR",
  },
  sameAs: ["https://fr.linkedin.com/in/simnlrx"],
  knowsAbout: [
    "Cybersécurité",
    "ISO 27001",
    "DORA",
    "NIS2",
    "Audit de sécurité",
    "Gouvernance SSI",
    "EBIOS RM",
    "XDR",
    "EDR",
    "SIEM",
    "Zero Trust",
    "PCI-DSS",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "ESJO",
      address: { "@type": "PostalAddress", addressLocality: "Dijon" },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable} data-theme="light">
      <head>
        {/* Anti-flash: apply stored theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeToggle />
        {children}
        <VisitTracker />
      </body>
    </html>
  )
}
