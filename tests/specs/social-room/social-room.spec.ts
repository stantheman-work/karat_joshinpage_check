import { brandCreateSocialroomPageCheck } from "@/functions/check-button-elements-sanity"
import { getCreatesocialroomBackBtn } from "@/locators/brand-admin-socialroom-loc"
import { AuthUtils } from "@/utils/auth-utils"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { expect, test } from "@playwright/test"

test.describe("Social Room", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Social room$/ })
      .first()
    await PageUtils.scrollToElement(page, parentMenu)
    await parentMenu.click()

    await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.searchRooms !== undefined)
  })

  test("Social Room", async ({ page }) => {
    const addSocialRoomBtn = page.locator("//button[text()='Create room']")
    await addSocialRoomBtn.click()
    await brandCreateSocialroomPageCheck(page)
    const createBackBtn = await getCreatesocialroomBackBtn(page)
    await createBackBtn.click()
    await PageUtils.waitForPageToLoad(page)
    await expect(addSocialRoomBtn).toBeVisible()
  })
})
