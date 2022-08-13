module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins-font": ['Poppins', 'sans-serif']
      },
    
    },
    backgroundImage: {
      'allDoctors-banner': "url('https://i.ibb.co/2n7fjTh/doctors-manyedt.jpg')",
  },
  },
  
  plugins: [
    require('flowbite/plugin','tailwindcss-textshadow','tw-elements/dist/plugin')
]
}
