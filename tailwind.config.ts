import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        charcoal: "#1E1E1E",
        sand: "#E7DCC8",
        bronze: "#C8AE7D",
        earth: "#4A3627",
        agave: "#233025"
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      letterSpacing: {
        quiet: "0.18em",
        ritual: "0.32em"
      },
      boxShadow: {
        ember: "0 0 48px rgba(200, 174, 125, 0.16)"
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.035)" }
        },
        scroll: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "35%": { opacity: "1" },
          "100%": { transform: "translateY(120%)", opacity: "0" }
        }
      },
      animation: {
        breathe: "breathe 18s ease-in-out infinite",
        scroll: "scroll 2.6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
