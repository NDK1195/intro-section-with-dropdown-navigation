/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      boxShadow: {
        box: "0px 10px 40px 0px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)",
      },
      keyframes: {
        dropdown: {
          "0%": {
            transform: "translateY(-20%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        dropdown: "dropdown 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
