import { AuthUtils } from "@/utils/auth-utils"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { test } from "@playwright/test"
test.describe("General > Activity log page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^General$/ })
      .first()
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Logs$/ })
      .first()
    await childMenu.click()

    await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findAuditLogs)
  })

  test("activity log", async ({ page }) => {
    await page.getByRole("button", { name: "Refresh" }).click()
  })
})
