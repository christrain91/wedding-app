module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [
    require('@tailwindcss/typography')
  ],
  extend: {
    backgroundImage: {
      'dino': "url('/dino.jpeg')"
    }
  }
}

