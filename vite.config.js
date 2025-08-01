import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: Set the base to your GitHub repo name if deploying to GitHub Pages, e.g. '/twos-company/'.
export default defineConfig({
  plugins: [react()],
  base: '/twos-company/',
});