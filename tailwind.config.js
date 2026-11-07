/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#090d16',
          800: '#0d1322',
          700: '#131b2e',
          600: '#1a243d',
          500: '#243254',
          border: '#232f48',
          input: '#151d30',
        },
        primary: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
          glow: 'rgba(99, 102, 241, 0.35)',
        },
        accent: {
          gold: '#f59e0b',
          'gold-bg': 'rgba(245, 158, 11, 0.1)',
          'gold-border': '#d97706',
          cyan: '#06b6d4',
          rose: '#f43f5e',
          emerald: '#10b981',
        }
      },
      boxShadow: {
        'glow-primary': '0 0 25px -5px rgba(99, 102, 241, 0.4)',
        'glow-gold': '0 0 20px -3px rgba(245, 158, 11, 0.35)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(99, 102, 241, 0.1)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

