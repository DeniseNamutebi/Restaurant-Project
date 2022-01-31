module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      red: "#e71d36",
      orange: "#ff9f1c",
      blue: "#2cec4b6",
      white: "#fdfffc",
      navy: "#011627",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      red: "#e71d36",
      orange: "#ff9f1c",
      blue: "#2cec4b6",
      white: "#fdfffc",
      navy: "#011627",
    }),
    fontFamily: {
      roboto: '"Roboto", sans-serif',
      palatino: '"Palatino", sans-serif',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
