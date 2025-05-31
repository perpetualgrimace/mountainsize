<script>
	let isFullscreen;
	let fullscreenIndex;
</script>

<section class="gallery u-text-center">
	<h2 class="gallery-heading u-mb-xs">Studio gallery</h2>
	<p class="gallery-subhead u-subhead u-mb-md">
		Photos by <a
			href="https://www.vitorsa.com"
			target="_blank"
			rel="noopener noreferrer"
		>
			Vitor Sá
		</a>
	</p>

	<ul class="gallery-list">
		{#each { length: 9 } as items, index}
			<li class="gallery-item">
				<button
					class="gallery-button"
					href={`/images/gallery/gallery-${index + 1}.jpg`}
					on:click={() => (
						(isFullscreen = true), (fullscreenIndex = index + 1)
					)}
					aria-pressed={fullscreenIndex === index + 1 && isFullscreen}
				>
					<img
						class="gallery-img"
						src={`/images/gallery/gallery-${index + 1}-thumb.jpg`}
						srcset={(`/images/gallery/gallery-${index + 1}-thumb.jpg 1x`,
						`/images/gallery/gallery-${index + 1}-thumb@2x.jpg 2x`)}
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
			class="gallery-close-button"
			on:click={() => (isFullscreen = false)}
		>
			<span class="gallery-close-button-inner">×</span>
			<span class="u-visually-hidden">close</span>
		</button>
		<img
			class="gallery-fullscreen-img"
			src={`/images/gallery/gallery-${fullscreenIndex}.jpg`}
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
	.gallery {
		padding: $sp-lg;
		background-color: $dark;
		border-radius: $radius-lg;
		margin-bottom: $sp-xxl * 2;
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
	.gallery-close-button {
		@include link-underline;
		@include text-shadow-lg;
		@include scale-on-hover(1.25);
		display: flex;
		z-index: 2;
		position: absolute;
		top: 0.25em;
		right: 0.25em;
		padding: 0.5rem;
		background: $dark;
		font-size: 2rem;
		border-radius: 50%;
	}
	.gallery-fullscreen-bg {
		@include absolute-expand;
		display: block;
		background-color: rgba($black, 0.9);
		cursor: zoom-out;
	}
</style>
