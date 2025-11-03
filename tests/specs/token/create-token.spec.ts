import { brandAddTokenDetails } from "@/functions/check-create-edit-sanity"
import { getBrandCreateTokenButton } from "@/specs/general/dashboard.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { PageUtils } from "@/utils/page-utils"
import { expect, test } from "@playwright/test"

test.describe("Token", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test("Create token", async ({ page }) => {
    console.log("[INFO] Start create token check")
    await PageUtils.gotoToHome(page)
    // Click brand edit button and check if elements exists inside the page
    const brandCreateTokenBtn = await getBrandCreateTokenButton(page)
    await brandCreateTokenBtn.click()
    // create token function here
    await brandAddTokenDetails(page)
    await expect(brandCreateTokenBtn).toBeVisible()
    console.log("[INFO] End create token check")
  })
})
