<script>
  import DetailList from "./DetailList.svelte";
  
  export let elementId, basicData, detail1, detail2, coreFacts, styling; 
  let { title, link, mainPhoto, altPhoto } = basicData;
</script>

<div id={elementId} class="card" style={`background-color: ${styling.colors.background}`}>
  <div class="inner">
    <h1>{title}</h1>
    <hr/>
    <a href={link.url}><b>{link.title}</b></a>
    <hr/>
    <div class="detail-card">
      {#each coreFacts as fact}
        <h3>{fact.title}</h3>
        <p>{fact.text}</p>
      {/each}
    </div>
    <hr/>
    <div class="flow">
      <div class="child image">
        <img src={mainPhoto} alt={`${title} - Main Image`}/>
      </div>
      <div class="child">
        <DetailList title={detail1.title} items={detail1.items} />
      </div>
      <div class="child">
        <DetailList title={detail2.title} items={detail2.items} />
      </div>
      <div class="child image">
        <img src={altPhoto} alt={`${title} - Alternate Image`}/>
      </div>
    </div>
  </div>
</div>

<style>
  h1 {
    width: 100%;
    text-align: center;
    font-size: 2.6em;
  }

  h3 {
    margin-top: 0.5em;
    margin-bottom: 0;;
  }

  p {
    color: #dedede;
    margin: 0;
  }

  .detail-card {
    text-align: center;
  }

  .inner {
    border: 3px solid #fff;
    padding: 0 1em 1em 1em;
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
    margin-top: 1em;
    margin-left: auto;
    margin-right: auto;
    max-width: 68em;
    background-color: #00acd8;
    min-height: 100vh;
    padding: 0.8em;
  }

  .flow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
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
