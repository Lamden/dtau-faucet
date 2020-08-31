<script>
	//Components
	import InputBox from './InputBox.svelte'

	//Images
	import lamdenLogo from '../../static/img/lamden_logo_new.svg'
	import lamdenWords from '../../static/img/lamden_words.svg'

</script>

<style>
	nav{
		width: 100%;
		border-bottom: 1px solid var(--font-grey);
	}
	div {
		z-index: 50;
		padding: 2rem;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		max-width: 1920px;
    	
	}
	div > span:first-child{
		width: 35px;
	}
	div > span:last-child{
		width: 125px;
		margin-left: 15px;
	}

	@media (min-width: 500px) {
		div{
			justify-content: flex-start;
		}
	}

	@media (min-width: 850px) {
		div{
			padding: 2rem 4rem;
		}
	}

</style>

<nav>
	<div class="flex-row">
		<span >{@html lamdenLogo}</span>
		<span>{@html lamdenWords}</span>
	</div>

</nav>

