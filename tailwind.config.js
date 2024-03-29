/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["poppins", "sans-serif"]
      }
    }
  },
  plugins: []
};
