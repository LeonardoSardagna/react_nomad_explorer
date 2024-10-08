/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Inter'
      },
      boxShadow:{
        shape: '0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)'
      },
      colors: {
        purpleLight: '#b39ddb',
        purpleMedium: '#7e57c2',
        purpleDark: '#5e35b1',
      },
      textColor:{
        purpleLight: '#b39ddb',
        purpleMedium: '#7e57c2',
        purpleDark: '#5e35b1',
      },
      backgroundImage:{
        pattern: 'url(/pattern.png)',
        pattern2: 'url(/pattern-2.png)',
        pattern3: 'url(/pattern-3.png)'
      }
    },
  },
  plugins: [],
}