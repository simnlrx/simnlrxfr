import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeToggle from "@/components/ThemeToggle"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://simnlrx.fr"),
  title: "Simon Le Roux — Ingénieur Cybersécurité",
  description:
    "Consultant Cybersécurité chez Almond. Audits, conformité ISO 27001 / DORA / NIS2, pilotage de projets sécurité.",
  openGraph: {
    title: "Simon Le Roux — Ingénieur Cybersécurité",
    description: "Protégeons ensemble ce qui compte.",
    url: "https://simnlrx.fr",
    siteName: "Simon Le Roux",
    images: [
      {
        url: "/images/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Simon Le Roux — Ingénieur Cybersécurité",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Le Roux — Ingénieur Cybersécurité",
    description: "Protégeons ensemble ce qui compte.",
    images: ["/images/og-cover.svg"],
  },
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
      </head>
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
