<script>
	export let path;
	export let slug;
</script>

<img
	class="gallery-img"
	src={`/images/${path}/${slug}-thumb.jpg`}
	srcset={(`/images/${path}/${slug}-thumb.jpg 1x`,
	`/images/${path}/${slug}-thumb@2x.jpg 2x`)}
	alt=""
	loading="lazy"
/>

<style lang="scss" global>
	.gallery-img {
		@include scale-on-hover(1.125);
		width: 100%;
	}
</style>
