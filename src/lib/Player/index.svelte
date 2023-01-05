<script>
	import ChevronDownIcon from '$lib/Player/icons/ChevronDownIcon.svelte';
	import NextIcon from '$lib/Player/icons/NextIcon.svelte';
	import PauseIcon from '$lib/Player/icons/PauseIcon.svelte';
	import PlayIcon from '$lib/Player/icons/PlayIcon.svelte';
	import PrevIcon from '$lib/Player/icons/PrevIcon.svelte';

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
		{tracks}
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
					<span class="u-heading">{tracks[[currTrack]].artist} </span>
					<span class="player-current-song-title">
						— “{tracks[[currTrack]].song}”
					</span>
				</dd>
			</dl>

			<div class="player-controls">
				<button
					class="player-controls-button player-controls-prev-button"
					on:click={handlePrev}
				>
					<PrevIcon />
				</button>
				<button
					class="player-controls-button player-controls-play-button"
					on:click={togglePlay}
				>
					{#if isPlaying} <PauseIcon /> {:else} <PlayIcon /> {/if}
				</button>
				<button
					class="player-controls-button player-controls-next-button"
					on:click={handleNext}
				>
					<NextIcon />
				</button>
			</div>

			<button
				on:click={toggleTracklist}
				class="player-toggle-button u-subhead u-font-sm"
			>
				<span class="player-toggle-button-text">
					{tracklistOpen ? 'hide ' : 'show '}
				</span>
				tracks <ChevronDownIcon />
			</button>
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
	@keyframes songIn {
		0% {
			opacity: 0;
			transform: translateY(10px);
		}
		7% {
			opacity: 1;
			transform: none;
		}
	}

	// .player:before {
	// 	@include pseudo;
	// 	@include absolute-expand;
	// 	position: fixed;
	// 	background-color: rgba($black, 0.75);
	// 	transition: opacity 0.2s ease-out;
	// }

	// .player.is-closed:before {
	// 	opacity: 0;
	// 	top: 100%;
	// }

	.player.is-closed .player-outer {
		border-top-left-radius: $radius-lg;
		border-top-right-radius: $radius-lg;
	}

	.player-outer {
		background: $dark;
	}

	.player-inner {
		height: 2.45rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		&:before {
			@include pseudo;
			position: fixed;
			bottom: 2.45rem;
			right: 0;
			left: 0;
			height: 1px;
			background-color: $black;
		}

		svg {
			width: 100%;
			height: auto;
			transition: transform 0.1s ease-out;
		}

		button:hover svg,
		button:focus svg {
			transform: scale(1.1);
		}
	}
	.player.is-closed .player-toggle-button svg {
		transform: rotate(180deg);
	}
	.player.is-closed .player-toggle-button:hover svg,
	.player.is-closed .player-toggle-button:focus svg {
		transform: rotate(180deg) scale(1.175);
	}

	.player-current {
		position: absolute;
		opacity: 0;
		background: $dark;
		z-index: 1;

		&.is-playing {
			animation: songIn 3s ease-in-out;
			opacity: 1;

			.player-current-song {
				animation: songIn 5s ease-in-out;
				opacity: 1;
			}
		}
	}
	.player-current-genre {
		margin-top: 0.125rem;
		margin-bottom: -0.25rem;
		min-width: 10rem;
	}
	.player-controls {
		@include absolute-center;
		z-index: 1;
	}
	.player-controls-button {
		padding: 0.25rem;

		@media (min-width: 500px) {
			&:not(:last-child) {
				margin-right: $sp-xs;
			}
		}
	}
	.player-controls-prev-button,
	.player-controls-next-button {
		width: 1.5rem;
	}
	.player-controls-play-button {
		width: 1.75rem;
		height: 1.75rem;
		background-color: $cyan-light;
		border-radius: 50%;

		path {
			fill: $dark;
		}
	}

	.player-toggle-button svg {
		width: 2em;
		top: -1px;
	}
	.player-toggle-button:hover svg,
	.player-toggle-button:focus svg {
		transform: scale(1.25);
	}

	@media (max-width: 699px) {
		.player-current-song-title {
			@include visually-hidden;
		}
	}
	@media (max-width: 499px) {
		.player-toggle-button-text,
		.player-current {
			@include visually-hidden;
		}
	}
</style>
