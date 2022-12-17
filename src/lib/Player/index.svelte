<script>
	import PlayerTracklist from '$lib/Player/PlayerTracklist.svelte';
	import tracks from '$lib/data/tracklist.json';

	let player;
	const tracksCount = tracks.length;

	$: currTrack = 0;
	$: isPlaying = false;
	$: tracklistOpen = false;

	function togglePlay() {
		if (player.paused) {
			isPlaying = true;
			player.play();
		} else {
			isPlaying = false;
			player.pause();
		}
	}

	function forcePlay() {
		isPlaying = true;
		setTimeout(() => player.play(), 20);
	}

	function handleNext() {
		currTrack === tracksCount - 1 ? (currTrack = 0) : (currTrack += 1);
		forcePlay();
	}

	function handlePrev() {
		currTrack === 0 ? (currTrack = tracksCount - 1) : (currTrack -= 1);
		forcePlay();
	}

	function handleTrackClick(id) {
		if (currTrack === id) togglePlay();
		else {
			currTrack = id;
			forcePlay();
		}
	}

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
	<button on:click={togglePlay}>{isPlaying ? '⏸' : '▶️'}</button>
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
