/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      title: ['Montserrat', 'sans-serif'],
      body: ['Lato', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#00FFF0',
        secondary: '#181A20'
      }
    }
  },
  plugins: []
}
