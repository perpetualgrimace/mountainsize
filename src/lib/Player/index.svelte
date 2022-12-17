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
		isPlaying = false; // reset animation timer

		setTimeout(() => {
			player.play();
			isPlaying = true;
		}, 20);
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

	<h2>Audio samples</h2>

	<dl class={`player-current${isPlaying ? ' is-playing' : ''}`}>
		<dt class="player-current-genre u-font-sm">
			{tracks[[currTrack]].genre} sample
		</dt>
		<dd class="player-current-song">
			{tracks[[currTrack]].artist} — “{tracks[[currTrack]].song}”
		</dd>
	</dl>

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
	@keyframes songInOut {
		0% {
			opacity: 0;
			transform: translateY(10px);
		}
		7% {
			opacity: 1;
			transform: none;
		}
		73% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	.player-audio {
		display: none;
	}

	.player-current {
		opacity: 0;
		background: $black;

		&.is-playing {
			animation: songInOut 3s ease-in-out;

			.player-current-song {
				animation: songInOut 5s ease-in-out;
			}
		}
	}
</style>
