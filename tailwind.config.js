/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './entrypoints/**/*.{ts,tsx}',  // Includes TypeScript and TSX files
    './entrypoints/content/style.css', // Includes your custom CSS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
