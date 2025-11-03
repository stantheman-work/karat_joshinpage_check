import { expect, Locator, Page } from "@playwright/test"

async function getMysteryListingBtn(page) {
  const mysteryListingBtn = page.locator("//div[text()='Launch setting']")
  await expect(mysteryListingBtn).toBeVisible({ timeout: 5000 })
  return mysteryListingBtn
}

async function getMysteryMoreOptions(page: Page) {
  const mysteryMoreOptions = page.locator("//*[name()='svg' and @data-testid='MoreHorizIcon']/parent::button")
  const count = await mysteryMoreOptions.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(mysteryMoreOptions.nth(i))
  }
  console.log("Mystery box more options button = " + textFieldArray.length + "\n")
  return textFieldArray
}

// Mystery box initial pop up
async function getMysteryPopupText(page) {
  const mysteryPopupText = page.locator("//h5[text()='Launch setting for Mystery box']/parent::h2")
  await expect(mysteryPopupText).toBeVisible({ timeout: 5000 })
  return mysteryPopupText
}

async function getMysteryGotitBtn(page) {
  const mysteryGotitBtn = page.locator("//button[text()='Got it']")
  await expect(mysteryGotitBtn).toBeVisible({ timeout: 5000 })
  return mysteryGotitBtn
}

async function getMysteryZAPListToggle(page) {
  const mysteryZapListToggle = page.locator("//input[@name='listOnZap']")
  await expect(mysteryZapListToggle).toBeVisible({ timeout: 5000 })
  return mysteryZapListToggle
}

async function getMysteryZAPPrice(page) {
  const mysteryZapAmount = page.locator("//input[@name='amount']")
  await expect(mysteryZapAmount).toBeVisible({ timeout: 5000 })
  return mysteryZapAmount
}

async function getMysteryZAPScheduleToggle(page) {
  const mysteryZAPScheduleToggle = page.locator("//input[@name='useSchedule']")
  await expect(mysteryZAPScheduleToggle).toBeVisible({ timeout: 5000 })
  return mysteryZAPScheduleToggle
}

async function getMysteryRevealdateSelection(page: Page) {
  const mysteryRevealdateSelection = page.locator("//input[@name='useRevealDate']")
  const count = await mysteryRevealdateSelection.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(mysteryRevealdateSelection.nth(i))
  }
  console.log("This is the value of Mysterybox reveal date selection = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getMysteryStartEndDate(page: Page) {
  /*
   0 = zap start date
   1 = zap end date
   2 = reveal date (if toggle is ON)
   3 = vending start date
   4 = vending end date
   */
  const mysteryStartEndDate = page.locator("//input[contains(@placeholder,'YYYY')]")
  const count = await mysteryStartEndDate.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(mysteryStartEndDate.nth(i))
  }
  console.log("This is the value of Mysterybox start end date = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getMysteryVendingListToggle(page) {
  const mysteryVendingListToggle = page.locator("//input[@name='paymentLink.enabled']")
  await expect(mysteryVendingListToggle).toBeVisible({ timeout: 5000 })
  return mysteryVendingListToggle
}

async function getMysteryVendingPrice(page) {
  const mysteryVendingPrice = page.locator("//input[@name='paymentLink.price']")
  await expect(mysteryVendingPrice).toBeVisible({ timeout: 5000 })
  return mysteryVendingPrice
}

async function getMysteryVendingScheduleToggle(page) {
  const mysteryVendingScheduleToggle = page.locator("//input[@name='paymentLink.enabledVendingMachineSchedule']")
  await expect(mysteryVendingScheduleToggle).toBeVisible({ timeout: 5000 })
  return mysteryVendingScheduleToggle
}

async function getMysteryListOnlineSalesToggle(page) {
  const mysteryListOnlineSalesToggle = page.locator("//input[@name='enableOnlineSales']")
  await expect(mysteryListOnlineSalesToggle).toBeVisible({ timeout: 5000 })
  return mysteryListOnlineSalesToggle
}

async function getMysteryOSAddLinkBtn(page) {
  const nftOSAddBtn = page.locator("//div[text()='Add purchase link']/ancestor::button")
  await expect(nftOSAddBtn).toBeVisible({ timeout: 5000 })
  return nftOSAddBtn
}

async function getMysteryOSAddChannelName(page) {
  const nftOSAddChannelName = page.locator("//input[@name='channelName']")
  await expect(nftOSAddChannelName).toBeVisible({ timeout: 5000 })
  return nftOSAddChannelName
}

async function getMysteryOSAddPrice(page) {
  const nftOSAddChannelPrice = page.locator("//input[@name='price']")
  await expect(nftOSAddChannelPrice).toBeVisible({ timeout: 5000 })
  return nftOSAddChannelPrice
}

async function getMysteryOSAddScheduleStartEndDate(page: Page) {
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

async function getMysteryOSPublishOnMarketplaceBtn(page) {
  const nftOSPublishOnMarketplaceBtn = page.locator("//input[@name='market_place']")
  await expect(nftOSPublishOnMarketplaceBtn).toBeVisible({ timeout: 5000 })
  return nftOSPublishOnMarketplaceBtn
}

async function getMysteryOSCreatePaymentLinkBtn(page) {
  const nftOSCreatePaymentLinkBtn = page.locator("//button[text()='Create payment Link']")
  await expect(nftOSCreatePaymentLinkBtn).toBeVisible({ timeout: 5000 })
  return nftOSCreatePaymentLinkBtn
}

async function getMysteryOSCancelBtn(page) {
  const nftOSCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(nftOSCancelBtn).toBeVisible({ timeout: 5000 })
  return nftOSCancelBtn
}

async function getMysteryOSDeleteBtn(page) {
  const nftOSDeleteBtn = page.locator("//*[name()='svg' and contains(@data-testid,'Delete')]/parent::button")
  await expect(nftOSDeleteBtn).toBeVisible({ timeout: 5000 })
  return nftOSDeleteBtn
}

async function getMysteryCompletelistingBtn(page) {
  const nftCompletelistingBtn = page.locator("//button[text()='Complete listing']")
  await expect(nftCompletelistingBtn).toBeVisible({ timeout: 5000 })
  return nftCompletelistingBtn
}

export {
  getMysteryCompletelistingBtn,
  getMysteryGotitBtn,
  getMysteryListingBtn,
  getMysteryListOnlineSalesToggle,
  getMysteryMoreOptions,
  getMysteryOSAddChannelName,
  getMysteryOSDeleteBtn,
  getMysteryOSAddLinkBtn,
  getMysteryOSAddPrice,
  getMysteryOSAddScheduleStartEndDate,
  getMysteryOSCancelBtn,
  getMysteryOSCreatePaymentLinkBtn,
  getMysteryOSPublishOnMarketplaceBtn,
  getMysteryPopupText,
  getMysteryRevealdateSelection,
  getMysteryStartEndDate,
  getMysteryVendingListToggle,
  getMysteryVendingPrice,
  getMysteryVendingScheduleToggle,
  getMysteryZAPListToggle,
  getMysteryZAPPrice,
  getMysteryZAPScheduleToggle
}
