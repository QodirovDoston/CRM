import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    testMatch: ['./tests/**/*.test.tsx'],
    globals: true
  },
  server:{
    host:'0.0.0.0',
    port:3000
  },
  define: {
    'import.meta.env.VITE_API_URL': process.env.VITE_API_URL
  }
})

