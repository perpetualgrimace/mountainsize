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
		src={`hero/${imgSlug}.jpg`}
		srcset={`hero/${imgSlug}.jpg 1x, hero/${imgSlug}@2x.jpg 2x`}
		loading="lazy"
		draggable="false"
		alt=""
	/>
</header>

<style lang="scss" global>
	.hero-inner {
		padding-top: calc(10vh + 10vw);
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
