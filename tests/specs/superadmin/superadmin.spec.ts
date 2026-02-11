import {
  getReviewbrandAllbrandsText,
  getReviewbrandColumnHeaders,
  getReviewbrandSearchFilter,
  getReviewbrandStatusFilter,
  getSuperadminBrandmanagementBtn,
  getSuperadminChangelanguageBtn,
  getSuperadminTabs,
  getSuperadminUserprofileBtn
} from "../superadmin/superadmin.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { expect, test } from "@playwright/test"

test.describe("Superadmin Page", () => {
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

  test("Superadmin Review Brand Tab", async ({ page }) => {
    console.log("[INFO] Superadmin Review Brand Tab check START")
    const reviewbrandAllbrandText = await getReviewbrandAllbrandsText(page)
    const reviewbrandSearchFilter = await getReviewbrandSearchFilter(page)
    const reviewbrandStatusFilter = await getReviewbrandStatusFilter(page)
    const reviewbrandColumnHeaders = (await getReviewbrandColumnHeaders(page))[0]
    const superadminBrandmanagementBtn = await getSuperadminBrandmanagementBtn(page)
    const superadminChangelanguageBtn = await getSuperadminChangelanguageBtn(page)
    const superadminUserprofileBtn = await getSuperadminUserprofileBtn(page)
    const reviewbrandTab = (await getSuperadminTabs(page))[0]
    await expect(reviewbrandAllbrandText).toBeVisible()
    await expect(reviewbrandSearchFilter).toBeVisible()
    await expect(reviewbrandStatusFilter).toBeVisible()
    await expect(reviewbrandColumnHeaders).toBeVisible()
    await expect(superadminBrandmanagementBtn).toBeVisible()
    await expect(superadminChangelanguageBtn).toBeVisible()
    await expect(superadminUserprofileBtn).toBeVisible()
    await expect(reviewbrandTab).toBeVisible()
    console.log("[INFO] Superadmin Review Brand Tab check END")
  })
})