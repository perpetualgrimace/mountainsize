<script>
	export let newerRelease, olderRelease, newestRelease, oldestRelease;
</script>

<nav>
	{#if newerRelease}
		<h2 class="u-font-lg u-mb-0">Newer release:</h2>
		<a href={`./${newerRelease.slug}`}>
			{newerRelease.title} by {newerRelease.artist}
		</a>
	{:else}
		<h2 class="u-font-lg u-mb-0">Oldest release:</h2>
		<a href={`./${oldestRelease.slug}`}>
			{oldestRelease.title} by {oldestRelease.artist}
		</a>
	{/if}

	<h2 class="u-font-lg u-mb-0">All releases:</h2>
	<a href="./">All releases</a>

	{#if olderRelease}
		<h2 class="u-font-lg u-mb-0">Older release:</h2>
		<a href={`./${olderRelease.slug}`}>
			{olderRelease.title} by {olderRelease.artist}
		</a>
	{:else}
		<h2 class="u-font-lg u-mb-0">Newest release:</h2>
		<a href={`./${newestRelease.slug}`}>
			{newestRelease.title} by {newestRelease.artist}
		</a>
	{/if}
</nav>
