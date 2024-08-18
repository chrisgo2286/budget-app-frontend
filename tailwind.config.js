/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        100: "25rem",
        120: "30rem",
        140: "35rem"
      }
    },
  },
  plugins: [],
}

