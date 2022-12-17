<script>
	import PlayerTracklist from '$lib/Player/PlayerTracklist.svelte';
	import tracks from '$lib/data/tracklist.json';

	let player;

	function togglePlay() {
		player.paused ? player.play() : player.pause();
	}
	function forcePlay() {
		setTimeout(() => {
			player.play();
		}, 20);
	}

	const tracksCount = tracks.length;

	$: currTrack = 0;

	$: isPlaying = false;

	function handleNext() {
		currTrack === tracksCount - 1 ? (currTrack = 0) : (currTrack += 1);
		if (isPlaying) forcePlay();
	}

	function handlePrev() {
		currTrack === 0 ? (currTrack = tracksCount - 1) : (currTrack -= 1);
		if (isPlaying) forcePlay();
	}

	function handlePlayToggle() {
		togglePlay();
		isPlaying = !isPlaying;
	}

	function handleTrackClick(id) {
		currTrack = id;
		if (isPlaying) forcePlay();
	}

	$: tracklistOpen = false;

	function toggleTracklist() {
		tracklistOpen = !tracklistOpen;
	}
</script>

<div class="player">
	<!-- <p>current track: <b>{currTrack}</b> ({currTrack + 1} / {tracksCount})</p> -->

	<PlayerTracklist
		{currTrack}
		{isPlaying}
		{tracklistOpen}
		onTrackClick={handleTrackClick}
	/>

	<button on:click={handlePrev}>⏮</button>
	<button on:click={handlePlayToggle}>{isPlaying ? '⏸' : '▶️'}</button>
	<button on:click={handleNext}>⏭</button>

	<p>
		<button on:click={toggleTracklist}>
			{tracklistOpen ? 'hide' : 'show'} tracks
		</button>
	</p>

	<audio class="player-audio" bind:this={player} src={tracks[currTrack].src} />
</div>

<style global lang="scss">
	.player-audio {
		display: none;
	}
</style>
