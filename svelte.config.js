import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';

const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: `@import './src/styles/_global-imports.scss';`
			}
		}),
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;
