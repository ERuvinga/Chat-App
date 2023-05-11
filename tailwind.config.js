/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md_lg': '1320px',
        // => @media (min-width: 1050px) { ... }
        'mobile': '370px',
        // => @media (min-width: 320px) { ... }

        'TabletPoint': '920px',
        // => @media (min-width: 320px) { ... }
        'sm': '530px'
      },

    },
  },
  plugins: [],
}
