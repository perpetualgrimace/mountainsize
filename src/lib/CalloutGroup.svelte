<div class="callout-group">
	<slot />
</div>

<style lang="scss" global>
	.callout-group {
		@media (min-width: 600px) {
			display: flex;

			.callout {
				width: calc(50% - $sp-sm);

				&:first-of-type {
					margin-right: auto;
				}
			}
		}
	}
</style>
