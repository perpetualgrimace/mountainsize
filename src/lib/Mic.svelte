<script>
	import Button from '$lib/Button.svelte';

	export let heading,
		subhead = undefined,
		subheadAbove = false,
		headingFontSize = 'xl',
		showButton = false,
		buttonText = 'Let’s get started',
		imgSlug = undefined;
</script>

<section class="mic">
	<img
		class="mic-img"
		src={`/images/mic/${imgSlug}.png`}
		srcset={`/images/mic/${imgSlug}.png 1x, /images/mic/${imgSlug}@2x.png 2x`}
		loading="lazy"
		draggable="false"
		alt=""
	/>

	<div class={`mic-caption${subhead && subheadAbove ? ' subhead-above' : ''}`}>
		<h2 class={`mic-heading u-font-${headingFontSize}`}>{heading}</h2>
		{#if subhead}
			<p class="mic-subhead u-subhead">{subhead}</p>
		{/if}
		<div class="mic-slot">
			<slot />
		</div>
		{#if showButton}
			<Button href="/contact">{buttonText}</Button>
		{/if}
	</div>
</section>

<style lang="scss" global>
	.mic {
		margin-top: $sp-xxl;
		margin-bottom: $sp-xxl;

		@media (min-width: 666px) {
			display: flex;

			&:last-child {
				margin-bottom: $sp-lg;
			}

			.mic-img {
				top: -$sp-lg;
				margin-right: $sp-xl;
			}

			.mic-caption {
				width: calc(100% - 10rem - #{$sp-xl});
			}
		}

		& + .mic {
			margin-top: $sp-xxxl;
		}
	}

	.mic-img {
		width: 10rem;
		height: 11rem;

		@media (max-width: 665px) {
			position: absolute;
			top: -1.5rem;
			right: 0;
			opacity: 0.25;
		}
	}

	.mic-caption.subhead-above {
		display: flex;
		flex-direction: column;

		.mic-subhead {
			order: -1;
			position: absolute;
			min-width: max-content;
			top: -$sp-xs;
		}
		.mic-slot {
			margin-top: -$sp-sm;
		}
	}

	.mic-subhead {
		margin-top: -$sp-sm;
	}

	.mic-slot > p:not([class*='u-font-']),
	.mic-slot > li:not([class*='u-font-']) {
		@include font-lg;
		margin-top: $sp-md;
	}

	.mic-slot .bullet-list {
		margin-top: 1.125rem;

		&.is-multicolumn {
			column-width: 10rem;
		}
	}
</style>
