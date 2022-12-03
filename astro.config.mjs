import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		partytown({
			// Adds dataLayer.push as a forwarding-event.
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
	vite: {
		ssr: {
			noExternal: ["astro", "@astrojs/image"],
		},
	},
	output: "server",
	adapter: netlify(),
});

