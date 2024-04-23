/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      "md-lg": "840px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        french_blue: {
          DEFAULT: "#1075bd",
          100: "#031726",
          200: "#072f4b",
          300: "#0a4671",
          400: "#0d5d96",
          500: "#1075bd",
          600: "#1e96eb",
          700: "#56b0f0",
          800: "#8ecaf5",
          900: "#c7e5fa",
        },
        "cta-red": "#E6042C",
      },
      fontFamily: {
        belanosima: ["Belanosima", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
