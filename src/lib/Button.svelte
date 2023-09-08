<script>
	export let href = undefined,
		type = undefined,
		isBlock = undefined;
</script>

{#if type}
	<button class={`button${isBlock ? ' is-block' : ''}`} {type}>
		<slot />
	</button>
{:else}
	<a class={`button${isBlock ? ' is-block' : ''}`} {href}>
		<slot />
	</a>
{/if}

<style lang="scss" global>
	.button {
		@include subhead-text;
		@include scale-on-hover;
		display: inline-block;
		width: max-content;
		font-size: $font-size-md;
		letter-spacing: 3px;
		font-weight: $title-weight;
		text-decoration: none;
		margin-top: $sp-md;
		padding: 0.625em 1.25em 0.5em 1.25em;
		color: $black;
		background-color: $sun-dark;
		background-image: linear-gradient(180deg, $sun-light 0%, $sun-dark 100%);
		text-shadow: 0 -1px 1px rgba($sun-dark, 0.5);
		border-radius: $radius-md;

		&.is-block {
			display: block;
			width: 100%;
		}
	}
</style>
