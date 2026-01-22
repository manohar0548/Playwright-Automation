const {test,expect} = require('@playwright/test');

test('GetByRole', async({page}) => {

    /* await page.goto("https://demoblaze.com/");
    await page.getByRole('link' , {name: "Home"});
    await page.getByRole('button', {name: "Next"});
    await page.getByText('Phones').click();
    await page.getByText('Contact').click();
    await page.getByLabel('Contact Email:'); */

    await page.goto("https://www.facebook.com/");
    await page.getByRole("button", {name:'Create new account'}).click();
    await page.getByPlaceholder("First name").fill("Hello");
    await expect(page.getByText('Create a new account')).toBeVisible();
    await page.getByLabel('Female').click();
    await expect(page.getByLabel('Female')).toBeChecked();
    await expect(page.getByText("People who use our service may have uploaded your contact information to Facebook. ")).toBeTruthy();
    await expect(page.getByTitle("Sign up for Facebook")).toHaveText("Sign up");
    await page.getByText("Learn more").click();
    await page.waitForTimeout(3000);

})