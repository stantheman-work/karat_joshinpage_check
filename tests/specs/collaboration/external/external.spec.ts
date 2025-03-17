import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import test, { expect } from "@playwright/test"
import {
  getExternalAllowCollaborateText,
  getExternalCollabFeaturedSelect,
  getExternalcollabInboxComposeMessageBtn,
  getExternalCollaborateBtn,
  getExternalCollabSettingBackBtn,
  getExternalcollabSettingBtn,
  getExternalCollabSettingText,
  getExternalCollabSwapSelect,
  getExternalCollabTokenList,
  getExternalComposeCloseBtn,
  getExternalComposeGreeting,
  getExternalComposeSendBtn,
  getExternalComposeToToken,
  getExternalDateFromToDateInput,
  getExternalDBColumnHeaders,
  getExternalDBSearchFilter,
  getExternalFeaturedPageShown,
  getExternalFeaturedToken,
  getExternalPMChatBtn,
  getExternalPMColumnHeaders,
  getExternalPMDialogCloseBtn,
  getExternalPMSearchFilter,
  getExternalSFCloseBtn,
  getExternalSFExpireDateToggle,
  getExternalSFSubmitBtn,
  getExternalSFTwoWaysToggle,
  getExternalSwapFromTokenDropdown,
  getExternalSwapFromTokenInput,
  getExternalSwapLimitUserToggle,
  getExternalSwapNewUserToggle,
  getExternalSwapToTokenDropdown,
  getExternalSwapToTokenInput,
} from "./external.locator"

