<script>
	import { globals } from 'svelte/internal';
</script>

<h1>Hi</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
	:global(:root) {
		--color: black;
		color: var(--color);
	}
</style>
