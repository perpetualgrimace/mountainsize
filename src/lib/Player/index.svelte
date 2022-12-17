<script>
	import PlayerAudio, { togglePlay } from '$lib/Player/PlayerAudio.svelte';
	import PlayerTracklist from '$lib/Player/PlayerTracklist.svelte';
	import tracks from '$lib/data/tracklist.json';

	const tracksCount = tracks.length;

	$: currTrack = 0;

	function handleNext() {
		currTrack === tracksCount - 1 ? (currTrack = 0) : (currTrack += 1);
	}

	function handlePrev() {
		currTrack === 0 ? (currTrack = tracksCount - 1) : (currTrack -= 1);
	}

	function handleTrackClick(id) {
		currTrack = id;
	}

	$: tracklistOpen = false;

	function toggleTracklist() {
		tracklistOpen = !tracklistOpen;
	}
</script>

<div class="player">
	<PlayerTracklist
		{currTrack}
		{tracklistOpen}
		onTrackClick={handleTrackClick}
	/>

	<button on:click={handlePrev}>⏮</button>
	<button on:click={togglePlay}>⏯</button>
	<button on:click={handleNext}>⏭</button>

	<p>current track: <b>{currTrack}</b> ({currTrack + 1} / {tracksCount})</p>

	<p>
		<button on:click={toggleTracklist}>
			{tracklistOpen ? 'hide' : 'show'} tracks
		</button>
	</p>

	<PlayerAudio src={tracks[currTrack].src} />
</div>

<style lang="scss" global>
</style>
