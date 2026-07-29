import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vercel } from 'vite-plugin-vercel/vite'
import vike from 'vike/plugin'
// https://vitejs.dev/config/
export default defineConfig({
   plugins: [vike(), vercel(),react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
