<script>
	import Meta from '$lib/Meta.svelte';

	import Hero from '$lib/Hero/index.svelte';
	import HeroHeadline from '$lib/Hero/HeroHeadline.svelte';
	import HeroParagraph from '$lib/Hero/HeroParagraph.svelte';
	import Button from '$lib/Button.svelte';

	// const services = [
	// 	{ label: 'Mixing', value: 'mixing' },
	// 	{ label: 'Mastering', value: 'mastering' },
	// 	{ label: 'Session musician', value: 'session-musician' },
	// 	{ label: 'In-studio recording session', value: 'in-studio-session' }
	// ];
</script>

<Meta title="Mountainsize Booking" />

<Hero imgSlug="contact-hero">
	<HeroHeadline>
		Let’s <span class="u-cyan-light-color"> get started</span>
	</HeroHeadline>
	<HeroParagraph>
		I’m excited to hear about your project! Please fill out this contact form
		and I’ll get back to you within 24 hours.
	</HeroParagraph>
</Hero>

<main class="wrapper">
	<form
		class="contact-form u-mb-md"
		name="mountainsize"
		method="POST"
		netlify-honeypot="bot-field"
		data-netlify="true"
	>
		<input
			class="contact-input"
			type="hidden"
			name="form-name"
			value="mountainsize"
		/>

		<label class="u-mb-lg contact-field-name">
			<div class="u-heading u-mb-xxs">Your name</div>
			<input
				name="name"
				id="name"
				required
				placeholder="Firstname Lastname"
				type="text"
			/>
		</label>

		<label class="u-mb-lg contact-field-email">
			<div class="u-heading u-mb-xxs">Your email address</div>
			<input
				name="email"
				id="email"
				required
				placeholder="email@address.com"
				type="email"
			/>
		</label>

		<!-- <div class="u-mb-lg contact-field-services">
			<p class="u-heading u-mb-0">Services requested</p>
			<p class="help u-cyan-light-color u-font-sm u-mb-sm">
				Check any that might apply
			</p>

			<fieldset class="contact-field-services-checkboxes">
				{#each services as input}
					<label class="control u-mb-sm">
						<input
							type="checkbox"
							name={input.label}
							value={input.value ? '✅ yes' : 'no thanks'}
						/>
						<div class="control-indicator" />
						{input.label}
					</label>
				{/each}
			</fieldset>
		</div> -->

		<label class="u-mb-lg contact-field-message">
			<div class="u-heading u-mb-0">Brief project description</div>
			<div class="help u-cyan-light-color u-font-sm u-mb-sm">
				Or your favorite band, I’m down to talk about whatever
			</div>

			<textarea
				name="message"
				id="message"
				required
				placeholder="I’m in a post punk band called Cosmic Lasagna and we’re hoping to start recording our second EP in a couple months"
				type="text"
			/>
		</label>

		<Button isBlock type="submit">Send it</Button>
	</form>
</main>

<style lang="scss" global>
	.contact-form {
		padding: $sp-xl;
		background-color: $dark;
		border-radius: $radius-lg;
	}

	.hero-img[src*='contact'] {
		object-position: 0% 0%;
	}
</style>
