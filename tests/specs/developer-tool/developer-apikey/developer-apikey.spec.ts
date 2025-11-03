import {
  getDevAPIKeysText,
  getDevColumnHeaders,
  getDevCreateNewAPIBtn,
  getDevCreateAPIName,
  getDevCancelBtn,
  getDevCreateBtn
} from "@/specs/developer-tool/developer-apikey/developer-apikey.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement, waitForPageToLoad } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { test, expect } from "@playwright/test"

test.describe("Developer Tool", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Developer tool$/ })
      .first()
    await scrollToElement(page, parentMenu)
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Developer API Clients$/ })
      .first()
    await childMenu.click()

    try {
      await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findAuthClients !== undefined, { timeout: 10000 })
    } catch (error) {
      console.error("This community does not have any APIs")
    }
  })

  test("API Key", async ({ page }) => {
    console.log("[INFO] Developer API keys check start")
    await page.waitForTimeout(3000)
    const devAPIKeysText = await getDevAPIKeysText(page)
    const devColumnHeaders = (await getDevColumnHeaders(page))[0]
    const devCreateNewAPIBtn = await getDevCreateNewAPIBtn(page)
    await expect(devAPIKeysText).toBeVisible()
    await expect(devColumnHeaders).toBeVisible()
    await expect(devCreateNewAPIBtn).toBeVisible()
    await devCreateNewAPIBtn.click()
    await waitForPageToLoad(page)
    const devCreateAPIName = await getDevCreateAPIName(page)
    const devCancelBtn = await getDevCancelBtn(page)
    const devCreateBtn = await getDevCreateBtn(page)
    await expect(devCreateAPIName).toBeVisible()
    await expect(devCancelBtn).toBeVisible()
    await expect(devCreateBtn).toBeVisible()
    console.log("[INFO] Developer API keys check start")
  })
})
