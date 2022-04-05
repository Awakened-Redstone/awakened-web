import { defineConfig } from "vite";
import { resolve } from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    minify: 'esbuild',
    outDir: "build",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mods: resolve(__dirname, 'mods/index.html')
      }
    }
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443 // Run the websocket server on the SSL port
    }
  }
});
