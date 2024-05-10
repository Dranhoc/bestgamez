import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    react(),
    replace({
      'process.env.REACT_APP_MY_KEY': JSON.stringify(process.env.REACT_APP_MY_KEY),
      preventAssignment: true,
    }),
  ],
  build: {
    assetsInlineLimit: 0, // Permet d'inclure toutes les images dans le bundle
  },
});