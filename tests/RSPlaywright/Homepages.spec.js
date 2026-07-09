// https://demoblaze.com/

import { test, expect } from '@playwright/test';

test('Home Page', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const pageTitle = page.title();
  console.log("Page Title is: " + await pageTitle);
  // input boxes

  await page.locator("#username").fill("Give UserName");
  await page.locator("#password").fill("Give Password");
  // Check box, button, radio buttons
  await page.locator("#usertype").nth(1).click();
  await page.locator("#okayBtn").click();
  const dropDownValues = await page.locator("select.form-control");
  dropDownValues.selectOption("teach");
  await page.locator("#terms").click();
  await page.locator("#signInBtn").click();
}
)