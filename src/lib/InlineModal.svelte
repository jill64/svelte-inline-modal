<script lang="ts">
  export let onClose: () => unknown = () => {}

  const close = () => {
    if (dialog?.open) {
      onClose()
    }
    dialog?.close()
  }

  const open = () => {
    dialog?.showModal()
  }

  let dialog: HTMLDialogElement | undefined
</script>

<slot {open} />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:click|self={close}>
  <slot name="menu" {close} />
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
