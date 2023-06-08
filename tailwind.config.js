/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "body-bg":"hsl(217, 100%, 97%)",
        primary:"hsl(213, 96%, 18%)",
        confirm:"hsl(243, 100%, 62%)",
        secondary:"hsl(228, 100%, 84%)",//active bg
        link:"hsl(206, 94%, 87%)",//nav
        error: "hsl(354, 84%, 57%)",
        muted: "hsl(229, 24%, 87%)",
        "muted-dark": "hsl(231, 11%, 63%)",
        alabaster: "hsl(231, 100%, 99%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}