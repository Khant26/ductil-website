/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "390px",   // mobile (iPhone 12/13/14)
      md: "768px",   // tablet
      lg: "1024px",  // small laptop
      xl: "1280px",  // desktop
      "2xl": "1536px", // 15.6 inch laptop
      "3xl": "1920px", // 27 inch monitor
    },
    extend: {},
  },
  plugins: [],
};