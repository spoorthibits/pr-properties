/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B304B",      // Navy Blue
        gold: "#B89454",         // Bronze/Gold
        lightGold: "#D4B982",    // Light Gold
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: ["68px", "88px"],
        h2: ["40px", "50px"],
        h3: ["20px", "25px"],
        para: ["18px", "25px"],
      },
      fontWeight: {
        semibold: "600",
        normal: "400",
      },
      maxWidth: {
        container: "1280px", // equivalent to max-w-7xl
      },
    },
  },
  plugins: [],
};