// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            '@': path.resolve(import.meta.dirname, './src'),
        },
    },

    server: {
        port: 3000,           // Đổi port mặc định 5173 → 3000
        open: true,           // Tự mở browser khi npm run dev
        host: true,           // Cho phép truy cập từ máy khác trong LAN (mobile test)

        proxy: {
            // Mọi request /api/* sẽ được proxy sang backend, tránh CORS khi dev
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, ''), // bật nếu BE không có prefix /api
            },
        },
    },

    build: {
        outDir: 'dist',
        sourcemap: false,     // Production tắt cho gọn, dev tự bật
    },
});