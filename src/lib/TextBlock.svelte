<div class="text-block">
	<slot />
</div>

<style lang="scss" global>
	.text-block {
		width: 100%;
		max-width: 47rem;
		padding: $sp-xl;

		@media (max-width: 599px) {
			padding-left: 0;
			padding-right: 0;
			padding-top: 0;
		}

		h2 {
			line-height: 1;
		}

		h2 + .u-subhead {
			margin-top: -$sp-xs;
		}

		.u-subhead + p {
			margin-top: $sp-md;
		}

		& + .text-block {
			margin-top: -$sp-md;
		}

		p + p {
			margin-top: $sp-md;
		}

		p:last-child {
			margin-bottom: -$sp-xs;
		}

		a {
			@include link-underline;
		}
	}
</style>
