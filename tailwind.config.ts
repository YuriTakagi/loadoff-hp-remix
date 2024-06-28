import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "org-white": "#efefef",
        "org-black": "#545454",
      }
    },
  },
  plugins: [],
} satisfies Config;
