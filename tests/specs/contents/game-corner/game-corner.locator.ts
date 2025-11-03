import { expect, Locator, Page } from "@playwright/test"

async function getGamecornerText(page) {
  const gamecornerText = page.locator("//h5[text()='Game corner']")
  await expect(gamecornerText).toBeVisible({ timeout: 5000 })
  return gamecornerText
}

async function getGamecornerCreateGameBtn(page) {
  const gamecornerCreateGameBtn = page.locator("//button[text()='Create game']")
  await expect(gamecornerCreateGameBtn).toBeVisible({ timeout: 5000 })
  return gamecornerCreateGameBtn
}

async function getGamecornerSearchFilter(page) {
  const gamecornerSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(gamecornerSearchFilter).toBeVisible({ timeout: 5000 })
  return gamecornerSearchFilter
}

async function getGamecornerCommunityFilter(page) {
  const gamecornerCommunityFilter = page.locator("//label[text()='Community']/following-sibling::div")
  await expect(gamecornerCommunityFilter).toBeVisible({ timeout: 5000 })
  return gamecornerCommunityFilter
}

async function getGamecornerStatusFilter(page) {
  const gamecornerStatusFilter = page.locator("//label[text()='Status']/following-sibling::div/div")
  await expect(gamecornerStatusFilter).toBeVisible({ timeout: 5000 })
  return gamecornerStatusFilter
}

async function getGamecornerColumnHeaders(page: Page) {
  const gamecornerColumnHeaders = page.locator("//tr/th[text()]")
  const count = await gamecornerColumnHeaders.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(gamecornerColumnHeaders.nth(i))
  }
  console.log("This is the value of column headers = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getCreategameTitle(page) {
  const creategameTitle = page.locator("//input[@name='title']")
  await expect(creategameTitle).toBeVisible({ timeout: 5000 })
  return creategameTitle
}

async function getCreategameCommunityDropdown(page) {
  const creategameCommunityDropdown = page.locator(
    "//h6[contains(text(),'Community')]/parent::div/following-sibling::div/descendant::div[@role]"
  )
  await expect(creategameCommunityDropdown).toBeVisible({ timeout: 5000 })
  return creategameCommunityDropdown
}

async function getCreategameTokenAmount(page) {
  const creategameTokenAmount = page.locator("//input[@name='amount']")
  await expect(creategameTokenAmount).toBeVisible({ timeout: 5000 })
  return creategameTokenAmount
}

async function getCreategamePeriodToggle(page) {
  const creategamePeriodToggle = page.locator("//input[@name='enableGamePeriod']")
  await expect(creategamePeriodToggle).toBeVisible({ timeout: 5000 })
  return creategamePeriodToggle
}

async function getCreategameStartendDate(page: Page) {
  const creategameStartendDate = page.locator("//input[contains(@value,'YYYY')]")
  const count = await creategameStartendDate.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(creategameStartendDate.nth(i))
  }
  console.log("This is the value of Game start end date = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getCreategameTimezone(page) {
  const creategameTimezone = page.locator("//input[@name='timezone']/preceding-sibling::div")
  await expect(creategameTimezone).toBeVisible({ timeout: 5000 })
  return creategameTimezone
}

async function getCreategameLimitUser(page) {
  const creategameLimitUser = page.locator("//input[@name='useFrequencyCap']")
  await expect(creategameLimitUser).toBeVisible({ timeout: 5000 })
  return creategameLimitUser
}

async function getCreategameFrequencyAmt(page) {
  const creategameFrequencyAmt = page.locator("//input[@name='frequencyAmount']")
  await expect(creategameFrequencyAmt).toBeVisible({ timeout: 5000 })
  return creategameFrequencyAmt
}

async function getCreategameFrequencyUnit(page) {
  const creategameFrequencyUnit = page.locator("//input[@name='timeUnit']/preceding-sibling::div")
  await expect(creategameFrequencyUnit).toBeVisible({ timeout: 5000 })
  return creategameFrequencyUnit
}

async function getCreategameRewardColumnHeaders(page: Page) {
  const creategameRewardColumnHeaders = page.locator("//th/div/p[text()][1]")
  const count = await creategameRewardColumnHeaders.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(creategameRewardColumnHeaders.nth(i))
  }
  console.log("This is the value of Game start end date = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getCreategameAddOptionBtn(page) {
  const creategameAddoptionBtn = page.locator("//button[contains(text(),'option')]")
  await expect(creategameAddoptionBtn).toBeVisible({ timeout: 5000 })
  return creategameAddoptionBtn
}

async function getCreategameCancelBtn(page) {
  const creategameCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(creategameCancelBtn).toBeVisible({ timeout: 5000 })
  return creategameCancelBtn
}

async function getCreategameSaveBtn(page) {
  const creategameSaveBtn = page.locator("//button[text()='Save Game']")
  await expect(creategameSaveBtn).toBeVisible({ timeout: 5000 })
  return creategameSaveBtn
}

export {
  getCreategameAddOptionBtn,
  getCreategameCancelBtn,
  getCreategameFrequencyAmt,
  getCreategameFrequencyUnit,
  getCreategameLimitUser,
  getCreategamePeriodToggle,
  getCreategameRewardColumnHeaders,
  getCreategameSaveBtn,
  getCreategameStartendDate,
  getCreategameTimezone,
  getCreategameTitle,
  getCreategameTokenAmount,
  getCreategameCommunityDropdown,
  getGamecornerColumnHeaders,
  getGamecornerCreateGameBtn,
  getGamecornerSearchFilter,
  getGamecornerStatusFilter,
  getGamecornerText,
  getGamecornerCommunityFilter,
}
