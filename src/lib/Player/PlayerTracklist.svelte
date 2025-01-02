<script>
	import OutboundIcon from '$lib/Player/icons/OutboundIcon.svelte';
	import PauseIcon from '$lib/Player/icons/PauseIcon.svelte';
	import PlayIcon from '$lib/Player/icons/PlayIcon.svelte';

	export let tracks, currTrack, isPlaying, tracklistOpen, onTrackClick;
</script>

<div class={`tracklist is-${tracklistOpen ? 'open' : 'closed'}`}>
	<div class="tracklist-inner wrapper">
		<table class="tracklist-table u-font-sm">
			<thead class="tracklist-thead u-visually-hidden">
				<th class="tracklist-th">Genre</th>
				<th class="tracklist-th">Artist & song title</th>
				<th class="tracklist-th">Song length in minutes and seconds</th>
				<th class="tracklist-th">Year of release</th>
				<th class="tracklist-th">Artist link</th>
			</thead>

			{#each tracks as { id, genre, artist, song, length, year, link } (id)}
				<tr class={`tracklist-tr${currTrack === id ? ' is-selected' : ''}`}>
					<td class="tracklist-td tracklist-genre u-heading">
						<button
							class="tracklist-track-cover-button"
							on:click={() => onTrackClick(id)}
						>
							<span class="u-visually-hidden">Track {id + 1}</span>
						</button>
						{#if isPlaying && currTrack === id}
							<PauseIcon />
						{:else}
							<PlayIcon />
						{/if}
						{genre}
					</td>
					<td class="tracklist-td tracklist-details">
						{artist} <span class="tracklist-details-song"> — “{song}”</span>
					</td>
					<td class="tracklist-td tracklist-length">{length}</td>
					<td class="tracklist-td tracklist-year">{year}</td>
					<td class="tracklist-td tracklist-link">
						<a
							class="tracklist-link"
							href={`https://${link}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="tracklist-link-text is-mobile-only" aria-hidden>
								{artist}
							</span>
							<span class="tracklist-link-text">
								{link.indexOf('spotify') !== -1 ? 'open.spotify.com' : link}
							</span>
							<OutboundIcon />
						</a>
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
		max-height: calc(100vh - 2.45rem);
		overflow-y: auto;
		display: flex;
		padding-top: $sp-md;
		padding-bottom: $sp-md;
		background-color: rgba($dark, 0.975);
		border-top-left-radius: $radius-lg;
		border-top-right-radius: $radius-lg;
		transition: opacity 0.2s ease-out, transform 0.2s ease-out;

		&.is-closed {
			opacity: 0;
			transform: translateY(100%);
			transform: translateY(calc(100% + 2.45rem));
		}
	}

	// .tracklist-inner {
	// 	margin-top: auto;
	// }

	.tracklist-table {
		width: calc(100% + 2rem);
		margin-left: -1rem;
	}

	.tracklist-tr.is-selected td {
		background-color: $black;
	}
	.tracklist-tr.is-selected:hover td {
		background-color: rgba($black, 0.88);
	}
	.tracklist-tr:not(.is-selected):hover td,
	.tracklist-tr:not(.is-selected):focus-within td {
		background-color: rgba($cyan-dark, 0.1);
	}

	.tracklist-td {
		position: static;
		padding: 0.5rem 0.25rem;
		transition: background-color 0.3s ease-out;

		svg {
			transition: transform 0.15s ease-out;
		}
	}

	.tracklist-track-cover-button {
		@include absolute-expand;

		&:hover + svg,
		&:focus + svg {
			transform: scale(1.125);
		}
		&:active + svg {
			transform: none;
		}
	}

	.tracklist-genre {
		padding-left: 0.625rem;
		padding-right: 0;
		border-top-left-radius: 2rem;
		border-bottom-left-radius: 2rem;

		svg {
			top: -1px;
			pointer-events: none;
		}
	}

	.tracklist-link {
		border-top-right-radius: 2rem;
		border-bottom-right-radius: 2rem;
		padding: 0.75em 0.25em;
		text-decoration: none;

		&:hover,
		&:focus {
			.tracklist-link-text,
			.tracklist-link-text {
				text-decoration-color: $white;
			}
			svg {
				transform: scale(1.125);
			}
		}
	}
	.tracklist-link-text {
		text-decoration: underline;
		text-decoration-color: $sun-light;
		transition: text-decoration 0.15s ease-out;
	}

	.tracklist-length,
	.tracklist-year {
		@media (max-width: 799px) {
			@include visually-hidden;
		}
	}
	.tracklist-details-song {
		@media (max-width: 699px) {
			@include visually-hidden;
		}
	}
	.tracklist-details,
	.tracklist-link-text:not(.is-mobile-only) {
		@media (max-width: 599px) {
			@include visually-hidden;
		}
	}
	.tracklist-link-text.is-mobile-only {
		@media (min-width: 600px) {
			display: none;
		}
	}
</style>
