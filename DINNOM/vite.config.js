import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: mode === 'development'
      ? {
          '/api': {
            target: 'http://127.0.0.1:5050',
            changeOrigin: true,
          },
        }
      : undefined, // No proxy in production — Vercel handles it
  },
}));
