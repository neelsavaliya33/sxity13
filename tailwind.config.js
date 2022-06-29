module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'green-theme':'#28998B'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
