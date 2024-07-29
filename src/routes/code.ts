export const code = /* html */ `
<script>
  import { InlineModal } from 'svelte-inline-modal'
  
  const onCloseModal = () => {
    console.log('Modal Closed')
  }
</script>

<InlineModal onClose={onCloseModal}>
  {#snippet button(open)}
    <button onclick={open}>Open</button>
  {/snippet}
  {#snippet menu(close)}
  <div>
    <h2>It's Modal Menu</h2>
    <InlineModal onClose={onCloseModal}>
      {#snippet button(open)}
        <button onclick={open}>Nested Modal Open</button>
      {/snippet}
      {#snippet menu(close)}
        <div>
          <h2>It's Nested Modal Menu</h2>
          <ol>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
          </ol>
          <button onclick={close}>Close Nested Modal</button>
        </div>
      {/snippet}
    </InlineModal>
    <input placeholder="Input Form" />
    <button on:click={close}>Close</button>
  </div>
  {/snippet}
</InlineModal>
`.trim()
