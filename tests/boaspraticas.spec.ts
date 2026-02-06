import { test, expect } from '@playwright/test';

test.describe('Página de Login', () => {
  test.beforeEach(async ({ page }) => { //beforeEach = um hook que roda antes de cada teste.
    await page.goto('https://www.saucedemo.com/');
  });

  test('deve exibir erro para login inválido', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('senha_errada');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('deve logar com credenciais válidas', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });
});
