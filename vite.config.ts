import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O site e servido no dominio proprio youservicegroup.com.br (raiz),
// nao mais no sub-path do GitHub Pages (github.io/youservicegroup/).
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 5173,
  },
})
