<script>
	import Hero from '$lib/Hero/index.svelte';
	import HeroHeadline from '$lib/Hero/HeroHeadline.svelte';
	import HeroParagraph from '$lib/Hero/HeroParagraph.svelte';

	import Diptych from '$lib/Diptych.svelte';
	import Artillery from '$lib/Artillery.svelte';
	import BulletList from '$lib/BulletList.svelte';
</script>

<Hero imgSlug="home-hero">
	<HeroHeadline>
		<span class="u-cyan-light-color">Larger than life</span> sounds
		<br />made in
		<span class="u-cyan-light-color">Asheville NC</span>
	</HeroHeadline>
	<HeroParagraph>
		Asheville is more than pretty views and good food.
	</HeroParagraph>
	<HeroParagraph>
		Together, we'll make music so big it can't be ignored.
	</HeroParagraph>
</Hero>

<main class="wrapper">
	<Diptych />

	<Artillery heading="Services" subhead="and pricing">
		<BulletList multiCol fontSize="lg">
			<li><a href="services#song-production">Song production</a></li>
			<li><a href="services#audio-engineering">Audio engineering</a></li>
			<li><a href="services#tracking-editing">Tracking & editing</a></li>
			<li><a href="services#mixing-mastering">Mixing & mastering</a></li>
			<li>
				<a href="services#gear-maintenance-mods-repair">Gear maintenance</a>
			</li>
			<li>
				<a href="services#drum-lessons">Drum lessons</a>
			</li>
		</BulletList>
	</Artillery>

	<Diptych />

	<Artillery heading="The space" subhead="Small but versatile">
		<p>
			The space is a single open 500 sq ft room treated with sound panels and
			bass traps. It’s optimized for writing, recording, and rehearsing.
		</p>
		<p>
			It has its limitations, but I have workarounds and can quickly reconfigure
			the inputs for different scenarios. We’ll work together to determine the
			best approach for your project!
		</p>
	</Artillery>

	<Artillery heading="Instruments" subhead="Source is king">
		<p>
			I keep a modest but versatile collection of nice instruments (Gibson,
			Orange, EVH, DW, Meinl, Yamaha, Ibanez, Schecter, etc). I’m sure you do as
			well, so we’ll use whatever sounds best!
		</p>
	</Artillery>

	<Artillery heading="Microphones" subhead="and audio gear">
		<p>
			I have a variety of nice sounding mics for different applications, a
			Kemper, 16 channels of inputs, and a selection of nice plugins. I employ
			techniques to emulate the sound of analog in the digital realm — best of
			both worlds.
		</p>
	</Artillery>

	<Artillery
		heading="James Ferrell"
		subhead="Studio owner"
		subheadAbove
		showButton
	>
		<p>
			I’ve spent most of my life learning, performing, and writing interesting
			heavy music, and the past 10+ years recording and mixing it. I get the big
			picture, but also sweat the details.
		</p>
		<p>Let’s work together to make your music memorable and massive!</p>
	</Artillery>
</main>

<style lang="scss" global>
</style>
