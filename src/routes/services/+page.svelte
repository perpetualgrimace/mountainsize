<script>
	import designs from '$lib/data/designs.json';

	import Meta from '$lib/Meta.svelte';

	import Hero from '$lib/Hero/index.svelte';
	import HeroHeadline from '$lib/Hero/HeroHeadline.svelte';
	import HeroParagraph from '$lib/Hero/HeroParagraph.svelte';
	import Callout from '$lib/Callout.svelte';
	import MulticolBlock from '$lib/MulticolBlock.svelte';
	import TextBlock from '$lib/TextBlock.svelte';

	import Gallery from '$lib/Gallery/index.svelte';
	import GalleryWrapper from '$lib/Gallery/GalleryWrapper.svelte';

	import Mic from '$lib/Mic.svelte';
	import BulletList from '$lib/BulletList.svelte';
</script>

<Meta
	title="Mountainsize Services"
	description="Recording, mixing, mastering, editing, song production, session musician, editing, stem mastering, design & web development. Affordable, no bullshit pricing."
/>

<Hero imgSlug="services-hero">
	<HeroHeadline>
		Jack of all trades <br />
		<span class="u-cyan-light-color">at your service</span>
	</HeroHeadline>
	<HeroParagraph>Affordable, no bullshit pricing.</HeroParagraph>
</Hero>

