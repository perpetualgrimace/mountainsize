<script>
	import Button from '$lib/Button.svelte';

	export let heading,
		subhead,
		subheadAbove = false,
		showButton = false,
		imgSlug;
</script>

<section class="artillery">
	<img
		class="artillery-img"
		src={`artillery/${imgSlug}.png`}
		srcset={`artillery/${imgSlug}.png 1x, artillery/${imgSlug}@2x.png 2x`}
		loading="lazy"
		draggable="false"
		alt=""
	/>

	<div
		class={`artillery-caption${
			subhead && subheadAbove ? ' subhead-above' : ''
		}`}
	>
		<h2 class="artillery-heading">{heading}</h2>
		{#if subhead}
			<p class="artillery-subhead u-subhead">{subhead}</p>
		{/if}
		<div class="artillery-slot">
			<slot />
		</div>
		{#if showButton}
			<Button href="contact">Book a session</Button>
		{/if}
	</div>
</section>

<style lang="scss" global>
	.artillery {
		margin-top: $sp-xxl;
		margin-bottom: $sp-xxl;

		@media (min-width: 666px) {
			display: flex;

			.artillery-img {
				top: -$sp-lg;
				margin-right: $sp-xl;
			}

			.artillery-caption {
				width: calc(100% - 10rem - $sp-xl);
			}
		}

		& + .artillery {
			margin-top: $sp-xxxl;
		}
	}

	.artillery-img {
		width: 10rem;
		height: 11rem;

		@media (max-width: 665px) {
			margin-bottom: $sp-lg;
		}
	}

	.artillery-caption.subhead-above {
		display: flex;
		flex-direction: column;

		.artillery-subhead {
			order: -1;
			position: absolute;
			min-width: max-content;
			top: -$sp-xs;
		}
		.artillery-slot {
			margin-top: -$sp-sm;
		}
	}

	.artillery-subhead {
		margin-top: -$sp-sm;
	}

	.artillery-slot > p,
	.artillery-slot > li {
		@include font-lg;
		margin-top: $sp-md;
	}

	.artillery-slot .bullet-list {
		margin-top: 1.125rem;

		&.is-multicolumn {
			column-width: 12rem;
		}
	}
</style>
