import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  plugins: [],
  theme: {
    extend: {
      colors: {
        "darkosPortfolio-gray": {
          DEFAULT: "#eeeeee",
          50: "#d9d9d9",
          500: "#555555",
        },
        "darkosPortfolio-black": {
          DEFAULT: "#1e1e1e",
        },
      },
    },
  },
};

export default config;
