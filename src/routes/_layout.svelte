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


<svelte:head>
	<title>Lamden Testnet Faucet - Get dTAU</title>

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Lamden Testnet Faucet" />
	<meta name="twitter:description" content="Get dTAU Tokens!" />
	<meta name="twitter:site" content="@LamdenTau" />
	<meta name="twitter:creator" content="www.lamden.io" />
	<meta name="twitter:image" content="https://faucet.lamden.io/logo-192.png" />
	<meta name="twitter:image:alt" content="dTAU Faucet" />

	<meta property="og:url" content="https://faucet.lamden.io" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Lamden Testnet Faucet" />
	<meta property="og:image" content="https://faucet.lamden.io/logo-192.png" />
	<meta property="og:description" content="Get dTAU Tokens!" />
	<meta property="og:image:url" content="https://faucet.lamden.io/logo-192.png" />
	<meta property="og:image:secure_url" content="https://faucet.lamden.io/logo-192.png" />
	<meta property="og:image:width" content="192" />
	<meta property="og:image:height" content="192" />
	<meta property="og:image:type" content="image/png" />
</svelte:head>

<Nav />
<main>
	<slot></slot>
</main>
<MadeWithLove />