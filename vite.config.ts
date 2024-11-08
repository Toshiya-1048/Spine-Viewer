import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  assetsInclude: ['**/*.atlas'],
  server: {
    watch: {
      usePolling: true,
    },
  },
  publicDir: 'public',
  build: {
    target: 'esnext',
    modulePreload: false,
  },
});