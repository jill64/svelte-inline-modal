<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-inline-modal

<!----- BEGIN GHOST DOCS BADGES -----><a href="https://npmjs.com/package/svelte-inline-modal"><img src="https://img.shields.io/npm/v/svelte-inline-modal" alt="npm-version" /></a> <a href="https://npmjs.com/package/svelte-inline-modal"><img src="https://img.shields.io/npm/l/svelte-inline-modal" alt="npm-license" /></a> <a href="https://npmjs.com/package/svelte-inline-modal"><img src="https://img.shields.io/npm/dm/svelte-inline-modal" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/svelte-inline-modal"><img src="https://img.shields.io/bundlephobia/min/svelte-inline-modal" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-inline-modal/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-inline-modal/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a><!----- END GHOST DOCS BADGES ----->

🪟 Simple Modal on the Fly

<!----- END GHOST DOCS HEADER ----->

[StackBlitz](https://stackblitz.com/edit/svelte-inline-modal?file=src%2Froutes%2FDemo.svelte)

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
