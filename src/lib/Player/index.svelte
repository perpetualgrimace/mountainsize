<script>
	import PlayerAudio, { togglePlay } from '$lib/Player/PlayerAudio.svelte';
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
	<table
		class={`player-table u-font-sm tracklist-${
			tracklistOpen ? 'open' : 'closed'
		}`}
	>
		<thead class="player-thead u-visually-hidden">
			<th class="player-th">Play status</th>
			<th class="player-th">Genre</th>
			<th class="player-th">Artist & song title</th>
			<th class="player-th">Song length in minutes and seconds</th>
			<th class="player-th">Year of release</th>
			<th class="player-th">Artist link</th>
		</thead>

		{#each tracks as { id, genre, artist, song, length, year, link } (id)}
			<tr class="player-tr">
				<td class="player-td player-controls">
					<button
						class="player-track-cover-button"
						on:click={() => handleTrackClick(id)}
					>
						<span class="u-visually-hidden">Track {id + 1}</span>
					</button>
					⏯
				</td>
				<td class="player-td player-genre">{genre}</td>
				<td class="player-td player-details">{artist} — “{song}”</td>
				<td class="player-td player-length">{length}</td>
				<td class="player-td player-year">{year}</td>
				<td class="player-td player-link">
					<a class="player-link" href={`https://${link}`}>{link}</a>
				</td>
			</tr>
		{/each}
	</table>

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
