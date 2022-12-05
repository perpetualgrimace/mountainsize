<script>
	import Hero from '$lib/Hero/index.svelte';
	import HeroHeadline from '$lib/Hero/HeroHeadline.svelte';
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
		<span class="u-cyan-light-color">I don’t suck at</span>
	</HeroHeadline>
</Hero>

<main class="wrapper">
	<TextBlock>
		<h2>Audio engineering & production</h2>
		<p class="u-subhead u-sun-light-color">$100/day introductiory rate</p>
		<p class="u-font-lg">
			I’d rather spend my time making music than counting minutes and hours —
			I’m sure you feel the same. So to keep things simple, I charge a day rate
			for all audio production services.
		</p>
		<p class="u-font-lg">
			I typically get started around noon and work for whatever amount of time
			makes sense. If we finish with one stage with time and energy to spare, we
			can continue onto the next.
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
			title="Audio engineering"
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
		</Fret>

		<Fret
			title="Tracking & editing"
			subhead="“Good enough” is never good enough"
			imgSlug="lp"
		>
			<h4>Tracking</h4>
			<p>
				I’ll push you to get your best performance possible, so we can do as
				little editing as possible. We’ll choose and comp takes together
				as we go.
			</p>

			<h4>Editing</h4>
			<p>
				Overly edited takes feel robotic, but unedited takes can feel sloppy. I
				typically edit by hand in a way that feels tight but natural, depending
				on the project.
			</p>
		</Fret>

		<Fret
			title="Mixing & mastering"
			subhead="If we didn’t cut any corners, this is the easy part"
			imgSlug="rack"
		>
			<h4>Mixing</h4>
			<p>
				It’s exciting to hear the results of all the hard work come together in
				the mix stage.
			</p>
			<p>
				I’ll make sure every instrument is audible and has its own space in the
				mix, with the most important elements up front.
			</p>

			<h4>Mastering</h4>
			<p>
				When budget allows, I like to take advantage of a separate mastering
				professional’s fresh ears.
			</p>
			<p>But if not, I can bring out that extra volume and fidelity myself.</p>
		</Fret>
	</Fretboard>

	<TextBlock>
		<h3>Recording session payment policy</h3>
		<BulletList>
			<li>
				25% deposit required at time of booking; non-refundable if cancelled
				within 7 days of scheduled session.
			</li>
			<li>Additional 25% of project estimate due on the first session.</li>
			<li>Remaining 50% due upon project completion.</li>
		</BulletList>
	</TextBlock>

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
				It’ll punch well above its weight when I’m through with it!
			</p>
			<p>
				I can do some mods as well. And if something is wrong, I can help you
				diagnose and fix the issue — amps included.
			</p>
			<p>
				If I can’t do the job then I won’t charge you, and I’ll do my best to
				recommend someone who can.
			</p>
		</Fret>

		<Fret
			title="Drum lessons"
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
