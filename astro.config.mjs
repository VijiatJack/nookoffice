import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	vite: {
		ssr: {
			noExternal: ["astro", "@astrojs/image"],
		},
	},
	output: "server",
	adapter: netlify(),
});
