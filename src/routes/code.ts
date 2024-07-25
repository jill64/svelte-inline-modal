export const code = /* html */ `
<script>
  import { InlineModal } from 'svelte-inline-modal'
  
  const onCloseModal = () => {
    console.log('Modal Closed')
  }
</script>

{#snippet button(open)}
  <button onclick={open}>Open</button>
{/snippet}

{#snippet nested_button(open)}
  <button onclick={open}>Nested Modal Open</button>
{/snippet}

{#snippet nested_menu(close)}
  <div slot="menu" let:close>
    <h2>It's Nested Modal Menu</h2>
    <ol>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ol>
    <button onclick={close}>Close Nested Modal</button>
  </div>
{/snippet}

{#snippet menu(close)}
<div slot="menu">
  <h2>It's Modal Menu</h2>
  <InlineModal onClose={onCloseModal} button={nested_button} menu={nested_menu} />
  <input placeholder="Input Form" />
  <button on:click={close}>Close</button>
</div>
{/snippet}

<InlineModal onClose={onCloseModal} {button} {menu} />
`.trim()
