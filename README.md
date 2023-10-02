# svelte-inline-modal

![github-actions-ci](https://github.com/jill64/svelte-inline-modal/actions/workflows/ci.yml/badge.svg)

[Demo](https://jill64.github.io/svelte-inline-modal)

A simple modal component that can be defined on the fly

## Install

```sh
npm i svelte-inline-modal
```

## Usage

```svelte
<script>
  import { InlineModal } from '@jill64/svelte-inline-modal'
</script>

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
```
