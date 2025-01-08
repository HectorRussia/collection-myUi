/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      colors: {
        garden: {
          primary: "#a991f7",
          secondary: "#57ff03",  
          accent: "#37cdbe",
          neutral: "#3d4451",
        },
        dark: {
          primary: "#292524", 
          secondary: "#EC4899",
          accent: "#F59E0B",
          neutral: "#1a1b1e", 
        },
      },
  }
 },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    mythemes: [
      {
        garden: {
          "primary": "#a991f7", 
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff", 
        },
      },
      {
        dark: {
          "primary": "#292524", 
          "secondary": "#EC4899",
          "accent": "#F59E0B",
          "neutral": "#1a1b1e", 
          "base-100": "#121212", 
        },
      },
    ],
    themes: ["garden", "dark"]
  },
}

