/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f9f4',
          100: '#dcf1e6',
          200: '#bbe3ce',
          300: '#8ad3b4',
          400: '#52b98a',
          500: '#2fa06f',
          600: '#22855f',
          700: '#1a6b4f',
          800: '#14513c',
          900: '#0f3d2e',
          950: '#082a20',
        },
        gold: {
          400: '#d8bd6e',
          500: '#c9a94e',
          600: '#b0913b',
        },
        ink: {
          DEFAULT: '#12201a',
          soft: '#3c4a43',
          muted: '#6a7871',
        },
        paper: {
          DEFAULT: '#ffffff',
          soft: '#f6faf8',
          tint: '#eef6f1',
        },
      },
      boxShadow: {
        soft: '0 2px 8px rgba(15, 61, 46, 0.06), 0 12px 32px rgba(15, 61, 46, 0.08)',
        lift: '0 8px 20px rgba(15, 61, 46, 0.10), 0 24px 60px rgba(15, 61, 46, 0.14)',
        ring: '0 0 0 1px rgba(15, 61, 46, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(4deg)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(18px) rotate(-3deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'float-slower': 'float-slower 12s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.24, 0, 0.38, 1) infinite',
        'gradient-pan': 'gradient-pan 14s ease infinite',
      },
    },
  },
  plugins: [],
}
