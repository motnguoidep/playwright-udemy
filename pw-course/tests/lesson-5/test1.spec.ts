import {test, expect} from "@playwright/test"

test("test 1", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole("link", { name: "Bài học 1: Register Page (có đủ các element)" }).click();
    await expect(page.getByRole("heading", { name: "User Registration" })).toBeVisible();

    await page.locator("//input[@id='username']").fill("tana");
    await page.locator("//input[@id='email']").fill("tanango@gmail.com");
    await page.locator("//input[@id='female']").check();
    await page.locator("//input[@id='reading']").check();
    await page.locator("//input[@id='traveling']").check();
    await page.locator("//select[@id='interests']").selectOption(["science", "art", "music"]);
    await page.locator("//select[@id='country']").selectOption("canada");
    await page.locator("//input[@id='dob']").fill("2024-01-24");
    await page.locator("//textarea[@id='bio']").fill("Bi dien");
    await page.locator("//input[@id='profile']").setInputFiles("tests/lectures/playwright-test/t1.txt");
    await page.locator("//input[@id='rating']").fill("8");
    await page.locator("//input[@id='favcolor']").fill("#04AA6D");
    await page.locator("//div[@class='tooltip']").hover();
    await page.locator("//button[@id='submit']").click();
});

test("test 2", async ({page}) => {
    await page.goto('https://material.playwrightvn.com/')
    await page.getByRole('link', {name: 'Bài học 2: Product page'}).click()
    await expect(page.getByRole('heading', {name: 'Simple E-commerce'})).toBeVisible()

    await page.locator("//button[@data-product-id='1']").dblclick()
    await page.locator("//button[@data-product-id='2']").click({clickCount: 3})// click 3 lan
    await page.locator("//button[@data-product-id='3']").click() 
})

test('Add Todo list', async({page}) => {
    await test.step('navigate to Todo page', async () => {
        await page.goto('https://material.playwrightvn.com/')
        await page.getByRole('link', {name: 'Bài học 3: Todo page'}).click()
        await expect(page.getByRole('heading', {name: 'To-Do List'})).toBeVisible()
    }) 
    
    await test.step('add 100 item into Todo List with name "Todo <i>', async() =>{
        for(let i = 1; i <= 100; i++){
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`)
            await page.locator("//button[@id='add-task']").click()
        }
    })

    await test.step('delete todo have number lẻ', async() =>{
        page.on('dialog', async dialog  => {
            await dialog.accept();
        })

        for(let i = 1; i <= 100; i++){
            if(i % 2 !== 0){
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
        }
    })
})

test('add personal note', async({ page }) => {
    await test.step('Navigate to Page', async () =>{
        await page.goto('https://material.playwrightvn.com/')
        await page.getByRole('link', {name: '	Bài học 4: Personal notes'}).click()
    })

    await test.step('add title note and content note', async() => {
        for(let i = 1,j=1; i <= 3 ; i++){
                await page.locator("//input[@id='note-title']").fill(`Toeic ${i}`)
                await page.locator("//textarea[@id='note-content']").fill(`Listening ${i}`)
                await page.locator("//button[@id='add-note']").click() 
        }

        await test.step('search base on any title', async() => {
            await page.locator("//input[@id='search']").fill('Listening 1')
        })
    })
})

