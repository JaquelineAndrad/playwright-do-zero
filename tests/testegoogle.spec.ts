import { test, expect } from '@playwright/test';

test('Google carrega e tem o título correto', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});
