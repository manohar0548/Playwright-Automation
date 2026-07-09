const {test,expect} = require('@playwright/test');

test('Dynamic drop-down', async({page}) =>{

    await page.goto('https://www.abhibus.com/');
    // From 
      const leavingFromInput = page.locator('input[placeholder="Leaving From"]');
      await leavingFromInput.fill('vij');
      await page.waitForTimeout(500);
      await leavingFromInput.press('ArrowDown');  
      await leavingFromInput.press('Enter');
      await page.waitForTimeout(1000);

    // To
    const destinationCity = page.locator('input[placeholder="Going To"]');
    await destinationCity.fill("Hyd");
    await page.waitForTimeout(500);
    await destinationCity.press('ArrowDown');
    await destinationCity.press("Enter");  

    await page.getByRole('button', {name: "Search"}).click();
    await expect(page).toHaveURL(/bus_search/i);

    await page.waitForTimeout(5000);



})