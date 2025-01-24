import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        floating: {
          "0%, 100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-30px)"
          },
        }
      },
      animation: {
        "floating-animation": "floating 2s infinite"
      }
    },
  },
  plugins: [
    daisyui,
  ],

} satisfies Config;
