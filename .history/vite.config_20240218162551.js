import Inspect from "vite-plugin-inspect";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/chadeganV2/v2/",
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "/index.html"),
        notFound: resolve(__dirname, "/not-found.html"),
        productList: resolve(__dirname, "/product-list.html"),
        showProduct: resolve(__dirname, "/show-product.html"),
        weater: resolve(__dirname, "/weater.html"),
        state: resolve(__dirname, "/state.html"),
        introduction: resolve(__dirname, "/introduction.html"),
        faqPage: resolve(__dirname, "/faq.html"),
        archive: resolve(__dirname, "/archive.html"),
        showPost: resolve(__dirname, "/show-post.html"),
        checkList: resolve(__dirname, "/check-list.html"),
        terms: resolve(__dirname, "/terms.html"),
        aboutUs: resolve(__dirname, "/about-us.html"),
        contactUs: resolve(__dirname, "/contact-us.html"),
        guestGuide: resolve(__dirname, "/guest-guide.html"),
        beach: resolve(__dirname, "/beach.html"),
        nomads: resolve(__dirname, "/nomads.html"),
        butcherShop: resolve(__dirname, "/butcher-shop.html"),
        bakery: resolve(__dirname, "/bakery.html"),
        boating: resolve(__dirname, "/boating.html"),
        artificialGrass: resolve(__dirname, "/artificial_grass.html"),
        restaurant: resolve(__dirname, "/restaurant.html"),
        petrolStation: resolve(__dirname, "/petrol_station.html"),
        bowling: resolve(__dirname, "/bowling.html"),
      },
    },
  },
});
