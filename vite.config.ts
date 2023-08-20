import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@domain', replacement: path.resolve(__dirname, 'src/domain') },
      { find: '@infrastructure', replacement: path.resolve(__dirname, 'src/data') },
      { find: '@application', replacement: path.resolve(__dirname, 'src/useCases') },
      { find: '@presentation', replacement: path.resolve(__dirname, 'src/presentation') }
    ]
  }
})
