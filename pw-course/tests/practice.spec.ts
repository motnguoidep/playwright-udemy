import { test, expect } from '@playwright/test';

test('test 1', async ({ page }) => {
    await page.goto('https://www.w3schools.com/typescript/trytypescript.php?filename=demo_tuples_newvalue');
    await page.locator('[id="runbtn"]').click();
});

test('test 2', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', {name: 'Bài học 1: Register Page (có đủ các element)'}).click();

    await expect(page.getByRole('heading', {name: 'User Registration'})).toBeVisible();

    await page.locator('[id="username"]').fill("Tana ngo")
    await page.locator('[id="email"]').fill("thuongngo09072003@gmail.com")
    await page.locator('[for="female"]').check()
    await page.locator('[id="reading"]').check()
    await page.locator('[id="traveling"]').check()
    await page.locator('#interests').hover();  // Đưa chuột vào select box
    await page.mouse.wheel(0, 300);

    await page.locator("//select[@id='interests']").selectOption(['Art', 'Music'])
    await page.locator('[id="country"]').selectOption('canada')
    await page.locator("//input[@id='dob']").fill("2024-01-23")
    
    await page.locator("//button[@type='submit']").click()
});

test('date picker, slider, color picker', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', {name: 'Bài học 1: Register Page (có đủ các element)'}).click();

    await page.locator("//input[@id='dob']").fill("2024-01-23")
    await page.locator("//input[@id='rating']").fill('7')
    await page.locator("//input[@id='favcolor']").fill("#4CAF50");//loi o day
})

test('file, hover', async({page}) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', {name: 'Bài học 1: Register Page (có đủ các element)'}).click();

    await page.locator("//input[@id='profile']").setInputFiles("lectures/img-test/t1.txt"); // loi o day
    await page.locator("//div[@class='tooltip']").hover();
})
