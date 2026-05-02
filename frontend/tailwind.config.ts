import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#1c1c1e",
        primary: "#f5f5f7",
        secondary: "#6e6e73",
        accent: "#0071e3",
      },
      fontFamily: {
        sans: ["-apple-system", "SF Pro Display", "SF Pro Text", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
