import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        atsuko: {
          cyan: "#25cfff",
          pink: "#ff5cb8",
          violet: "#9b8cff",
          navy: "#020b19",
          panel: "#0a1729",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 24px rgba(37, 207, 255, 0.22), 0 0 44px rgba(255, 92, 184, 0.12)",
        panel: "0 20px 60px rgba(0, 0, 0, 0.32)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 78% 26%, rgba(37,207,255,.18), transparent 34%), radial-gradient(circle at 14% 32%, rgba(255,92,184,.1), transparent 30%), linear-gradient(135deg, #020713 0%, #041225 48%, #031225 100%)",
      },
    },
  },
  plugins: [animate],
};

export default config;
