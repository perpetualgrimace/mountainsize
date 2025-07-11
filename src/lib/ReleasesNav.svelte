<script>
	import TextBlock from '$lib/TextBlock.svelte';

	export let newerRelease, olderRelease, newestRelease, oldestRelease;
</script>

<TextBlock>
	<h2 class="u-text-center u-mb-xxs">More releases</h2>
	<p class="u-subhead u-text-center u-mb-md">
		<a class="u-font-sm" href="./">All releases</a>
	</p>

	<nav class="releases-nav">
		<ul class="releases-nav-list">
			{#if !olderRelease}
				<li class="releases-nav-item">
					<a class="releases-nav-cover-link" href={`./${newestRelease.slug}`}>
						<span class="u-visually-hidden">
							{newestRelease.title} by {newestRelease.artist}
						</span>
					</a>
					<img
						class="releases-nav-img"
						src={`/images/releases/${newestRelease.slug}.jpg`}
						alt=""
					/>
					<div class="releases-nav-caption">
						<div class="u-subhead u-font-sm u-mb-0">Newest release:</div>
						<div class="releases-nav-heading u-heading u-font-lg u-mb-0">
							{newestRelease.title} by {newestRelease.artist}
						</div>
					</div>
				</li>
			{/if}

			{#if newerRelease}
				<li class="releases-nav-item">
					<a class="releases-nav-cover-link" href={`./${newerRelease.slug}`}>
						<span class="u-visually-hidden">
							{newerRelease.title} by {newerRelease.artist}
						</span>
					</a>
					<img
						class="releases-nav-img"
						src={`/images/releases/${newerRelease.slug}.jpg`}
						alt=""
					/>
					<div class="releases-nav-caption">
						<div class="u-subhead u-font-sm u-mb-0">Newer release:</div>
						<div class="releases-nav-heading u-heading u-font-lg u-mb-0">
							{newerRelease.title} by {newerRelease.artist}
						</div>
					</div>
				</li>
			{/if}

			{#if olderRelease}
				<li class="releases-nav-item">
					<a class="releases-nav-cover-link" href={`./${olderRelease.slug}`}>
						<span class="u-visually-hidden">
							{olderRelease.title} by {olderRelease.artist}
						</span>
					</a>
					<img
						class="releases-nav-img"
						src={`/images/releases/${olderRelease.slug}.jpg`}
						alt=""
					/>
					<div class="releases-nav-caption">
						<div class="u-subhead u-font-sm u-mb-0">Older release:</div>
						<div class="releases-nav-heading u-heading u-font-lg u-mb-0">
							{olderRelease.title} by {olderRelease.artist}
						</div>
					</div>
				</li>
			{/if}

			{#if !newerRelease}
				<li class="releases-nav-item">
					<a class="releases-nav-cover-link" href={`./${oldestRelease.slug}`}>
						<span class="u-visually-hidden">
							{oldestRelease.title} by {oldestRelease.artist}
						</span>
					</a>
					<img
						class="releases-nav-img"
						src={`/images/releases/${oldestRelease.slug}.jpg`}
						alt=""
					/>
					<div class="releases-nav-caption">
						<div class="u-subhead u-font-sm u-mb-0">Oldest release:</div>
						<div class="releases-nav-heading u-heading u-font-lg u-mb-0">
							{oldestRelease.title} by {oldestRelease.artist}
						</div>
					</div>
				</li>
			{/if}
		</ul>
	</nav>
</TextBlock>

<style lang="scss" global>
	.releases-nav-list {
		display: flex;
		flex-wrap: wrap;
	}
	.releases-nav-cover-link {
		@include absolute-expand;
		z-index: 1;

		&:hover + .releases-nav-img,
		&:focus + .releases-nav-img {
			transform: scale(1.075);
		}
		&:hover ~ .releases-nav-caption > .releases-nav-heading,
		&:focus ~ .releases-nav-caption > .releases-nav-heading {
			color: $sun-light;
		}
	}
	.releases-nav-img {
		transition: transform 0.2s ease-out;
	}
	.releases-nav-item {
		display: flex;
		align-items: center;
		width: 100%;
		background: $dark;
		padding: $sp-md;
		border-radius: $radius-lg;
		margin-bottom: $sp-md;

		@media (min-width: 666px) {
			flex: 1 0 calc(50% - #{$sp-md / 2});

			&:first-child {
				margin-right: $sp-md;
			}
		}
	}
	.releases-nav-img {
		width: $sp-xxxl;
		height: $sp-xxxl;
		border-radius: $radius-sm;
		margin-right: $sp-md;
	}
	.releases-nav-heading {
		line-height: 1.125 !important;
		transition: color 0.2s ease-out;
	}

	.release-wrapper .text-block {
		max-width: 100%;

		@media (min-width: 600px) {
			padding-top: $sp-sm;
		}
	}
</style>
