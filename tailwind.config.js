// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      center:true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
        lg: '6rem',
      },
    },
    extend: {
      colors: {
        primary:{
          100: '#06C2AE',
          200: '#02889B'
        },
        secondary:'#FF693A'
        
      }
    },
  },
  variants: {
    
  },
  plugins: [],
}