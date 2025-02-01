import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'BGMAIN': '#100E19',
        'BG': '#1F1B2E'
        
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
} satisfies Config;
