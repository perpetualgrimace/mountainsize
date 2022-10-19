<script>
	import '../styles/global.scss';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="wrapper">
	<Navbar />
</div>

<slot />

<Footer />

<style lang="scss" global>
	body {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
