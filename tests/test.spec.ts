import { expect, test } from '@playwright/test'

test('Modal Test', async ({ page }) => {
  await page.goto('/svelte-inline-modal')

  await expect(
    page.getByRole('heading', { name: 'svelte-inline-modal' })
  ).toBeVisible()

  const open = page.getByRole('button', { name: 'Open' })

  await expect(open).toBeVisible()
  await open.click()

  await expect(page.getByText('First')).toBeVisible()

  const close = page.getByRole('button', { name: 'Close' })

  await expect(close).toBeVisible()
  await close.click()
})
