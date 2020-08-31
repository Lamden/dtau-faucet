<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    //Props
    export let id = "";
    export let styles = ''; 
    export let borderColor;
    export let icon = undefined;
    export let value;
    export let label = '';
    export let placeholder = '';
    export let required = false;
    export let width = '100%';
    export let height = 'unset';
    export let margin = 'unset';
    export let backgroundColor = '';
    export let spellcheck = false;
    export let rows = '1'
    export let readonly = false

    export let thisInput = null;

    let isFocused = false;

    const dispatchChanged = (e) => {
        dispatch('changed', e);
    }

    const dispatchKeyUp = (e) => {
        dispatch('keyup', e);
    }

    const handleClick = () => {
        dispatch('iconClick', value);
    }

</script>

<style>
.inputbox{
    margin-top: -1rem;
}
label{
    position: relative;
    top: 10px;
    left: 12px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    padding: 0 4px;
    color: var(--font-primary-dark);
}
.outter-box{
    align-items: center;
    width: 100%;
    min-height: 42px;
    border: 1px solid #e0e0e03d;
    box-sizing: border-box;
    transition: border 0.5s;
    border-radius: 4px;
    padding: 8px;
}
.mainbox{
    display: flex;
    align-items: center;
    background: none;
    border: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: var(--font-primary);
    letter-spacing: 0.44px;
}

.mainbox:focus{
    outline: none; 
    
}

.focus{
    border: 1px solid var(--primary-color);
}
.mainbox::-webkit-input-placeholder { 
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.44px;
    color: var(--font-primary-dark);
}

/* Chrome, Safari, Edge, Opera */
.mainbox::-webkit-outer-spin-button,
.mainbox::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.mainbox:-webkit-autofill,
.mainbox:-webkit-autofill:hover, 
.mainbox:-webkit-autofill:focus
 {
  -webkit-text-fill-color: var(--font-primary);
  box-shadow: 0 0 0px 1000px var(--bg-color) inset;
}

</style>
<div class="inputbox" style={`width: ${width}; margin: ${margin};`} >
    <label style={`background: ${backgroundColor || 'var(--bg-color)'};`}> {label} </label>
    <div class="flex-row outter-box" style={`border: 1px solid ${borderColor}`} class:focus={isFocused && !borderColor} >
        <!-- svelte-ignore a11y-autofocus -->
        <input
            id={id}
            bind:value={value}
            bind:this={thisInput}
            on:change={(e) => dispatchChanged(e)}
            on:keyup={(e) => dispatchKeyUp(e)}
            class="mainbox input:required:invalid input:focus:invalid"
            style={`width: 100%; height: ${height}; ${styles}`}
            placeholder={placeholder}
            required={required}
            spellcheck={false}
            on:focusin={() => {isFocused = true}}
            on:focusout={() => {isFocused = false}}  />   
    </div>
</div>