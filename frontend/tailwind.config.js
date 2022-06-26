const { default: plugin } = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#eff2fe",
        point: "#214af7",
        "semi-black": "#222222",
        "light-gray": "#f2f2f2",
        "semi-gray": "#999999",
        "deep-blue": "#1f2441",
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
      boxShadow: {
        card: "0px 10px 18px 0 rgba(4, 9, 28, 0.04)",
      },
    },
  },
  plugins: [],
};
