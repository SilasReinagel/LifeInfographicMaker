<script>
  export let pageName;

  import SiteHeader from './SiteHeader.svelte';
  import SiteFooter from './SiteFooter.svelte';

  import company from '../static-content.js';
</script>

<style>
  section {
    min-height: 80vh;
  }
</style>

<SiteHeader {pageName}/>
<section>
  <slot/>
</section>
<SiteFooter company={company} />

