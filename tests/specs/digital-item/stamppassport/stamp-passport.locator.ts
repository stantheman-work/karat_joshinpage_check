import { expect, Locator, Page } from "@playwright/test"

async function getStamppassportText(page) {
  const stamppassportText = page.locator("//div[text()='Stamp passport']")
  await expect(stamppassportText).toBeVisible({ timeout: 5000 })
  return stamppassportText
}

async function getStamppassportSearchFilter(page) {
  const stamppassportSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(stamppassportSearchFilter).toBeVisible({ timeout: 5000 })
  return stamppassportSearchFilter
}

async function getStamppassportCreateBtn(page) {
  const stamppassportCreateBtn = page.locator("//span[text()='Create']/parent::button")
  await expect(stamppassportCreateBtn).toBeVisible({ timeout: 5000 })
  return stamppassportCreateBtn
}

async function getStamppassportColumnHeader(page: Page) {
  const stamppassportColumnHeader = page.locator("//th[text()]")
  const count = await stamppassportColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(stamppassportColumnHeader.nth(i))
  }
  console.log("This is the value of Stamp passport column header = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getStamppassportCreateText(page) {
  const stamppassportCreateText = page.locator("//h2[contains(text(),'Create stamp')]")
  await expect(stamppassportCreateText).toBeVisible({ timeout: 5000 })
  return stamppassportCreateText
}

async function getStamppassportUploadImage(page) {
  const stamppassportUploadImg = page.locator("//div[text()='Upload an image']")
  await expect(stamppassportUploadImg).toBeVisible({ timeout: 5000 })
  return stamppassportUploadImg
}

async function getStamppassportName(page) {
  const stamppassportText = page.locator("//input[@name='name']")
  await expect(stamppassportText).toBeVisible({ timeout: 5000 })
  return stamppassportText
}

async function getStamppassportRewardToggle(page) {
  const stamppassportRewardToggle = page.locator(
    "//div[text()='Bonus reward']/parent::div/following-sibling::span/descendant::input"
  )
  await expect(stamppassportRewardToggle).toBeVisible({ timeout: 5000 })
  return stamppassportRewardToggle
}

async function getStamppassportDisplayToggle(page) {
  const stamppassportDisplayToggle = page.locator(
    "//div[text()='Display']/parent::div/following-sibling::span/descendant::input"
  )
  await expect(stamppassportDisplayToggle).toBeVisible({ timeout: 5000 })
  return stamppassportDisplayToggle
}

async function getStamppassportCancelBtn(page) {
  const stamppassportCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(stamppassportCancelBtn).toBeVisible({ timeout: 5000 })
  return stamppassportCancelBtn
}

async function getStamppassportSaveBtn(page) {
  const stamppassportSaveBtn = page.locator("//button[text()='Save']")
  await expect(stamppassportSaveBtn).toBeVisible({ timeout: 5000 })
  return stamppassportSaveBtn
}

export {
  getStamppassportCancelBtn,
  getStamppassportColumnHeader,
  getStamppassportCreateBtn,
  getStamppassportCreateText,
  getStamppassportDisplayToggle,
  getStamppassportName,
  getStamppassportRewardToggle,
  getStamppassportSaveBtn,
  getStamppassportSearchFilter,
  getStamppassportText,
  getStamppassportUploadImage
}
