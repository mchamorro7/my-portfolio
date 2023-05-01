import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running [${testInfo.title}]`);
  await page.goto('/');
});

test('should home page works propertly', async ({ page }) => {
  await expect(page).toHaveTitle(/Mateo Chamorro | JavaScript | React | React Native | Node.js/);

  await expect(page.getByRole('heading', { name: 'Hi! I am Mateo Chamorro' })).toHaveText('Hi! I am Mateo Chamorro');
  await expect(page.getByRole('heading', { name: '+4 years - Software Engineer' })).toHaveText('+4 years - Software Engineer');
  await expect(page.getByRole('heading', { name: 'Experience' })).toHaveText('Experience');
  await expect(page.getByRole('heading', { name: 'Last projects' })).toHaveText('Last projects');

  await page.getByRole('navigation').getByRole('link', { name: 'Go to projects page' }).click();
  await expect(page).toHaveURL('/projects');
  await page.getByRole('navigation').getByRole('link', { name: 'Go to blog page' }).click();
  await expect(page).toHaveURL('/blog');
})

test('should go to linkedin account', async ({ page }) => {
  await page.getByRole('link', { name: 'Go to LinkedIn account' }).click();
  await expect(page).toHaveURL('https://www.linkedin.com/in/mateo-chamorro');
})

test('should go to github account', async ({ page }) => {
  await page.getByRole('link', { name: 'Go to GitHub account' }).click();
  await expect(page).toHaveURL('https://github.com/mchamorro7');
})