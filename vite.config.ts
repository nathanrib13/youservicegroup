import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Nome do repositorio no GitHub, usado como base path no GitHub Pages.
const REPO = 'youservicegroup'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${REPO}/` : '/',
  plugins: [react()],
  server: {
    port: 5173,
  },
}))
