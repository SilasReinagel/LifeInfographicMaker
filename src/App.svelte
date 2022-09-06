<script>
  import { cardData } from './store.js';
  import saveTxtFile from './backend/SaveTxtFile.js';

  import DefaultLayout from './elements/DefaultLayout.svelte';
  import FeedbackForm from './elements/FeedbackForm.svelte';
  import ExportButton from './elements/ExportButton.svelte';
  import IconButton from './elements/IconButton.svelte';
  import CatalogCard from './components/CatalogCard.svelte';
  import CatalogEditor from './components/CatalogEditor.svelte';
  import TextFileUpload from './elements/TextFileUpload.svelte';
  import createNewCardData from './initialCardData.js';

  const exportElementId = "catalog-tile";

  let mode = 'Edit';

  console.log('Render');
  const createNew = () => cardData.set(createNewCardData());
  const useEditMode = () => mode = 'Edit';
  const useViewMode = () => mode = 'View';
  const exportJson = () => saveTxtFile(JSON.stringify($cardData, null, 2), 'InfographicData-' + new Date().getTime() + '.json'); 
  let beginUpload;
	const onJsonImport = j => cardData.set(JSON.parse(j));
</script>

<main>
  <TextFileUpload onTextLoaded={onJsonImport} bind:selectFile={beginUpload}/>
	<DefaultLayout pageName="App">
    <div class="full-app mobile-hidden">
      <div class="controls-bar column">
        <div class="column">
          {#if mode === 'View'}
          <IconButton name="Edit" icon="./edit-button.png" onClick={useEditMode} />
          <ExportButton elementId={exportElementId}/>
          <IconButton name="Save" icon="./save.png" onClick={exportJson} /> 
          {/if}
          {#if mode === 'Edit'}
          <IconButton name="View" icon="./preview.png" onClick={useViewMode} /> 
          <IconButton name="New" icon="./doc.png" onClick={createNew} /> 
          <IconButton name="Open" icon="./folder.png" onClick={beginUpload} />    
          {/if}
        </div>
      </div>
      {#if mode === 'View'}
      <CatalogCard elementId={exportElementId} {...$cardData} />
      {/if}
      {#if mode === 'Edit'}
      <CatalogEditor elementId='catalog-editor' {...$cardData}/>
      {/if}
      <!-- <div class="center-vh product-hunt">
        <ProductHunt/>
      </div> -->
      <div class="spacer-2"/>
      <!-- <FeedbackForm/> -->
    </div>
    <div class="mobile">
      <div class="mobile-warning-ctn center-vh">
        <h2 class="mobile-warning">This App only support Desktop computers currently. Try using your PC/Mac</h2>
      </div>
    </div>
	</DefaultLayout>
</main>

<main>
</main>

<style>
  main {
		text-align: center;
		max-width: 100vw;
		margin: 0 auto;
    overflow-x: hidden;
	}

  .mobile-warning-ctn {
    min-height: 80vh;
  }

  .mobile-warning {
    margin: auto;
  }

	.product-hunt {
		height: 180px;
	}

	.spacer-2 {
		height: 4em;
	}

	.tiles {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		max-width: 64em;
		margin-left: auto;
		margin-right: auto;
	}

	.controls-bar {
    top: 50%;    
    transform: translateY(-50%);
    position: fixed;
    z-index: 10;
    margin-left: 36px;
    min-height: 108px;

		/* width: 100%; */
		background-color: var(--header-secondary-background-color);
    background-color: #fff;
    border-radius: 12px;
		padding: 0;
    border-top: 1px solid var(--header-border-color);
    border-bottom: 1px solid var(--header-border-color);
	}

	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

  .column {
    display: flex;
    flex-direction: column;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
