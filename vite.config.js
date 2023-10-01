import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import minify from "vite-plugin-minify";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
