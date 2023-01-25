import { defineConfig } from 'astro/config'
import prefetch from '@astrojs/prefetch'

// https://astro.build/config
// export default defineConfig = ({ mode }) => {
// 	console.log('⚓ ' + mode)
// 	return {
// 		base: mode === 'astro dev' ? '/' : '/astro-test/',
// 		integrations: [
// 			prefetch({
// 				selector: "a[href^='/']",
// 			}),
// 		],
// 	}
// }

export default defineConfig({
	site: 'https://spoon-inoue.github.io/astro-test/',
	integrations: [
		prefetch({
			selector: "a[href^='/']",
		}),
	],
})
