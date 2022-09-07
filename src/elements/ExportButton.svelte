<script>
  export let elementId;
  import IconButton from './IconButton.svelte';
  import saveDomElementAsJpeg from '../backend/SaveDomElementAsJpeg';

  const onClick = () => {
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
    saveDomElementAsJpeg(elementId, `catalog-tile-${dateStr}`);
  }
</script>

<IconButton name="Export Jpeg" onClick={onClick} isMobileHidden={false} icon="./img/photo2.png" />
