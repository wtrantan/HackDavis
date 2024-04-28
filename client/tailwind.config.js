/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  theme: {
    extend: {
      gridTemplateRows: {
        "HomeScreenRows": "4fr 1fr"
      },
      gridTemplateColumns: {
        "HomeScreenCols": "1fr 2fr"
      }
    },
  },
  plugins: [],
}

