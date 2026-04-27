import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      bg: '#0d0d0d',
      surface: '#141414',
      surface2: '#1c1c1c',
      border: '#252525',
      text: '#f0ede8',
      grey: '#8a8680',
      accent: '#c8c4bc',
      slash: '#4a4845',
    },
    fontFamily: {
      syne: ['Syne', 'sans-serif'],
      mono: ['DM Mono', 'monospace'],
    },
    extend: {
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
