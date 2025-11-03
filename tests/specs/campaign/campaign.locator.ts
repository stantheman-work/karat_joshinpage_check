import { expect, Locator, Page } from "@playwright/test"

async function getCampaignText(page) {
  const campaignText = page.locator("//div[text()='Campaigns']")
  await expect(campaignText).toBeVisible({ timeout: 5000 })
  return campaignText
}

async function getCampaignSearchFilter(page) {
  const campaignSearchFilter = page.locator("//input[@id='search']")
  await expect(campaignSearchFilter).toBeVisible({ timeout: 5000 })
  return campaignSearchFilter
}

async function getCampaignTypeFilter(page) {
  const campaignTypeFilter = page.locator("//div[text()='All Campaign']")
  await expect(campaignTypeFilter).toBeVisible({ timeout: 5000 })
  return campaignTypeFilter
}

async function getCampaignCreateBtn(page) {
  const campaignCreateBtn = page.locator("//span[contains(text(),'Create')]/parent::button")
  await expect(campaignCreateBtn).toBeVisible({ timeout: 5000 })
  return campaignCreateBtn
}

async function getCampaignColumnHeader(page: Page) {
  const campaignColumnHeader = page.locator("//th[text()]")
  const count = await campaignColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(campaignColumnHeader.nth(i))
  }
  console.log("This is the value of Mysterybox column header = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getCampaignDataCode(page) {
  const campaignDataCode = page.locator("//input[@name='suffixCode']")
  await expect(campaignDataCode).toBeVisible({ timeout: 5000 })
  return campaignDataCode
}

async function getCampaignDataSupply(page) {
  const campaignDataSupply = page.locator("//input[@name='supply']")
  await expect(campaignDataSupply).toBeVisible({ timeout: 5000 })
  return campaignDataSupply
}

async function getCampaignDataTermToggle(page) {
  const campaignDataTermToggle = page.locator("//input[@name='useTerm']")
  await expect(campaignDataTermToggle).toBeVisible({ timeout: 5000 })
  return campaignDataTermToggle
}

async function getCampaignDataRewardDescription(page) {
  const campaignDataRewardDescription = page.locator("//input[@name='rewardDescription']")
  await expect(campaignDataRewardDescription).toBeVisible({ timeout: 5000 })
  return campaignDataRewardDescription
}

async function getCampaignBonusRewardText(page) {
  const campaignBonusRewardText = page.locator("//h6[text()='Bonus reward']")
  await expect(campaignBonusRewardText).toBeVisible({ timeout: 5000 })
  return campaignBonusRewardText
}

async function getCampaignRewardType(page) {
  const campaignRewardType = page.locator("//input[@name='bonusRewardType']/parent::div")
  await expect(campaignRewardType).toBeVisible({ timeout: 5000 })
  return campaignRewardType
}

async function getCampaignRewardTokenDropdown(page) {
  const campaignRewardTokenDropdown = page.locator("//input[@name='token']/parent::div")
  await expect(campaignRewardTokenDropdown).toBeVisible({ timeout: 5000 })
  return campaignRewardTokenDropdown
}

async function getCampaignRewardTokenAmount(page) {
  const campaignRewardTokenAmount = page.locator("//input[@name='amount']")
  await expect(campaignRewardTokenAmount).toBeVisible({ timeout: 5000 })
  return campaignRewardTokenAmount
}

async function getCampaignDataReturninguserToggle(page) {
  const campaignDataReturninguserToggle = page.locator("//input[@name='useChangeExperience']")
  await expect(campaignDataReturninguserToggle).toBeVisible({ timeout: 5000 })
  return campaignDataReturninguserToggle
}

async function getCampaignDataFrequencyToggle(page) {
  const campaignDataFrequencyToggle = page.locator("//input[@name='useFrequencyCap']")
  await expect(campaignDataFrequencyToggle).toBeVisible({ timeout: 5000 })
  return campaignDataFrequencyToggle
}

async function getCampaignDataOthernotes(page) {
  const campaignDataOthernotes = page.locator("//input[@name='otherNote']")
  await expect(campaignDataOthernotes).toBeVisible({ timeout: 5000 })
  return campaignDataOthernotes
}

async function getCampaignDataCancelBtn(page) {
  const campaignDataCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(campaignDataCancelBtn).toBeVisible({ timeout: 5000 })
  return campaignDataCancelBtn
}

async function getCampaignDataSaveBtn(page) {
  const campaignDataSaveBtn = page.locator("//button[text()='Save']")
  await expect(campaignDataSaveBtn).toBeVisible({ timeout: 5000 })
  return campaignDataSaveBtn
}

async function getCampaignStartEndDate(page: Page) {
  // 0 = Start, 1 = End
  const campaignStartEndDate = page.locator("//input[contains(@placeholder,'YYYY/MM/DD')]")
  const count = await campaignStartEndDate.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(campaignStartEndDate.nth(i))
  }
  console.log("This is the value of start and end date fields = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getCampaignReturneeTokenReward(page) {
  const campaignReturneeTokenReward = page.locator("//input[@name='useSecondTokenReward']")
  await expect(campaignReturneeTokenReward).toBeVisible({ timeout: 5000 })
  return campaignReturneeTokenReward
}

async function getCampaignReturneeNFTReward(page) {
  const campaignReturneeNFTReward = page.locator("//input[@name='useSecondNFTReward']")
  await expect(campaignReturneeNFTReward).toBeVisible({ timeout: 5000 })
  return campaignReturneeNFTReward
}

async function getCampaignReturneeRewardDesc(page) {
  const campaignReturneeRewardDesc = page.locator("//input[@name='secondRewardDescription']")
  await expect(campaignReturneeRewardDesc).toBeVisible({ timeout: 5000 })
  return campaignReturneeRewardDesc
}

async function getCampaignAdvancedoptionsToggle(page) {
  const campaignAdvancedoptionsToggle = page.locator("//button[text()='Show advanced options']")
  await expect(campaignAdvancedoptionsToggle).toBeVisible({ timeout: 5000 })
  return campaignAdvancedoptionsToggle
}

async function getCampaignIntegrationToggle(page) {
  const campaignIntegrationToggle = page.locator("//input[@name='enableIntegration']")
  await expect(campaignIntegrationToggle).toBeVisible({ timeout: 5000 })
  return campaignIntegrationToggle
}

async function getCampaignReportforsamplingToggle(page) {
  const campaignReportforsamplingToggle = page.locator("//input[@name='reportingForSampling']")
  await expect(campaignReportforsamplingToggle).toBeVisible({ timeout: 5000 })
  return campaignReportforsamplingToggle
}

async function getCampaignTargetingToggle(page) {
  const campaignTargetingToggle = page.locator("//input[@name='enableTargeting']")
  await expect(campaignTargetingToggle).toBeVisible({ timeout: 5000 })
  return campaignTargetingToggle
}

async function getCampaignWalletproviderToggle(page) {
  const campaignWalletproviderToggle = page.locator("//input[@name='enableTargetPartner']")
  await expect(campaignWalletproviderToggle).toBeVisible({ timeout: 5000 })
  return campaignWalletproviderToggle
}

async function getCampaignMIDToggle(page) {
  const campaignMIDToggle = page.locator("//input[@name='enableTargetVendingMachine']")
  await expect(campaignMIDToggle).toBeVisible({ timeout: 5000 })
  return campaignMIDToggle
}

export {
  getCampaignBonusRewardText,
  getCampaignColumnHeader,
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
  getCampaignSearchFilter,
  getCampaignText,
  getCampaignTypeFilter,
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
}
