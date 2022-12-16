<script context="module">
	let player;

	export function togglePlay() {
		player.paused ? player.play() : player.pause();
	}
</script>

<script>
	export let src;
</script>

<div class="player">
	<audio class="player-audio" bind:this={player} {src} controls>
		<track class="player-track" kind="captions" />
	</audio>
</div>

<style global>
	.player {
		width: 100%;
		display: none;
	}
</style>
