import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/adhoc-record.js',
      formats: ['es'],
    },
  }
})
