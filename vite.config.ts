import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })


export default defineConfig({
  //...,
  plugins: [
    tailwindcss(),
    vue()],
    resolve: {
      alias: [
          { find: "@", replacement: path.resolve(__dirname, "./src") }
      ]
  }
});