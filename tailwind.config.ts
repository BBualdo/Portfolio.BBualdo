import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1440px",
    },
    extend: {
      colors: {
        vicePink: "rgb(255, 0, 157)",
        viceCyan: "rgb(0, 174, 255)",
        matrixGreen: "#22b455"
      },
    },
  },
  plugins: [],
};
export default config;
