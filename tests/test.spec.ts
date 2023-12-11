import { expect, test } from '@playwright/test'

test('Modal Test', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'svelte-inline-modal' })
  ).toBeVisible()

  const open = page.getByRole('button', { name: 'Open', exact: true })

  await expect(open).toBeVisible()
  await open.click()

  const nestedOpen = page.getByRole('button', {
    name: 'Nested Modal Open',
    exact: true
  })

  await expect(nestedOpen).toBeVisible()
  await nestedOpen.click()

  await expect(page.getByText('First', { exact: true })).toBeVisible()

  const nestedClose = page.getByRole('button', {
    name: 'Close Nested Modal',
    exact: true
  })

  await expect(nestedClose).toBeVisible()
  await nestedClose.click()

  const close = page.getByRole('button', { name: 'Close', exact: true })

  await expect(close).toBeVisible()
  await close.click()
})
