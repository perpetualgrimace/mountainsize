<script>
	import { page } from '$app/stores';

	import Logo from '$lib/Logo.svelte';
</script>

<nav class="navbar">
	<a class="navbar-link" href="." aria-current={!$page.routeId ? 'page' : null}>
		<Logo />
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
</nav>

<style lang="scss" global>
	.navbar {
		display: flex;
		align-items: center;
	}

	.navbar-link:first-of-type {
		margin-right: auto;
	}

	.navbar-link {
		padding: $sp-sm;
		text-decoration: none;
		transition: transform 0.2s ease-out;

		&:hover,
		&:focus {
			transform: scale(1.0333);
		}

		&[aria-current] {
			text-decoration: underline;
		}
	}
</style>
