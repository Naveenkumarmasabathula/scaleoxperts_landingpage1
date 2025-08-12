import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }, // full set, not 50%
        },
      },
      animation: {
        slide: "slide 25s linear infinite", // slow enough for smoothness
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(346deg,rgba(244, 147, 18, 1) 100%, rgba(255, 169, 55, 1) 50%, rgba(255, 195, 92, 1) 100%)',
      },
      colors: {
        brand: {
          orange1: "#f49312",
          orange2: "#ffa937",
          orange3: "#ffc35c",
        },
      },
    }
    
  },
  plugins: [],
};

export default config;