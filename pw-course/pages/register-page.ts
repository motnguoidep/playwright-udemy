import { Page } from "@playwright/test";
import { MaterialBasePage } from "./material-page";

export class RegisterPage extends MaterialBasePage {
    xpathUserName = "username";
    xpathEmail = "email";
    xpathGender = "gender";
    xpathHobbie = "hobbie";
    xpathInterest = "interest";
    xpathCountry = "country";
    xpathDate = "date";
    xpathProfile = "profile";
    xpathBiography = "biography";
    xpathFavorite = "favorite";
    xpathHover = "hover";
    xpathEnable = "enable";
    xpathBtnRegister = "register";

    constructor (page: Page){
        super (page);
    }

    async navigateToRegisterPage() {
        await this.openMaterialPage();
        await this.gotoPage("url_of_regiter_page");
    }

    async fillUserName(username: string){
        await this.page.locator(this.xpathUserName).fill(username);
    }

    async fillEmail(email: string){
        await this.page.locator(this.xpathEmail).fill(email);
    }

    async selectGender(gender: "Male" | "Female"){
        if(gender == "Male"){
            await this.page.locator(this.xpathGender).check();
        }
        if(gender == "Female"){
            await this.page.locator(this.xpathGender).check();
        }
    }

    async selectHobbie(hobbie: "reading" | "traveling" | "cooking"){
        await this.page.locator(this.xpathHobbie(hobbie)).check();
    }

    async choosesInterest(interest: "technology" | "science" | "art") {
        await this.page.locator(this.xpathInterest).selectOption(interest)
    }

    async selectCountry(country: "usa" | "canada" | "uk" | "australia"){
        await this.page.locator(this.xpathCountry).selectOption(country);    
    }

    async inputDate(date: string){
        await this.page.locator(this.xpathDate).fill(date);
    }

    async uploadProfile(profile: string){
        await this.page.locator(this.xpathProfile).setInputFiles(profile);
    }

    async inputBiography(biography: string){
        await this.page.locator(this.xpathBiography).fill(biography);
    }

    async hoverItem(){
        await this.page.locator(this.xpathHover).check();
    }

    async clickBtnRegister(){
        await this.page.locator(this.xpathBtnRegister).click();
    }

    async fillFormRegister(information: {
        username: string,
        email: string,
        gender: "Male" | "Female",
        hobbie: "reading" | "traveling" | "cooking",
        interest: "technology" | "science" | "art",
        country: "usa" | "canada" | "uk" | "australia",
        date: string,
        profile: string,
        biography: string
    }) {
        await this.fillUserName(information.username);
        await this.fillEmail(information.email);
        await this.selectGender(information.gender);
        await this.selectHobbie(information.hobbie);
        await this.choosesInterest(information.interest);
        await this.selectCountry(information.country);
        await this.inputDate(information.date);
        await this.uploadProfile(information.profile);
        await this.inputBiography(information.biography);

    }

    async getInfoNewestInTable(){
        const numberOfRows = await this.page.locator("//tbody/tr").count();
        let userInfo = {
            username: await this.page.locator(`//tbody/tr[${numberOfRows}]/td[2]`).textContent(),
            email: await this.page.locator(`//tbody/tr[${numberOfRows}]/td[3]`).textContent(),
            infomation: await this.page.locator(`//tbody/tr[${numberOfRows}]/td[4]`).textContent(),
        }
        return userInfo;
    }


}