/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#bb925d",
        secondary: "#004541", /* "#fb923c", */
        brightColor: "#004541",
        backgroundColor: "#bb925d",
        baseColor: "#F1F1F1",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        averia: ["Averia Serif Libre", "serif"],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          md: "2.5rem",
          lg: "3rem",
          xl: "3.5rem",
          "2xl": "4.5rem",
        }
      }
    },
  },
  plugins: [],
}

