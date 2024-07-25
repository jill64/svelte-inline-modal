<script lang="ts">
  import type { Snippet } from 'svelte'

  let {
    onclose = () => {},
    button,
    menu,
  }: {
    onclose: () => unknown
    button: Snippet<[typeof open]>
    menu: Snippet<[typeof close]>
  } = $props()

  const close = () => {
    if (dialog?.open) {
      onclose()
    }
    dialog?.close()
  }

  const open = () => {
    dialog?.showModal()
  }

  let dialog: HTMLDialogElement | undefined
</script>

{@render button(open)}
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog bind:this={dialog} onclick={e => {
    if (e.target === dialog) {
      close()
    }
  }}>
  {@render menu(close)}
</dialog>

<style>
  dialog {
    border: none;
    padding: 0;
    background: transparent;
    color: inherit;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
  dialog[open]::backdrop {
    animation: fade 0.15s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
