import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	vite: {
		ssr: {
			noExternal: ["astro", "@astrojs/image"],
		},
	},
	output: "server",
	adapter: vercel(),
});

