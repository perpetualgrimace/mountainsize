<script>
	import Meta from '$lib/Meta.svelte';

	import Mic from '$lib/Mic.svelte';
	import BulletList from '$lib/BulletList.svelte';

	import ReleasesHero from '$lib/ReleasesHero.svelte';
	import ReleasesNav from '$lib/ReleasesNav.svelte';

	export let data;

	const { releases } = data;
	const releaseCount = releases.length - 1;
	const releasesSorted = releases.reverse();
</script>

<Meta title={`Mountainsize release: ${data.d.title}`} />

<ReleasesHero data={data.d} />

<main class="wrapper release-wrapper">
	<svelte:component this={data.content} />

	<!-- TODO: testimonial -->

	<ReleasesNav
		newerRelease={releasesSorted[data.d.id + 1]?.meta}
		olderRelease={releasesSorted[data.d.id - 1]?.meta}
		oldestRelease={releasesSorted[0].meta}
		newestRelease={releasesSorted[releaseCount].meta}
	/>

	<Mic heading="Sound good?" showButton imgSlug="james-outside">
		<p>Join the roster of those who trust me with their art!</p>
	</Mic>
</main>

<!-- <STYLE> found in 4-layout/_releases because svelte, mdsvex, & sass don't play well together -->
