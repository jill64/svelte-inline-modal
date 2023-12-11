export const code = /* html */ `
<script>
  import { InlineModal } from 'svelte-inline-modal'
  
  const onCloseModal = () => {
    console.log('Modal Closed')
  }
</script>

<InlineModal onClose={onCloseModal} let:open>
  <!-- Open Button -->
  <button on:click={open}>Open</button>

  <!-- Modal Content -->
  <div slot="menu" let:close>
    <h2>It's Modal Menu</h2>

    <InlineModal onClose={onCloseModal} let:open>
      <!-- Open Button -->
      <button on:click={open}>Nested Modal Open</button>

      <!-- Modal Content -->
      <div slot="menu" let:close>
        <h2>It's Nested Modal Menu</h2>
        <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ol>

        <!-- Close Button -->
        <button on:click={close}>Close Nested Modal</button>
      </div>
    </InlineModal>

    <input placeholder="Input Form" />

    <!-- Close Button -->
    <button on:click={close}>Close</button>
  </div>
</InlineModal>
`.trim()
