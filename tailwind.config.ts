import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: {
    xs: "360px",
    sm: "640px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        vicePink: "rgb(255, 0, 157)",
        viceCyan: "rgb(0, 174, 255)",
        astro: "FFF",
      },
    },
  },
  plugins: [],
};
export default config;
