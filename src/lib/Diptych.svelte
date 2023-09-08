<script>
	export let slug1, slug2;
</script>

<div class="diptych">
	<img
		class="diptych-img"
		src={`images/diptych/${slug1}.jpg`}
		srcset={`images/diptych/${slug1}.jpg 1x, images/diptych/${slug1}@2x.jpg 2x`}
		loading="lazy"
		draggable="false"
		alt=""
	/>
	<img
		class="diptych-img"
		src={`images/diptych/${slug2}.jpg`}
		srcset={`images/diptych/${slug2}.jpg 1x, images/diptych/${slug2}@2x.jpg 2x`}
		loading="lazy"
		draggable="false"
		alt=""
	/>
</div>

<style lang="scss" global>
	.diptych {
		margin: $sp-xxl (-$sp-md) $sp-xxl * 2.5 (-$sp-md);

		@media (max-width: 499px) {
			transform: scale(1.125);
		}

		@media (min-width: 600px) {
			margin-left: -$sp-xl;
			margin-right: -$sp-xl;
		}

		@media (min-width: 1080px) {
			max-width: 54rem;
			margin-left: auto;
			margin-right: auto;
		}
	}
	.diptych-img {
		@include box-shadow;
		width: 53.333%;

		&:last-of-type {
			position: absolute;
			top: $sp-xl;
			right: 0;
			z-index: -1;
		}
	}
</style>
