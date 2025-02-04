
import { test, expect } from '@playwright/test';

test('LinkedIn login check correct username & correct password', async ({ page }) => {
  await page.goto('https://www.linkedin.com/login');
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('rohinir7034@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('rohinir@7034');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('button', { name: 'Rohini Ramachandran Me' }).click();
  await page.getByRole('link', { name: 'Rohini Ramachandran Rohini Ramachandran Fresher BSC CS' }).click();
});



test('LinkedIn login check correct username & wrong password', async ({ page }) => {
  await page.goto('https://www.linkedin.com/login');
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('rohinir7034@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('8995');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('The password you provided').click();
});