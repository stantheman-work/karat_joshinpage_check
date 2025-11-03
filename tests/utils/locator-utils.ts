import { Page } from "@playwright/test"

export class LocatorUtils {
  static getSideBarParentItems(page: Page) {
    return page.locator("//*[name()='svg' and @data-testid='KeyboardArrowLeftIcon']/parent::div/preceding-sibling::div")
  }

  static getSideBarChildItems(page: Page) {
    return page.locator("//a[@href]/div")
  }
}
