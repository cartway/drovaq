/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/web/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(350,48%,32%)',
        secondary: 'hsl(30,15%,90%)',
        muted: 'hsl(30,12%,92%)',
        accent: 'hsl(43,45%,59%)',
        destructive: 'hsl(0,84%,48%)',
      },
    },
  },
  plugins: [],
}
