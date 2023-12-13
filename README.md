<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-inline-modal

<!----- BEGIN GHOST DOCS BADGES -----><a href="https://npmjs.com/package/svelte-inline-modal"><img src="https://img.shields.io/npm/v/svelte-inline-modal" alt="npm-version" /></a> <a href="https://npmjs.com/package/svelte-inline-modal"><img src="https://img.shields.io/npm/l/svelte-inline-modal" alt="npm-license" /></a> <a href="https://npmjs.com/package/svelte-inline-modal"><img src="https://img.shields.io/npm/dm/svelte-inline-modal" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/svelte-inline-modal"><img src="https://img.shields.io/bundlephobia/min/svelte-inline-modal" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-inline-modal/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-inline-modal/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a> <a href="https://svelte-inline-modal.jill64.dev"><img src="https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fsvelte-inline-modal.jill64.dev" alt="website" /></a><!----- END GHOST DOCS BADGES ----->

🪟 Simple Modal on the Fly

## [Demo](https://svelte-inline-modal.jill64.dev)

<!----- END GHOST DOCS HEADER ----->

## Installation

```bash
npm i svelte-inline-modal
```

## Usage

Unlike most modal libraries that provide a common component at the root, this library deploys the modal in place using the dialog element.

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
