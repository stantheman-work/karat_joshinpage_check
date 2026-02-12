import {
  brandDashboardSaveBtnCheck
} from "../check_saveButtons/checkSaveButtons"
import { AuthUtils } from "@/utils/auth-utils"
import { PageUtils } from "@/utils/page-utils"
import { test } from "@playwright/test"

test.describe("Brand Admin page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await test.step("PageUtils.gotoToHome()", async () => {
      await PageUtils.gotoToHome(page)
    })
  })

  test("Superadmin page check", async ({ page }) => {
    console.log("[INFO] Dashboard save buttons check START")
    await brandDashboardSaveBtnCheck(page)
    console.log("[INFO] Dashboard save buttons check END")
  })
})