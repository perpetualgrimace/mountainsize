<div class="multicol-block">
	<slot />
</div>

<style lang="scss" global>
	.multicol-block {
		@media (min-width: 600px) {
			display: flex;
		}

		.text-block + .text-block {
			margin-top: 0;
		}
	}
</style>
