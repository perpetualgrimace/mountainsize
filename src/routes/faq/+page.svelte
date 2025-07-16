<script>
	import Meta from '$lib/Meta.svelte';

	import Hero from '$lib/Hero/index.svelte';
	import HeroHeadline from '$lib/Hero/HeroHeadline.svelte';
	import Callout from '$lib/Callout.svelte';
	import CalloutGroup from '$lib/CalloutGroup.svelte';
	import TextBlock from '$lib/TextBlock.svelte';

	import Mic from '$lib/Mic.svelte';
	import BulletList from '$lib/BulletList.svelte';
</script>

<Meta
	title="Mountainsize Answers"
	description="Frequently asked questions, along with questions I wish people asked more frequently."
/>

<Hero imgSlug="faq-hero">
	<HeroHeadline>
		Frequently
		<span class="u-sun-light-color"> Asked </span>
		<span class="u-cyan-light-color"> Questions</span>
	</HeroHeadline>
</Hero>

<main class="wrapper faq-wrapper">
	<TextBlock>
		<h2>What should I bring to a session?</h2>
		<p class="u-font-lg">
			Bring any gear that you might want to use. I have a nice selection of
			instruments as well, we can decide together what sounds right!
		</p>
		<p class="u-font-lg">
			Also bring any in-ear monitors or closed back headphones that you
			like using. I can provide some if needed, so no sweat if you don’t
			own any!
		</p>
	</TextBlock>

	<TextBlock>
		<h2>What’s the typical session schedule?</h2>
		<p class="u-font-lg">
			We’re on musician time, so we typically get started at noon and go until
			we start getting tired. I’ll be in touch the morning of the session in
			case I can get started earlier, and we can make other arrangements ahead
			of time if needed.
		</p>
		<p class="u-font-lg">
			We’ll often break for lunch after a few hours, or I have snacks if money
			is tight (or if you like snacks).
		</p>
	</TextBlock>

	<TextBlock>
		<h2>What should I do to prepare for a session?</h2>
		<BulletList fontSize="lg">
			<li>
				Know the songs inside and out! If you’re more prepared, you’ll be more
				confident, and we’ll get better results more quickly.
			</li>
			<li class="u-mb-0">
				Send me recordings of the songs before the day of the session, even if
				that’s just a quick phone recording. It’ll help me prep and plan!
			</li>
		</BulletList>
	</TextBlock>

	<TextBlock>
		<h2>Where is the studio located?</h2>
		<p class="u-font-lg">
			I’m in South Asheville near <a
				href="https://maps.app.goo.gl/gGQDerUJMrQMAFsD7"
				target="_blank"
				rel="noopener noreferrer"
			>
				the intersection of Sweeten Creek and Mills Gap</a
			>.
		</p>

		<p class="u-font-lg">
			That’s as descriptive as I’d like to get here on the world wide web, but
			if you book a session or studio tour I’ll obviously get you the address!
		</p>
	</TextBlock>

	<TextBlock>
		<h2>What’s the drug policy?</h2>
		<p class="u-font-lg">
			No drugs in the studio (outside is cool), and please keep drinking to a
			minimum. I’m not here to judge, but I am here to work — if you want the
			best results, you’ll want to be able to perform at your best.
		</p>
	</TextBlock>

	<TextBlock>
		<h2>I don’t live near Asheville, do you offer lodging?</h2>
		<p class="u-font-lg">
			I do! I have a guest bed, a day bed, and a big couch, and can accommodate
			around five people comfortably. Beyond that, you’ll need air mattresses.
		</p>
		<p class="u-font-lg">
			I don’t charge for lodging, so come get professionally recorded and hang
			out in Asheville for about the same cost as an AirBnB! Just promise to be
			cool and clean up after yourself.
		</p>
	</TextBlock>

	<TextBlock>
		<h2>Is remote collaboration an option?</h2>
		<p class="u-font-lg">
			Absolutely, I enjoy working on both in person and remote projects!
		</p>
	</TextBlock>

	<TextBlock>
		<h2>
			I want to handle some parts of the recording on my own, is that cool?
		</h2>
		<p class="u-font-lg">
			Absolutely! And feel free to send me reference files as you go, I may have
			advice or hear issues that we can fix.
		</p>
	</TextBlock>

	<TextBlock>
		<h2>
			I need to send tracks for you to mix — how should they be formatted?
		</h2>
		<BulletList fontSize="lg">
			<li>Clearly named .wav files, ideally 44.1/48K and 24 bit.</li>
			<li>Send each track without effects.</li>
			<li>
				For tracks where you used effects and achieved a vibe that you like,
				send those with effects too.
			</li>
			<li>Send guitar / bass DIs as well as amp tones if you can.</li>
		</BulletList>
	</TextBlock>

	<TextBlock>
		<h2>Any tips on tracking?</h2>
		<BulletList fontSize="lg">
			<li>
				<span class="u-cyan-light-color">For vocals:</span> sing loudly from
				your diaphragm, over-enunciate, sing with emotion.
			</li>
			<li>
				<span class="u-cyan-light-color">For guitars & bass:</span> tune to the
				attack, not the sustain; tune before each part so that the notes you’re
				hitting are in tune; pick like your mean it; always capture a DI.
			</li>
			<li>
				<span class="u-cyan-light-color">For drums:</span> this is a deep topic,
				and took me years to get right — ideally, come track drums here and I’ll
				show you how it’s done! But at the very least, hit rim shots on the snare.
			</li>
		</BulletList>
	</TextBlock>

	<TextBlock>
		<h2>Your output is solid — why are your rates so affordable?</h2>
		<BulletList fontSize="lg">
			<li>
				In this relatively early stage of my career, it’s much more important
				for me to establish myself and build trust — I don’t want money to get
				in the way of that!
			</li>
			<li>
				Low overhead. The cost of the studio is the cost of my
				mortgage + utilities.
			</li>
			<li>
				I’m thrifty. I do have some nice gear and mics but I’m not likely to
				spend thousands when I can get a similar result from something that
				costs hundreds.
			</li>
		</BulletList>
	</TextBlock>

	<TextBlock>
		<h2>I’m on the fence. Will you do a test mix?</h2>
		<p class="u-font-lg">
			Absolutely! Please contact me and we’ll get started.
		</p>
	</TextBlock>

	<TextBlock>
		<h2>Can you give me a discount?</h2>
		<p class="u-font-lg">
			I provide discounts on multiple services! Contact me and we’ll work
			something out.
		</p>
	</TextBlock>

	<TextBlock>
		<h2>
			Why is your studio one big room instead of the standard control room /
			live room setup?
		</h2>
		<p class="u-font-lg">
			Drums sound better in a bigger space! So splitting the room up didn’t feel
			like a good option.
		</p>
		<p class="u-font-lg">
			Eventually I would like to build onto the existing space and have a real
			control room plus an amp closet or two!
		</p>
	</TextBlock>

	<TextBlock>
		<h2>Why do you have two drum kits in the studio?</h2>
		<BulletList fontSize="lg">
			<li>It makes drum instruction easier.</li>
			<li>I suffer from Gear Aquisition Syndrome.</li>
		</BulletList>
	</TextBlock>

	<TextBlock>
		<h2>Why did you name your recording studio Mountainsize Audio?</h2>
		<BulletList fontSize="lg">
			<li>The studio is nestled in the mountains of Asheville NC.</li>
			<li>I like big sounding audio, and mountains are very big.</li>
			<li>
				There was a band named <a
					href="https://open.spotify.com/artist/0Opj9xi9HHrH0L9uHAKnKm/discography/all"
					target="_blank"
					rel="noopener noreferrer"
				>
					Oceansize
				</a> that I like, their name “inspired” Mountainsize.
			</li>
			<li>
				I thought the name would be easy to google — although I hadn’t
				considered that search engines would correct it to “mountainside” or
				that people would misread it as “mountainsized” or “mountain size.”
			</li>
		</BulletList>
	</TextBlock>

	<TextBlock>
		<h2>Are you in a band?</h2>
		<p class="u-font-lg">
			Yeah! I handle the bulk of the writing and recording for my prog
			rock/metal band <a
				href="https://thewelcomingmusic.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				The Welcoming</a
			>.
		</p>
		<p class="u-font-lg">
			You can also catch me on drums for the occasional <a
				href="https://www.instagram.com/broken_sound309/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Broken Sound
			</a> show.
		</p>
	</TextBlock>

	<Mic
		heading="Still have questions?"
		showButton
		imgSlug="james-outside"
		buttonText="Ask away"
	>
		<p>
			That’s cool, I tend to get along with people that have a sense
			of curiosity!
		</p>
	</Mic>
</main>

<style lang="scss" global>
	@media (max-width: 599px) {
		.faq-wrapper .text-block {
			margin-bottom: $sp-lg;
		}
	}
	.faq-wrapper .bullet-list li:last-child {
		margin-bottom: -$sp-xs;
	}
</style>
