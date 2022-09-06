<script>
  import IconButton from '../elements/IconButton.svelte';
  export let elementId, basicData, detail1, detail2, coreFacts, styling; 

  const removedElementByIndex = (arr, idx) => arr.filter((_, i) => i != idx);

  const addFact = () => {
    coreFacts.push({ title: '', text: '' });
    coreFacts = coreFacts;
  }

  const removeFact = (index) => {
    coreFacts = removedElementByIndex(coreFacts, index);
  }

  const addDetail1 = () => {
    detail1.items.push('');
    detail1 = detail1;
  }

  const removeDetail1 = (index) => {
    detail1.items = removedElementByIndex(detail1.items, index);
    detail1 = detail1;
  }

  const addDetail2 = () => {
    detail2.items.push('');
    detail2 = detail2;
  }

  const removeDetail2 = (index) => {
    detail2.items = removedElementByIndex(detail2.items, index);
    detail2 = detail2;
  }
</script>

<div id={elementId} class="card" style={`background-color: ${styling.colors.background}`}>
  <div class="inner">
    <h2>Basic Info</h2>
    <div class="row">
      <div class="label">Title:</div>
      <input id="title" bind:value={basicData.title}/>
    </div>
    <div class="row">
      <div class="label">Link Text:</div>
      <input id="link-test" bind:value={basicData.link.title}/>
    </div>
    <div class="row">
      <div class="label">Link URL:</div>
      <input id="link-url" bind:value={basicData.link.url}/>
    </div>
    <div class="row">
      <div class="label">Image 1 URL:</div>
      <input bind:value={basicData.mainPhoto}/>
    </div>
    <div class="row">
      <div class="label">Image 2 URL:</div>
      <input bind:value={basicData.altPhoto}/>
    </div>

    <hr/>
    <div class="row">
      <h2>Core Facts</h2>
      <IconButton name='Add' icon="./add-white.png" onClick={addFact} small={true}/>
    </div>
    {#each coreFacts as fact, i}

      <div class="row">
        <div class="label">Fact Title:</div>
        <input bind:value={fact.title}/><br>
        <IconButton name='Remove' icon="./remove-white.png" onClick={() => removeFact(i)} small={true}/>
      </div>
      <div class="row">
        <div class="label">Description:</div>
        <input bind:value={fact.text}/>
      </div>
    {/each}
    <hr/>

    <div class="row">
      <h2>Detail Pane 1</h2>
      <IconButton name='Add' icon="./add-white.png" onClick={addDetail1} small={true}/>
    </div>
    <div class="row">
      <div class="label">Title:</div>
      <input bind:value={detail1.title}/>
    </div>
    {#each detail1.items as detail, i}
    <div class="row">
      <div class="label">Detail:</div>
      <input bind:value={detail}/>
      <IconButton name='Remove' icon="./remove-white.png" onClick={() => removeDetail1(i)} small={true}/>
    </div>
    {/each}
    <hr/>

    <div class="row">
      <h2>Detail Pane 2</h2>
      <IconButton name='Add' icon="./add-white.png" onClick={addDetail2} small={true}/>
    </div>
    <div class="row">
      <div class="label">Title:</div>
      <input bind:value={detail2.title}/>
    </div>
    {#each detail2.items as detail, i}
    <div class="row">
      <div class="label">Detail:</div>
      <input bind:value={detail}/>
      <IconButton name='Remove' icon="./remove-white.png" onClick={() => removeDetail2(i)} small={true}/>
    </div>
    {/each}
  </div>
</div>

<style>
  input {
    border: 0px;
    padding: 0.2em;
    min-width: 280px;
    width: 540px;
    max-width: 80vw; 
    margin: 0.1em;
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  h2 {
    margin: 0.2em 0.2em 0.2em 0;
  }

  .label {
    min-width: 140px;
    width: 140px;
    font-size: 16px;
  }

  hr {
    border: 1px solid #fff;
    margin: 0.5em 0;
  }

  .inner {
    /* border: 3px solid #fff; */
    padding: 0 1em;
    text-align: start;
  }

  a {
    width: 100%;
    display: inline-block;
    text-align: center;
    color: #fff;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .card {
    margin-left: auto;
    margin-right: auto;
    max-width: 68em;
    background-color: rgba(0, 172, 216, 0.4);
    min-height: 100vh;
    padding: 0.8em;
    margin-top: 1em
  }

  .child {
    width: 30em;
    padding: 0.2em;
    min-width: 240px;
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;
  }

</style>
