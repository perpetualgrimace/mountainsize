<script>
	import designs from '$lib/data/designs.json';

	let isFullscreen;
	let fullscreenIndex;
	let itemLength = designs.length;
</script>

<section class="design-gallery u-text-center">
	<h2 class="gallery-heading u-mb-xxs">Design samples</h2>
	<p class="gallery-subhead u-subhead u-mb-md">
		More non-audio examples at <a
			href="https://jamesferrell.me"
			target="_blank"
			rel="noopener noreferrer"
		>
			jamesferrell.me
		</a>
	</p>

	<ul class="gallery-list">
		{#each designs as design, index}
			<li class="gallery-item">
				<button
					class="gallery-button"
					href={`/images/design/${design.slug}@2x.jpg`}
					on:click={() => (
						(isFullscreen = true), (fullscreenIndex = index + 1)
					)}
					aria-pressed={fullscreenIndex === index + 1 && isFullscreen}
				>
					<img
						class="gallery-img"
						src={`/images/design/${design.slug}-thumb.jpg`}
						srcset={(`/images/design/${design.slug}-thumb.jpg 1x`,
						`/images/design/${design.slug}-thumb@2x.jpg 2x`)}
						alt=""
						loading="lazy"
					/>
				</button>
			</li>
		{/each}
	</ul>
</section>

{#if isFullscreen && fullscreenIndex}
	<div class="gallery-fullscreen">
		<button
			class="gallery-ui-button gallery-prev-button"
			on:click={() =>
				fullscreenIndex > 1
					? (fullscreenIndex -= 1)
					: (fullscreenIndex = itemLength)}
		>
			<span class="gallery-ui-button-inner">&#10094;</span>
			<span class="u-visually-hidden">view previous image</span>
		</button>

		<button
			class="gallery-ui-button gallery-next-button"
			on:click={() =>
				fullscreenIndex < itemLength
					? (fullscreenIndex += 1)
					: (fullscreenIndex = 1)}
		>
			<span class="gallery-ui-button-inner">&#10095;</span>
			<span class="u-visually-hidden">view next image</span>
		</button>

		<button
			class="gallery-ui-button gallery-close-button"
			on:click={() => (isFullscreen = false)}
		>
			<span class="gallery-ui-button-inner">×</span>
			<span class="u-visually-hidden">close</span>
		</button>

		<img
			class="gallery-fullscreen-img"
			src={`/images/design/${designs[fullscreenIndex - 1].slug}@2x.jpg`}
			alt=""
			loading="lazy"
		/>

		<button
			class="gallery-fullscreen-bg"
			on:click={() => (isFullscreen = false)}
		>
			<span class="u-visually-hidden">
				This will close the fullscreen image
			</span>
		</button>
	</div>
{/if}

<style lang="scss" global>
	.design-gallery {
		padding: $sp-lg;
		background-color: $dark;
		border-radius: $radius-lg;

		@media (min-width: 600px) {
			margin-top: $sp-md;
			margin-bottom: $sp-md;
		}
	}

	.gallery-list {
		display: flex;
		flex-wrap: wrap;

		&:hover {
			.gallery-item {
				opacity: 0.5;
			}
		}
	}
	.gallery-item {
		flex: 1 1 calc(33.333% - 4px);
		margin: 2px;
		overflow: hidden;
		transition: opacity 0.2s ease-out;

		&:hover {
			opacity: 1 !important;
		}
	}
	.gallery-button {
		display: block;
		width: 100%;
		cursor: zoom-in;
	}
	.gallery-img {
		@include scale-on-hover(1.125);
		width: 100%;
	}

	.gallery-fullscreen {
		@include absolute-expand;
		position: fixed;
		z-index: 22; // above player
	}
	.gallery-fullscreen-img {
		@include absolute-center;
		object-fit: contain;
		z-index: 1;
		max-width: 100%;
		max-height: 100%;
		@include box-shadow;
	}
	.gallery-ui-button {
		@include link-underline;
		@include text-shadow-lg;
		display: flex;
		z-index: 2;
		position: absolute;
		background: $dark;
		font-size: 2rem;
		line-height: 2.5rem;
		border-radius: 50%;
		width: 2.5rem;
		height: 2.5rem;

		&:hover .gallery-ui-button-inner,
		&:focus .gallery-ui-button-inner {
			transform: scale(1.125);
		}
	}
	.gallery-ui-button-inner {
		margin: auto;
		transition: transform 0.2s ease-out;
	}
	.gallery-close-button {
		top: 0.25em;
		right: 0.25em;
	}
	.gallery-prev-button,
	.gallery-next-button {
		@include absolute-vertical-center;
		font-size: 1.5rem;
	}
	.gallery-prev-button {
		left: 0.25em;
	}
	.gallery-next-button {
		right: 0.25em;
	}
	.gallery-fullscreen-bg {
		@include absolute-expand;
		display: block;
		background-color: rgba($black, 0.9);
		cursor: zoom-out;
	}
</style>
