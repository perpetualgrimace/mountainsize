<script>
	import { page } from '$app/stores';

	import Logo from '$lib/Logo.svelte';

	export let isHorizontal = true;
</script>

<nav class="navbar">
	<a
		class="navbar-link navbar-logo"
		href="."
		aria-current={!$page.routeId ? 'page' : null}
	>
		<Logo {isHorizontal} />
	</a>

	<div class="navbar-list">
		<a
			class="navbar-link u-font-md"
			href="."
			aria-current={!$page.routeId ? 'page' : null}
			aria-hidden
		>
			Home
		</a>
		<a
			class="navbar-link u-font-md"
			href="/services"
			aria-current={$page.routeId === 'services' ? 'page' : null}
		>
			Services & pricing
		</a>
		<a
			class="navbar-link u-font-md"
			href="/contact"
			aria-current={$page.routeId === 'contact' ? 'page' : null}
		>
			Contact & booking
		</a>
	</div>
</nav>

<style lang="scss" global>
	.main-nav-wrapper .navbar:after {
		@include pseudo;
		@include absolute-horizontal-center;
		width: 100vw;
		height: 7.5rem;
		top: 0;
		background-image: linear-gradient(
			to top,
			rgba($black, 0) 0%,
			rgba($black, 0.66) 80%,
			rgba($black, 0.75) 100%
		);
		z-index: -1;
	}
	.navbar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-left: -$sp-xs;
		margin-right: -$sp-xs;
	}

	.navbar-link:first-of-type {
		margin-right: auto;
	}

	.navbar-link {
		@include text-shadow-lg;
		@include scale-on-hover;
		display: inline-block;
		padding: $sp-md $sp-xs;
		text-decoration: none;
		color: $gray;

		&[aria-current] {
			text-decoration: underline;
			color: $cyan-light;
		}
	}
</style>
