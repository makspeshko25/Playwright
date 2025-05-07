import BasePage from "./basePage";
import LeftNavPanel from "./sharedComponents/leftNavPanel";

export default class ProfilePage extends BasePage{
    constructor(page){
        super(page);
        this.selectors={
            avatar: this.page.locator('img.profile_photo[alt="User photo"]'),
            editProfileButton: this.page.locator('button.btn.btn-primary', {hasText:'Edit profile'}),
            pageTitle: this.page.locator('h1', { hasText: 'Profile' })
        }
    }
    async isUserNameVisible(userInitials){
        return this.isVisible(this.selectors.usernNameTitle(userInitials))
    }
    async isProfileTitleVisisble(){
        return this.isVisible(this.selectors.pageTitle)
    }
    async isAvatarVisisble(){
        return this.isVisible(this.selectors.avatar)
    }
    async clickEditProfileButton(){
        await this.click(this.selectors.editProfileButton)
    }
    async isProfileTabHighlighted(){
        const leftNav = new LeftNavPanel(this.page)
        return this.isVisible(leftNav.selectors.profileTab)
    }
}
