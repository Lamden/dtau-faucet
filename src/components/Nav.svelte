<script>
	//Components
	import InputBox from './InputBox.svelte'

	//Images
	import lamdenLogo from '../../static/img/lamden_logo_new.svg'
	import lamdenWords from '../../static/img/lamden_words.svg'

</script>

<style>
	nav {
		z-index: 50;
		border-bottom: 1px solid var(--font-grey);
		padding: 2rem 5rem;
		align-items: center;
		justify-content: flex-start;
	}
	nav> span:first-child{
		width: 35px;
	}
	nav > span:last-child{
		width: 125px;
		margin-left: 15px;
	}

</style>

<nav class="flex-row">
	<span >{@html lamdenLogo}</span>
	<span>{@html lamdenWords}</span>
</nav>

