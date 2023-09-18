<script lang="ts">
  import { InlineModal } from '$lib/index.js'
</script>

<h1>svelte-inline-modal</h1>
<InlineModal onClose={() => console.log('Modal Closed')} let:open>
  <button on:click={open}>Open</button>
  <div slot="menu" let:close>
    <ol>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ol>
    <button on:click={close}>Close</button>
  </div>
</InlineModal>

<style>
  :global(body) {
    font-family: sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :global(body) {
      background: #333;
      color: #fff;
    }
  }
  button {
    padding: 1rem;
    border-radius: 100rem;
    border: 1px solid #aaa;
    background: inherit;
    font-size: large;
    font-weight: bold;
    color: inherit;
    cursor: pointer;
  }
  div {
    padding: 1rem 0.5rem;
    background: #fff;
    border-radius: 0.5rem;
  }
  @media (prefers-color-scheme: dark) {
    div {
      background: #333;
    }
  }
</style>
