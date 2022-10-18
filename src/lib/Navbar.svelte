<script>
	import Logo from '$lib/Logo.svelte';
</script>

<nav class="navbar">
	<a class="navbar-link" href=".">
		<Logo />
	</a>
	<a class="navbar-link" href="/services">Services & pricing</a>
	<a class="navbar-link" href="/contact">Contact & booking</a>
</nav>

<style lang="scss" global>
	.navbar {
		display: flex;
	}

	.navbar-link:first-of-type {
		margin-right: auto;
	}
</style>
