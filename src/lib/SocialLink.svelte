<script>
	export let title, href;
</script>

<a class="social-link" {href}>
	<img
		class="social-img"
		src={`icons/${title}-icon.png`}
		srcset={`icons/${title}-icon.png 1x, icons/${title}-icon@2x.png 2x`}
		loading="lazy"
		alt={`follow MountainSize Audio on ${title}`}
	/>
</a>

<style lang="scss">
	.social-link {
		@include scale-on-hover(1.1);
		display: inline-block;
		padding: $sp-sm;
	}
</style>
