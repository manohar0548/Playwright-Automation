const{test,expect} = require('@playwright/test');

test.slow();

test('Static Drop-down', async({page}) => {
    await page.goto('https://www.facebook.com/r.php?entry_point=login');
    await page.locator('#day').selectOption({value:'13'});
    await page.getByTitle('Month').selectOption({index: 5});
    await page.locator('#year').selectOption({value:'2008'});
    await page.waitForTimeout(2000);





})