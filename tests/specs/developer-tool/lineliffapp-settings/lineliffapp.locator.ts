import { expect, Locator, Page } from "@playwright/test"

async function getLINESettingText(page) {
  const lineSettingText = page.locator("//div[text()='LINE LIFF app settings']")
  await expect(lineSettingText).toBeVisible({ timeout: 5000 })
  return lineSettingText
}

async function getLINESettingCreateBtn(page) {
  const lineSettingCreateBtn = page.locator("//div[text()='Create a new setting']/parent::button")
  await expect(lineSettingCreateBtn).toBeVisible({ timeout: 5000 })
  return lineSettingCreateBtn
}

async function getLINESettingSearchFilter(page) {
  const lineSettingSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(lineSettingSearchFilter).toBeVisible({ timeout: 5000 })
  return lineSettingSearchFilter
}

async function getLINESettingColumnHeaders(page: Page) {
  const lineSettingColumnHeaders = page.locator("//th[text()]")
  const count = await lineSettingColumnHeaders.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(lineSettingColumnHeaders.nth(i))
  }
  console.log("This is the value of LINE setting column headers = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getLINECreateChannelAlias(page) {
  const lineCreateChannelAlias = page.locator("//input[@name='alias']")
  await expect(lineCreateChannelAlias).toBeVisible({ timeout: 5000 })
  return lineCreateChannelAlias
}

async function getLINECreateCancelBtn(page) {
  const lineCreateCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(lineCreateCancelBtn).toBeVisible({ timeout: 5000 })
  return lineCreateCancelBtn
}

async function getLINECreatechannelCreateBtn(page) {
  const lineCreatechannelCreateBtn = page.locator("//button[text()='Create']")
  await expect(lineCreatechannelCreateBtn).toBeVisible({ timeout: 5000 })
  return lineCreatechannelCreateBtn
}

async function getLINECopyURLBtn(page) {
  const lineCopyURLBtn = page.locator("//button[text()='Copy URL']")
  await expect(lineCopyURLBtn).toBeVisible({ timeout: 5000 })
  return lineCopyURLBtn
}

async function getLINENextBtn(page) {
  const lineNextBtn = page.locator("//button[text()='Next']")
  await expect(lineNextBtn).toBeVisible({ timeout: 5000 })
  return lineNextBtn
}

async function getLINEDoitlaterBtn(page) {
  const lineDoitlaterBtn = page.locator("//button[text()='Do it later']")
  await expect(lineDoitlaterBtn).toBeVisible({ timeout: 5000 })
  return lineDoitlaterBtn
}

async function getLINEGotIDBtn(page) {
  const lineGotIDBtn = page.locator("//button[contains(text(), 'got the')]")
  await expect(lineGotIDBtn).toBeVisible({ timeout: 5000 })
  return lineGotIDBtn
}

export {
  getLINECopyURLBtn,
  getLINECreatechannelCreateBtn,
  getLINECreateCancelBtn,
  getLINECreateChannelAlias,
  getLINEDoitlaterBtn,
  getLINEGotIDBtn,
  getLINENextBtn,
  getLINESettingColumnHeaders,
  getLINESettingCreateBtn,
  getLINESettingSearchFilter,
  getLINESettingText
}
