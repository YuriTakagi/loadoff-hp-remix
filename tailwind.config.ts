import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "be-vietnam-pro": ['"Be Vietnam Pro"', "sans-serif"],
      },
      fontSize: {
        "5.625": "5.625rem"
      },
      letterSpacing: {
        "current-date-letter-spacing": "0.19rem",
        "page-title-letter-spacing": "0.1125rem",
      },
      colors: {
        "org-white": "#efefef",
        "org-black": "#545454",
      },
    },
  },
  plugins: [],
} satisfies Config;
