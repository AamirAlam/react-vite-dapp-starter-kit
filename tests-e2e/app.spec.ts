import { test, expect } from '@playwright/test'

test('Should load the app with Web3 provider', async ({ page }) => {
  // Visit root page
  await page.goto('/')

  // Wait for the Connect Wallet button to be visible
  const connectButton = page.getByRole('button', { name: /connect wallet/i })
  await expect(connectButton).toBeVisible()

  // Check if the main heading is visible with the correct text
  await expect(
    page.getByRole('heading', {
      name: /production-ready and test-driven development kit using Vite \+ React \+ TypeScript/i,
    })
  ).toBeVisible()
})

test('Should show wallet connection options when connect button is clicked', async ({
  page,
}) => {
  await page.goto('/')

  // Click the Connect Wallet button
  const connectButton = page.getByRole('button', { name: /connect wallet/i })
  await connectButton.click()

  // Check if the wallet connection modal is visible
  // RainbowKit uses a dialog for the wallet connection
  const modal = page.locator('div[role="dialog"]')
  await expect(modal).toBeVisible()

  // Check if common wallet options are present in the modal
  // These are the default wallets shown by RainbowKit
  await expect(
    modal.getByText(/metamask|rainbow|walletconnect|coinbase/i).first()
  ).toBeVisible()
})
