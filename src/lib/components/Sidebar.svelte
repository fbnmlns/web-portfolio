<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	const links = [
		{ index: '00', name: 'INTRODUCTION', path: '#introduction' },
		{ index: '01', name: 'PROJECTS', path: '#projects' },
		{ index: '02', name: 'RESUME', path: '#resume' },
		{ index: '03', name: 'ABOUT ME', path: '#about-me' },
		{ index: '04', name: 'CONTACT', path: '#contact' }
	];
</script>

<aside
	id="default-sidebar"
	class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
	aria-label="Sidebar"
>
	<div class="h-full px-3 py-4 overflow-y-auto bg-primary section-aside">
		<ul class="ml-7 mt-28">
			{#each links as link}
				<li>
					<a
						href="{base}/{link.path}"
						class:active={$page.url.hash === link.path}
						class="flex items-center p-5 text-sm"
					>
						<span class="ml-3">{link.index}</span>
						<span class="ml-3">{link.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</aside>

<style lang="scss">
	.section-aside {
		font-family: 'Lato', sans-serif;

		ul {
			font-weight: 600;
			color: #5c6b81;

			a {
				border-image-slice: 1;
				border-left: 2px solid #28343d;
				transition: 0.3s;

				&:hover {
					color: #f0f0f0;
					border-image-source: linear-gradient(
						to bottom,
						#ff6b6b,
						#ffda77,
						#80ffdb,
						#94bfff,
						#eaa8ff
					);
				}

				&.active {
					color: #f0f0f0;
					border-image-source: linear-gradient(to top, #ff6b6b, #ffda77, #80ffdb, #94bfff, #eaa8ff);
				}
			}
		}
	}
</style>
