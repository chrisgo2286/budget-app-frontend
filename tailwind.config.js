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
      },
      colors: {
        "site-font-color": "var(--siteFontColor)",
        "first-color": "var(--firstColor)",
        "second-color": "var(--secondColor)",
        "third-color": "var(--thirdColor)",
        "fourth-color": "var(--fourthColor)"
      },
      boxShadow: {
        "custom": "3px 3px rgb(0, 0, 0, .2)"
      }
    },
  },
  plugins: [],
}

