import { brandEditCheck, brandTokenCreateCheck, brandTokenEditCheck } from "@/functions/check-button-elements-sanity"
import { getBrandEditBackBtn } from "@/locators/brand-admin-brandinfo-loc"
import {
  getBrandCreateTokenButton,
  getBrandEditButton,
  getBrandEditTokenSelection,
  getBrandEditTokenText,
  getBrandTokenSettingsButton,
  getBrandTokenSettingsSelectButton,
} from "@/locators/brand-admin-dashboard-loc"
import { getTokenBackBtn } from "@/locators/brand-admin-tokeninfo-loc"
import { AuthUtils } from "@/utils/auth-utils"
import { waitForPageToLoad } from "@/utils/load-helper"
import { PageUtils } from "@/utils/page-utils"
import { expect, test } from "@playwright/test"

test.describe("General > Home page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)
  })

  test("brand edit", async ({ page }) => {
    // Click brand edit button and check if elements exists inside the page
    const brandEditBtn = await getBrandEditButton(page)
    await brandEditBtn.click()
    await brandEditCheck(page)
    const brandEditBackBtn = await getBrandEditBackBtn(page)
    await brandEditBackBtn.click()
  })

  test("token create", async ({ page }) => {
    const tokenCreatebtn = await getBrandCreateTokenButton(page)
    await tokenCreatebtn.click()
    await brandTokenCreateCheck(page)
    const tokenBackBtn = await getTokenBackBtn(page)
    await tokenBackBtn.click()

    // This checks if brand has a working token. Else, close the test
    try {
      await waitForPageToLoad(page)
      const tokenSettingBtn = (await getBrandTokenSettingsButton(page))[0]
      await expect(tokenSettingBtn).toBeVisible()
      console.log("[INFO] Settings button exists. Continue with test")
    } catch (error) {
      console.log("[ERROR] Token either has DRAFT status, or no token is available for this brand.")
    }
    // If there is a token, edit token info and check if elements exists inside the page4
    let loopCtr = 5
    // Loop 5 times until token is shown
    for (let ctr = 0; ctr < loopCtr; ctr++) {
      try {
        await page.waitForTimeout(3000)
        const tokenSettingBtn = (await getBrandTokenSettingsButton(page))[0]
        await expect(tokenSettingBtn).toBeVisible()
        await tokenSettingBtn.click()
        ctr = 5
      } catch (error) {
        console.log("[ERROR] Not yet loaded, wait for 3 seconds")
      }
    }
    const tokenSettingSelectBtn = (await getBrandTokenSettingsSelectButton(page))[1]
    await expect(tokenSettingSelectBtn).toBeVisible()
    await tokenSettingSelectBtn.click()
    const tokenEditText = await getBrandEditTokenText(page)
    await expect(tokenEditText).toBeVisible()
    const tokenGeneralInformation = (await getBrandEditTokenSelection(page))[0]
    await expect(tokenGeneralInformation).toBeVisible()
    await tokenGeneralInformation.click()
    await brandTokenEditCheck(page)
    await tokenBackBtn.click()
  })
})
