module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      screens: {
        'xs': '357px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

      backgroundImage: theme => ({
        'Donation-bg': "url('/DonationProfile.png')",
        'Educational-bg': "url('/EducationProfile.png')",
        'DonationM-bg': "url('/DonationbgMob.png')",
        'EducationM-bg': "url('/EducationalbgMob.png')",
        'sidebar-pattern': "url('https://www.transparenttextures.com/patterns/cubes.png')",

        
      }),



      textColor: {
        skin:{
          darkGreen: 'var(--dark-green)',
          darkBlue: 'var(--dark-blue)',
          darkRed: 'var(--dark-red)',
          lightGreen: 'var(--light-green)',
          lightBlue: 'var(--light-blue)',
          lightRed: 'var(--light-red)'
        }
      },
      backgroundColor: {
        skin:{
          darkGreen: 'var(--dark-green)',
          darkBlue: 'var(--dark-blue)',
          darkRed: 'var(--dark-red)',
          lightGreen: 'var(--light-green)',
          lightBlue: 'var(--light-blue)',
          lightRed: 'var(--light-red)',
          hoverGreen: 'var(--btn-hover-green)',
          hoverBlue: 'var(--btn-hover-blue)'
        },
      },
      fontFamily: {
        rokkitt: "'Rokkitt', serif;",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio"),require('@tailwindcss/forms')]
  
}
