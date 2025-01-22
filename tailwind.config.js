/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#03afe1",
          dark: "#00134e",
          DEFAULT: "#003fa9",
        },
        accent: {
          DEFAULT: "#f4b400",
        },
        secondary: {
          DEFAULT: "#2e2e2e",
        },
        background: {
          DEFAULT: "#f5f5f5",
        },
      },
      fontFamily: {
        primary: ["Lato", "serif"],
        title: ["'Exo 2'", "serif"],
      },
    },
  },
  plugins: [],
};
