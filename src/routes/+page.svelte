<script>
	import Hero from '$lib/Hero/index.svelte';
	import HeroHeadline from '$lib/Hero/HeroHeadline.svelte';
	import HeroParagraph from '$lib/Hero/HeroParagraph.svelte';

	import Diptych from '$lib/Diptych.svelte';
	import Artillery from '$lib/Artillery.svelte';
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
	<Diptych />
	<Artillery heading="heading" subhead="subhead">
		<p>hi</p>
	</Artillery>

	<Artillery heading="heading" subhead="subhead first" subheadAbove showButton>
		<p>hi</p>
	</Artillery>
</main>

<style lang="scss" global>
</style>
