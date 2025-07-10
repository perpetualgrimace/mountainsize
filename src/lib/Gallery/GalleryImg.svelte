<script>
	export let path;
	export let slug;
	export let appendThumb = true;
</script>

<img
	class="gallery-img"
	src={`/images/${path}/${slug}${appendThumb ? '-thumb' : ''}.jpg`}
	srcset={(`/images/${path}/${slug}${appendThumb ? '-thumb' : ''}.jpg 1x`,
	`/images/${path}/${slug}${appendThumb ? '-thumb' : ''}@2x.jpg 2x`)}
	alt=""
	loading="lazy"
	draggable="false"
/>

<style lang="scss" global>
	.gallery-img {
		@include scale-on-hover(1.125);
		width: 100%;
	}
</style>
