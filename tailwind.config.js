/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal:   "#353535",
        teal:       "#3c6e71",
        white:      "#ffffff",
        lightGray:  "#d9d9d9",
        deepBlue:   "#284b63",
      },
    },
  },
  plugins: [],
};
