<script>
	import PlayerAudio, {
		togglePlay,
		forcePlay
	} from '$lib/Player/PlayerAudio.svelte';
	import PlayerTracklist from '$lib/Player/PlayerTracklist.svelte';
	import tracks from '$lib/data/tracklist.json';

	const tracksCount = tracks.length;

	$: currTrack = 0;

	$: isPlaying = false;

	function handleNext() {
		currTrack === tracksCount - 1 ? (currTrack = 0) : (currTrack += 1);
		isPlaying = true;
		forcePlay();
	}

	function handlePrev() {
		currTrack === 0 ? (currTrack = tracksCount - 1) : (currTrack -= 1);
		isPlaying = true;
		forcePlay();
	}

	function handlePlayToggle() {
		togglePlay();
		isPlaying = !isPlaying;
	}

	function handleTrackClick(id) {
		currTrack = id;
		isPlaying = true;
		forcePlay();
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

	<PlayerAudio src={tracks[currTrack].src} {isPlaying} />
</div>

<style lang="scss" global>
</style>
