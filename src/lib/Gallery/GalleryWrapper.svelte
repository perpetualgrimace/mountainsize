<script>
	export let heading;
</script>

<section class="gallery-wrapper u-text-center">
	<h2 class="gallery-heading u-mb-xxs">{heading}</h2>
	<p class="gallery-subhead u-subhead u-mb-md">
		<slot name="subhead" />
	</p>

	<slot />
</section>

<style lang="scss" global>
	.gallery-wrapper {
		padding: $sp-lg;
		background-color: $dark;
		border-radius: $radius-lg;
		margin-bottom: $sp-xxl * 1.25;

		@media (min-width: 600px) {
			margin-top: $sp-md;
			margin-bottom: $sp-xxl * 1.5;
		}
	}
</style>
