<script>
	import FaucetMain from '../components/FaucetMain.svelte'
	import TxResult from '../components/TxResult.svelte'

	let account = "";
	let res;

	const handleResponse = (e) => {
		res = e.detail;
		account = res.account;
	}

	const handleReset = () => {
		account = ""
		res = undefined;
	}
</script>

{#if !res}
	<FaucetMain on:response={handleResponse} />
{/if}

{#if res}
	<TxResult {res} on:reset={handleReset}/>
{/if}

