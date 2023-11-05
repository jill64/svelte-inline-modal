<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-inline-modal

[![npm-version](https://img.shields.io/npm/v/svelte-inline-modal)](https://npmjs.com/package/svelte-inline-modal) [![npm-license](https://img.shields.io/npm/l/svelte-inline-modal)](https://npmjs.com/package/svelte-inline-modal) [![npm-download-month](https://img.shields.io/npm/dm/svelte-inline-modal)](https://npmjs.com/package/svelte-inline-modal) [![npm-min-size](https://img.shields.io/bundlephobia/min/svelte-inline-modal)](https://npmjs.com/package/svelte-inline-modal) [![ci.yml](https://github.com/jill64/svelte-inline-modal/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-inline-modal/actions/workflows/ci.yml) [![stackblitz](https://img.shields.io/badge/StackBlitz-svelte--inline--modal-dodgerblue)](https://stackblitz.com/edit/svelte-inline-modal?file=src%2Froutes%2FDemo.svelte)

🪟 Simple modal on the fly

## [Demo](https://stackblitz.com/edit/svelte-inline-modal?file=src%2Froutes%2FDemo.svelte)

## Install

```sh
npm i svelte-inline-modal
```

<!----- END GHOST DOCS HEADER ----->

## Usage

```svelte
<script>
  import { InlineModal } from 'svelte-inline-modal'

  const onCloseModal = () => {
    // ...
  }
</script>

<InlineModal onClose={onCloseModal} let:open>
  <button on:click={open}>Open</button>
  <div slot="menu" let:close>
    <!-- Your Modal Contents -->
    <button on:click={close}>Close</button>
  </div>
</InlineModal>
```
