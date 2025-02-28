/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <- Fügt alle relevanten Dateien hinzu!
  ],
  theme: {
    extend: {
      backgroundImage: {
        'site-bg': "url('/site-bg.svg')", 
      },
    },
  },
  plugins: [],
}
