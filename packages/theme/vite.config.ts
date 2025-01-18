import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	resolve: {
		alias: {
			"@src": resolve(__dirname, "./src"),
		},
	},
	build: {
		outDir: "dist",
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "index",
			fileName: "index",
		},
		rollupOptions: {
			external: [],
			output: {
				globals: {},
			},
		},
	},
});
