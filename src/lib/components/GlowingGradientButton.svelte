<script lang="ts">
	export let text: string;
  export let linkedTo: string;
  export let displayLinkedURLTo: string;
</script>


	<div class="relative group">
		<div
			class="
        absolute
        -inset-1
        rounded-2xl
        bg-gradient
        blur
        opacity-75
        group-hover:opacity-100
        group-hover:-inset-2
        transition duration-1000
        group-hover:duration-200"
		/>
		<a
			href={linkedTo}
      target={displayLinkedURLTo}
			class="text-lg relative font-medium py-6 px-11 leading-none rounded-2xl flex items-enter gap-4 btn-gradient"
		>
			<span>{text}</span>
			<slot/>
		</a>
	</div>

<style>
	.btn-gradient {
		color: #eee0d4;
		background-color: #181e27;
		font-family: 'Open Sans', sans-serif;
		border: 2px solid #131820;
	}
</style>
