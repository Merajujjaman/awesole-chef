/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#82a3e5",
        
"secondary": "#4f4dbc",
        
"accent": "#ce232b",
        
"neutral": "#26243D",
        
"base-100": "#FCFCFC",
        
"info": "#79D0F6",
        
"success": "#36DDB3",
        
"warning": "#FBDE51",
        
"error": "#F36881",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

