import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage{
    //khai thuoc tinh {xpath} dac trung cua LoginPage
    xpathUserName = "username";
    xpathPassword = "password";
    xpathBtnLogin = "login";

    constructor(page: Page){
        super(page);
    }

    // method dac trung cua login
    async navigateToLoginPage() {
        await this.navigateTo("url_of_login_page");
    }

    async fillUserName() {
        await this.page.locator(this.xpathUserName).fill(username);
    }

    async fillPassWord() {
        await this.page.locator(this.xpathPassword).fill(password);
    }

    async btnLogin() {
        await this.page.locator(this.xpathBtnLogin).click();
    }

    async logIn(username: string, password: string){
        await this.fillUserName(username);
        await this.fillPassWord(password);
        await this.btnLogin();
    }
}