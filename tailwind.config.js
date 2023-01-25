/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'day': "url('https://images8.alphacoders.com/679/679478.jpg')",
        'night': "url('https://wallpaper.dog/large/10805997.jpg')",
      }), 
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [],
}
