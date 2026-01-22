const {test,expect} = require('@playwright/test');

test('filtering Locators' , async({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name:'Login'}).click();
    await page.locator("(//div[@class='inventory_item'])[1]")
        .filter({hasText:'Sauce Labs Backpack'})
        .getByRole("button", {name:"Add to cart"})
        .click();
    await page.waitForTimeout(3000);

})