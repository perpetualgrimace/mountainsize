<script>
	import Hero from '$lib/Hero/index.svelte';
	import Player, { togglePlay } from '$lib/Player.svelte';
	import tracks from '$lib/data/tracklist.json';

	const tracksCount = tracks.length;

	$: currSrc = 0;

	function handleNext() {
		currSrc === tracksCount - 1 ? (currSrc = 0) : (currSrc += 1);
	}

	function handlePrev() {
		currSrc === 0 ? (currSrc = tracksCount - 1) : (currSrc -= 1);
	}
</script>

<Hero><h1>player test</h1></Hero>

<div class="wrapper">
	<button on:click={handlePrev}>⏮</button>
	<button on:click={togglePlay}>⏯</button>
	<button on:click={handleNext}>⏭</button>

	<p>current track: <b>{currSrc}</b> ({currSrc + 1} / {tracksCount})</p>

	<Player src={tracks[currSrc].src} />
</div>
