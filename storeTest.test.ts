import {expect, jest, test} from '@jest/globals' 
import { SearchSource } from 'jest'
import { Actions } from 'selenium-webdriver'
import {StorePageObject} from './StorePageObject'
const storePageObject = new StorePageObject()

beforeAll(async () => {
  await storePageObject.navigate()
  //await pageObject.showMouseMovement()
  await storePageObject.driver.manage().window().maximize()
})

describe("1 - Navbar elements + store and logo/home links", () => {
    test("Can navigate to the Van's store and return to the home page", async () => {
        await storePageObject.clickToAcessStore()
        await storePageObject.getElement(storePageObject.byCartBtnCss) // Verifying element specific to the Store
        await storePageObject.click(storePageObject.byVansLogoNavBar) // Returning to the home page
        console.log("Navigated to the Van's store and returned to the home page")
    })
})