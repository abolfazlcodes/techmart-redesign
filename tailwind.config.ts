import type { Config } from "tailwindcss";

export const tailwindColors: { [key: string]: string } = {
  transparent: "transparent",
  current: "currentColor",
  dark: "#0D0D0D",
  white: "#fff",
  primary: "#28374C",
  secondary: "#FF8A00",
  "secondary-hover": "#F97B06FF",
  background: "#F0F3F4",
  // "text-title": "#36489E",
  // "text-body": "#6B7280",
  // "text-tag": "#FEECDC",
  // check: "#9AACB6",
  // gray: "#6B8694",
  // "gray-2": "#9CA3AF",
  description: "#6B8694",
  icon: "#9AACB6",
  tag: "#E1E7EA",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: tailwindColors,
      fontSize: {
        "title1-d": ["28px", "44.8px"],
        "title1-m": ["20px", "32px"],
        "title2-d": ["16px", "25.6px"],
        "title2-m": ["16px", "25.6px"],
        "body1-d": ["16px", "28px"],
        "body1-m": ["14px", "24.5px"],
        "body2-d": ["14px", "24.5px"],
        "body2-m": ["12px", "19.2px"],
        "body3-d": ["12px", "19.2px"],
        "body3-m": ["10px", "13px"],
        caption1: ["14px", "18.2px"],
        caption2: ["12px", "15.6px"],
      },
      screens: {
        "3xl": "1710px",
        xs: "500px",
      },
    },
  },
  plugins: [],
};
export default config;
