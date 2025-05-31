<script>
	import testimonials from '$lib/data/testimonials.json';
</script>

<section class="testimonials">
	<h2 class="testimonials-heading u-mb-xxs u-text-center">Testimonials</h2>
	<p class="u-subhead u-text-center u-mb-md">
		Nice things said about me and my work
	</p>

	<ul class="testimonial-list">
		{#each testimonials as testimonial}
			<li class="testimonial-item">
				<h3 class="testimonial-heading u-font-md">{testimonial.heading}</h3>
				<p class="testimonial-text">{testimonial.text}</p>
				<p class="testimonial-attribution u-font-sm">
					— <a
						class="testimonial-link"
						href={testimonial.link}
						target="_blank"
						rel="noopener noreferrer">{testimonial.by}</a
					>
				</p>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss" global>
	.testimonials {
		margin-bottom: $sp-xxl;

		@media (min-width: 600px) {
			margin-bottom: $sp-xxl * 1.875;
		}
	}

	.testimonial-list {
		display: flex;
		flex-wrap: wrap;
		width: calc(100% + #{$sp-lg});
		left: -$sp-lg/2;
	}
	.testimonial-item {
		display: flex;
		flex-direction: column;
		padding: $sp-md;
		background: $dark;
		border-radius: $radius-lg;
		margin: $sp-sm;

		@media (min-width: 500px) {
			flex: 1 0 calc(50% - #{$sp-xl});
		}

		@media (min-width: 800px) {
			flex: 1 0 calc(33.33% - #{$sp-xl});
		}
	}

	.testimonial-attribution {
		margin-top: auto;
		padding-top: $sp-sm;
		text-align: right;
	}
	.testimonial-link {
		@include link-underline;
	}
</style>
