const { addDynamicIconSelectors } = require('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      colors: {
        // Puedes agregar más colores personalizados aquí si los necesitas
      }
    },
  },
  plugins: [
    addDynamicIconSelectors() // Agrega el plugin de Iconify
  ],
}
