<script>

	let account = "";
	let message, errors, txHash;

	const give = () => {
		fetch(`/.netlify/functions/send?account=${account}`)
		.then(response => response.json())
		.then(res => {
			if (res.status !== 0) errors = res.errors;
			else {
				message = "dTAU Sent!  Check your wallet."
			}
			txHash = res.hash
			console.log(res)
		})
	}
</script>

<style>
.error{
	color:red;
}
</style>

<svelte:head>
	<title>Lamden Testnet Faucet</title>
</svelte:head>

<h1>GET DTAU</h1>

<form id="give" on:submit|preventDefault={give}>
	<label for="account">Lamden Address</label>
	<input id="account" type="text" bind:value={account} />
	<input type="submit" value={'Get dTAU'} form="give" />
</form>



{#if txHash}
	<p class:error={errors}>{message || errors}</p>
	<a href="{`https://testnet.lamden.io/transactions/${txHash}`}" >{txHash}</a>
{/if}