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
		padding: 0.75rem;
		text-decoration: none;

		&:hover,
		&:focus,
		&[aria-current] {
			text-decoration: underline;
		}
	}
</style>
