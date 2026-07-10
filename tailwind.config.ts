import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0A",
        charcoal: "#1C1C1C",
        "charcoal-light": "#262626",
        ivory: "#F5F4F1",
        silver: "#C0C0C0",
        "silver-dim": "#8A8A8A",
        gold: "#C8A96A",
        "gold-bright": "#E4C989",
        "gold-dim": "#9C7F49",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
        widest3: "0.5em",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #E4C989 0%, #C8A96A 45%, #9C7F49 100%)",
        "fade-black":
          "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 70%, #0A0A0A 100%)",
        "fade-black-top":
          "linear-gradient(0deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.9) 100%)",
      },
      boxShadow: {
        gold: "0 0 30px -5px rgba(200,169,106,0.35)",
        "gold-sm": "0 0 16px -4px rgba(200,169,106,0.4)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
