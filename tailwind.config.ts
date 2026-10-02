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
        pro: {
          pink: "#eb2d93",
          "pink-soft": "#fde2f1",
          violet: "#824dff",
          "violet-soft": "#ede5ff",
          orange: "#ff751a",
          "orange-soft": "#ffe7d6",
          sky: "#1697f3",
          "sky-soft": "#dbf0ff",
          green: "#25935c",
          "green-soft": "#d7f4e6",
        },
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
