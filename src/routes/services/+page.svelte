<script>
	import Hero from '$lib/Hero/index.svelte';
	import HeroHeadline from '$lib/Hero/HeroHeadline.svelte';
	import TextBlock from '$lib/TextBlock.svelte';

	import Fretboard from '$lib/Fretboard/index.svelte';
	import Fret from '$lib/Fretboard/Fret.svelte';

	import Artillery from '$lib/Artillery.svelte';
	import BulletList from '$lib/BulletList.svelte';
</script>

<Hero>
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
			I’m sure you feel the same. So I typically get started around noon and
			work for whatever amount of time makes sense. If we finish with one stage
			with time and energy to spare, we can continue onto the next.
		</p>
	</TextBlock>

	<Fretboard>
		<Fret>
			<p>A well written song brings the listener on a journey.</p>
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
		<Fret>Hi</Fret>
	</Fretboard>

	<Artillery heading="heading" subhead="subhead first" subheadAbove showButton>
		<p>hi</p>
	</Artillery>

	<BulletList multiCol>
		<li><a href="">Test</a></li>
		<li>Test</li>
		<li>Test</li>
	</BulletList>
</main>

<style lang="scss" global>
</style>
