import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@root': resolve(__dirname, './src'),
            '@components': resolve(__dirname, './src/components'),
            '@pages': resolve(__dirname, './src/pages'),
            '@helpers': resolve(__dirname, './src/helpers'),
            '@assets': resolve(__dirname, './src/assets'),
            '@context': resolve(__dirname, './src/context'),
            '@hooks': resolve(__dirname, './src/hooks'),
            '@layout': resolve(__dirname, './src/layout'),
        },
    },
  plugins: [react()],
})
