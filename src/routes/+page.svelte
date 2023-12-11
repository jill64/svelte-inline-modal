<script lang="ts">
  import { InlineModal } from '$lib/index.js'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { code } from './code'

  const onCloseModal = () => {
    console.log('Modal Closed')
  }
</script>

<main>
  <span>
    <InlineModal onClose={onCloseModal} let:open>
      <button on:click={open}>Open</button>
      <div slot="menu" let:close>
        <h2>It's Modal Menu</h2>
        <InlineModal onClose={onCloseModal} let:open>
          <button on:click={open}>Nested Modal Open</button>
          <div slot="menu" let:close>
            <h2>It's Nested Modal Menu</h2>
            <ol>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
            </ol>
            <button on:click={close}>Close Nested Modal</button>
          </div>
        </InlineModal>
        <input placeholder="Input Form" />
        <button on:click={close}>Close</button>
      </div>
    </InlineModal>
  </span>
  <span>
    <HighlightSvelte {code} />
  </span>
</main>

<style>
  main {
    display: grid;
    justify-items: center;
    grid-template-columns: auto auto;
    gap: 2rem;
  }
  main > span {
    max-width: 80vw;
  }
  :global(code) {
    font-size: 1rem;
  }
  @media (max-width: 800px) {
    main {
      grid-template-columns: auto;
    }
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
  :global(.dark) div {
    background: #333;
  }
</style>
