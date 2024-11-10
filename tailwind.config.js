/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '5%',
        sm: '1rem',
      },
    },
    extend: {
      // screens: {
      //   sm: "600px",
      //   md: "700px",
      //   lg: "1000px",
      //   xl: "1250px",
      // },
      fontFamily:{
        'manrope':["Manrope", 'sans-serif'],
      },
      colors: {
        'custom-purple':'#9538E2',
        'custom-green':'#309C08',
        'custom-red':'#F14749',
        'custom-half-purple': 'rgba(149, 56, 226, 0.2)',
        'custom-half-green': 'rgba(47, 156, 8, 0.2)',
        'custom-half-red': 'rgba(241, 71, 74, 0.2)',
        'custom-black': '#717171',
        'white':'#ffffff',
        'custom-ash': '#f0f0f0',
      },
    },
  },
  plugins: [daisyui,],
  daisyui: {
    themes: ["light", "dark", "lemonade"], // or custom themes
  },
}