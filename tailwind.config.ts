import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Instrument Serif', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        background: '#fffdf5',
        ink: '#062d1f',
        bark: '#17492e',
        leaf: '#6b8f2a',
        moss: '#b7cc8a',
        cream: '#f6f1df',
        mist: '#edf3e6'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(6,45,31,.18)',
        glow: '0 0 60px rgba(125, 160, 72, .28)',
        dashboard: '0 25px 80px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.06)'
      }
    }
  },
  plugins: []
} satisfies Config;
