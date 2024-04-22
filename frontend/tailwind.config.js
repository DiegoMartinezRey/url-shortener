/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        light: "0 5px 10px 0px rgb(88, 88, 88)",
        dark: "0 5px 10px 0px rgb(27, 5, 84)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
