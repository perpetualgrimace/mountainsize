<script>
	import tracks from '$lib/data/tracklist.json';

	export let currTrack, tracklistOpen, onTrackClick;
</script>

<table
	class={`tracklist-table u-font-sm is-${tracklistOpen ? 'open' : 'closed'}`}
>
	<thead class="tracklist-thead u-visually-hidden">
		<th class="tracklist-th">Play status</th>
		<th class="tracklist-th">Genre</th>
		<th class="tracklist-th">Artist & song title</th>
		<th class="tracklist-th">Song length in minutes and seconds</th>
		<th class="tracklist-th">Year of release</th>
		<th class="tracklist-th">Artist link</th>
	</thead>

	{#each tracks as { id, genre, artist, song, length, year, link } (id)}
		<tr class={`tracklist-tr${currTrack === id ? ' is-selected' : ''}`}>
			<td class="tracklist-td tracklist-controls">
				<button
					class="tracklist-track-cover-button"
					on:click={() => onTrackClick(id)}
				>
					<span class="u-visually-hidden">Track {id + 1}</span>
				</button>
				⏯
			</td>
			<td class="tracklist-td tracklist-genre">{genre}</td>
			<td class="tracklist-td tracklist-details">{artist} — “{song}”</td>
			<td class="tracklist-td tracklist-length">{length}</td>
			<td class="tracklist-td tracklist-year">{year}</td>
			<td class="tracklist-td tracklist-link">
				<a class="tracklist-link" href={`https://${link}`}>{link}</a>
			</td>
		</tr>
	{/each}
</table>

<style lang="scss" global>
	.tracklist-table.is-closed {
		display: none;
	}

	.tracklist-tr.is-selected {
		background: $dark;
	}

	.tracklist-td {
		position: static;
	}

	.tracklist-track-cover-button {
		@include absolute-expand;
	}
</style>
