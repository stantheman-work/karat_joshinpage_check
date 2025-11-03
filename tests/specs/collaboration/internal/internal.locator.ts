import { expect, Locator, Page } from "@playwright/test"

async function getInternalcollabText(page) {
  const internalText = page.locator("//div[text()='Internal Collaboration']")
  await expect(internalText).toBeVisible({ timeout: 5000 })
  return internalText
}

async function getInternalcollabAddCollabBtn(page) {
  const internalAddCollabBtn = page.locator("//button[text()='Add collaboration']")
  await expect(internalAddCollabBtn).toBeVisible({ timeout: 5000 })
  return internalAddCollabBtn
}

async function getInternalcollabColumnHeader(page: Page) {
  const internalColumnHeader = page.locator("//th[text()]")
  const count = await internalColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(internalColumnHeader.nth(i))
  }
  // console.log("This is the value of internal collab column header = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getInternalSwapTokenChoice(page) {
  const internalSwapTokenChoice = page.locator("//div[text()='Swap token']/parent::button")
  await expect(internalSwapTokenChoice).toBeVisible({ timeout: 5000 })
  return internalSwapTokenChoice
}

async function getInternalTokenFeatureChoice(page) {
  const internalTokenFeatureChoice = page.locator("//div[text()='Feature token']/parent::button")
  await expect(internalTokenFeatureChoice).toBeVisible({ timeout: 5000 })
  return internalTokenFeatureChoice
}

/*
 *  Add collaboration locators start
 */
async function getInternalSwapTokenText(page) {
  const internalSwapTokenChoice = page.locator("//h6[contains(text(),'Swap Token')]")
  await expect(internalSwapTokenChoice).toBeVisible({ timeout: 5000 })
  return internalSwapTokenChoice
}

async function getInternalSwapFromToken(page: Page) {
  const internalSwapFromToken = page.locator("//p[text()='From token']/following-sibling::div/div/div/input")
  const count = await internalSwapFromToken.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(internalSwapFromToken.nth(i))
  }
  // console.log("This is the value internal swap from token = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getInternalSwapToToken(page) {
  const internalSwapToToken = page.locator("//input[@name='rate']")
  await expect(internalSwapToToken).toBeVisible({ timeout: 5000 })
  return internalSwapToToken
}

async function getInternalSFTwoWaysToggle(page) {
  const internalSFTwoWaysToggle = page.locator("//input[@name='allowTowWays']")
  await expect(internalSFTwoWaysToggle).toBeVisible({ timeout: 5000 })
  return internalSFTwoWaysToggle
}

async function getInternalUserLimitToggle(page) {
  const internalUserLimitToggle = page.locator("//input[@name='useLimitUsers']")
  await expect(internalUserLimitToggle).toBeVisible({ timeout: 5000 })
  return internalUserLimitToggle
}

async function getInternalUserLimitAmount(page) {
  const internalUserLimitAmount = page.locator("//input[@name='limitPerUser']")
  await expect(internalUserLimitAmount).toBeVisible({ timeout: 5000 })
  return internalUserLimitAmount
}

async function getInternalUserLimitTokenDropdown(page) {
  const internalUserLimitTokenDropdown = page.locator("//input[@name='limitToken']/preceding-sibling::div")
  await expect(internalUserLimitTokenDropdown).toBeVisible({ timeout: 5000 })
  return internalUserLimitTokenDropdown
}

async function getInternalNewUserToggle(page) {
  const internalNewUserToggle = page.locator("//input[@name='newUser']")
  await expect(internalNewUserToggle).toBeVisible({ timeout: 5000 })
  return internalNewUserToggle
}

async function getInternalSFExpireDateToggle(page) {
  const internalSFExpireDateToggle = page.locator("//input[@name='useExpireDate']")
  await expect(internalSFExpireDateToggle).toBeVisible({ timeout: 5000 })
  return internalSFExpireDateToggle
}

async function getInternalStartEndDate(page: Page) {
  const internalStartEndDate = page.locator("//input[contains(@placeholder,'YYYY')]")
  const count = await internalStartEndDate.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(internalStartEndDate.nth(i))
  }
  // console.log("This is the value of start end date = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getInternalSFCancelBtn(page) {
  const internalSFCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(internalSFCancelBtn).toBeVisible({ timeout: 5000 })
  return internalSFCancelBtn
}

async function getInternalSFStartCollabBtn(page) {
  const internalSFStartCollabBtn = page.locator("//button[text()='Start collaboration']")
  await expect(internalSFStartCollabBtn).toBeVisible({ timeout: 5000 })
  return internalSFStartCollabBtn
}

// Token Feature
async function getInternalfeatureFromCommunity(page) {
  const internalFeatureFromToken = page.locator("//p[text()='Community to feature']/following-sibling::div/div/div")
  await expect(internalFeatureFromToken).toBeVisible({ timeout: 5000 })
  return internalFeatureFromToken
}

async function getInternalfeatureToCommunity(page) {
  const internalFeatureToToken = page.locator("//p[text()='Community page shown']/following-sibling::div/div/div")
  await expect(internalFeatureToToken).toBeVisible({ timeout: 5000 })
  return internalFeatureToToken
}
/*
 *  Add collaboration locators end
 */

export {
  getInternalcollabAddCollabBtn,
  getInternalcollabColumnHeader,
  getInternalcollabText,
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
}
