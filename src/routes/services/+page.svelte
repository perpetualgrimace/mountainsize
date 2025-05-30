<script>
	import Meta from '$lib/Meta.svelte';

	import Hero from '$lib/Hero/index.svelte';
	import HeroHeadline from '$lib/Hero/HeroHeadline.svelte';
	import HeroParagraph from '$lib/Hero/HeroParagraph.svelte';
	import Callout from '$lib/Callout.svelte';
	import TextBlock from '$lib/TextBlock.svelte';

	import Fretboard from '$lib/Fretboard/index.svelte';
	import Fret from '$lib/Fretboard/Fret.svelte';

	import Mic from '$lib/Mic.svelte';
	import BulletList from '$lib/BulletList.svelte';
</script>

<Meta
	title="Mountainsize Services"
	description="Recording, mixing, mastering, editing, production, session musician, design & web development. Affordable, no bullshit pricing."
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
		<h2>Project flat rates</h2>
		<p class="u-subhead u-sun-light-color">
			<strong>Limited special (through the end of January 2025): </strong>
			<br /><span class="u-sun-light-color">
				Free mix & master if the song was tracked here
			</span>
		</p>
		<p class="u-font-lg">
			I charge a flat rate for the work I do on my own time. I want to make sure
			you’re happy with my work, so I won’t rush it!
		</p>
	</TextBlock>

	<Fretboard>
		<Fret title="Mixing" subhead="$100/song" subheadColor="sun" imgSlug="rack">
			<p>
				It’s exciting to hear the results of all the hard work come together in
				the mix stage. I’ll make sure every instrument is audible and has its
				own space in the mix, with the most important elements up front.
			</p>
			<p>
				This is also where I will do any necessary editing. We’ll talk
				beforehand to determine how much editing will be needed.
			</p>
			<p>
				An additional $50 charge applies for songs longer than 4:44 — longer
				songs are more work!
			</p>
			<p>
				On the other hand, I’ll cut you a deal if we’re mixing multiple songs.
				And I’m happy to do a free test mix if you’re on the fence!
			</p>
		</Fret>
		<Fret
			title="Mastering"
			subhead="$30/song"
			subheadColor="sun"
			imgSlug="headphones"
		>
			<p>
				When budget allows, I like to take advantage of a separate mastering
				professional’s fresh ears.
			</p>
			<p>
				But in the event that this isn’t feasible, I can bring out that extra
				5-10% of volume and fidelity myself.
			</p>
		</Fret>
		<Fret
			title="Session musician"
			subhead="$150/song"
			subheadColor="sun"
			imgSlug="student-kit"
		>
			<p>Bring your music to life with a killer drum sound and performance!</p>

			<p>
				Whether you’ve programmed drum parts and want them performed faithfully
				or trust me to do my own thing, you won’t be disappointed.
			</p>
			<p>
				I’m happy to lay down bass, auxilliary percussion, or backing
				vocals too. Consider me an extra band member for your project!
			</p>
			<p>I’ll also mix the song for half price if I’m playing on it!</p>
		</Fret>
	</Fretboard>

	<Callout>
		<h3>Project payment policy</h3>
		<BulletList>
			<li>50% deposit required up front.</li>
			<li>
				Remainder due upon project completion, or one month after project start
				— whichever comes first. You won’t be waiting long on me!
			</li>
		</BulletList>
	</Callout>

	<TextBlock>
		<h2>In studio time</h2>
		<p class="u-subhead u-sun-light-color">$200/day • $40/hour</p>
		<p class="u-font-lg">
			My day rate is the best deal — I’d rather spend my time counting measures
			than minutes. But I also offer an hourly rate for when that makes
			more sense. I’m flexible!
		</p>
	</TextBlock>

	<Fretboard>
		<Fret
			title="In-studio recording sessions"
			subhead="The right sounds, right at the source"
			imgSlug="studio"
		>
			<p>
				If you’ve ever tried throwing a couple of mics on an out of tune drum
				kit in a room with low ceilings, you know that no amount of EQ and
				compression will make it sound like a professionally recorded big rock
				drum kit.
			</p>
			<p>
				Same with a poorly mic’d guitar cab. We’re inches away from a sound
				that’s fizzy or muffled.
			</p>
			<p>
				Before we record a single note, we’ll make sure we’re using the right
				gear, microphones, and mic positions for the job.
			</p>
			<p>
				Once we get started, I’ll push you to get your best performance
				possible, so we can do as little editing as possible. We’ll choose and
				comp takes together as we go.
			</p>
		</Fret>
	</Fretboard>

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

	<br />

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
</style>
