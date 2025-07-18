/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#F59E0B",
        accent: "#10B981",
        surface: "#FEF3C7",
        background: "#FFFBEB",
        success: "#059669",
        warning: "#D97706",
        error: "#DC2626",
        info: "#3B82F6",
      },
      fontFamily: {
        'display': ['Fredoka One', 'cursive'],
        'body': ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'lg': '12px',
      },
      boxShadow: {
        'card': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'elevated': '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'bounce-gentle': 'bounce 1s ease-in-out',
        'pulse-soft': 'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}