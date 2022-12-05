<script>
	import { page } from '$app/stores';

	export let imgSlug;
</script>

<header class={`hero ${$page.routeId || 'home'}-hero u-text-center`}>
	<div class="hero-inner wrapper">
		<slot />
	</div>
	<img
		class="hero-img"
		sizes="100vw"
		src={`images/hero/${imgSlug}@1800w.jpg`}
		srcset={`
			images/hero/${imgSlug}@900w.jpg 900w,
			images/hero/${imgSlug}@1800w.jpg 1800w,
			images/hero/${imgSlug}@2700w.jpg 2700w,
		`}
		loading="lazy"
		draggable="false"
		alt=""
	/>
</header>

<style lang="scss" global>
	.hero-inner {
		padding-top: calc(10vh + 10vw);
		z-index: 1; // above bg
	}

	.hero-img {
		width: 100%;
		height: calc(20vh + 20vw);
		position: absolute;
		top: -6.66rem;
		object-fit: cover;
		object-position: bottom;

		// when menu wraps
		@media (min-width: 588px) {
			top: -3.4rem;
		}
	}
</style>
