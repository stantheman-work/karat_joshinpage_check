import {
  getUsersearchAllcommunitiesDropdown,
  getUsersearchExportBtn,
  getUsersearchOpenuserlinkBtn,
  getUsersearchSearchBtn,
  getUsersearchSearchBy,
  getUsersearchSearchfilter,
  getUsersearchText
} from "./usersearch.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { expect, test } from "@playwright/test"

test.describe("User search", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Report$/ })
      .first()
    await scrollToElement(page, parentMenu)
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^User search$/ })
      .first()
    await childMenu.click()
  })

  test("User Search", async ({ page }) => {
    console.log("[INFO] User search page check START")
    const searchInput = 'brand'
    const usersearchText = await getUsersearchText(page)
    const usersearchAllcommunitiesDropdown = await getUsersearchAllcommunitiesDropdown(page)
    const usersearchSearchfilter = await getUsersearchSearchfilter(page)
    const usersearchSearchBy = await getUsersearchSearchBy(page)
    const usersearchSearchBtn = await getUsersearchSearchBtn(page)
    await expect(usersearchText).toBeVisible()
    await expect(usersearchAllcommunitiesDropdown).toBeVisible()
    await expect(usersearchSearchfilter).toBeVisible()
    await expect(usersearchSearchBy).toBeVisible()
    await expect(usersearchSearchBtn).toBeVisible()
    await usersearchSearchfilter.fill(searchInput)
    await usersearchSearchBtn.click()
    await page.waitForTimeout(3000)
    const usersearchExportBtn = await getUsersearchExportBtn(page)
    const usersearchOpenuserlinkBtn = (await getUsersearchOpenuserlinkBtn(page))[0]
    await expect(usersearchExportBtn).toBeVisible()
    await expect(usersearchOpenuserlinkBtn).toBeVisible()
    console.log("[INFO] User search page check END")
  })
})