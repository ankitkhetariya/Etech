/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this line is exactly like this
  ],
  theme: {
    extend: {
      colors: {
        solar: {
          yellow: "#FDB813",
          green: "#10B981",
          dark: "#0F172A",
        },
      },
    },
  },
  plugins: [],
};
