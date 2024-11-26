import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Enable SPA fallback for client-side routing
    historyApiFallback: true
  },
  preview: {
    // Also enable for preview server
    historyApiFallback: true
  }
});