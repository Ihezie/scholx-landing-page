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
        carmine: {
          DEFAULT: "#9a031e",
          100: "#1f0106",
          200: "#3e010c",
          300: "#5d0213",
          400: "#7c0319",
          500: "#9a031e",
          600: "#e0052d",
          700: "#fb3055",
          800: "#fc758e",
          900: "#febac6",
        },
        federal_blue: {
          DEFAULT: "#0a014f",
          100: "#020010",
          200: "#040020",
          300: "#060030",
          400: "#080141",
          500: "#0a014f",
          600: "#1502a6",
          700: "#1f03fa",
          800: "#6955fd",
          900: "#b4aafe",
        },
      },
      fontFamily: {
        belanosima: ["Belanosima", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
