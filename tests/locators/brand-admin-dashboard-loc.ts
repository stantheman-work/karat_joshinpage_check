import { expect, Locator, Page } from "@playwright/test"

async function getBrandDashboardNotificationHeader(page) {
  const brandDashboardNotifHeader = page.locator("//div[@role='presentation']/div/h2")
  await expect(brandDashboardNotifHeader).toBeVisible({ timeout: 5000 })
  return brandDashboardNotifHeader
}

async function getBrandDashboardNotificationCloseBtn(page) {
  const brandDashboardNotifCloseBtn = page.locator("//button[text()='Later']")
  await expect(brandDashboardNotifCloseBtn).toBeVisible({ timeout: 5000 })
  return brandDashboardNotifCloseBtn
}

async function getSideBarParentMenu(page: Page) {
  const brandDashboardSideParentMenu = page.locator("//div[@class='-mr-10']/div[1]/div/span")
  const count = await brandDashboardSideParentMenu.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(brandDashboardSideParentMenu.nth(i))
  }
  console.log("This is the value of side parent menu = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getSideBarItems(page: Page) {
  const brandDashboardSideParentMenu = page.locator("//div[contains(@href,'/')]")
  const count = await brandDashboardSideParentMenu.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(brandDashboardSideParentMenu.nth(i))
  }
  console.log("This is the value of side items = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getBrandHomeText(page) {
  const brandHomeText = page.locator("//div[text()='Home']")
  await expect(brandHomeText).toBeVisible({ timeout: 5000 })
  return brandHomeText
}

async function getBrandEditButton(page: Page) {
  const brandEditBtn = page.locator("//button[contains(text(), 'Brand')]")
  await expect(brandEditBtn).toBeVisible({ timeout: 5000 })
  return brandEditBtn
}

async function getBrandCreateTokenButton(page) {
  const brandCreateTokenBtn = page.locator("//button[@id='create_token']")
  await expect(brandCreateTokenBtn).toBeVisible({ timeout: 5000 })
  return brandCreateTokenBtn
}

async function getBrandTokenText(page) {
  const brandTokenText = page.locator("//div[text()='Tokens']")
  await expect(brandTokenText).toBeVisible({ timeout: 5000 })
  return brandTokenText
}

async function getBrandSelectDropdown(page) {
  const brandSelectDropdown = page.locator(
    "//span[text()='Brand']/following-sibling::button/descendant::p[contains(text(),'24karat')]"
  )
  await expect(brandSelectDropdown).toBeVisible({ timeout: 5000 })
  return brandSelectDropdown
}

async function getBrand24karatOption(page) {
  const brand24karatOption = page.locator("//div[@class='flex-1']/child::div[text()='24karat']")
  await expect(brand24karatOption).toBeVisible({ timeout: 5000 })
  return brand24karatOption
}

async function getBrandTokenSettingsButton(page: Page) {
  const brandTokenSettingsBtn = page.locator("//button[contains(@aria-label,'settings')]/parent::button")
  const count = await brandTokenSettingsBtn.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(brandTokenSettingsBtn.nth(i))
  }
  console.log("This is the value of token settings button = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getBrandTokenSettingsSelectButton(page: Page) {
  const brandTokenSettingsSelectBtn = page.locator("//div[contains(@id,'headless')]/div")
  const count = await brandTokenSettingsSelectBtn.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(brandTokenSettingsSelectBtn.nth(i))
  }
  console.log("This is the value of token settings select = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getBrandEditTokenText(page) {
  const brandTokenText = page.locator("//h5[contains(text(),'Edit')]")
  await expect(brandTokenText).toBeVisible({ timeout: 5000 })
  return brandTokenText
}

async function getBrandEditTokenSelection(page: Page) {
  // 0 = General info, 1 = Customize home, 2 = Visible setting
  const brandEditTokenSelection = page.locator("//p[text()='General information']/parent::div")
  const count = await brandEditTokenSelection.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(brandEditTokenSelection.nth(i))
  }
  console.log("This is the value of edit token selection = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getTokenList(page: Page, tokenName: string) {
  // List of tokens on dashboard. Used to look for a specific token if it exists on the page
  const tokenList = page.locator(`//div[contains(text(),'${tokenName}')]`)
  await expect(tokenList).toBeVisible({ timeout: 5000 })
  return tokenList
}

export {
  getBrand24karatOption,
  getBrandCreateTokenButton,
  getBrandDashboardNotificationCloseBtn,
  getBrandDashboardNotificationHeader,
  getBrandEditButton,
  getBrandEditTokenSelection,
  getBrandEditTokenText,
  getBrandHomeText,
  getBrandSelectDropdown,
  getBrandTokenSettingsButton,
  getBrandTokenSettingsSelectButton,
  getBrandTokenText,
  getSideBarItems,
  getSideBarParentMenu,
  getTokenList,
}
