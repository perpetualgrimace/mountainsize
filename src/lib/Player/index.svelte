<script>
	import PlayerAudio, { togglePlay } from '$lib/Player/PlayerAudio.svelte';
	import PlayerTracklist from '$lib/Player/PlayerTracklist.svelte';
	import tracks from '$lib/data/tracklist.json';

	const tracksCount = tracks.length;

	$: currSrc = 0;

	function handleNext() {
		currSrc === tracksCount - 1 ? (currSrc = 0) : (currSrc += 1);
	}

	function handlePrev() {
		currSrc === 0 ? (currSrc = tracksCount - 1) : (currSrc -= 1);
	}

	function handleTrackClick(id) {
		currSrc = id;
	}

	$: tracklistOpen = false;

	function toggleTracklist() {
		tracklistOpen = !tracklistOpen;
	}
</script>

<div class="player">
	<PlayerTracklist {tracklistOpen} onTrackClick={handleTrackClick} />

	<button on:click={handlePrev}>⏮</button>
	<button on:click={togglePlay}>⏯</button>
	<button on:click={handleNext}>⏭</button>

	<p>current track: <b>{currSrc}</b> ({currSrc + 1} / {tracksCount})</p>

	<p>
		<button on:click={toggleTracklist}>
			{tracklistOpen ? 'hide' : 'show'} tracks
		</button>
	</p>

	<PlayerAudio src={tracks[currSrc].src} />
</div>

<style lang="scss" global>
	.tracklist-closed {
		display: none;
	}

	.player-td {
		position: static;
	}

	.player-track-cover-button {
		@include absolute-expand;
	}
</style>
