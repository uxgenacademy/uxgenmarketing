import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF5",
          100: "#FFFBEB",
          200: "#FFF8E7",
          300: "#FEF3C7",
        },
        amber: {
          accent: "#F59E0B",
          gold: "#FFC233",
          light: "#FEF3C7",
        },
        midnight: {
          DEFAULT: "#0F172A",
          dark: "#0A0F1D",
          card: "#1E293B",
        },
      },
    },
  },
  plugins: [],
};

export default config;
