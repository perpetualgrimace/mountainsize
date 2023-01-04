<script>
	import tracks from '$lib/data/tracklist.json';

	export let currTrack, isPlaying, tracklistOpen, onTrackClick;
</script>

<div class={`tracklist is-${tracklistOpen ? 'open' : 'closed'}`}>
	<div class="tracklist-inner wrapper">
		<table class="tracklist-table u-font-sm">
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
						{isPlaying && currTrack === id ? '⏸' : '▶️'}
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
	</div>
</div>

<style lang="scss" global>
	.tracklist {
		@include box-shadow;
		position: absolute;
		bottom: 2.45rem;
		left: 0;
		right: 0;
		background-color: $dark;
		padding-top: $sp-md;
		padding-bottom: $sp-md;
		border-top-left-radius: $radius-lg;
		border-top-right-radius: $radius-lg;
		transition: opacity 0.2s ease-out, transform 0.2s ease-out;

		&.is-closed {
			opacity: 0;
			transform: translateY(100%);
			transform: translateY(calc(100% + 2.45rem));
		}
	}

	.tracklist-table {
		width: calc(100% + 2rem);
		margin-left: -1rem;
	}

	.tracklist-tr.is-selected td {
		background-color: $black;

		&.tracklist-controls {
			border-top-left-radius: 2rem;
			border-bottom-left-radius: 2rem;
		}
		&.tracklist-link {
			border-top-right-radius: 2rem;
			border-bottom-right-radius: 2rem;
		}
	}

	.tracklist-td {
		position: static;
		padding: 0.25rem;

		&.tracklist-controls {
			padding-left: 0.75rem;
			padding-right: 0;
		}
	}

	.tracklist-track-cover-button {
		@include absolute-expand;
	}
</style>
