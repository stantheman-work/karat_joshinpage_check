import {
  getCampaignBonusRewardText,
  getCampaignCreateBtn,
  getCampaignDataCancelBtn,
  getCampaignDataCode,
  getCampaignDataFrequencyToggle,
  getCampaignDataOthernotes,
  getCampaignDataReturninguserToggle,
  getCampaignDataRewardDescription,
  getCampaignDataSaveBtn,
  getCampaignDataSupply,
  getCampaignDataTermToggle,
  getCampaignRewardTokenAmount,
  getCampaignRewardTokenDropdown,
  getCampaignRewardType,
} from "@/locators/brand-admin-campaign-loc"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement, waitForPageToLoad } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import test, { expect, Page } from "@playwright/test"

test.describe("Campaign page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Campaign$/ })
      .first()
    await scrollToElement(page, parentMenu)
    await parentMenu.click()

    await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findCampaigns !== undefined)
  })

  test("CAMPAIGN page", async ({ page }) => {
    const createCampaignBtn = await getCampaignCreateBtn(page)
    await createCampaignBtn.click()
    await waitForPageToLoad(page)
    const campaignCode = await getCampaignDataCode(page)
    const campaignSupply = await getCampaignDataSupply(page)
    const campaignTermToggle = await getCampaignDataTermToggle(page)
    const campaignBonusRewardText = await getCampaignBonusRewardText(page)
    const campaignRewardType = await getCampaignRewardType(page)
    const campaignRewardTokenDropdown = await getCampaignRewardTokenDropdown(page)
    const campaignRewardTokenAmount = await getCampaignRewardTokenAmount(page)
    const campaignRewardDescription = await getCampaignDataRewardDescription(page)
    const campaignReturninguserToggle = await getCampaignDataReturninguserToggle(page)
    const campaignFrequencyToggle = await getCampaignDataFrequencyToggle(page)
    const campaignOthernotes = await getCampaignDataOthernotes(page)
    const campaignCancelBtn = await getCampaignDataCancelBtn(page)
    const campaignSaveBtn = await getCampaignDataSaveBtn(page)
    await expect(campaignCode).toBeVisible()
    await expect(campaignSupply).toBeVisible()
    await expect(campaignTermToggle).toBeVisible()
    await expect(campaignBonusRewardText).toBeVisible()
    await expect(campaignRewardType).toBeVisible()
    await expect(campaignRewardTokenDropdown).toBeVisible()
    await expect(campaignRewardTokenAmount).toBeVisible()
    await expect(campaignRewardDescription).toBeVisible()
    await expect(campaignReturninguserToggle).toBeVisible()
    await expect(campaignFrequencyToggle).toBeVisible()
    await expect(campaignOthernotes).toBeVisible()
    await expect(campaignCancelBtn).toBeVisible()
    await expect(campaignSaveBtn).toBeVisible()

    await campaignCancelBtn.click()
  })
})

async function brandCampaignDataPageCheck(page: Page) {}
