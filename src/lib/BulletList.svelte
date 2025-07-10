<script>
	export let multiCol = undefined,
		fontSize = 'md';
</script>

<ul
	class={`bullet-list${multiCol ? ' is-multicolumn' : ''} u-font-${fontSize}`}
>
	<slot />
</ul>

<style lang="scss" global>
	.bullet-list {
		@include bullet-list;

		&.is-multicolumn {
			column-width: 20rem;
			column-gap: $sp-xl;
		}
	}
</style>
