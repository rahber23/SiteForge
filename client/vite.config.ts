//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'
//import tailwindcss from '@tailwindcss/vite'
//import path from "path"
//
//// https://vite.dev/config/
//export default defineConfig({
//  plugins: [react(), tailwindcss()],
//  resolve: ({
//    alias: {
//      "@": path.resolve(__dirname, "./src") 
//    }
//  })
//})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // This intercepts any request starting with /api/auth
      '/api/auth': {
        target: 'http://localhost:3000', // Your Backend Port
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src") 
    }
  }
})
