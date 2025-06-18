<script>
	import studioPhotos from '$lib/data/studioPhotos.json';

	import Meta from '$lib/Meta.svelte';

	import Hero from '$lib/Hero/index.svelte';
	import HeroHeadline from '$lib/Hero/HeroHeadline.svelte';
	import HeroParagraph from '$lib/Hero/HeroParagraph.svelte';

	import Gallery from '$lib/Gallery/index.svelte';
	import GalleryWrapper from '$lib/Gallery/GalleryWrapper.svelte';

	import Testimonials from '$lib/Testimonials.svelte';

	import Button from '$lib/Button.svelte';
	import Diptych from '$lib/Diptych.svelte';
	import Mic from '$lib/Mic.svelte';
	import BulletList from '$lib/BulletList.svelte';
</script>

<Meta />

<Hero imgSlug="home-hero">
	<HeroHeadline>
		Pro recordings, <br />
		<span class="u-cyan-light-color">affordable pricing</span>
	</HeroHeadline>
	<HeroParagraph>
		Mountainsize Audio is a professsional recording studio run by Asheville<span
			class="u-visually-hidden">, North Carolina</span
		>
		audio engineer and multi-instrumentalist James Ferrell.
		<span class="u-visually-hidden">
			Commonly misspelled as "Mountain Size," "Mountainside", "Mountainsized",
			or "Mountain sized."
		</span>
	</HeroParagraph>
	<Button href="contact">Get started</Button>
</Hero>

<main class="wrapper">
	<Diptych slug1="james-desk" slug2="space-drums" />

	<Mic heading="Services" subhead="and pricing" imgSlug="kemper">
		<BulletList multiCol fontSize="lg">
			<li><a href="services#recording">Studio recording</a></li>
			<li><a href="services#mixing">Mixing</a></li>
			<li><a href="services#mastering">Mastering</a></li>
			<li><a href="services#session-musician">Session musician</a></li>
			<li><a href="services#stem-mastering">Stem mastering</a></li>
			<li><a href="services#song-production">Song production</a></li>
			<li><a href="services#editing">Editing</a></li>
			<li><a href="services#design">Graphic design</a></li>
			<li><a href="services#website">Custom website</a></li>
		</BulletList>
	</Mic>

	<Diptych slug1="hanging-out" slug2="james-drums" />

	<Mic heading="The engineer" subhead="James Ferrell" imgSlug="james-guitar">
		<p>
			I’ve spent most of my life learning, performing, and writing everything
			from pop punk to rock to progressive metal, and the past 10+ years
			recording and mixing it. I get the big picture, but also sweat
			the details.
		</p>
	</Mic>

	<Mic heading="The space" subhead="Vibe but versatility" imgSlug="space-1">
		<p>
			The space is a single open 500 sq ft room with over 10 ft ceilings,
			treated with sound panels and bass traps. It’s a comfortable and great
			sounding room that’s tailored for drums, live band tracking, and overdubs.
		</p>
	</Mic>

	<Mic heading="The instruments" subhead="Source is king" imgSlug="drums">
		<p>
			I keep a modest collection of nice instruments (Gibson, Fender, Orange,
			EVH, DW, Meinl, Zildjian, Ludwig, Ibanez, etc). I’m sure you do as well,
			so let’s use whatever sounds right!
		</p>
	</Mic>

	<Mic heading="The microphones" subhead="and studio gear" imgSlug="mics">
		<p>
			The studio is equipped with a variety of nice sounding mics to handle
			everything from live drums to guitar cabs to vocals, 16 mic pres & inputs,
			a Kemper profiler, a selection of nice plugins, and an in-ear monitoring
			rig for independent monitor mixes.
		</p>
	</Mic>

	<GalleryWrapper heading="Studio gallery">
		<svelte:fragment slot="subhead">
			Photos by <a
				href="https://www.vitorsa.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				Vitor Sá
			</a>
		</svelte:fragment>

		<Gallery items={studioPhotos} slug="gallery" />
	</GalleryWrapper>

	<Testimonials />

	<Mic
		heading="Let’s get started"
		showButton
		buttonText="Book a session"
		imgSlug="james-outside"
	>
		<p>
			A good recording opens doors — those I’ve worked with have experienced
			this firsthand!
		</p>
	</Mic>
</main>

<style lang="scss" global>
</style>
