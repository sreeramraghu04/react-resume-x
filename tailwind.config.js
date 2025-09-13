const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // keep default Tailwind palette + extend if you want custom
        green: colors.green,
        blue: colors.blue,
        red: colors.red,
        gray: colors.gray,
        indigo: colors.indigo,
      },
    },
  },
  plugins: [],
};
