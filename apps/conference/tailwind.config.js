module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [
    'gatsby-plugin-postcss',
    '@tailwindcss/forms',
    '@tailwindcss/typography',
    '@tailwindcss/aspect-ratio',
  ],
}
