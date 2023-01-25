import { defineConfig } from 'astro/config'
import prefetch from '@astrojs/prefetch'

export default defineConfig({
	site: 'https://spoon-inoue.github.io',
	base: '/astro-test',
	integrations: [
		prefetch({
			selector: "a[href^='/']",
		}),
	],
})
