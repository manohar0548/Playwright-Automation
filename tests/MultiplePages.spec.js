const { test, expect } = require('@playwright/test');

test('Multiple pages', async ({ browser }) => {
  const context = await browser.newContext();
  const userPage = await context.newPage();
  const homePage = await context.newPage();

  await userPage.goto('https://google.com');
  await homePage.goto('https://facebook.com');
  await expect(homePage.getByAltText('Facebook')).toBeVisible({ timeout: 10000 });
  await homePage.getByPlaceholder('Email address or phone number').fill('Enter user name'); //Your User name
  await homePage.getByPlaceholder('Password').fill('Enter your password'); //Your Password
  await homePage.getByRole('button', { name: 'Log in'});
  await expect(homePage).toHaveURL('https://www.facebook.com/');
  const currentUrl = homePage.url();
  console.log('Verified URL is:', currentUrl);
  await homePage.waitForTimeout(2000);
});
