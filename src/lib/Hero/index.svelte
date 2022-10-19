<script>
	import { page } from '$app/stores';
</script>

<header class={`hero ${$page.routeId || 'home'}-hero u-text-center`}>
	<div class="wrapper">
		<slot />
	</div>
</header>

<style lang="scss" global>
</style>
