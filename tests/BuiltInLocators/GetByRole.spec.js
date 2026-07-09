const {test,expect} = require('@playwright/test');

test('GetByRole', async({page}) => {

    await page.goto("https://demoblaze.com/");
    await page.getByRole('link' , {name: "Home"});
    await page.getByRole('button', {name: "Next"});

})