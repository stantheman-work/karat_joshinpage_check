import { Page } from "@playwright/test"

export class LocatorUtils {
  static getSideBarParentItems(page: Page) {
    return page.locator("//div[@class='-mr-10']/div[1]/div/span")
  }

  static getSideBarChildItems(page: Page) {
    return page.locator("//div[contains(@href,'/')]")
  }
}
