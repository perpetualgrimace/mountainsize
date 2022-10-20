<script>
	export let title = 'missing `title` prop in Fret component',
		subhead = 'missing `subhead` prop in Fret component',
		subheadColor = 'cyan',
		imgSlug;
</script>

<section class="fret">
	<h3 class="fret-title u-font-xl">
		{title}
	</h3>
	<p class={`fret-subhead u-subhead u-color-${subheadColor}-light`}>
		{subhead}
	</p>
	<div class="fret-description">
		<slot />
	</div>
	<img class="fret-img" src={`fret/${imgSlug}.jpg`} alt="" loading="lazy" />
</section>

<style lang="scss" global>
	.fret {
		overflow: hidden;

		&:not(:last-child) {
			margin-bottom: 1px;
		}
		&:first-of-type {
			border-top-left-radius: $radius-lg;
			border-top-right-radius: $radius-lg;
		}
		&:last-of-type {
			border-bottom-left-radius: $radius-lg;
			border-bottom-right-radius: $radius-lg;
		}
	}
	.fret {
		padding: $sp-xl $sp-xl $sp-lg $sp-xl;
		background-color: $dark;
		z-index: 1;
	}
	.fret-subhead {
		margin-top: -$sp-sm;
		margin-bottom: $sp-md;
	}

	.fret-description {
		column-width: 20rem;
		column-gap: $sp-xl;

		p {
			line-height: 1.25;

			&:not(:last-of-type) {
				margin-bottom: $sp-xs;
			}
		}
	}

	.fret-img {
		@include absolute-expand;
		object-fit: cover;
		z-index: -1;
	}
</style>
