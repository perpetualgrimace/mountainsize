<script>
	import Hero from '$lib/Hero/index.svelte';
	import HeroHeadline from '$lib/Hero/HeroHeadline.svelte';
	import Callout from '$lib/Callout.svelte';
	import TextBlock from '$lib/TextBlock.svelte';

	import Fretboard from '$lib/Fretboard/index.svelte';
	import Fret from '$lib/Fretboard/Fret.svelte';

	import Mic from '$lib/Mic.svelte';
	import BulletList from '$lib/BulletList.svelte';
</script>

<Hero imgSlug="services-hero">
	<HeroHeadline>
		The <span class="u-cyan-light-color">only services</span> I charge for
		<br />are the ones
		<span class="u-cyan-light-color">I’m good at</span>
	</HeroHeadline>
</Hero>

<main class="wrapper">
	<TextBlock>
		<h2>In studio time</h2>
		<p class="u-subhead u-sun-light-color">
			$200/day • $150/half day • $50/hour
		</p>
		<p class="u-font-lg">
			You've probably noticed that my day rate is by far the best deal. That's
			because I’d rather spend my time making music than counting minutes
			and hours.
		</p>
		<p class="u-font-lg">
			That said, I offer half day and hourly rates for when that makes
			more sense.
		</p>
	</TextBlock>

	<Fretboard>
		<Fret
			title="Song production"
			subhead="A great recording requires a great song"
			imgSlug="rig-2"
		>
			<p>A well written song brings the listener on a journey.</p>
			<p>
				There are peaks and valleys to explore, with glimpses of the destination
				along the way. The journey feels familiar, yet new and exciting.
			</p>
			<p>
				There are lots of ways it can go wrong. We walk the line between keeping
				the listener engaged and leaving them behind.
			</p>
			<p>
				I’ll offer my perspective as both a listener and songwriter to stay on
				the right track.
			</p>
		</Fret>

		<Fret
			title="Recording"
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
			<li>Remainder due at the end of the session.</li>
		</BulletList>
	</Callout>

	<TextBlock>
		<h2>Mix & master flat rates</h2>
		<p class="u-subhead u-sun-light-color">
			<strong>Introductory special: Free mix & master</strong>
			<br /><span class="u-cyan-light-color">if the song was tracked here</span>
		</p>
		<p class="u-font-lg">
			Once we’ve finished tracking, there is still a lot of work to be done in
			order to get your song sounding professional.
		</p>
		<p class="u-font-lg">
			This part of the job is best done on my own without distractions. I 
			charge a flat rate per song. Three revisions included.
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
		</Fret>

		<Fret
			title="Mastering"
			subhead="$50/song"
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
	</Fretboard>

	<Callout>
		<h3>Mix & master payment policy</h3>
		<BulletList>
			<li>50% deposit required up front.</li>
			<li>Remainder due upon project completion.</li>
		</BulletList>
	</Callout>

	<TextBlock>
		<h2>Additional services</h2>
		<p class="u-subhead">Level up your skills or gear</p>
	</TextBlock>

	<Fretboard>
		<Fret
			title="Gear maintenance, mods & repair"
			subhead="Priced per project"
			subheadColor="sun"
			imgSlug="drum-repair"
		>
			<p>
				Getting the best takes requires an instrument that is comfortable and
				in tune.
			</p>
			<p>
				I can clean, setup, restore, and tune your neglected guitar or drum kit.
				There’s something I find very satisfying about this sort of work.
			</p>
			<p>
				I can do some mods as well. And if something is wrong, I can help you
				diagnose and fix the issue.
			</p>
			<p>
				If I can’t do the job then I won’t charge you, and I’ll do my best to
				recommend someone who can.
			</p>
		</Fret>

		<Fret
			title="Drum instruction"
			subhead="$20/hour session introductiory rate"
			subheadColor="sun"
			imgSlug="student-kit"
		>
			<p>
				I’ve been playing drums at an increasingly high level for 20+ years.
				Whether you’re just starting out or you’ve been at it for a while, we
				can take your playing to the next level.
			</p>
			<p>
				And even if you have impressive chops, we can work on stuff like how to
				approach learning songs and compose parts, how to mix yourself, and
				tricky concepts like odd time signatures and polymeter.
			</p>
		</Fret>
	</Fretboard>

	<Mic heading="Let’s get started" showButton imgSlug="james">
		<p>Whatever you want to accomplish, together we’ll crush it!</p>
	</Mic>
</main>

<style lang="scss" global>
</style>
