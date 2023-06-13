<script lang="ts">
	import { onMount } from "svelte";
    import  _ from "lodash";
    let currency:number = 0;
    let currency1:string = 'USD';
    let currency2:string = 'PHP';
    let amount:number = 1;
    let currencies: Object = {};
    let displayCurrency: string = '';

    async function getCurrency(){
        const res = await fetch(`https://sonub-api.philgo.com/?route=currency.get&from=${currency1}&to=${currency2}`);
        const json=  await res.json();
        return json.response;
    }



    onMount(() => {
       getCurrency().then(value => {
        currency = value.convert;
        currencies = value.currencies.results;
        displayCurrency = currency2;
    });
    })

    function calculateCurrency(){
        getCurrency().then(value => {
            currency = amount * value.convert;
            displayCurrency = currency2;
        })
    }
</script>




<div class="container">
    <h1>Currency Converter</h1>
    <span>amount</span>
    <input class="amount" bind:value={amount} type="text">
    <br>
    <select class="currency" bind:value={currency1}>
        {#each _.orderBy(Object.entries(currencies),[],['asc']) as [name,id]}
            <option value={name}>{name}  {id.currencyName}</option>
        {/each}
    </select>
    <select class="currency" bind:value={currency2}>
        {#each _.orderBy(Object.entries(currencies),[],['asc']) as [name,id]}
            <option value={name}>{name}  {id.currencyName}</option>
        {/each}
    </select>
    <button class="convert" on:click={()=>calculateCurrency()}>convert</button>
    <p class="result">{currency.toFixed(2)} {displayCurrency.toUpperCase()}</p>
</div>


<style>
    .container{
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: pink;
        top:10%;
        right: 50%;
        transform: translateX(50%);
    }
    input,button,.container{
        border-radius: 0.25rem;
    }
    .amount,.currency,.container{
        padding: 0.75rem;
    }
    .currency{
        margin-top: 0.2rem;
    }
    .convert{
        margin-top: 0.5rem;
        padding: 0.5rem;
    }
    .result,.currency{
        text-align: center;
    }
</style>