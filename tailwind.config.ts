import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50: "#FEECEC",
          100: "#FCD2D2",
          200: "#F8A6A6",
          300: "#F27878",
          400: "#EA4646",
          500: "#DB0000",
          DEFAULT: "#DB0000",
          600: "#B90000",
          700: "#970000",
          800: "#750000",
          900: "#530000",
          950: "#330000",
        },
        neutral: {
          50: "#FAF9F7",
          100: "#F2F0EC",
          200: "#E5E2DC",
          300: "#D1CCC3",
          400: "#A8A199",
          500: "#7D766D",
          600: "#57514A",
          700: "#3D3833",
          800: "#242019",
          900: "#17140F",
          950: "#0D0B08",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      letterSpacing: {
        widest: "0.15em",
      },
      maxWidth: {
        "7xl": "80rem",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(0 0 0 / 0.04), 0 4px 16px -4px rgb(0 0 0 / 0.08)",
        "card-hover":
          "0 4px 8px 0 rgb(0 0 0 / 0.06), 0 12px 28px -6px rgb(0 0 0 / 0.14)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
