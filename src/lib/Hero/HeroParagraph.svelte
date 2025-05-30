<p class="hero-paragraph u-font-lg"><slot /></p>

<style lang="scss" global>
	.hero-paragraph {
		width: 30rem;
		max-width: 100%;

		@media (min-width: 600px) {
			margin-left: auto;
			margin-right: auto;
		}

		&:not(:last-child) {
			margin-bottom: $sp-xs;
		}
	}
</style>
