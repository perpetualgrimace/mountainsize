<script>
	export let imgSlug;
	export let pageSlug = 'default';
</script>

<header class={`hero ${pageSlug}-hero u-text-center`}>
	<div class="hero-inner wrapper">
		<slot />
	</div>
	<img
		class="hero-img"
		sizes="100vw"
		src={`/images/hero/${imgSlug}@1800w.jpg`}
		srcset={`
			/images/hero/${imgSlug}@900w.jpg 900w,
			/images/hero/${imgSlug}@1800w.jpg 1800w,
			/images/hero/${imgSlug}@2700w.jpg 2700w,
		`}
		loading="lazy"
		draggable="false"
		alt=""
	/>
</header>

<style lang="scss" global>
	.hero {
		margin-top: -7.5rem;
		text-shadow: 0 0.125em 1em $black;

		&:after {
			@include pseudo;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: 50%;
			background: linear-gradient(rgba($black, 0), $black);
		}
	}

	.hero-inner {
		padding-top: calc(20vh + 20vw + 5rem);
		top: -2rem;
		z-index: 1; // above bg
	}

	.hero-img {
		@include absolute-expand;
		object-fit: cover;
		object-position: 50% 60%;
	}

	.hero:not(.home-hero) .hero-inner {
		padding-top: calc(20vh + 20vw + 2rem);
	}
	.hero.release-hero .hero-inner {
		padding-top: calc(15vh + 15vw + 2rem);
	}
</style>
