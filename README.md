<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-inline-modal

[![npm-version](https://img.shields.io/npm/v/svelte-inline-modal)](https://npmjs.com/package/svelte-inline-modal) [![npm-license](https://img.shields.io/npm/l/svelte-inline-modal)](https://npmjs.com/package/svelte-inline-modal) [![npm-download-month](https://img.shields.io/npm/dm/svelte-inline-modal)](https://npmjs.com/package/svelte-inline-modal) [![npm-min-size](https://img.shields.io/bundlephobia/min/svelte-inline-modal)](https://npmjs.com/package/svelte-inline-modal) [![ci.yml](https://github.com/jill64/svelte-inline-modal/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-inline-modal/actions/workflows/ci.yml) [![deploy.yml](https://github.com/jill64/svelte-inline-modal/actions/workflows/deploy.yml/badge.svg)](https://github.com/jill64/svelte-inline-modal/actions/workflows/deploy.yml)

A simple modal component that can be defined on the fly

<!----- END GHOST DOCS HEADER ----->

## [Demo + Example](https://stackblitz.com/edit/svelte-inline-modal?file=src%2Froutes%2FDemo.svelte)

## Installation

```sh
npm i -D svelte-inline-modal
```

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
