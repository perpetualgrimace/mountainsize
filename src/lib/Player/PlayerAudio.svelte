<script context="module">
	let player;

	export function togglePlay() {
		player.paused ? player.play() : player.pause();
	}
</script>

<script>
	export let src;
</script>

<audio class="player-audio" bind:this={player} {src} controls>
	<track class="player-track" kind="captions" />
</audio>

<style global lang="scss">
	.player-audio {
		display: none;
	}
</style>
