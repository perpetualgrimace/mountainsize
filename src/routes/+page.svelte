<script>
	import Hero from '$lib/Hero/index.svelte';
	import HeroHeadline from '$lib/Hero/HeroHeadline.svelte';
	import HeroParagraph from '$lib/Hero/HeroParagraph.svelte';

	import Button from '$lib/Button.svelte';
	import Diptych from '$lib/Diptych.svelte';
	import Mic from '$lib/Mic.svelte';
	import BulletList from '$lib/BulletList.svelte';
</script>

<Hero imgSlug="home-hero">
	<HeroHeadline>
		<span class="u-cyan-light-color">Larger than life</span> sounds
		<br />made in
		<span class="u-cyan-light-color">Asheville NC</span>
	</HeroHeadline>
	<HeroParagraph>
		Together, we'll make music so big it can't be ignored
	</HeroParagraph>
	<Button href="contact">Get started</Button>
</Hero>

<main class="wrapper">
	<Diptych slug1="desk" slug2="guitars" />

	<Mic heading="Services" subhead="and pricing" imgSlug="tele">
		<BulletList multiCol fontSize="lg">
			<li><a href="services#mixing">Mixing</a></li>
			<li><a href="services#mastering">Mastering</a></li>
			<li><a href="services#session-musician">Session musician</a></li>
			<li>
				<a href="services#in-studio-recording-sessions">In-studio sessions</a>
			</li>
		</BulletList>
	</Mic>

	<Diptych slug1="guitar-rig" slug2="drums" />

	<Mic heading="The space" subhead="Small but versatile" imgSlug="rack">
		<p>
			The space is a single open 500 sq ft room treated with sound panels and
			bass traps. It’s optimized for writing, recording, and rehearsing.
		</p>
		<p>
			It has its limitations, but I have workarounds and can quickly reconfigure
			the inputs for different scenarios. We’ll work together to determine the
			best approach for your project!
		</p>
	</Mic>

	<Mic heading="Instruments" subhead="Source is king" imgSlug="lp">
		<p>
			I keep a modest but versatile collection of nice instruments (Gibson,
			Fender, Orange, EVH, DW, Meinl, Yamaha, Ibanez, etc).
		</p>
		<p>I’m sure you do as well, so we’ll use whatever sounds best!</p>
	</Mic>

	<Mic heading="Microphones" subhead="and audio gear" imgSlug="mics">
		<p>
			I have a variety of nice sounding mics for different applications, a
			Kemper, 16 channels of inputs, and a selection of nice plugins. I employ
			techniques to emulate the sound of analog in the digital realm — the best
			of both worlds.
		</p>
	</Mic>

	<Mic
		heading="James Ferrell"
		subhead="Studio owner"
		subheadAbove
		showButton
		imgSlug="james"
	>
		<p>
			I’ve spent most of my life learning, performing, and writing interesting
			heavy music, and the past 10+ years recording and mixing it. I get the big
			picture, but also sweat the details.
		</p>
		<p>I will put the same amount of care into your music as I do my own!</p>
	</Mic>
</main>

<style lang="scss" global>
</style>
