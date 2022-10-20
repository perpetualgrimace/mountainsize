<script>
	import slugify from '$lib/helpers/slugify.js';

	export let title = 'missing `title` prop in Fret component',
		subhead = 'missing `subhead` prop in Fret component',
		subheadColor = 'cyan',
		imgSlug;
</script>

<section class="fret" id={slugify(title)}>
	<h3 class="fret-title u-font-xl">
		{title}
	</h3>
	<p class={`fret-subhead u-subhead u-${subheadColor}-light-color`}>
		{subhead}
	</p>
	<div class="fret-description">
		<slot />
	</div>
	<img class="fret-img" src={`fret/${imgSlug}.jpg`} alt="" loading="lazy" />
</section>

<style lang="scss" global>
	.fret {
		padding: $sp-xl $sp-xl $sp-lg $sp-xl;
		background-color: $dark;
		z-index: 1;

		@media (max-width: 599px) {
			margin-left: -$sp-md;
			padding-left: $sp-md;
			margin-right: -$sp-md;
			padding-right: $sp-md;
		}
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

		h4 {
			margin-bottom: $sp-xs;
		}
	}

	.fret-img {
		@include absolute-expand;
		object-fit: cover;
		z-index: -1;
	}
</style>
