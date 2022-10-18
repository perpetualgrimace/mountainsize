<script>
	import Hero from '$lib/Hero/index.svelte';
	import HeroHeadline from '$lib/Hero/HeroHeadline.svelte';
	import HeroParagraph from '$lib/Hero/HeroParagraph.svelte';
</script>

<Hero>
	<HeroHeadline>
		<span class="u-cyan-light-color">Larger than life</span> sounds
		<br />made in
		<span class="u-cyan-light-color">Asheville NC</span>
	</HeroHeadline>
	<HeroParagraph>
		Asheville is more than pretty views and good food.
	</HeroParagraph>
	<HeroParagraph>
		Together, we'll make music so big it can't be ignored.
	</HeroParagraph>
</Hero>

<main class="wrapper">
	<p>
		Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>
</main>

<style lang="scss" global>
</style>
