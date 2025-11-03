import { expect, Locator, Page } from "@playwright/test"

async function getNFTLaunchText(page) {
  const nftLaunchText = page.locator("//h5[text()='Launch setting']")
  await expect(nftLaunchText).toBeVisible({ timeout: 5000 })
  return nftLaunchText
}

async function getNFTListZAPToggle(page) {
  const nftListZAPToggle = page.locator("//input[@name='listOnZap']")
  await expect(nftListZAPToggle).toBeVisible({ timeout: 5000 })
  return nftListZAPToggle
}

async function getNFTZAPPaymentType(page: Page) {
  /*
    0 = pay by token
    1 = pay by chas
    */
  const nftZAPPaymentType = page.locator("//input[@name='zapPaymentType']")
  const count = await nftZAPPaymentType.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(nftZAPPaymentType.nth(i))
  }
  console.log("This is the value of ZAP Payment type = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getNFTZAPScheduleToggle(page) {
  const nftZAPScheduleToggle = page.locator("//input[@name='enableZapSchedule']")
  await expect(nftZAPScheduleToggle).toBeVisible({ timeout: 5000 })
  return nftZAPScheduleToggle
}

async function getNFTZAPStartEndDate(page: Page) {
  const nftZAPPaymentType = page.locator("//input[contains(@placeholder, 'YYYY/MM/DD')]")
  const count = await nftZAPPaymentType.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(nftZAPPaymentType.nth(i))
  }
  console.log("This is the value of ZAP Start End date = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getNFTReferralRewardToggle(page) {
  const nftReferralRewardToggle = page.locator("//input[@name='enableReferralRewards']")
  await expect(nftReferralRewardToggle).toBeVisible({ timeout: 5000 })
  return nftReferralRewardToggle
}

async function getNFTReferrerCheckbox(page) {
  const nftReferrerCheckbox = page.locator("//input[@name='enableRewardForReferrer']")
  await expect(nftReferrerCheckbox).toBeVisible({ timeout: 5000 })
  return nftReferrerCheckbox
}

async function getNFTRewardForReferrerAmount(page) {
  const nftRewardForReferrerAmount = page.locator("//input[@name='rewardForReferrerAmount']")
  await expect(nftRewardForReferrerAmount).toBeVisible({ timeout: 5000 })
  return nftRewardForReferrerAmount
}

async function getNFTRefereeRewardType(page) {
  const nftRefereeRewardType = page.locator("//input[@name='refereeRewardType']/parent::div")
  await expect(nftRefereeRewardType).toBeVisible({ timeout: 5000 })
  return nftRefereeRewardType
}

async function getNFTRefereeRewardOptions(page: Page) {
  /*
    0 = discount
    1 = bonus reward
    2 = discount and bonus reward
    */
  const nftRefereeRewardOptions = page.locator("//li[@role]")
  const count = await nftRefereeRewardOptions.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(nftRefereeRewardOptions.nth(i))
  }
  console.log("This is the value of Referee Reward Options = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getNFTDiscountType(page) {
  const nftDiscountType = page.locator("//input[@name='discountRefereeType']/parent::div")
  await expect(nftDiscountType).toBeVisible({ timeout: 5000 })
  return nftDiscountType
}

async function getNFTDiscountTypeOptions(page: Page) {
  /*
    0 = Fixed Amount
    1 = Percentage
    */
  const nftDiscountTypeOptions = page.locator("//li[@role]")
  const count = await nftDiscountTypeOptions.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(nftDiscountTypeOptions.nth(i))
  }
  console.log("This is the value of Discount Type Options = " + textFieldArray.length + "\n")

  return textFieldArray
}

//li[@data-value]

async function getNFTRefereeDiscountAmount(page) {
  const nftRefereeDiscountAmount = page.locator("//input[@name='discountRefereeAmount']")
  await expect(nftRefereeDiscountAmount).toBeVisible({ timeout: 5000 })
  return nftRefereeDiscountAmount
}

async function getNFTRefereeTokenReward(page) {
  const nftRefereeTokenReward = page.locator("//input[@name='tokenRefereeReward']")
  await expect(nftRefereeTokenReward).toBeVisible({ timeout: 5000 })
  return nftRefereeTokenReward
}

