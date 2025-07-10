<script>
	export let slug;
</script>

<img
	class="release-img u-mb-lg"
	src={`/images/releases/${slug}.jpg`}
	srcset={`/images/releases/${slug}.jpg 1x, /images/releases/${slug}@2x.jpg 2x`}
	alt=""
	loading="lazy"
/>
