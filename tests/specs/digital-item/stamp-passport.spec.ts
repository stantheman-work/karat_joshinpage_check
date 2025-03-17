import { brandCreateStamppassportCheck } from "@/functions/check-button-elements-sanity"
import { getStamppassportCancelBtn, getStamppassportCreateBtn } from "@/locators/brand-admin-stamppassport-loc"
import { AuthUtils } from "@/utils/auth-utils"
import { waitForAnElement, waitForPageToLoad } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import test from "@playwright/test"

test.describe("Stamp passport page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)
    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Digital item$/ })
      .first()
    await parentMenu.click()
    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Stamp Passport$/ })
      .first()
    await childMenu.click()
  })

  test("Stamp passport page", async ({ page }) => {
    console.log("[INFO] Start Stamp passport page check")
    // CREATE STAMP PASSPORT
    await page.waitForTimeout(3000) // wait for page to load not working, so this is alternative
    const passportCreateBtn = await getStamppassportCreateBtn(page)
    await passportCreateBtn.click()
    await waitForPageToLoad(page)
    await brandCreateStamppassportCheck(page)
    const passportCancelBtn = await getStamppassportCancelBtn(page)
    await passportCancelBtn.click()
    await waitForAnElement(page, passportCreateBtn)
    console.log("[INFO] End Stamp passport page check")
  })
})
