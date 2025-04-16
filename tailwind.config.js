// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"], // Make sure it includes JSX/TSX files if you're using React
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
};
