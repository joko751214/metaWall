import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    resolve: {
      // 路徑別名設置
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [vue()],
    // 本地反向代理，解決瀏覽器跨域限制
    server: {
      host: 'localhost',
      port: Number(env.VITE_APP_PORT),
      open: true, // 運行自動打開瀏覽器
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
        },
      },
    },
  });
};
