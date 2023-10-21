# svelte-inline-modal

[![npm](https://img.shields.io/npm/v/svelte-inline-modal)](https://npmjs.com/package/svelte-inline-modal)
[![npm](https://img.shields.io/npm/l/svelte-inline-modal)](https://npmjs.com/package/svelte-inline-modal)
[![Deploy](https://github.com/jill64/svelte-inline-modal/actions/workflows/deploy.yml/badge.svg)](https://github.com/jill64/svelte-inline-modal/actions/workflows/deploy.yml)

[Demo](https://jill64.github.io/svelte-inline-modal)

A simple modal component that can be defined on the fly

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
