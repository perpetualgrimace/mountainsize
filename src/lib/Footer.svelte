<script>
	import Navbar from '$lib/Navbar.svelte';
	import SocialLink from '$lib/SocialLink.svelte';
</script>

<div class="footer">
	<footer class="footer-top wrapper">
		<Navbar isHorizontal={false} showSecondaryPages={true} />
		<ul class="footer-social-list">
			<li class="footer-social-item">
				<SocialLink
					title="facebook"
					href="https://facebook.com/mountainsizeaudio"
				/>
			</li>
			<li class="footer-social-item">
				<SocialLink
					title="instagram"
					href="https://instagram.com/mountainsizeaudio"
				/>
			</li>
			<li class="footer-social-item">
				<SocialLink
					title="twitter"
					href="https://twitter.com/mountainsizeaudio"
				/>
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
		padding-bottom: 2.45rem;
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
		}

		.navbar-logo svg {
			width: 11.5rem;
			height: auto;
		}

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

	.footer-social-list {
		display: flex;
		justify-content: center;
		margin-top: -$sp-sm;
		margin-bottom: -$sp-xxs;
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
