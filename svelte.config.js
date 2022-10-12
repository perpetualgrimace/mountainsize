import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';

const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;
