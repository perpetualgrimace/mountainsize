<div class="text-block">
	<slot />
</div>

<style lang="scss" global>
	.text-block {
		padding: $sp-xl;
		width: 100%;
		max-width: 47rem;

		h2 + .u-subhead {
			margin-top: -$sp-xs;
		}

		.u-subhead + p {
			margin-top: $sp-lg;
		}
	}
</style>
