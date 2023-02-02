import {By, WebElement, until, Origin, Button} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class StorePageObject extends BasePage {
// Selectors below
byStoreNavIdDesktop: By = By.id("menu-item-182")
byCartBtnCss: By = By.css('.action.showcart')
byVansLogoNavBar: By = By.xpath("//img[@src='https://www.vansaircraft.com/wp-content/themes/vans-aircraft/dist/images/logo-black.svg']")

    constructor(){
        super({url:"https://vansaircraft.com/"})
    }

// Custom methods below
async clickToAcessStore() {
    return await this.click(this.byStoreNavIdDesktop)
}
   

} // End of StorePageObject class export