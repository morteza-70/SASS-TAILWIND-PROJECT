/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // 'for manually switch dark mode
  // darkMode: 'media', // 'when dark mode in OS
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