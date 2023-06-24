/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    // "./<custom directory>/**/*.{js,jsx,ts,tsx}"
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./modals/**/*.{js,jsx,ts,tsx}",
  ],
  // theme: {
  //   colors: {
  //     lightYellow: "#F3D73E",
  //     bgBrown: "#6E451C",
  //   },
  //   extend: {},
  // },
  plugins: [],
};
