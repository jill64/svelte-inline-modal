<script lang="ts">
  import { InlineModal } from '$lib/index.js'

  const onCloseModal = () => {
    console.log('Modal Closed')
  }
</script>

<header>
  <h1>svelte-inline-modal</h1>
  <a href="https://github.com/jill64/svelte-inline-modal">GitHub</a>
</header>
<InlineModal onClose={onCloseModal} let:open>
  <button on:click={open}>Open</button>
  <div slot="menu" let:close>
    <h2>It's Modal Menu</h2>
    <ol>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ol>
    <input placeholder="Input Form" />
    <button on:click={close}>Close</button>
  </div>
</InlineModal>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5rem;
    padding: 0;
  }
  input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #aaa;
    margin: 0.5rem 0;
    background: inherit;
    color: inherit;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  :global(body) {
    font-family: sans-serif;
    margin: 1rem 1.5rem;
    padding: 0;
  }
  @media (prefers-color-scheme: dark) {
    :global(body) {
      background: #333;
      color: #fff;
    }
  }
  button {
    padding: 1rem 1.5rem;
    border-radius: 100rem;
    margin: 1rem 0;
    border: 1px solid #aaa;
    background: inherit;
    font-size: large;
    font-weight: bold;
    color: inherit;
    cursor: pointer;
  }
  div {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background: #fff;
    border-radius: 0.5rem;
  }
  @media (prefers-color-scheme: dark) {
    div {
      background: #333;
    }
  }
</style>
