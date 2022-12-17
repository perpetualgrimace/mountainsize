<script>
	import '../styles/global.scss';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import Player from '$lib/Player/index.svelte';
</script>

<div class="main-nav-wrapper wrapper">
	<Navbar />
</div>

<slot />

<Footer />
<Player />

<style lang="scss" global>
	body {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
