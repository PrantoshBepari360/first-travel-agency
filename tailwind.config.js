/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
      margin: {
        "5px": "5px",
      },
      zIndex: {
        100: "100",
      },
      screens: {
        lg: "1100px",
      },
    },
    fontFamily: {
      yanoneFont: ['Yanone Kaffeesatz', 'sans-serif'],
      caveatFont: ['Caveat', 'cursive'],
      dancingFont: ["Dancing Script", "cursive"],
    },
   
  },
};
