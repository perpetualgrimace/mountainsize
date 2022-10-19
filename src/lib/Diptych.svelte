<script>
	export let slug1, slug2;
</script>

<div class="diptych">
	<img
		class="diptych-img"
		src={`diptych/${slug1}.jpg`}
		srcset={`diptych/${slug1}.jpg 1x, diptych/${slug1}@2x.jpg 2x`}
		loading="lazy"
		alt=""
	/>
	<img
		class="diptych-img"
		src={`diptych/${slug2}.jpg`}
		srcset={`diptych/${slug2}.jpg 1x, diptych/${slug2}@2x.jpg 2x`}
		loading="lazy"
		alt=""
	/>
</div>

<style lang="scss" global>
	.diptych {
		margin: $sp-xxl (-$sp-md) $sp-xxl * 2.5 (-$sp-md);

		@media (min-width: 600px) {
			margin-left: -$sp-xl;
			margin-right: -$sp-xl;
		}
	}
	.diptych-img {
		@include box-shadow;
		width: 53.333%;
		padding-top: 33.333%;
		background: $dark;

		&:last-of-type {
			position: absolute;
			top: $sp-xl;
			right: 0;
			z-index: -1;
		}
	}
</style>
