import {
  getLINECopyURLBtn,
  getLINECreatechannelCreateBtn,
  getLINECreateCancelBtn,
  getLINECreateChannelAlias,
  getLINEDoitlaterBtn,
  getLINEGotIDBtn,
  getLINENextBtn,
  getLINESettingCreateBtn
} from "../lineliffapp-settings/lineliffapp.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement, waitForPageToLoad } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { test, expect } from "@playwright/test"

test.describe("Line LIFF App Settings", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Developer tool$/ })
      .first()
    await scrollToElement(page, parentMenu)
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^LINE LIFF app settings$/ })
      .first()
    await childMenu.click()

    try {
      await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.brand?.line_setting !== undefined, { timeout: 10000 })
    } catch (error) {
      console.error("This community does not have any line setting")
    }

  })

  test("Create Line LIFF app setting", async ({ page }) => {
    console.log("[INFO] Create line LIFF app setting check START")
    const channelAliasText = "testChannelAlias"
    await waitForPageToLoad(page)
    const lineCreateBtn = await getLINESettingCreateBtn(page)
    await lineCreateBtn.click()
    const createchannelAliasInputField = await getLINECreateChannelAlias(page)
    const createchannelCancelBtn = await getLINECreateCancelBtn(page)
    const createchannelCreateBtn = await getLINECreatechannelCreateBtn(page)
    await expect(createchannelAliasInputField).toBeVisible()
    await expect(createchannelCancelBtn).toBeVisible()
    await expect(createchannelCreateBtn).toBeVisible()
    await createchannelAliasInputField.fill(channelAliasText)
    await createchannelCreateBtn.click()
    const createchannelCopyURLBtn = await getLINECopyURLBtn(page)
    await expect(createchannelCopyURLBtn).toBeVisible()
    await createchannelCopyURLBtn.click();
    const createchannelNextBtn = await getLINENextBtn(page)
    await expect(createchannelNextBtn).toBeVisible()
    await createchannelNextBtn.click()
    const createchannelLaterBtn = await getLINEDoitlaterBtn(page) // Do it later button
    const createchannelGotLIFFId = await getLINEGotIDBtn(page) // I've got the Line LIFF id button
    await expect(createchannelLaterBtn).toBeVisible()
    await expect(createchannelGotLIFFId).toBeVisible()
    console.log("[INFO] Create line LIFF app setting check END")
  })
})
