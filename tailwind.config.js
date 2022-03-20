module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins-font": ['Poppins', 'sans-serif']
      },
      colors: {
        "brand-gradient": "linear-gradient(90deg, #337cd5 0%, #66db9f 100%)"
      }
    },
    backgroundImage: {
      'allDoctors-banner': "url('https://i.ibb.co/2n7fjTh/doctors-manyedt.jpg')",
  },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  plugins: [
    require('tailwindcss-textshadow')
  ]
}
