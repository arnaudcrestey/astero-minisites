import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4C6FFF",
          bright: "#8B5CFF",
          light: "#00D4FF",
        },
      },
      boxShadow: {
        soft: "0 30px 80px -30px rgba(76, 111, 255, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
