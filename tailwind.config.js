/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg : '976px',
      xl: '1440px'},

      
    extend: {
      colors:{
        'brightRed' :'#f25f3a',
        'brightRedSupLight' :'#fdece7',
        'brightRedLight' :'#f6866a',
        'darkBlue' :'#482452',
        'darkGrayishBlue' :'#9e90a7',
        'veryDarkBlue': '#1d1e25',
        'veryPaleRed':'#ff#fafafa'
      }
    }
    
  },
  plugins: [],
}
