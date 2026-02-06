import { test, expect } from '@playwright/test';
test('Navegação: deve abrir a página de login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/);
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});

test('Localizando: deve encontrar os inputs de login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const username = page.locator('[data-test="username"]');
  const password = page.locator('[data-test="password"]');

  await expect(username).toBeVisible();
  await expect(password).toBeVisible();
});

test('Digitando: deve preencher usuário e senha', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const username = page.locator('[data-test="username"]');
  const password = page.locator('[data-test="password"]');

  await username.fill('standard_user');
  await password.fill('secret_sauce');

  await expect(username).toHaveValue('standard_user');
  await expect(password).toHaveValue('secret_sauce');
});

test('Clicando: deve logar ao clicar no botão Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory\.html/);
});

test('Validando texto: deve exibir "Products" após login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});
