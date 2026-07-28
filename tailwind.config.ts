import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0a0a0f',
        charcoalDeep: '#05060a',
        midnight: '#111827',
        gold: '#d4af37',
        cream: '#f3e5ab',
        muted: '#a1a1aa',
        glow: '#ffd976'
      },
      boxShadow: {
        glow: '0 0 30px rgba(212, 175, 55, 0.25)',
        panel: '0 40px 120px -40px rgba(0, 0, 0, 0.75)',
        insetGold: 'inset 0 0 40px rgba(212, 175, 55, 0.18)'
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at top left, rgba(212,175,55,.12), transparent 24%), radial-gradient(circle at bottom right, rgba(243,229,171,.08), transparent 25%)'
      }
    }
  },
  plugins: []
};

export default config;
