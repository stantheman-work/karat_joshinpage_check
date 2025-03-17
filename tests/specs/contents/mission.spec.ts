import { brandEditMissionPageCheck } from "@/functions/check-button-elements-sanity"
import { getSideBarItems } from "@/locators/brand-admin-dashboard-loc"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import test, { Locator, Page } from "@playwright/test"

test.describe("Mission page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Contents$/ })
      .first()
    await scrollToElement(page, parentMenu)
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Mission$/ })
      .first()
    await childMenu.click()

    await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findMissions)
  })

  test("MISSION page", async ({ page }) => {
    console.log("[INFO] Start Admin buttons in MISSION page")
    const missionSettingBtn = page.locator("//button[@aria-label='settings']").first()
    await missionSettingBtn.click()

    const missionSettingSelect = (await getMissionSettingsSelect(page))[0]
    await missionSettingSelect.click()
    await brandEditMissionPageCheck(page)

    const missionPage = (await getSideBarItems(page))[2]
    await missionPage.click()
    console.log("[INFO] End Admin buttons in MISSION page")
  })
})

async function getMissionSettingsSelect(page: Page) {
  // 0 = edit, 1 = duplicate, 2 = share link, 3 = delete
  const missionSettingsSelect = page.locator("//div[@role='menuitem']")
  const count = await missionSettingsSelect.count()

  let options: Locator[] = []
  for (let i = 0; i < count; i++) {
    options.push(missionSettingsSelect.nth(i))
  }

  return options
}
