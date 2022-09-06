<script>
  export let title, items;

</script>

<div class="card">
  <div class="inner">
    <h2>{title}</h2>
    <hr/>
    <ul>
      {#each items as item}
        <li><p>{item}</p></li>
      {/each}
    </ul>
  </div>
</div> 

<style>
  .card {
    background-color: #fff;
    padding: 1em;
  }

  h2 {
    text-align: center;
    font-size: 1.6em;
  }

  p {
    font-size: 0.7em;
    margin: 0;
    padding: 0;
    text-align: left;
  }

  h2, p {
    color: #121278;
  }

  hr {
    border: 1px solid #121278;
  }

  .inner {
    border: 2px solid #121278;
    padding: 0.5em;
  }

  ul li::marker {
    color: #121278;
  }

</style>