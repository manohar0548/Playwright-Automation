// https://demoblaze.com/

require('@playwright/test');
import { test, expect } from '@playwright/test';

test('Home Page', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  const pageTitle = page.title();
  console.log("Page Title is: " + await pageTitle);
    await expect(pageTitle).resolves.toMatch('STORE');
}
)