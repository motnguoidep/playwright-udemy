import { test, expect } from "@playwright/test"
import { RegisterPage } from "../pages/register-page"

let date = "2024-01-23";
let username = "Tana ngo";
let email = "tana@gmail.com";
let description = "thuong ngo xinh dep tuyet voi"

test('Register Page', async ({ page }) => {
    let registerPage = new RegisterPage(page);

    await test.step('open register page', async () => {
        await registerPage.navigateToRegisterPage();
    })

    await test.step('fill in data into fields', async() => {
        await registerPage.fillUserName(username);
        await registerPage.fillEmail(email);
        await registerPage.selectGender("Female");
        await registerPage.selectHobbie("traveling");
        await registerPage.choosesInterest("science");
        await registerPage.selectCountry("canada");
        await registerPage.uploadProfile("tests/lectures/playwright-test/t1.txt");
        await registerPage.inputDate(date);
        await registerPage.inputBiography(description);
        await registerPage.hoverItem();

        await registerPage.clickBtnRegister();
    })

    await test.step("Kiem tra noi dung o bang dang ky la dung ", async () => {
        const userInfo = await registerPage.getInfoNewestInTable();
        const actualUsername = userInfo.username;
        const actualEmail = userInfo.email;
        const actualInformation = userInfo.infomation;

        expect(actualUsername).toBe(username);
        expect(actualEmail).toBe(email);
        expect(actualInformation).toContain('female');
        expect(actualInformation).toContain('traveling');
        expect(actualInformation).toContain('science');
        expect(actualInformation).toContain('canada');
        expect(actualInformation).toContain(date);
        expect(actualInformation).toContain(description);
        expect(actualInformation).toContain("Yes");
    })

})