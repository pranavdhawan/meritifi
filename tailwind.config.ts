import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-balsamiq)",
          "var(--font-lato)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        // Desktop scale (px -> rem at 16px root)
        "ds-h1": ["3.375rem", { lineHeight: "1.8", letterSpacing: "-0.01em" }], // 54
        "ds-h2": ["2.5rem", { lineHeight: "1.8" }], // 40
        "ds-sub": ["1.75rem", { lineHeight: "1.8" }], // 28
        "ds-b1": ["1.5rem", { lineHeight: "1.3334" }], // 24
        "ds-b2": ["1rem", { lineHeight: "1.5" }], // 16
        "ds-b3": ["0.75rem", { lineHeight: "1.3334" }], // 12
        "ds-notes": ["1.75rem", { lineHeight: "1.2" }], // 28 bubbles
        "ds-footer": ["1rem", { lineHeight: "1.5" }], // 16
        // Buttons (ALL CAPS expected in components)
        "ds-btn1": ["2rem", { lineHeight: "1.2", letterSpacing: "0.08em" }], // 32
        "ds-btn2": ["1.75rem", { lineHeight: "1.2", letterSpacing: "0.08em" }], // 28
        "ds-btn3": ["1rem", { lineHeight: "1.2", letterSpacing: "0.08em" }], // 16
        // Mobile scale overrides
        "dsm-h1": ["2.125rem", { lineHeight: "1.8" }], // 34
        "dsm-h2": ["1.375rem", { lineHeight: "1.8" }], // 22
        "dsm-btn1": ["1.25rem", { lineHeight: "1.2", letterSpacing: "0.08em" }], // 20
        "dsm-btn2": [
          "0.8125rem",
          { lineHeight: "1.2", letterSpacing: "0.08em" },
        ], // 13
        "dsm-text1": ["1rem", { lineHeight: "1.5" }], // 16
        "dsm-text2": ["0.8125rem", { lineHeight: "1.5" }], // 13
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
