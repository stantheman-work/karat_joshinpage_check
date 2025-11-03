import {
  getInternalcollabAddCollabBtn,
  getInternalfeatureFromCommunity,
  getInternalfeatureToCommunity,
  getInternalNewUserToggle,
  getInternalSFCancelBtn,
  getInternalSFExpireDateToggle,
  getInternalSFStartCollabBtn,
  getInternalSFTwoWaysToggle,
  getInternalStartEndDate,
  getInternalSwapFromToken,
  getInternalSwapTokenChoice,
  getInternalSwapTokenText,
  getInternalSwapToToken,
  getInternalTokenFeatureChoice,
  getInternalUserLimitAmount,
  getInternalUserLimitToggle,
  getInternalUserLimitTokenDropdown,
} from "@/specs/collaboration/internal/internal.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement, waitForGraphqlResponse, waitForPageToLoad } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import test, { expect } from "@playwright/test"

test.describe("Collaboration > Internal page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const collabMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Collaboration$/ })
      .first()
    await scrollToElement(page, collabMenu)
    await collabMenu.click()

    const internalCollabMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Internal$/ })
      .first()
    await internalCollabMenu.click()

    await waitForGraphqlResponse(page, (json) => json.data.findActiveCollaborations !== undefined)

    expect(page.getByText("Internal Collaboration")).toBeVisible()
  })

  test("Swap token", async ({ page }) => {
    console.log("[INFO] Swap token check start")
    const internalAddCollabBtn = await getInternalcollabAddCollabBtn(page)
    await internalAddCollabBtn.click()
    const internalSwapTokenChoice = await getInternalSwapTokenChoice(page)
    await internalSwapTokenChoice.click()
    await waitForPageToLoad(page)

    const internalSwapTokenText = await getInternalSwapTokenText(page)
    const internalSwapFromToken = (await getInternalSwapFromToken(page))[0]
    const internalSwapToToken = await getInternalSwapToToken(page)
    const internalSFTwoWaysToggle = await getInternalSFTwoWaysToggle(page)
    const internalUserLimitToggle = await getInternalUserLimitToggle(page)
    await expect(internalSwapTokenText).toBeVisible()
    await expect(internalSwapFromToken).toBeVisible()
    await expect(internalSwapToToken).toBeVisible()
    await expect(internalSFTwoWaysToggle).toBeVisible()
    await expect(internalUserLimitToggle).toBeVisible()
    await internalUserLimitToggle.click()
    const internalUserLimitAmount = await getInternalUserLimitAmount(page)
    const internalUserLimitTokenDropdown = await getInternalUserLimitTokenDropdown(page)
    const internalNewUserToggle = await getInternalNewUserToggle(page)
    const internalSFCancelBtn = await getInternalSFCancelBtn(page)
    const internalSFStartCollabBtn = await getInternalSFStartCollabBtn(page)
    await expect(internalSFCancelBtn).toBeVisible()
    await expect(internalSFStartCollabBtn).toBeVisible()
    await expect(internalUserLimitAmount).toBeVisible()
    await expect(internalUserLimitTokenDropdown).toBeVisible()
    await expect(internalNewUserToggle).toBeVisible()
    const internalSFExpireDateToggle = await getInternalSFExpireDateToggle(page)
    await expect(internalSFExpireDateToggle).toBeVisible()
    await scrollToElement(page, internalSFExpireDateToggle)
    await internalSFExpireDateToggle.click()
    const internalStartDate = (await getInternalStartEndDate(page))[0]
    const internalEndDate = (await getInternalStartEndDate(page))[1]
    await expect(internalStartDate).toBeVisible()
    await expect(internalEndDate).toBeVisible()
    await internalSFCancelBtn.click()
    console.log("[INFO] Swap token check end")
  })

  test("Feature token", async ({ page }) => {
    console.log("[INFO] Feature token check start")
    const internalAddCollabBtn = await getInternalcollabAddCollabBtn(page)
    await internalAddCollabBtn.click()
    const internalFeatureTokenChoice = await getInternalTokenFeatureChoice(page)
    await internalFeatureTokenChoice.click()
    await waitForPageToLoad(page)
    const internalFeatureFromCommunity = await getInternalfeatureFromCommunity(page)
    const internalFeatureToCommunity = await getInternalfeatureToCommunity(page)
    const internalSFTwoWaysToggle = await getInternalSFTwoWaysToggle(page)
    await expect(internalFeatureFromCommunity).toBeVisible()
    await expect(internalFeatureToCommunity).toBeVisible()
    await expect(internalSFTwoWaysToggle).toBeVisible()
    const internalSFExpireDateToggle = await getInternalSFExpireDateToggle(page)
    await expect(internalSFExpireDateToggle).toBeVisible()
    await scrollToElement(page, internalSFExpireDateToggle)
    await expect(internalSFExpireDateToggle).toBeVisible()
    await internalSFExpireDateToggle.click()
    const internalStartDate = (await getInternalStartEndDate(page))[0]
    const internalEndDate = (await getInternalStartEndDate(page))[1]
    await expect(internalStartDate).toBeVisible()
    await expect(internalEndDate).toBeVisible()
    const internalSFCancelBtn = await getInternalSFCancelBtn(page)
    await internalSFCancelBtn.click()
    console.log("[INFO] Feature token check end")
  })
})
