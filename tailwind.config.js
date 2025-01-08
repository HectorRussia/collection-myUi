/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'yellow' : '#f5f242',
      'black' : '#1c1c1b'
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    mythemes: [
      {
        light: {
          "primary": "#4F46E5", 
          "secondary": "#E11D48", 
          "accent": "#FBBF24",
        },
      },
      {
        dark: {
          "primary": "#292524", 
          "secondary": "#EC4899",
          "accent": "#F59E0B",
        },
      },
    ],
    themes: ["light", "dark"]
  },
}

