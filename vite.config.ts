import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Split the three heavy, independently-cacheable deps out of the app
        // chunk. They change far less often than portfolio content, so a copy
        // edit no longer invalidates ~all of the user's cached JS.
        manualChunks: {
          react: ['react', 'react-dom'],
          firebase: ['firebase/app', 'firebase/firestore'],
          motion: ['framer-motion'],
          particles: ['@tsparticles/react', '@tsparticles/slim'],
        },
      },
    },
  }
})
