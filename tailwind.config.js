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
      },
      fontFamily: {
        primary: ["Commissioner", "serif"],
        secondary: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
