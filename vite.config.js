import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  base: "/ACME/",
  publicDir: "public",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nousAcme: resolve(__dirname, "pages/nous-acme.html"),
        services: resolve(__dirname, "pages/services.html"),
        contacts: resolve(__dirname, "pages/contacts.html")
      }
    }
  },
  server: {
    port: 5173
  }
});
