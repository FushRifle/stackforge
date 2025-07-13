// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#3b82f6', // Main blue
          600: '#2563eb', // Darker blue
        },
        secondary: {
          500: '#8b5cf6', // Purple
        },
        accent: {
          500: '#10b981', // Green
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
}