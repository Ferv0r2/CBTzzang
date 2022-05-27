const { default: plugin } = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#0d0222",
        light_gray: "#b5b2bc",
        hover_pink: "#d52e82",
        box_text: "#fbd9ff",
        top_gray: "#a3a3a3",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bubbleGum: "#ff77e9",
        bermuda: "#78dcca",
      },
      width: {
        128: "32rem",
      },
      height: {
        108: "26rem",
      },
      left: {
        "-16": "-4rem",
      },
      right: {
        "-16": "-4rem",
      },
    },
  },
  plugins: [],
};
