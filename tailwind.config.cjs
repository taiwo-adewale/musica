/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: { max: "350px" },
      sm: "576px",
      md: "768px",
      midMd: "850px",
      lg: "992px",
      xl: "1200px",
      xxl: "2000px",
    },
    extend: {
      colors: {
        bgDark: "#1D2123",
        altDark: "#1A1E1F",
        primary: "#FACD66",
        songCardBg: "rgba(51,55,59,0.37)",
        light: "#EFEEE0",
      },
    },
    fontFamily: {
      base: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [],
};
