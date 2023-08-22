/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        "5px": "5px",
      },
      zIndex: {
        100: "100",
      },
    },
    fontFamily: {
      yanoneFont: ["Yanone Kaffeesatz", "sans-serif"],
      caveatFont: ["Caveat", "cursive"],
      dancingFont: ["Dancing Script", "cursive"],
    },
  },
};
