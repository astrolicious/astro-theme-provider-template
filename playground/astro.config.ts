import { defineConfig } from "astro/config";
import MyTheme from "my-theme";

export default defineConfig({
	integrations: [
		MyTheme({
			config: {
				title: "My Awesome Theme",
				description: "My awesome theme is currently under construction!",
			},
		}),
	],
});
