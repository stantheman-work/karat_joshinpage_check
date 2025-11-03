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
  getCampaignStartEndDate,
  getCampaignReturneeTokenReward,
  getCampaignReturneeNFTReward,
  getCampaignReturneeRewardDesc,
  getCampaignAdvancedoptionsToggle,
  getCampaignIntegrationToggle,
  getCampaignReportforsamplingToggle,
  getCampaignTargetingToggle,
  getCampaignWalletproviderToggle,
  getCampaignMIDToggle
} from "@/specs/campaign/campaign.locator"
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
    const campaignAdvancedOptions = await getCampaignAdvancedoptionsToggle(page);
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
    await campaignTermToggle.click()
    const campaignStartDate = (await getCampaignStartEndDate(page))[0]
    const campaignEndDate = (await getCampaignStartEndDate(page))[1]
    await scrollToElement(page, campaignStartDate)
    await expect(campaignStartDate).toBeVisible()
    await expect(campaignEndDate).toBeVisible()
    await campaignReturninguserToggle.click()
    const campaignReturneeTokenReward = await getCampaignReturneeTokenReward(page)
    const campaignReturneeNFTReward = await getCampaignReturneeNFTReward(page)
    const campaignReturneeRewardDesc = await getCampaignReturneeRewardDesc(page)
    await scrollToElement(page, campaignReturneeTokenReward)
    await expect(campaignReturneeTokenReward).toBeVisible()
    await expect(campaignReturneeNFTReward).toBeVisible()
    await expect(campaignReturneeRewardDesc).toBeVisible()
    await scrollToElement(page, campaignAdvancedOptions)
    await campaignAdvancedOptions.click()
    const campaignPartnerintegrationToggle = await getCampaignIntegrationToggle(page)
    await expect(campaignPartnerintegrationToggle).toBeVisible()
    await campaignPartnerintegrationToggle.click()
    const campaignReportforsamplingToggle = await getCampaignReportforsamplingToggle(page)
    await expect(campaignReportforsamplingToggle).toBeVisible()
    const campaignTargetingToggle = await getCampaignTargetingToggle(page)
    await expect(campaignTargetingToggle).toBeVisible()
    await campaignTargetingToggle.click()
    const campaignWalletproviderToggle = await getCampaignWalletproviderToggle(page)
    const campaignMIDToggle = await getCampaignMIDToggle(page)
    await expect(campaignWalletproviderToggle).toBeVisible()
    await expect(campaignMIDToggle).toBeVisible()
    await campaignCancelBtn.click()
  })
})

async function brandCampaignDataPageCheck(page: Page) { }
