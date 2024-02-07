import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

export default {
    plugins: [
        Inspect(),
    ],
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, '/index.html'),
                notFound: resolve(__dirname, '/pages/not-found.html'),
                productList: resolve(__dirname, '/pages/product-list.html'),
            }
        }
    },
}