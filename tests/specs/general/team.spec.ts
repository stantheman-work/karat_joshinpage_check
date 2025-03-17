import { brandTeamInviteBtnCheck } from "@/functions/check-button-elements-sanity"
import { getTeamInviteBtn, getTeamInviteCancel } from "@/locators/brand-admin-team-loc"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { test } from "@playwright/test"

test.describe("General > Team page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^General$/ })
      .first()
    await scrollToElement(page, parentMenu)
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Team$/ })
      .first()
    await childMenu.click()

    await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.brandRoles)
  })

  test("invite", async ({ page }) => {
    const teamInviteBtn = await getTeamInviteBtn(page)
    await teamInviteBtn.click()
    await brandTeamInviteBtnCheck(page)
    const teamInviteCancel = await getTeamInviteCancel(page)
    await teamInviteCancel.click()
  })
})
