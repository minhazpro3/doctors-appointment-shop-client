module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins-font": ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  plugins: [
    require('tailwindcss-textshadow')
  ]
}
