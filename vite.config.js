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
                showProduct: resolve(__dirname, '/pages/show-product.html'),
                weater: resolve(__dirname, '/pages/weater.html'),
                state: resolve(__dirname, '/pages/state.html'),
                introduction: resolve(__dirname, '/pages/introduction.html'),
                faqPage: resolve(__dirname, '/pages/faq.html'),
                archive: resolve(__dirname, '/pages/archive.html'),
                showPost: resolve(__dirname, '/pages/show-post.html'),
                checkList: resolve(__dirname, '/pages/show-post.html'),
                terms: resolve(__dirname, '/pages/terms.html'),
                aboutUs: resolve(__dirname, '/pages/about-us.html'),
                contactUs: resolve(__dirname, '/pages/contact-us.html'),
            }
        }
    },
}