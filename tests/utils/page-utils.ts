import { getBrandSelectDropdown } from "@/locators/brand-admin-dashboard-loc"
import { expect, Locator, Page } from "@playwright/test"
import { AuthUtils } from "./auth-utils"

export class PageUtils {
  static async gotoToHome(page: Page) {
    await page.goto(`/${AuthUtils.getDefaultBrand().id}`)

    await this.waitForGraphqlResponse(page, (json) => json.data?.brandNotificationCount !== undefined)
    try {
      await page.getByRole("button", { name: "Later" }).click()
    } catch {
      // Do nothing
    }

    const brandName = AuthUtils.getDefaultBrand().name
    let brandSelectDropdown = page.locator(
      `//span[text()='Brand']/following-sibling::button/descendant::p[contains(text(),'${brandName}')]`
    )
    let selectedBrand = await brandSelectDropdown.textContent()
    if (selectedBrand === brandName) {
      // console.log(`Brand selected is ${brandName}`)
    } else {
      // console.log(`Brand selected is ${selectedBrand}, changing to ${brandName}....`)
      await brandSelectDropdown.click()
      const brand24karatOption = page.locator("//div[@class='flex-1']/child::div[text()='24karat']")
      await expect(brand24karatOption).toBeVisible()
      await brand24karatOption.click()
      await this.waitForPageToLoad(page)
      brandSelectDropdown = await getBrandSelectDropdown(page)
      selectedBrand = await brandSelectDropdown.textContent()
      if (selectedBrand !== brandName) {
        throw new Error("24karat brand is missing! Please check brand admin.")
      }
    }
  }

  static async waitForPageToLoad(page: Page) {
    try {
      // Wait for the page to reach the "load" state, which indicates that all resources (e.g., images, scripts) have been loaded
      await page.waitForLoadState("load", { timeout: 10000 }) // Timeout is optional, set it according to your needs

      // Optionally, wait for network activity to be idle (no network requests in flight)
      await page.waitForLoadState("networkidle", { timeout: 10000 })
    } catch (error) {
      console.log("Page has not loaded, please check the page.", error)
    }

    // Additionally, you can ensure that a specific element is visible, which might indicate the page has fully rendered
    // await expect(page.locator('specific-element-selector')).toBeVisible({ timeout: 5000 });

    // console.log("Page has fully loaded.")
  }

  static async waitForGraphqlResponse(page: Page, check: (json: any) => boolean, options?: { timeout?: number }) {
    await page.waitForResponse(async (resp) => {
      if (resp.url().includes("/graphql")) {
        const json = await resp.json()
        return check(json)
      }
      return false
    }, options)
  }

  static async scrollToElement(page: Page, locator: Locator) {
    try {
      await expect(locator).toBeVisible({ timeout: 5000 })
    } catch (error) {
      // console.log("use another method to waitForElement")
      await locator.waitFor({ state: "attached", timeout: 5000 })

      // Convert Locator to ElementHandle
      const elementHandle = await locator.elementHandle()

      if (!elementHandle) {
        throw new Error("ElementHandle is undefined or null.")
      }

      // Wait for visibility using ElementHandle
      await elementHandle.waitForElementState("visible", { timeout: 5000 })
    }
    await locator.scrollIntoViewIfNeeded() // Scroll to the element if it's not in view
  }
}
