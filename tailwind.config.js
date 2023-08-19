/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        topColor: "#00BDBB",
        menuColor: "#00BDCA",
        subMenybg: "#2A2A2A",
        footer: "#333333",
      },
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
