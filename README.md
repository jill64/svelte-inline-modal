# svelte-inline-modal

[![npm version](https://badge.fury.io/js/@jill64%2Fsvelte-inline-modal.svg)](https://badge.fury.io/js/@jill64%2Fsvelte-inline-modal)

A simple modal component that can be defined on the fly

## Install

```sh
npm i -D @jill64/svelte-inline-modal
```

## Usage

```svelte
<script>
  import InlineModal from '@jill64/svelte-inline-modal'
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
