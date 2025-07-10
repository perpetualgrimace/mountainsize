<script>
	import Hero from '$lib/Hero/index.svelte';
	import HeroHeadline from '$lib/Hero/HeroHeadline.svelte';
	import HeroParagraph from '$lib/Hero/HeroParagraph.svelte';

	import Button from '$lib/Button.svelte';

	export let data;
</script>

<Hero imgSlug="discography-hero" pageSlug="release">
	<HeroHeadline>{data.title}</HeroHeadline>
	<HeroParagraph>
		{data.genre}
		{data.type} released in {data.released} by
		{#if data.artistUrl}
			<a href={data.artistUrl}>{data.artist}</a>
		{:else}
			{data.artist}
		{/if}
	</HeroParagraph>
	<HeroParagraph>
		{#if data.bandcamp}
			<Button href={data.bandcamp}>
				<span class="u-visually-hidden">Listen on </span>Bandcamp
			</Button>
		{/if}
		{#if data.spotify}
			<Button href={data.spotify}>
				<span class="u-visually-hidden">Listen on </span>Spotify
			</Button>
		{/if}
	</HeroParagraph>
</Hero>
