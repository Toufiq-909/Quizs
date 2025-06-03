import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    allowedHosts: [
      '0835-2405-201-c056-3033-6c3e-c803-1e2e-4bfc.ngrok-free.app',
        "9419-2405-201-c056-3033-6c3e-c803-1e2e-4bfc.ngrok-free.app"
    ]
  }
})
