<!----- BEGIN GHOST DOCS HEADER ----->
<!----- END GHOST DOCS HEADER ----->

[Demo](https://jill64.github.io/svelte-inline-modal)

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
