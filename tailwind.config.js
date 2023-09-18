import {Colors , FooterStyle} from "./src/style"

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      es: ['10px', '12px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },  
    extend: {} ,
    colors:Colors
  },
  plugins: [FooterStyle],
}