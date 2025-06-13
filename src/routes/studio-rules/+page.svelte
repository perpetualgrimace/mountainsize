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
	title="Mountainsize Rules"
	description="This page inspired by a rare nightmare client."
/>

<Hero imgSlug="rules-hero">
	<HeroHeadline>
		Studio
		<span class="u-sun-light-color">rules </span> and
		<span class="u-cyan-light-color"> recommendations</span>
	</HeroHeadline>
</Hero>

<main class="wrapper">
	<TextBlock>
		<h2>
			<div class="u-sun-light-color u-subhead u-font-lg">Rule #1:</div>
			No smoking inside the studio
		</h2>
		<p class="u-font-lg">
			I don’t judge, but I like to keep my equipment and my lungs clean.
			You should absolutely feel free to step outside for a smoke now and then
			if that’s your thing, but if you smoke so much that I have to air out the
			studio over the next day or two, you will be charged a $100 cleaning fee.
		</p>
	</TextBlock>

	<TextBlock>
		<h2>
			<div class="u-sun-light-color u-subhead u-font-lg">Rule #2:</div>
			No more than two drinks per session
		</h2>
		<p class="u-font-lg">
			Again, I’m not here to judge. But when you’re in the studio you’re here to
			work. If you need a drink or two to calm your nerves, that’s
			understandable. More than that and you’re inhibiting your ability to
			perform and communicate well.
		</p>
		<p class="u-font-lg">
			I’ve had someone drink so much that he started crying during the session
			because he couldn’t pull off his guitar lead, and then he put a dent in my
			Les Paul. Don't be that guy.
		</p>
	</TextBlock>

	<TextBlock>
		<h2>
			<div class="u-sun-light-color u-subhead u-font-lg">Rule #3:</div>
			No back channels
		</h2>
		<p class="u-font-lg">
			In order to make sure everyone is on the same page, we will choose one
			person to represent your group, and all mix feedback will go through them.
			This is to avoid the situation where everyone in the band separately asks
			me to turn up their instrument during the mix stage. We can always
			schedule a group conversation if needed!
		</p>
	</TextBlock>

	<CalloutGroup>
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

		<Callout>
			<h3>Mix & master payment policy</h3>
			<BulletList>
				<li>50% deposit required up front.</li>
				<li>Remainder due upon project completion.</li>
			</BulletList>
		</Callout>
	</CalloutGroup>

	<TextBlock>
		<h2>
			<div class="u-subhead u-font-lg">Recommendation #1:</div>
			Know your music inside and out
		</h2>
		<p class="u-font-lg">
			The best way to feel comfortable during a recording session is to be
			overly prepared. So practice your music until you can play it blindfolded.
			Practice your parts by yourself, and with the rest of the group. Practice
			to a click. Practice, practice, practice. You’ve got this!
		</p>
	</TextBlock>
	<TextBlock>
		<h2>
			<div class="u-subhead u-font-lg">Recommendation #2:</div>
			Send existing recordings before the session
		</h2>
		<p class="u-font-lg">
			This could be a voice memo, a live video, a demo, even a Guitar Pro
			project. I’ll be able to get to work more quickly if I’m familiar with
			the music!
		</p>
	</TextBlock>
	<TextBlock>
		<h2>
			<div class="u-subhead u-font-lg">Recommendation #3:</div>
			Practice playing loudly and consistently
		</h2>
		<p class="u-font-lg">
			Some say that tone is in the hands. This is partially true. If you make
			aggressive music, it will typically sound better if you play aggressively.
			And in a studio setting, consistency is crucial. So practice the perfect
			palm mute or the perfect rim shot<span class="u-cyan-light-color">*</span>
			and try to pull them off every time.
		</p>
		<p class="u-font-md">
			<i class="u-cyan-light-color">
				*Yes, I said the perfect rim shot. If we’re going for a big modern rock
				sound, we want the snare to be as loud as possible compared to the
				cymbals, so rim shots are super important. I was hesitant at first, but
				then I noticed all my favorite drummers were doing it. You’re welcome!
			</i>
		</p>
	</TextBlock>
	<TextBlock>
		<h2>
			<div class="u-subhead u-font-lg">Recommendation #4:</div>
			Prep your gear
		</h2>
		<p class="u-font-lg">
			For any instruments you bring in, make sure guitar/bass strings and drum
			batter heads have been replaced recently — ideally within the past few
			weeks. This makes a huge difference in tone and tuning stability!
		</p>
	</TextBlock>
	<TextBlock>
		<h2>
			<div class="u-subhead u-font-lg">Recommendation #5:</div>
			Don’t bring extra people to the session
		</h2>
		<p class="u-font-lg">
			Anyone who isn't a band member, producer, photographer, or videographer
			should probably sit out the session. It’s easier to stay focused with a
			smaller group, and honestly most people will be bored watching the
			process unfold.
		</p>
		<p class="u-font-lg">
			And due to the nature of the work, the less noise the better. If someone
			opens up a bag of chips in the middle of session, I will send
			them outside!
		</p>
	</TextBlock>

	<Mic
		heading="Hopefully I haven’t scared you off!"
		showButton
		imgSlug="james-outside"
	>
		<p>
			I’m generally pretty reasonable and easy to work with — these guidelines
			are to ensure your session runs smoothly.
		</p>
	</Mic>
</main>

<style lang="scss" global>
</style>
