/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px", 
      sm: "640px",
      sml: "768px",
      md: "1024px",
      lg: "1280px", 
      xl: "1536px", 
    },
    extend: {},
  },
  plugins: [],
}
