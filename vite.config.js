import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'cultures-object-taught-assured.trycloudflare.com',
      'reaching-somerset-remote-illustrated.trycloudflare.com',
      'macro-marking-noon-length.trycloudflare.com',
    ]
  }
})
