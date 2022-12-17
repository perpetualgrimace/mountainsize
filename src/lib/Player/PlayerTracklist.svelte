<script>
	import tracks from '$lib/data/tracklist.json';

	export let tracklistOpen = false;

	export let onTrackClick;
</script>

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
					on:click={() => onTrackClick(id)}
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
