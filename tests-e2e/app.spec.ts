// tests-e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test('Should load the app', async ({ page }) => {
  // Visit root page
  await page.goto('/')

  // rediect to login page
  await expect(page.getByTestId('app')).toBeVisible()
  await expect(page.getByText('Vite + React')).toBeVisible()

})
test('Counter button should work ', async ({page} ) => {
    await page.goto('/')

    // get button by id 
    const button = page.getByTestId('counter-button')
    await expect(button).toBeVisible()

    // click on button
    await button.click()
    
    // expect count to be 1
    await expect(button).toHaveText('count is 1')


    // click on button again
    await button.click()
    
    // expect count to be 2
    await expect(button).toHaveText('count is 2')
    
} )
