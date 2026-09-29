import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Rethink Sans", "sans-serif"],
      },
      colors: {
        mint: "#c2eee4",
        teal: {
          DEFAULT: "#62bbaf",
          mid: "#4cb2a6",
          dark: "#178488",
        },
        green: {
          soft: "#a0dbd0",
        },
        coral: "#c16f6a",
        peach: "#f0c2ad",
        accent: "#dc8c3c",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
