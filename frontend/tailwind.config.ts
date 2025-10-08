import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2F3C7E",
          accent: "#FBEAEB",
        },
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(47, 60, 126, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
