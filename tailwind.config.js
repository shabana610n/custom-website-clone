/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'laptop': { 'min': '1240px', 'max': '1540px' },
        'forHero': { 'min': '1050px', 'max': '1250px' },
        'xl': { 'min': '930px', 'max': '1050px' },
        'lg': { 'min': '760px', 'max': '930px' },
        'lg2': { 'min': '720px', 'max': '760px' },
        'md': { 'min': '560px', 'max': '720px' },
        'campus-lg': { 'max': '840px' },
        'mobile': { 'max': '720px' },
        'keypadMbl': { 'max': '650px' },
      },
      colors: {
        "my-gray": "var(--my-gray)",
        "my-textGray": "var(--my-textGray)",
        "my-blue": "var(--my-blue)",
        "my-hoverBlue": "var(--my-hoverBlue)",
        "my-formBlue": "var(--my-formBlue)",
        "my-formHoverBlue": "var(--my-formHoverBlue)",
        "my-formGray": "var(--my-formGray)",
      },
      boxShadow: {
        'gradient': '0 4px 6px -1px rgba(8, 0, 58, 0.6), 0 2px 4px -1px rgba(8, 0, 58, 0.6)',
      },
    },
  },
  plugins: [],
}