/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  './public/index.html',
    './src/**/*.{html,js,jsx}',],
  theme: {
    extend: {},
  },
  plugins: [
    require(getDaisyUI()),
    require('postcss-nested'),
    require('tailwindcss'),
  ],
  
};

function getDaisyUI() {
  return "daisyui";
}