async function getNFTRefereeTokenAmount(page) {
  const nftRefereeTokenAMount = page.locator("//input[@name='amountRefereeReward']")
  await expect(nftRefereeTokenAMount).toBeVisible({ timeout: 5000 })
  return nftRefereeTokenAMount
}

async function getNFTRefereeNFTReward(page) {
  const nftRefereeNFTReward = page.locator("//input[@name='nftRefereeReward']")
  await expect(nftRefereeNFTReward).toBeVisible({ timeout: 5000 })
  return nftRefereeNFTReward
}

async function getNFTRefereeChooseNFTBtn(page) {
  const nftRefereeChooseNFTBtn = page.locator("//button[text()='Choose Item']")
  await expect(nftRefereeChooseNFTBtn).toBeVisible({ timeout: 5000 })
  return nftRefereeChooseNFTBtn
}

async function getNFTLockRequirementToggle(page) {
  const nftExchangeRequirementToggle = page.locator("//input[@name='exchangeRequirement']")
  await expect(nftExchangeRequirementToggle).toBeVisible({ timeout: 5000 })
  return nftExchangeRequirementToggle
}

async function getNFTLockRequirementType(page: Page) {
  /*
    0 = Accumulate enough tokens
    1 = Hold certain NFT
  */
  const nftLockRequirementType = page.locator("//input[@name='exchangeRequirementType']")
  const count = await nftLockRequirementType.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(nftLockRequirementType.nth(i))
  }
  console.log("This is the value of Lock Requirement Type = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getNFTVisibilityRequirementToggle(page) {
  const nftVisiblityRequirementToggle = page.locator("//input[@name='visibilityRequirement']")
  await expect(nftVisiblityRequirementToggle).toBeVisible({ timeout: 5000 })
  return nftVisiblityRequirementToggle
}

async function getNFTVisibilityRequirementAddNFTBtn(page) {
  const nftVisiblityRequirementAddNFTBtn = page.locator("//button[text()='Add NFTs']")
  await expect(nftVisiblityRequirementAddNFTBtn).toBeVisible({ timeout: 5000 })
  return nftVisiblityRequirementAddNFTBtn
}

async function getNFTListVendingmachineToggle(page) {
  const nftListVendingmachineToggle = page.locator("//input[@name='listOnVendingMachine']")
  await expect(nftListVendingmachineToggle).toBeVisible({ timeout: 5000 })
  return nftListVendingmachineToggle
}

async function getNFTVendingmachinePrice(page) {
  const nftVendingmachinePrice = page.locator("//input[@name='vending_machinePrice']")
  await expect(nftVendingmachinePrice).toBeVisible({ timeout: 5000 })
  return nftVendingmachinePrice
}

async function getNFTVendingmachineScheduleToggle(page) {
  const nftVendingmachineScheduleToggle = page.locator("//input[@name='enabledVendingMachineSchedule']")
  await expect(nftVendingmachineScheduleToggle).toBeVisible({ timeout: 5000 })
  return nftVendingmachineScheduleToggle
}

async function getNFTListOnlineSalesToggle(page) {
  const nftListOnlineSalesToggle = page.locator("//input[@name='enableOnlineSales']")
  await expect(nftListOnlineSalesToggle).toBeVisible({ timeout: 5000 })
  return nftListOnlineSalesToggle
}

async function getNFTOSAddLinkBtn(page) {
  const nftOSAddBtn = page.locator("//div[text()='Add purchase link']/ancestor::button")
  await expect(nftOSAddBtn).toBeVisible({ timeout: 5000 })
  return nftOSAddBtn
}

async function getNFTOSAddChannelName(page) {
  const nftOSAddChannelName = page.locator("//input[@name='channelName']")
  await expect(nftOSAddChannelName).toBeVisible({ timeout: 5000 })
  return nftOSAddChannelName
}

async function getNFTOSAddPrice(page) {
  const nftOSAddChannelPrice = page.locator("//input[@name='price']")
  await expect(nftOSAddChannelPrice).toBeVisible({ timeout: 5000 })
  return nftOSAddChannelPrice
}

