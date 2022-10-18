<script>
	import { page } from '$app/stores';

	import Logo from '$lib/Logo.svelte';
</script>

<nav class="navbar wrapper">
	<a class="navbar-link" href="." aria-current={!$page.routeId ? 'page' : null}>
		<Logo />
	</a>

	<div class="navbar-list">
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
	.navbar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-left: -$sp-sm;
		margin-right: -$sp-sm;
	}

	.navbar-link:first-of-type {
		margin-right: auto;
	}

	.navbar-link {
		@include text-shadow-lg;
		padding: $sp-md $sp-sm;
		text-decoration: none;
		transition: transform 0.2s ease-out;

		&:hover,
		&:focus {
			transform: scale(1.0333);
		}

		&[aria-current] {
			text-decoration: underline;
			color: $cyan-light;
		}
	}
</style>
