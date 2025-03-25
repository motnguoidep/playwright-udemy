import {test, expect} from "@playwright/test"
import { LoginPage } from "../pages/login-page"

test('test-pom', async({ page }) => {
    const loginPage = new LoginPage(page);
    const username = "student"
    const password ="password"

    await test.step('Navigate to', async () => {
        await loginPage.navigateToLoginPage();

        await loginPage.fillUserName(username);
        await loginPage.fillPassWord(password);
        await loginPage.btnLogin();
    })
})