/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tactical-dark": "#0a0a0a",
        "tactical-gray": "#1a1a1a",
        "tactical-light": "#2a2a2a",
        "fire-orange": "#ff6b35",
        "steel-blue": "#4a90e2",
        "tactical-green": "#2ecc71",
        "warning-amber": "#f39c12"
      },
      fontFamily: {
        "tactical": ["Rajdhani", "sans-serif"],
        "display": ["Orbitron", "monospace"],
        "sans": ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}