/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],  // 'for manually switch dark mode
  content: [
    './src/**/*.{html,js}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'iranyekan': 'iranyekan',
      'dana': 'dana',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}