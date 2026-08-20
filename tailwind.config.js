/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#172554",
          dark: "#0f172a",
        },
        airmail: "#0f766e",
        cream: "#eef6f3",
        parchment: "#dceee9",
        kraft: "#5f766f",
        ink: "#17202a",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        mono: ["Space Mono", "ui-monospace", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        stripes:
          "repeating-linear-gradient(135deg, #172554 0 12px, #eef6f3 12px 18px, #0f766e 18px 30px, #eef6f3 30px 36px)",
      },
      keyframes: {
        stampIn: {
          "0%": { opacity: "0", transform: "scale(1.6) rotate(-14deg)" },
          "60%": { opacity: "1", transform: "scale(0.94) rotate(-6deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-6deg)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        postIn: {
          "0%": { opacity: "0", transform: "translateX(-28px) rotate(-2deg)" },
          "100%": { opacity: "1", transform: "translateX(0) rotate(0deg)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        stampIn: "stampIn 0.5s cubic-bezier(0.2,0.7,0.3,1) both",
        slideDown: "slideDown 0.4s ease both",
        postIn: "postIn 0.4s cubic-bezier(0.2,0.7,0.3,1) both",
        shake: "shake 0.3s ease",
      },
    },
  },
  plugins: [],
};
