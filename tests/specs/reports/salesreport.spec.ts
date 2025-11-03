import {
  getSalesreportColumnHeader,
  getSalesreportLasttransferdateFilter,
  getSalesreportReportdetailLink,
  getSalesreportRevenuesharerateFilter,
  getSalesreportSearchFilter,
  getSalesreportText
} from "../reports/salesreport.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { expect, test } from "@playwright/test"

test.describe("Sales Report", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Report$/ })
      .first()
    await scrollToElement(page, parentMenu)
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Sales report$/ })
      .first()
    await childMenu.click()
  })

  test("Sales report", async ({ page }) => {
    console.log("[INFO] Sales report page check START")
    const salesreportText = await getSalesreportText(page)
    const salesreportSearchFilter = await getSalesreportSearchFilter(page)
    const salesreportRevenuesharerateFilter = await getSalesreportRevenuesharerateFilter(page)
    const salesreportLasttransferdateFilter = await getSalesreportLasttransferdateFilter(page)
    const salesreportColumnHeader = (await getSalesreportColumnHeader(page))[0]
    await expect(salesreportText).toBeVisible()
    await expect(salesreportSearchFilter).toBeVisible()
    await expect(salesreportRevenuesharerateFilter).toBeVisible()
    await expect(salesreportLasttransferdateFilter).toBeVisible()
    await expect(salesreportColumnHeader).toBeVisible()
    await page.waitForTimeout(3000) // Need to place this to check the timeout
    try {
      const salesreportReportdetailLink = (await getSalesreportReportdetailLink(page))[0]
      await expect(salesreportReportdetailLink).toBeVisible()
      console.log('Creators exist in brand')
    } catch (error) {
      console.log('Creators do not exist in brand')
    }
    await page.waitForTimeout(3000)
    
    console.log("[INFO] Sales report page check END")
  })
})