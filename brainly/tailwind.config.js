/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {colors:{
      purple:{
        300:"#c084fc",
        500:"#a855f7",
        600:"#4f46e5",
        gray :{
          200:"#e5e7eb",
          500:"#d1d5db",
          600:"#1f2937"
        }
      }
    }},
  },
  plugins: [],
}

