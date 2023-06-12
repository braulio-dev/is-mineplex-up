/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
    theme: {
    extend: {
      backgroundImage: {
        'server-card': "url('../public/minecraft_background.webp')",
      },
      dropShadow: {
        '3xl': '0 60px 60px rgba(0, 0, 0, 1)',
      },
      fontFamily: {
        'minecraft': ['Minecraft', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

