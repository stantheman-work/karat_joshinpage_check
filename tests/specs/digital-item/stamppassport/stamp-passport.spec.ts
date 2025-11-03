import {
  getStamppassportCancelBtn,
  getStamppassportCreateBtn,
  getStamppassportCreateText,
  getStamppassportUploadImage,
  getStamppassportName,
  getStamppassportRewardToggle,
  getStamppassportDisplayToggle,
  getStamppassportSaveBtn
} from "@/specs/digital-item/stamppassport/stamp-passport.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { waitForAnElement, waitForPageToLoad } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { test, expect } from "@playwright/test"

test.describe("Stamp passport page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)
    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Digital item$/ })
      .first()
    await parentMenu.click()
    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Stamp Passport$/ })
      .first()
    await childMenu.click()
  })

  test("Stamp passport page", async ({ page }) => {
    console.log("[INFO] Start Stamp passport page check")
    await page.waitForTimeout(3000) // wait for page to load not working, so this is alternative
    const passportCreateBtn = await getStamppassportCreateBtn(page)
    await passportCreateBtn.click()
    await waitForPageToLoad(page)
    await page.waitForTimeout(3000)
    const passportCreate = await getStamppassportCreateText(page)
    const passportUploadImg = await getStamppassportUploadImage(page)
    const passportName = await getStamppassportName(page)
    const passportRewardToggle = await getStamppassportRewardToggle(page)
    const passportDisplayToggle = await getStamppassportDisplayToggle(page)
    const passportCancelBtn = await getStamppassportCancelBtn(page)
    const passportSaveBtn = await getStamppassportSaveBtn(page)
    await expect(passportCreate).toBeVisible()
    await expect(passportUploadImg).toBeVisible()
    await expect(passportName).toBeVisible()
    await expect(passportRewardToggle).toBeVisible()
    await expect(passportDisplayToggle).toBeVisible()
    await expect(passportCancelBtn).toBeVisible()
    await expect(passportSaveBtn).toBeVisible()
    await passportCancelBtn.click()
    await waitForAnElement(page, passportCreateBtn)
    console.log("[INFO] End Stamp passport page check")
  })
})
