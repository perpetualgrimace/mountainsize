<div class="fretboard">
	<slot />
</div>

<style lang="scss" global>
	.fret {
		overflow: hidden;

		&:not(:last-child) {
			margin-bottom: 1px;
		}
		&:first-of-type {
			border-top-left-radius: $radius-lg;
			border-top-right-radius: $radius-lg;
		}
		&:last-of-type {
			border-bottom-left-radius: $radius-lg;
			border-bottom-right-radius: $radius-lg;
		}
	}
</style>
