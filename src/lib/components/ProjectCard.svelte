<script lang="ts">
	export let title: string;
	export let description: string;
	export let githubRepositoryLink: string;
	export let imageSource: string;
</script>

<div class="group">
	<div class="max-w-sm rounded-lg overflow-hidden shadow-lg group-hover:scale-110 project-card">
		<a class="" href={githubRepositoryLink} target="_blank">
			<img class="h-56 w-96" src={imageSource} alt="" />
			<div class="px-6 py-4 md:h-32">
				<div class="font-bold text-xl mb-2">{title}</div>
				<p class="font-light text-base">
					{description}
				</p>
			</div>
			<div class="px-4 pt-7 pb-2 h-28">
				<slot />
			</div>
		</a>
	</div>
</div>

<style lang="scss">	
	.project-card {
		border: 2px solid #28343d;
		background-color: #242d3a;

		color: #f0f0f0;

		&:hover {
			box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
		}
	}
</style>
