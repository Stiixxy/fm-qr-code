/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      lightgray: 'hsl(212, 45%, 89%)',
      grayishblue: 'hsl(220, 15%, 55%)',
      darkblue: 'hsl(218, 44%, 22%)',
    },
    fontFamily: {
      outfit: ['Outfit'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
