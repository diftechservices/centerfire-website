/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base backgrounds (keeping dark theme)
        "tactical-dark": "#0a0a0a",
        "tactical-gray": "#1a1a1a",
        "tactical-light": "#2a2a2a",
        
        // Centerfire brand palette
        "brand-crimson": "#9D0007",      // Primary brand color from logo
        "accent-red": "#E31E24",         // Brighter accent red
        "steel-blue": "#2C5282",         // Professional complement
        "charcoal": "#2D3748",           // Sophisticated dark accent
        "silver": "#A0AEC0",             // Neutral technical accent
        "platinum": "#E2E8F0",           // Light accent for text/borders
        
        // Legacy colors (gradually replace)
        "fire-orange": "#E31E24",        // Mapped to accent-red
        "tactical-green": "#38A169",     // Softer professional green
        "warning-amber": "#D69E2E"       // Warmer professional amber
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