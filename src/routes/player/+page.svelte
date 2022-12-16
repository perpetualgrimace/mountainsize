<script>
	import Hero from '$lib/Hero/index.svelte';
	import Player, { togglePlay } from '$lib/Player.svelte';

	let tracks = [
		'https://sveltejs.github.io/assets/music/strauss.mp3',
		'https://sveltejs.github.io/assets/music/holst.mp3',
		'https://sveltejs.github.io/assets/music/satie.mp3'
	];

	const tracksCount = tracks.length;

	$: currSrc = 0;

	function handleNext() {
		currSrc += 1;

		if (currSrc > tracksCount - 1) {
			currSrc = 0;
		}
	}
	function handlePrev() {
		currSrc -= 1;

		if (currSrc < 0) {
			currSrc = tracksCount - 1;
		}
	}
</script>

<Hero><h1>player test</h1></Hero>

<div class="wrapper">
	<button on:click={handlePrev}>⏮</button>
	<button on:click={togglePlay}>⏯</button>
	<button on:click={handleNext}>⏭</button>

	<p>current track: <b>{currSrc}</b> ({currSrc + 1} / {tracksCount})</p>

	<Player src={tracks[currSrc]} />
</div>
