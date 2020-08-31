<script>
	import Nav from '../components/Nav.svelte'
	import MadeWithLove from '../components/MadeWithLove.svelte'
</script>

<style>
	main {
		position: relative;
		max-width: 38em;
		padding: 3rem 2em;
		margin: 0 auto;
		box-sizing: border-box;
		flex-grow: 1;
		width: 100%;
	}
</style>

<Nav />
<main>
	<slot></slot>
</main>
<MadeWithLove />