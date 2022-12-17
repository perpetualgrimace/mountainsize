<script context="module">
	let player;

	export function togglePlay() {
		player.paused ? player.play() : player.pause();
	}
	export function forcePlay() {
		setTimeout(() => {
			player.play();
		}, 20);
	}
</script>

<script>
	export let src;
</script>

<audio class="player-audio" bind:this={player} {src} />

<style global lang="scss">
	.player-audio {
		display: none;
	}
</style>
