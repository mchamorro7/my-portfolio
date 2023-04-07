/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: '#00FFF0',
      secondary: '#181A20'
    },
    fontFamily: {
      title: ['Montserrat'],
      body: ['Lato']
    },
    extend: {}
  },
  plugins: []
}
