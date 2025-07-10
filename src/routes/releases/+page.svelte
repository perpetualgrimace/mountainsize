<script>
	import Meta from '$lib/Meta.svelte';

	import Hero from '$lib/Hero/index.svelte';
	import HeroHeadline from '$lib/Hero/HeroHeadline.svelte';
	import HeroParagraph from '$lib/Hero/HeroParagraph.svelte';

	import Gallery from '$lib/Gallery/index.svelte';

	import Mic from '$lib/Mic.svelte';
	import BulletList from '$lib/BulletList.svelte';

	export let data;
	const releases = data.releases.map((a) => a.meta);
	releases.map((release) => (release.href = `/releases/${release.slug}`));
</script>

<Meta title="Mountainsize releases" />

<Hero imgSlug="discography-hero">
	<HeroHeadline>Releases</HeroHeadline>
	<HeroParagraph>Highlights from the discography</HeroParagraph>
</Hero>

<main class="wrapper releases-wrapper">
	<Gallery slug="releases" items={releases} appendThumb={false} />

	<Mic heading="Sound good?" showButton imgSlug="james-outside">
		<p>Why not join the roster of those who trust me with their art?</p>
	</Mic>
</main>

<style lang="scss" global>
	.releases-wrapper .gallery-item {
		@media (min-width: 666px) {
			flex: 0 1 calc(25% - 4px);
		}
	}
	.releases-wrapper .gallery-img {
		@include scale-on-hover(1.0375);
	}
</style>
