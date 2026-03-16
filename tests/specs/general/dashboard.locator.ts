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

// used in sanity.spec, checkSaveButtons
async function getSideBarParentMenu(page: Page) {
  const brandDashboardSideParentMenu = page.locator("//div[@class='-mr-10']/div[1]/div/span")
  const count = await brandDashboardSideParentMenu.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(brandDashboardSideParentMenu.nth(i))
  }

  return textFieldArray
}

// used in sanity.spec, checkSaveButtons
async function getSideBarItems(page: Page) {
  const brandDashboardSideMenuItems = page.locator("//a[@href]/div")
  const count = await brandDashboardSideMenuItems.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(brandDashboardSideMenuItems.nth(i))
  }

  return textFieldArray
}

async function getBrandSelectionDropdown(page: Page) {
  return page.locator("//*[name()='svg' and @alt='icon-down']/preceding-sibling::div/parent::div")
}

async function getBrandSelectionDropdownOptions(page: Page) {
  return page.locator("//div/li")
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

// Locators below are for Communities Tab
async function getBrandEditButton(page: Page) {
  return page.getByText('Edit Brand')
}

async function getBrandCommunityCreateBtn(page) {
  const brandCommunityCreateBtn = page.locator("//span[text()='New Community']/parent::button")
  await expect(brandCommunityCreateBtn).toBeVisible({ timeout: 5000 })
  return brandCommunityCreateBtn
}

async function getBrandCommunityTabs(page: Page) {
  // 0 = Communities, 1 = Members, 2 = Logs
  const brandCommunityTabs = page.locator("//button[@role='tab']")
  const count = await brandCommunityTabs.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(brandCommunityTabs.nth(i))
  }
  console.log("This is the value of brand community tabs = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getBrandSearchFilter(page) {
  const brandSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(brandSearchFilter).toBeVisible({ timeout: 5000 })
  return brandSearchFilter
}

export async function getBrandSearchLoadingIcon(page: Page) {
  return page.locator("//div[@id='lottie']")
}

export async function getBrand24karatFilterResultSettingBtn(page: Page) {
  return page.locator("//div[text()='24KARAT']/ancestor::td/following-sibling::td/descendant::button[@aria-label='Customize home']")
}

async function getBrandVisibilityFilter(page) {
  const brandVisibilityFilter = page.locator("//input[contains(@value,'FILTER')]/parent::div")
  await expect(brandVisibilityFilter).toBeVisible({ timeout: 5000 })
  return brandVisibilityFilter
}

async function getBrandStatusFilter(page) {
  const brandStatusFilter = page.locator("//input[contains(@value,'STATUS')]/parent::div")
  await expect(brandStatusFilter).toBeVisible({ timeout: 5000 })
  return brandStatusFilter
}

async function getBrandCommunityColumnHeaders(page: Page) {
  // 0 = Communities, 1 = Members, 2 = Logs
  const brandCommunityColumnHeaders = page.locator("//th[text()]")
  const count = await brandCommunityColumnHeaders.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(brandCommunityColumnHeaders.nth(i))
  }
  console.log("This is the value of brand community column headers = " + textFieldArray.length + "\n")

  return textFieldArray
}

export async function getBrandCommunityNoCommunityText(page) {
  return page.locator("//div[text()='You currently have no community']")
}

async function getBrandCommunitySubmitBtn(page: Page) {
  const brandCommunitySubmitBtn = page.locator("//button[@aria-label='Submit']")
  const count = await brandCommunitySubmitBtn.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(brandCommunitySubmitBtn.nth(i))
  }
  console.log("This is the value of brand community submit button = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getBrandCommunityCustomizehomeBtn(page: Page) {
  const brandCommunityCustomizehomeBtn = page.locator("//button[@aria-label='Customize home']")
  const count = await brandCommunityCustomizehomeBtn.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(brandCommunityCustomizehomeBtn.nth(i))
  }
  console.log("This is the value of brand community customize home button = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getBrandCommunityEditBtn(page: Page) {
  return page.locator("//button[@aria-label='Edit']")
}

async function getBrandCustomizehomeBtn(page: Page) {
  return page.locator("//button[@aria-label='Customize home']")
}

async function getBrandCommunityVisibilitysettingBtn(page: Page) {
  return this.page.locator("//button[@aria-label='Visibility setting']")
}

export async function getBrand24karatCommunityVisibilitySettingBtn(page: Page) {
  return page.locator("//div[text()='24KARAT']/ancestor::td/following-sibling::td/descendant::button[@aria-label='Visibility setting']")
}

export {
  getBrand24karatOption,
  getBrandCommunityColumnHeaders,
  getBrandCommunityCustomizehomeBtn,
  getBrandCommunityEditBtn,
  getBrandCommunitySubmitBtn,
  getBrandCommunityTabs,
  getBrandCommunityVisibilitysettingBtn,
  getBrandCommunityCreateBtn,
  getBrandCustomizehomeBtn,
  getBrandDashboardNotificationCloseBtn,
  getBrandDashboardNotificationHeader,
  getBrandEditButton,
  getBrandSearchFilter,
  getBrandSelectDropdown,
  getBrandSelectionDropdown,
  getBrandSelectionDropdownOptions,
  getBrandStatusFilter,
  getBrandVisibilityFilter,
  getSideBarItems,
  getSideBarParentMenu
}
