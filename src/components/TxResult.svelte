<script>
    import { createEventDispatcher } from 'svelte';

    import Button from './Button.svelte'

    import successIcon from '../../static/img/icon_success_circle.svg'
    import errorIcon from '../../static/img/icon_error-circle.svg'

    const dispatch = createEventDispatcher();

    export let res;

    let assertionError = /AssertionError\(\'(.+)\'/

    $: hasErrors = res.errors ? res.errors.length > 0 ? true : false : false
    $: faucetError = hasErrors ? parseErrors(res.errors) : false;

    let successMessage = "dTAU Sent!  Check your wallet."

    const parseErrors = (errors) => {
        let errorString = "";
        let assertion;
        errors.forEach(error => {
            if (error.includes('AssertionError')) assertion = error.match(assertionError)
            else errorString = errorString.length > 0 ? errorString + ', ' + error : error
                 
        });
        console.log({assertion, errorString})
        if (assertion) return assertion[1];
        return errorString;
    }

</script>

<style>
.error{
    color:red;
    margin: 0;
}
p{
    margin: 1rem 0 0;
}
span{
    width: 23px;
    margin-right: 1rem;
}
.flex-row{
    align-items: baseline;
}
.no-hash{
    margin: 0;
}
.overflow{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
h1{
    margin: 0 0 2rem 0;
    font-size: 47px;
}

</style>

<div class="flex-row">
    <span>{@html hasErrors? errorIcon : successIcon}</span>
    <h1>Transaction {hasErrors ? 'Failed' : 'Success'}</h1>
</div>

{#if hasErrors}
    <p class="error">{faucetError}</p>
{/if}
<p>Address:</p>
<div class="overflow">
    <a href="{`https://testnet.lamden.io/addresses/${res.account}`}" target="_blank" rel="noreferrer noopener">{res.account}</a>
</div>


<p>Transaction Details:</p>
{#if res.hash}
    <div class="overflow">
        <a href="{`https://testnet.lamden.io/transactions/${res.hash}`}" target="_blank" rel="noreferrer noopener">{res.hash}</a>
    </div>
{:else}
    <p class="no-hash">No Hash</p>
{/if}

<Button name="HOME" width="232px" color="purple" margin="2rem 0 0" click={() => dispatch('reset')} />
