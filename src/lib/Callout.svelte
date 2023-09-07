<div class="callout">
	<slot />
</div>

<style lang="scss" global>
	.callout {
		margin-top: $sp-xs;
		margin-bottom: $sp-md;
		padding: $sp-lg $sp-xl $sp-md;
		background-color: rgba($sun-dark, 0.333);
		border: $radius-sm solid $sun-dark;
		border-radius: $radius-lg;

		@media (max-width: 599px) {
			margin-top: $sp-md;
			padding-left: $sp-md;
			padding-right: $sp-md;
		}
	}
</style>
