<script lang="ts">
	export let showOnPx = 20;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<button aria-label="Volver al inicio" class="back-to-top rounded-full p-3 hover:animate-bounce hover:duration-200" on:click={goTop} class:hidden>
  <span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="secondary-color" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
    </svg>    
  </span>
</button>

<style>
	.back-to-top {
		opacity: 1;
		transition: opacity 0.5s, visibility 0.5s;
		position: fixed;
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
		color: #181e27;
		background-color: #eee0d4;
	}

	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
