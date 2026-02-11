import {
  getBrandSelectionDropdown,
  getBrandSelectionDropdownOptions
} from "../general/dashboard.locator"
import {
  superadminReviewBrandTab,
  superadminReviewCommunitiesTab,
  superadminUsermanagementTab
} from "../superadmin/checkSuperadminTabs"
import { AuthUtils } from "@/utils/auth-utils"
import { PageUtils } from "@/utils/page-utils"
import { expect, test } from "@playwright/test"

test.describe("Superadmin Page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)
    const brandSelectDropdown = await getBrandSelectionDropdown(page)
    await brandSelectDropdown.click()
    const brandSelectDropdownOptions = await getBrandSelectionDropdownOptions(page)
    await brandSelectDropdownOptions.nth(3).click()
  })

  test("Superadmin page check", async ({ page }) => {
    console.log("[INFO] Superadmin page check START")
    await superadminReviewBrandTab(page)
    await superadminReviewCommunitiesTab(page)
    await superadminUsermanagementTab(page)
    console.log("[INFO] Superadmin page check END")
  })
})