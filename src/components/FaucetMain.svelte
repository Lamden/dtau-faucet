<script>
    import { createEventDispatcher } from 'svelte';

    import InputBox from './InputBox.svelte'
    import Button from './Button.svelte'
    
    let inputElm;
    let account = "";
    
    const dispatch = createEventDispatcher();

    const isLamdenKey = ( key ) => {
        const isStringHex = (value) => {
            if (!isStringWithValue(value)) return false;
            let hexRegEx = /([0-9]|[a-f])/gim;
            return (value.match(hexRegEx) || []).length === value.length;
        }
        const isStringWithValue = (value) => {
            if (isString(value) && value !== '') return true;
            return false;
        }
        const isString = (value) => {
            if(Object.prototype.toString.call(value) === "[object String]") return true;
            return false;
        }
        if (isStringHex(key) && key.length === 64) return true;
        return false;
    };

    const give = () => {
        if (isLamdenKey(account)){
            fetch(`/.netlify/functions/send?account=${account}`)
                .then(response => response.json())
                .then(res => {
                    res.account = account
                    dispatch('response', res)
                })
        }else{
            setValidity()
        }
    }

    const setValidity = () => {
        inputElm.setCustomValidity("Invalid Lamden Address");
        inputElm.reportValidity();
    }

    const refreshValidityKeyup = (e) => { 
        if (e.detail.keyCode !== 13) {
            refreshValidity();
        }
    }

    const refreshValidity = (e) => { 
            inputElm.reportValidity();
            inputElm.setCustomValidity('');
    }

</script>

<style>
    p{
        color: var(--font-grey)
    }
</style>

<svelte:head>
	<title>Lamden Testnet Faucet</title>
</svelte:head>

<h1>Lamden Faucet</h1>

<form id="give" on:submit|preventDefault={give}>
    <p>
        Send 100 dTAU "Testnet TAU" to your wallet to transact or send a smart contract on the Lamden testnet. 
        <a href="https://chrome.google.com/webstore/detail/lamden-wallet-browser-ext/fhfffofbcgbjjojdnpcfompojdjjhdim" target="_blank" rel="noreferrer noopener">Download the wallet</a> 
        or  
        <a href="https://www.lamden.io" target="_blank" rel="noreferrer noopener">visit our website</a> to learn more.
    </p>
	<InputBox 
        id="account" 
        bind:value={account} 
        bind:thisInput={inputElm} 
        on:keyup={refreshValidityKeyup}
        on:changed={refreshValidity}
        label="Enter Your Lamden Wallet Address" 
        margin="3rem 0 0"/>
	<Button width="232px" margin="1rem 0" color="purple" submit={true} name="GET DTAU" formId="give" />
</form>
