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
	.bullet-list > li {
		font-size: inherit;
		margin-bottom: 0.666em;
		line-height: 1.25;
		padding-left: 1em;

		&:before {
			content: '';
			position: absolute;
			left: 0;
			top: 0.275em;
			background-size: contain;
			background-image: url('/bullet.svg');
			background-repeat: no-repeat;
			width: 0.5em;
			height: 0.625em;
			margin-right: 0.5em;
		}
	}

	.bullet-list.is-multicolumn {
		column-width: 20rem;
		column-gap: $sp-xl;
	}

	.bullet-list a {
		@include link-underline;
	}
</style>
