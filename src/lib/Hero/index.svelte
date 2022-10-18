<script>
	import { page } from '$app/stores';
</script>

<header class={`hero ${$page.routeId || 'home'}-hero`}>
	<div class="wrapper">
		<slot />
	</div>
</header>

<style lang="scss" global>
	.hero {
		@media (min-width: 600px) {
			text-align: center;
		}
	}
</style>
