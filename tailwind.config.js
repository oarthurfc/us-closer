/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'DM Sans',
      },
      colors: {
        'gelo':'#F3F6FA',
        'azul-cinza': '#3F507D',
        'azul-claro': '#0762ED',
        'azul-escuro': '#021547',
        'azul-input': '#F0F4FC'
      },
      boxShadow: {
        shape: '0px 8.1481px 20px rgba(5, 46, 137, 0.05), 0px 14px 60px rgba(5, 46, 137, 0.06)'
      },
    },
  },
  plugins: [],
}
