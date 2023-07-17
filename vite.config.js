import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [
    laravel({
        input: ['resources/sass/styles.scss', 'resources/js/main.js'],
        refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  module: {
    rules: [
      // ...
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
      '@components': fileURLToPath(new URL('./resources/js/components', import.meta.url)),
      '@img': fileURLToPath(new URL('./resources/img', import.meta.url)),
      '@sass': fileURLToPath(new URL('./resources/sass', import.meta.url)),
      '@css': fileURLToPath(new URL('./resources/css', import.meta.url)),
      '@svg': fileURLToPath(new URL('./resources/svg', import.meta.url)),
    },
  },
});

