/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  purge: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