async function getNFTOSMonthlySubscriptionBtn(page) {
  const nftOSMonthlySubscriptionBt = page.locator("//input[@name='subscription']")
  await expect(nftOSMonthlySubscriptionBt).toBeVisible({ timeout: 5000 })
  return nftOSMonthlySubscriptionBt
}

async function getNFTOSAddScheduleStartEndDate(page: Page) {
  /*
    0 = Start
    1 = End
  */
  const nftOSAddScheduleStartEndDate = page.locator("//input[contains(@placeholder,'YYYY/MM/DD')]")
  const count = await nftOSAddScheduleStartEndDate.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(nftOSAddScheduleStartEndDate.nth(i))
  }
  return textFieldArray
}

async function getNFTOSPublishOnMarketplaceBtn(page) {
  const nftOSPublishOnMarketplaceBtn = page.locator("//input[@name='market_place']")
  await expect(nftOSPublishOnMarketplaceBtn).toBeVisible({ timeout: 5000 })
  return nftOSPublishOnMarketplaceBtn
}

async function getNFTOSCreatePaymentLinkBtn(page) {
  const nftOSCreatePaymentLinkBtn = page.locator("//button[text()='Create payment Link']")
  await expect(nftOSCreatePaymentLinkBtn).toBeVisible({ timeout: 5000 })
  return nftOSCreatePaymentLinkBtn
}

async function getNFTOSCancelBtn(page) {
  const nftOSCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(nftOSCancelBtn).toBeVisible({ timeout: 5000 })
  return nftOSCancelBtn
}

async function getNFTOSAddDeleteBtn(page) {
  const nftOSAddDeleteBtn = page.locator("//*[name()='svg' and contains(@data-testid,'Delete')]/parent::button")
  await expect(nftOSAddDeleteBtn).toBeVisible({ timeout: 5000 })
  return nftOSAddDeleteBtn
}

async function getNFTCompletelistingBtn(page) {
  const nftCompletelistingBtn = page.locator("//button[text()='Complete listing']")
  await expect(nftCompletelistingBtn).toBeVisible({ timeout: 5000 })
  return nftCompletelistingBtn
}

async function getNFTListPopupText(page) {
  const nftListPopupText = page.locator("//h5[text()='Launch setting for NFT']")
  await expect(nftListPopupText).toBeVisible({ timeout: 5000 })
  return nftListPopupText
}

async function getNFTListPopupGotitBtn(page) {
  const nftListPopupGotitBtn = page.locator("//button[text()='Got it']")
  await expect(nftListPopupGotitBtn).toBeVisible({ timeout: 5000 })
  return nftListPopupGotitBtn
}

export {
  getNFTCompletelistingBtn,
  getNFTDiscountType,
  getNFTDiscountTypeOptions,
  getNFTLaunchText,
  getNFTListOnlineSalesToggle,
  getNFTListPopupGotitBtn,
  getNFTListPopupText,
  getNFTListVendingmachineToggle,
  getNFTListZAPToggle,
  getNFTLockRequirementToggle,
  getNFTLockRequirementType,
  getNFTOSAddLinkBtn,
  getNFTOSCancelBtn,
  getNFTOSAddChannelName,
  getNFTOSCreatePaymentLinkBtn,
  getNFTOSAddDeleteBtn,
  getNFTOSPublishOnMarketplaceBtn,
  getNFTOSAddPrice,
  getNFTOSAddScheduleStartEndDate,
  getNFTOSMonthlySubscriptionBtn,
  getNFTReferralRewardToggle,
  getNFTRefereeChooseNFTBtn,
  getNFTRefereeDiscountAmount,
  getNFTRefereeNFTReward,
  getNFTRefereeRewardOptions,
  getNFTRefereeRewardType,
  getNFTRefereeTokenAmount,
  getNFTRefereeTokenReward,
  getNFTReferrerCheckbox,
  getNFTRewardForReferrerAmount,
  getNFTVendingmachinePrice,
  getNFTVendingmachineScheduleToggle,
  getNFTVisibilityRequirementAddNFTBtn,
  getNFTVisibilityRequirementToggle,
  getNFTZAPPaymentType,
  getNFTZAPScheduleToggle,
  getNFTZAPStartEndDate
}
