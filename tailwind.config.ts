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
          /* Deeper pink and violet: white text on them, and pink text on warm grounds, pass AA. */
          "pink-deep": "#a3125f",
          "pink-btn": "#d61f84",
          "violet-btn": "#7a3ff2",
        },
        /* Warm page grounds and the deep-teal ink that sits on them. */
        warm: {
          DEFAULT: "#fdfaf6",
          sand: "#f4efe8",
          line: "#ece6dd",
        },
        ink: {
          DEFAULT: "#12292b",
          soft: "#22393b",
          body: "#4b5f61",
          muted: "#5d7173",
          panel: "#1d3a3c",
        },
        tile: {
          mint: "#d6f3ec",
          peach: "#f7dccf",
        },
        mint: "#c2eee4",
        teal: {
          DEFAULT: "#62bbaf",
          mid: "#4cb2a6",
          dark: "#178488",
          deep: "#0f6f73",
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
