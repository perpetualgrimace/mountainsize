<script>
	import Navbar from '$lib/Navbar.svelte';
</script>

<div class="footer">
	<footer class="footer-top wrapper">
		<Navbar isHorizontal={false} />
		<ul class="footer-social-list">
			<li class="footer-social-item">
				<a href="" class="footer-social-link"> F </a>
			</li>
			<li class="footer-social-item">
				<a href="" class="footer-social-link"> I </a>
			</li>
			<li class="footer-social-item">
				<a href="" class="footer-social-link"> T </a>
			</li>
		</ul>
	</footer>

	<hr class="footer-hr" />

	<div class="footer-bottom wrapper" role="contentinfo">
		<ul class="footer-bottom-list u-cyan-light-color">
			<li class="footer-bottom-item u-font-sm">©2022 Mountainsize Audio LLC</li>
			<li class="footer-bottom-item u-font-sm">Asheville, NC 28803</li>
			<li class="footer-bottom-item u-font-sm">
				Website designed & built by <a href="https://jamesferrell.me">
					James Ferrell
				</a> (I do a lot of stuff)
			</li>
		</ul>
	</div>
</div>

<style lang="scss" global>
	.footer {
		margin-top: auto;
		background-color: $dark;
	}

	.footer-hr {
		@include pseudo;
		border: none;
		height: 1px;
		background-color: $black;
	}

	.footer-top {
		padding-top: $sp-lg;
		padding-bottom: $sp-md;

		.navbar {
			flex-direction: column;

			.navbar-link {
				padding-top: $sp-xs;
				padding-bottom: $sp-xs;
				margin-bottom: $sp-sm;

				&:first-of-type {
					margin-right: 0;
					margin-bottom: $sp-xxs;
				}
			}
		}
	}

	.footer-social-list {
		display: flex;
		justify-content: center;
		margin-top: -$sp-xs;
		margin-bottom: $sp-sm;
	}
	.footer-social-item:not(:last-of-type) {
		margin-right: $sp-md;
	}
	.footer-social-link {
		@include scale-on-hover;
		display: inline-block;
		background-color: $sun-dark;
	}

	.footer-bottom {
		min-height: $sp-lg;
	}

	.footer-bottom-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding-top: $sp-xxs;
		padding-bottom: $sp-xxs;

		a {
			@include link-underline;
		}
	}
	.footer-bottom-item:not(:last-of-type) {
		margin-right: $sp-xs;

		&:after {
			display: inline-block;
			content: '|';
			margin-left: $sp-xs;
			color: $gray;
		}
	}
</style>
