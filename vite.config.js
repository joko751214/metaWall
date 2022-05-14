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
    base: '/metaWall/',
    plugins: [vue()],
    // 本地反向代理，解決瀏覽器跨域限制
    server: {
      open: true, // 運行自動打開瀏覽器
      proxy: {
        '/api': {
          target: 'https://stormy-shelf-62914.herokuapp.com/',
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp('^' + '/api'), ''),
        },
      },
    },
  });
};
