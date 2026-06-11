/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        saffron: { DEFAULT: '#EA580C', light: '#FB923C', dark: '#C2410C' },
        gold: { DEFAULT: '#D4A017', light: '#E8C25A', dark: '#A9810F' },
        royal: { DEFAULT: '#4C1D6B', light: '#6B2E96', dark: '#36134F' },
        sacred: '#FFF9F0',
        ink: '#2B1A2E',
      },
      fontFamily: {
        display: ['Marcellus', 'serif'],
        body: ['Mukta', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(212, 160, 23, 0.55)',
        'glow-saffron': '0 0 50px -10px rgba(234, 88, 12, 0.5)',
        lift: '0 24px 50px -20px rgba(76, 29, 107, 0.45)',
        glass: '0 8px 32px rgba(54, 19, 79, 0.18)',
      },
      backgroundImage: {
        'sunrise': 'linear-gradient(180deg, #4C1D6B 0%, #6B2E96 25%, #EA580C 65%, #FB923C 85%, #E8C25A 100%)',
        'gold-sheen': 'linear-gradient(120deg, #A9810F 0%, #D4A017 35%, #E8C25A 55%, #D4A017 75%, #A9810F 100%)',
        'saffron-fade': 'linear-gradient(135deg, #EA580C 0%, #FB923C 100%)',
        'royal-fade': 'linear-gradient(135deg, #36134F 0%, #4C1D6B 100%)',
      },
      keyframes: {
        'sun-rise': { '0%': { transform: 'translateY(40px) scale(0.9)', opacity: '0' }, '100%': { transform: 'translateY(0) scale(1)', opacity: '1' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        'float-slow': { '0%, 100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-22px) rotate(6deg)' } },
        shimmer: { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
        'pulse-ring': { '0%': { transform: 'scale(0.95)', opacity: '0.7' }, '70%, 100%': { transform: 'scale(1.6)', opacity: '0' } },
      },
      animation: {
        'sun-rise': 'sun-rise 1.4s ease-out forwards',
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        'pulse-ring': 'pulse-ring 2.2s cubic-bezier(0.4,0,0.2,1) infinite',
      },
    },
  },
  plugins: [],
}
