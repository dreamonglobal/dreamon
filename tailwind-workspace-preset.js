// tailwind-workspace-preset.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          'Helvetica Neue',
          'Arial',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          'Roboto',
          'Helvetica Neue',
          'Arial',
          ...defaultTheme.fontFamily.serif,
        ],
        mono: ['Consolas', 'Monaco', 'Andale Mono', 'monospace'],
        ...defaultTheme.fontFamily.mono,
      },
    },
  },
  variants: {
    extend: {},
  },
}
