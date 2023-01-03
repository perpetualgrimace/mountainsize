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

<div class={`player ${tracklistOpen ? 'is-open' : 'is-closed'}`}>
	<!-- <p>current track: <b>{currTrack}</b> ({currTrack + 1} / {tracksCount})</p> -->

	<PlayerTracklist
		{currTrack}
		{isPlaying}
		{tracklistOpen}
		onTrackClick={handleTrackClick}
	/>

	<div class="player-outer">
		<div class="player-inner wrapper">
			<h2 class="u-font-md u-mb-0">Audio samples</h2>

			<dl class={`player-current${isPlaying ? ' is-playing' : ''}`}>
				<dt class="player-current-genre u-font-sm">
					{tracks[[currTrack]].genre} sample
				</dt>
				<dd class="player-current-song">
					{tracks[[currTrack]].artist} — “{tracks[[currTrack]].song}”
				</dd>
			</dl>

			<div class="player-controls">
				<button class="player-controls-button" on:click={handlePrev}>⏮</button>
				<button class="player-controls-button" on:click={togglePlay}
					>{isPlaying ? '⏸' : '▶️'}</button
				>
				<button class="player-controls-button" on:click={handleNext}>⏭</button>
			</div>

			<p>
				<button on:click={toggleTracklist}>
					{tracklistOpen ? 'hide' : 'show'} tracks
				</button>
			</p>
		</div>

		<audio
			class="player-audio"
			src={tracks[currTrack].src}
			bind:this={player}
			on:ended={handleNext}
		/>
	</div>
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

	.player:before {
		@include pseudo;
		@include absolute-expand;
		position: fixed;
		background-color: rgba($black, 0.75);
		transition: opacity 0.2s ease-out;
	}

	.player.is-closed:before {
		opacity: 0;
		top: 100%;
	}

	.player.is-closed .player-outer {
		border-top-left-radius: $radius-lg;
		border-top-right-radius: $radius-lg;
	}

	.player-inner:before {
		@include pseudo;
		position: fixed;
		bottom: 2.45rem;
		right: 0;
		left: 0;
		height: 1px;
		background-color: $black;
	}

	.player-outer {
		background: $dark;
	}

	.player-inner {
		height: 2.45rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
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