<main class="wrapper">
	<TextBlock>
		<h2 id="recording">Studio recording</h2>
		<p class="u-subhead u-sun-light-color">
			<strong>$40/hour</strong>
			<span class="u-cyan-light-color">or <strong>$200/day</strong></span>
		</p>
		<p class="u-font-md u-mb-md">
			For sessions that run shorter than five hours, it’s a $40 hourly charge
			for the time. For sessions five hours or longer, you’ve unlocked the $200
			day rate. We can go as long as energy and schedules permit!
		</p>
	</TextBlock>

	<Mic
		heading="Take advantage of my space, my gear, and my ear"
		headingFontSize="lg"
		imgSlug="james-computer"
	>
		<p class="u-font-md u-mb-md">
			Whether you’re in a band and looking to track live with overdubs,
			a singer-songwriter that wants to build out a song from the ground up, or
			anything in between, I’ve got you covered.
		</p>
		<p class="u-font-md">
			You can’t beat the sound of professional gear in a professional space,
			with nice sounding mics in the right spots. Work with me in person and
			I’ll help you perform your best!
		</p>
	</Mic>

	<Callout>
		<h3>Recording session payment policy</h3>
		<BulletList>
			<li>
				25% deposit required at time of booking; non-refundable if cancelled
				within 7 days of scheduled session.
			</li>
			<li>Remainder due at the end of the session.</li>
		</BulletList>
	</Callout>

	<MulticolBlock>
		<TextBlock>
			<h2 id="mixing">Mixing</h2>
			<p class="u-subhead u-sun-light-color">
				<strong>$120 per song</strong>
				<span class="u-cyan-light-color"
					>Or <strong>$80 if recorded here</strong></span
				>
			</p>
			<p class="u-font-md u-mb-md">
				I’ll make sure every instrument is audible and has its own space in the
				mix, with the most important elements up front. No limit on revisions —
				we’ll keep going until you’re happy!
			</p>
		</TextBlock>
		<TextBlock>
			<h2 id="mastering">Mastering</h2>
			<p class="u-subhead u-sun-light-color">
				<strong>$40 per song</strong>
				<span class="u-cyan-light-color">
					Or <strong>$30 if recorded here</strong>
				</span>
			</p>
			<p class="u-font-md u-mb-md">
				In this final stage I’ll pull extra volume and life out of the recording
				and ensure it translates well to different listening environments.
			</p>
		</TextBlock>
	</MulticolBlock>

	<MulticolBlock>
		<TextBlock>
			<h2 id="session-musician">Session musician</h2>
			<p class="u-subhead u-sun-light-color">
				<strong>$100 per song</strong>
				<span class="u-cyan-light-color">
					Or <strong>free with studio time</strong>
				</span>
			</p>
			<p class="u-font-md u-mb-md">
				It’s not uncommon for me to perform drums, bass, guitar, or backing
				vocals on top of running a session. If you book studio time, I don’t
				charge extra! And if you don’t like my ideas, I don’t take it personally
				— it’s your art after all!
			</p>
		</TextBlock>
		<TextBlock>
			<h2 id="stem-mastering">Stem mastering</h2>
			<p class="u-subhead u-sun-light-color">
				<strong>$60 per song</strong>
			</p>
			<p class="u-font-md u-mb-md">
				Send up to 6 submixed stereo stems to provide me with more control in
				the mastering stage. If you have a mix that’s pretty close but not quite
				there, this can be a good option.
			</p>
		</TextBlock>
	</MulticolBlock>

	<MulticolBlock>
		<TextBlock>
			<h2 id="song-production">Song production</h2>
			<p class="u-subhead u-sun-light-color">
				<strong>$80 per song</strong>
				<span class="u-cyan-light-color">
					Or <strong>free with studio time</strong>
				</span>
			</p>
			<p class="u-font-md u-mb-md">
				The best way to a great is recording is by starting out with a great
				song. I’ll help you workshop structure, melodies, lyrics, grooves, chord
				progressions, riffs — whatever the song needs!
			</p>
		</TextBlock>
		<TextBlock>
			<h2 id="editing">Editing</h2>
			<p class="u-subhead u-sun-light-color">
				<strong>$40 per song</strong>
				<span class="u-cyan-light-color">
					Or <strong>free with mix</strong>
				</span>
			</p>
			<p class="u-font-md u-mb-md">
				From composite takes, to quantization, to tuning — I know not just how
				to use the tools available, but when and how much to use them.
			</p>
		</TextBlock>
	</MulticolBlock>

	<MulticolBlock>
		<TextBlock>
			<h2 id="design">Graphic design</h2>
			<p class="u-subhead u-sun-light-color">
				<strong>$40 flyer design</strong>
				<span class="u-cyan-light-color">
					• <strong>$60 album art</strong>
				</span>
			</p>
			<p class="u-font-md u-mb-md">
				If you’ve noticed that The Welcoming has nice album art and flyer
				design, or that this website looks good and is easy to use, that's
				because I spent over a decade as a designer. Though I’m currently
				(finally) all in on music and audio production, I’m happy to help
				elevate other artists visually too.
			</p>
		</TextBlock>
		<TextBlock>
			<h2 id="website">Custom website</h2>
			<p class="u-subhead u-sun-light-color">
				<strong>$400 full site</strong>
				<span class="u-cyan-light-color">
					• <strong>$200 EPK one pager</strong>
				</span>
			</p>
			<p class="u-font-md u-mb-md">
				For a number of years, making websites was my primary focus and source
				of income. It’s time-consuming work, not nearly as fulfilling as audio
				production, and on track to be largely taken over by AI, but I’ll still
				design and build a legitimate website for local artists because I’m
				invested in growing the local music scene however I can.
			</p>
		</TextBlock>
	</MulticolBlock>

	<GalleryWrapper heading="Design samples">
		<svelte:fragment slot="subhead">
			More non-audio examples at <a
				href="https://jamesferrell.me"
				target="_blank"
				rel="noopener noreferrer"
			>
				jamesferrell.me
			</a>
		</svelte:fragment>

		<Gallery items={designs} slug="design" />
	</GalleryWrapper>

	<Mic heading="Let’s get started" showButton imgSlug="james-outside">
		<p>
			I offer competative pricing because I know how hard it is out there. But
			if I’m still outside of your budget, contact me and we’ll work
			something out!
		</p>
	</Mic>
</main>

<style lang="scss" global>
	.hero-img[src*='services'] {
		object-position: 75% 0%;
	}

	.mic + .callout {
		margin-top: -$sp-lg;
	}

	.gallery + .mic {
		margin-top: $sp-xxl * 2;
	}
</style>
