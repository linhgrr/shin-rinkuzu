/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vina-sans': ['"Vina Sans"', 'sans-serif'],
        'unbounded': ['Unbounded', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#ff541b',
          dark: '#fd761a',
        },
        background: '#06090e',
        surface: {
          light: '#ededed',
          dark: '#2b2b2b',
        }
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(177deg, rgb(255, 255, 255) 1.304%, rgb(153, 153, 153) 98.696%)',
      }
    },
  },
  plugins: [],
}