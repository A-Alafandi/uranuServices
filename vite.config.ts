// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    plugins: [react()],

    // Make "@/..." point to "src/..."
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },

    // Local dev server (tweak if you want)
    server: {
        host: true,   // allows LAN/devices to access
        port: 5173,
    },
    preview: {
        port: 4173,
    },

    // Build output tuned for modern browsers
    build: {
        target: "esnext",
        sourcemap: false,
        cssCodeSplit: true,
        rollupOptions: {
            treeshake: true,
            output: {
                // Put node_modules in separate chunks for better caching
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        if (id.includes("lucide-react")) return "icons";
                        return "vendor";
                    }
                },
                chunkFileNames: "assets/js/[name]-[hash].js",
                entryFileNames: "assets/js/[name]-[hash].js",
                assetFileNames: ({ name }) => {
                    if (/\.(css)$/.test(name ?? "")) return "assets/css/[name]-[hash][extname]";
                    if (/\.(woff2?|ttf|otf)$/.test(name ?? "")) return "assets/fonts/[name]-[hash][extname]";
                    if (/\.(png|jpe?g|webp|avif|svg|gif)$/.test(name ?? "")) return "assets/img/[name]-[hash][extname]";
                    return "assets/[name]-[hash][extname]";
                },
            },
        },
    },
});
