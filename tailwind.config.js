/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#863E96',
        primaryDark: '#58E6D9',
      },
      backgroundImage: {
        circularLight:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)',
      },
    },
  },
  plugins: [],
};