test.describe("Collaboration > External page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const collabMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Collaboration$/ })
      .first()
    await scrollToElement(page, collabMenu)
    await collabMenu.click()

    const externalCollabMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^External$/ })
      .first()
    await externalCollabMenu.click()

    await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.collaborationRoom !== undefined)
  })

  test("Inbox", async ({ page }) => {
    const inboxTab = page.getByRole("tab", { name: "Inbox" })
    await expect(inboxTab).toBeVisible()
    await inboxTab.click()

    const externalComposeMessageBtn = await getExternalcollabInboxComposeMessageBtn(page)
    await externalComposeMessageBtn.click()
    const externalComposeToToken = await getExternalComposeToToken(page)
    const externalComposeGreeting = await getExternalComposeGreeting(page)
    const externalComposeSendBtn = await getExternalComposeSendBtn(page)
    const externalComposeCloseBtn = await getExternalComposeCloseBtn(page)
    await expect(externalComposeToToken).toBeVisible()
    await expect(externalComposeGreeting).toBeVisible()
    await expect(externalComposeSendBtn).toBeVisible()
    await expect(externalComposeCloseBtn).toBeVisible()
    await externalComposeCloseBtn.click()
    const externalCollabBtn = await getExternalCollaborateBtn(page)
    await externalCollabBtn.click()
    const externalCollabSwapSelect = await getExternalCollabSwapSelect(page)
    const externalCollabFeaturedSelect = await getExternalCollabFeaturedSelect(page)
    await expect(externalCollabSwapSelect).toBeVisible()
    await expect(externalCollabFeaturedSelect).toBeVisible()
    await externalCollabSwapSelect.click()
    /*
     * Check fields inside token swap create START
     */
    await page.waitForTimeout(2000)
    const externalSwapFromTokenInput = (await getExternalSwapFromTokenInput(page))[0]
    const externalSwapFromTokenDropdown = await getExternalSwapFromTokenDropdown(page)
    const externalSwapToTokenInput = await getExternalSwapToTokenInput(page)
    const externalSwapToTokenDropdown = await getExternalSwapToTokenDropdown(page)
    const externalSFTwoWaysToggle = await getExternalSFTwoWaysToggle(page)
    const externalSwapLimitUserToggle = await getExternalSwapLimitUserToggle(page)
    const externalSwapNewUserToggle = await getExternalSwapNewUserToggle(page)
    const externalSFExpireDateToggle = await getExternalSFExpireDateToggle(page)
    await expect(externalSFExpireDateToggle).toBeVisible()
    await externalSFExpireDateToggle.click()
    const externalDateFromDateInput = (await getExternalDateFromToDateInput(page))[0]
    const externalDateToDateInput = (await getExternalDateFromToDateInput(page))[1]
    const externalSFCloseBtn = await getExternalSFCloseBtn(page)
    const externalSFSubmitBtn = await getExternalSFSubmitBtn(page)
    await expect(externalSwapFromTokenInput).toBeVisible()
    await expect(externalSwapFromTokenDropdown).toBeVisible()
    await expect(externalSwapToTokenInput).toBeVisible()
    await expect(externalSwapToTokenDropdown).toBeVisible()
    await expect(externalSFTwoWaysToggle).toBeVisible()
    await expect(externalSwapLimitUserToggle).toBeVisible()
    await expect(externalSwapNewUserToggle).toBeVisible()
    await expect(externalDateFromDateInput).toBeVisible()
    await expect(externalDateToDateInput).toBeVisible()
    await expect(externalSFCloseBtn).toBeVisible()
    await expect(externalSFSubmitBtn).toBeVisible()
    await externalSFCloseBtn.click()
    /*
     * Check fields inside token swap create END
     */
    await externalCollabFeaturedSelect.click()
    /*
     * Check fields inside featured token create START
     */
    const externalFeaturedToken = await getExternalFeaturedToken(page)
    const externalFeaturedPageShown = await getExternalFeaturedPageShown(page)
    await externalSFExpireDateToggle.click()
    await expect(externalFeaturedToken).toBeVisible()
    await expect(externalFeaturedPageShown).toBeVisible()
    await expect(externalSFTwoWaysToggle).toBeVisible()
    await expect(externalDateFromDateInput).toBeVisible()
    await expect(externalDateToDateInput).toBeVisible()
    await expect(externalSFSubmitBtn).toBeVisible()
    await expect(externalSFCloseBtn).toBeVisible()
    await externalSFCloseBtn.click()
  })

  test("Partner matching", async ({ page }) => {
    const partnerMatchingTab = page.getByRole("tab", { name: "Partner matching" })
    await expect(partnerMatchingTab).toBeVisible()
    await partnerMatchingTab.click()

    await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findPartnerTokens !== undefined)

    try {
      const pmDialogBox = await getExternalPMDialogCloseBtn(page)
      await expect(pmDialogBox).toBeVisible()
      await pmDialogBox.click()
    } catch (error) {
      // Dialog box is not present, no need to click the close button
    }

    const externalPMSearchFilter = await getExternalPMSearchFilter(page)
    await expect(externalPMSearchFilter).toBeVisible()

    const externalPMColumnHeaders = (await getExternalPMColumnHeaders(page))[0]
    await expect(externalPMColumnHeaders).toBeVisible()

    const externalPMChatBtn = (await getExternalPMChatBtn(page))[0]
    await expect(externalPMChatBtn).toBeVisible()
  })

  test("Dashboard", async ({ page }) => {
    const dashboardTab = page.getByRole("tab", { name: "Dashboard" })
    await expect(dashboardTab).toBeVisible()
    await dashboardTab.click()

    await page.waitForResponse(async (resp) => {
      if (resp.url().includes("/graphql")) {
        const json = await resp.json()
        return json.data.findActiveCollaborations !== undefined
      }
      return false
    })

    const externalDBSearchFilter = await getExternalDBSearchFilter(page)
    const externalDBColumnHeaders = (await getExternalDBColumnHeaders(page))[0]
    await expect(externalDBSearchFilter).toBeVisible()
    await expect(externalDBColumnHeaders).toBeVisible()
    /*
     * Check fields inside dashboard END
     * Check fields inside settings button START
     */
    const externalCollabSettingBtn = await getExternalcollabSettingBtn(page)
    await externalCollabSettingBtn.click()
    const externalCollabSettingText = await getExternalCollabSettingText(page)
    const externalAllowCollaborateText = await getExternalAllowCollaborateText(page)
    const externalCollabTokenList = await getExternalCollabTokenList(page)
    const externalCollabSettingBackBtn = await getExternalCollabSettingBackBtn(page)
    await expect(externalCollabSettingText).toBeVisible()
    await expect(externalAllowCollaborateText).toBeVisible()
    await expect(externalCollabTokenList).toBeVisible()
    await expect(externalCollabSettingBackBtn).toBeVisible()
    await externalCollabSettingBackBtn.click()
  })

  test("Settings button", async ({ page }) => {
    const settingButton = page.getByRole("button", { name: "Setting" })
    await expect(settingButton).toBeVisible()
    await settingButton.click()
    const settingText = page.getByText("Collaboration settings")
    await expect(settingText).toBeVisible()
  })
})
