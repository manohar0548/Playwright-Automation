const {test,expect} = require('@playwright/test');

test('filtering Locators' , async({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name:'Login'}).click();
    // filter by text
    await page.locator("(//div[@class='inventory_item'])[1]")
        .filter({hasText:'Sauce Labs Backpack'})
        .getByRole("button", {name:"Add to cart"})
        .click();
    // filter by not text 
    await expect(page.locator("//span[@class='shopping_cart_badge']")
        .filter({ hasNotText: 'Out of stock' }))
        .toHaveCount(1);

    // filter by child
    await page
        .locator('//div[@class="inventory_item"]')
        .filter({has: page.getByRole('link', {name:'Sauce Labs Bike Light'})})
        .getByRole("button", {name:'Add to cart'})
        .click(); 
    /* ***** same for hasNot also ***** */ 
    await page.waitForTimeout(3000);

}) 