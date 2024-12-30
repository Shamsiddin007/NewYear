import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "custom-yellow": "2px 3px 15px grey",
        "custom-white": "5px 5px 15px white",
      },
      keyframes: {
        slideToLeft: {
          "0%": { right: "0px", opacity: "0%" },
          "50%": { left: "100px", opacity: "0%" },
          "100%": { left: "70px", right: "-400px" },
        },
        slideToLefts: {
         "0%": { left: "0px", opacity: "0%" },
          "50%": { left: "0px", opacity: "0%" },
          "100%": { left: "0px", right: "-400px" },
        },
        moveUp: {
          "0%": { top: "160px", bottom: "100%", left: "345px", opacity: "50%" },
          "50%": { top: "160px", opacity: "90%" },
          "100%": { top: "-0px", left: "345px" },
        },
        moveDown: {
          "0%": { top: "0px", left: "345px", opacity: "100%" },
          "50%": { top: "0px", opacity: "100%" },
          "100%": { top: "-160px", left: "345px", opacity: "0%" },
        },
        moveUps: {
          "0%": { top: "160px", bottom: "100%", left: "235px", opacity: "50%" },
          "50%": { top: "160px", opacity: "90%" },
          "100%": { top: "-0px", left: "235px" },
        },
        moveDowns: {
          "0%": { top: "0px", left: "235px", opacity: "100%" },
          "50%": { top: "0px", opacity: "100%" },
          "100%": { top: "-160px", left: "235px", opacity: "0%" },
        },
      },
      animation: {
        moveUp: "moveUp 6s ease-in-out forwards",
        moveUps: "moveUps 6s ease-in-out forwards",
        moveDown: "moveDown 6s ease-in-out forwards",
        moveDowns: "moveDowns 6s ease-in-out forwards",
        slideToLeft: "slideToLeft 6s ease-in-out forwards",
        slideToLefts: "slideToLefts 6s ease-in-out forwards",

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: "10px",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1200px",
          xxl: "1280px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
