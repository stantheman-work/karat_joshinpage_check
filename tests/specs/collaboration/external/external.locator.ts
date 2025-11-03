import { expect, Locator, Page } from "@playwright/test"

async function getExternalcollabText(page: Page) {
  const externalText = page.locator("//h5[text()='Collaboration']")
  await expect(externalText).toBeVisible({ timeout: 5000 })
  return externalText
}

async function getExternalCollaborateBtn(page: Page) {
  const externalCollaborateBtn = page.getByRole("button", { name: "Collaborate" })
  await expect(externalCollaborateBtn).toBeVisible({ timeout: 5000 })
  return externalCollaborateBtn
}

async function getExternalcollabSettingBtn(page) {
  const externalSettingBtn = page.locator("//button[text()='Setting']")
  await expect(externalSettingBtn).toBeVisible({ timeout: 5000 })
  return externalSettingBtn
}

async function getExternalcollabTabs(page: Page) {
  /*
      0 = Inbox
      1 = Partner matching
      2 = Dashboard
      3 = Token infor
      4 = Collaboration
    */
  const externalcollabTabs = page.locator("//button[@role='tab']")
  const count = await externalcollabTabs.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(externalcollabTabs.nth(i))
    // console.log("Text of tab " + i + " is " + (await externalcollabTabs.nth(i).textContent()))
  }
  // console.log("This is the value of Tabs in external collab page = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getExternalcollabInboxSearchFilter(page) {
  const externalInboxSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(externalInboxSearchFilter).toBeVisible({ timeout: 5000 })
  return externalInboxSearchFilter
}

async function getExternalcollabInboxComposeMessageBtn(page) {
  const externalComposeMessageBtn = page.locator("//button[contains(text(),'Compose')]")
  await expect(externalComposeMessageBtn).toBeVisible({ timeout: 5000 })
  return externalComposeMessageBtn
}

async function getExternalcollabInboxMessageArea(page) {
  const externalMessageArea = page.locator("//textarea[@placeholder]")
  await expect(externalMessageArea).toBeVisible({ timeout: 5000 })
  return externalMessageArea
}

async function getExternalcollabCommunityDropdown(page) {
  const externalcollabCommunityDropdown = page.locator("//input[contains(@placeholder,'community')]/parent::div")
  await expect(externalcollabCommunityDropdown).toBeVisible({ timeout: 5000 })
  return externalcollabCommunityDropdown
}

async function getExternalcollab24KARAToption(page) {
  const externalcollab24KARAToption = page.locator("//div[text()='24KARAT']/ancestor::li")
  await expect(externalcollab24KARAToption).toBeVisible({ timeout: 5000 })
  return externalcollab24KARAToption
}

// Partner matching tab locators start
async function getExternalcollabPartnermatchNotificationWindow(page) {
  const externalPartnermatchNotifWindow = page.locator("//h2")
  await expect(externalPartnermatchNotifWindow).toBeVisible({ timeout: 5000 })
  return externalPartnermatchNotifWindow
}

async function getExternalcollabPartnermatchNotificationXBtn(page) {
  const externalPartnermatchNotifXBtn = page.locator("//h2/button")
  await expect(externalPartnermatchNotifXBtn).toBeVisible({ timeout: 5000 })
  return externalPartnermatchNotifXBtn
}

async function getExternalcollabPartnermatchSearchFilter(page) {
  const externalPartnermatchSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(externalPartnermatchSearchFilter).toBeVisible({ timeout: 5000 })
  return externalPartnermatchSearchFilter
}

async function getExternalcollabPartnermatchColumnHeader(page: Page) {
  const externalPartnermatchColumnHeader = page.locator("//th[text()]")
  const count = await externalPartnermatchColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(externalPartnermatchColumnHeader.nth(i))
  }
  // console.log("This is the value of Partnermatch column header = " + textFieldArray.length + "\n")

  return textFieldArray
}
// Partner matching tab locators end

// Dashboard locators start
async function getExternalcollabDashboardSearchFilter(page) {
  const externalDashboardSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(externalDashboardSearchFilter).toBeVisible({ timeout: 5000 })
  return externalDashboardSearchFilter
}

async function getExternalcollabDashboardColumnHeader(page: Page) {
  const externalDashboardColumnHeader = page.locator("//th[text()]")
  const count = await externalDashboardColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(externalDashboardColumnHeader.nth(i))
  }
  // console.log("This is the value of Dashboard column header = " + textFieldArray.length + "\n")

  return textFieldArray
}
// Dashboard locators end

// Compose message locators start
async function getExternalComposeToToken(page) {
  const externalComposeToToken = page.locator("//input[@placeholder='Enter a community name']")
  await expect(externalComposeToToken).toBeVisible({ timeout: 5000 })
  return externalComposeToToken
}

async function getExternalComposeGreeting(page) {
  const externalComposeGreeting = page.locator("//textarea[@placeholder='Enter a message']")
  await expect(externalComposeGreeting).toBeVisible({ timeout: 5000 })
  return externalComposeGreeting
}

async function getExternalComposeSendBtn(page) {
  const externalComposeSendBtn = page.locator("//button[text()='Send']")
  await expect(externalComposeSendBtn).toBeVisible({ timeout: 5000 })
  return externalComposeSendBtn
}

async function getExternalComposeCloseBtn(page) {
  const externalComposeCloseBtn = page.locator("//*[name()='svg' and @data-testid='CloseIcon']/parent::div")
  await expect(externalComposeCloseBtn).toBeVisible({ timeout: 5000 })
  return externalComposeCloseBtn
}
// Compose message locators end

// Collaborate button items (swap and feature token) start
async function getExternalCollabSwapSelect(page) {
  const externalCollabSwapSelect = page.locator("//span[contains(text(),'SWAP')]/ancestor::button")
  await expect(externalCollabSwapSelect).toBeVisible({ timeout: 5000 })
  return externalCollabSwapSelect
}

async function getExternalCollabFeaturedSelect(page) {
  const externalCollabFeaturedSelect = page.locator("//span[contains(text(),'FEATURED')]/ancestor::button")
  await expect(externalCollabFeaturedSelect).toBeVisible({ timeout: 5000 })
  return externalCollabFeaturedSelect
}
// Collaborate button items (swap and feature token) end

// Swap token locators start
async function getExternalSwapFromTokenInput(page: Page) {
  const externalSwapFromTokenInput = page.locator("//p[text()='From token']/following-sibling::div/descendant::input")
  const count = await externalSwapFromTokenInput.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(externalSwapFromTokenInput.nth(i))
  }
  // console.log("This is the value of external swap from  = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getExternalSwapFromTokenDropdown(page) {
  const externalSwapFromTokenDropdown = page.locator("//p[text()='From token']/following-sibling::div/div[2]/div/div")
  await expect(externalSwapFromTokenDropdown).toBeVisible({ timeout: 5000 })
  return externalSwapFromTokenDropdown
}

async function getExternalSwapToTokenInput(page) {
  const externalSwapToTokenInput = page.locator("//p[text()='Swap to token']/following-sibling::div/descendant::input")
  await expect(externalSwapToTokenInput).toBeVisible({ timeout: 5000 })
  return externalSwapToTokenInput
}

async function getExternalSwapToTokenDropdown(page) {
  const externalSwapToTokenDropdown = page.locator("//p[text()='Swap to token']/following-sibling::div/div[2]/div")
  await expect(externalSwapToTokenDropdown).toBeVisible({ timeout: 5000 })
  return externalSwapToTokenDropdown
}

async function getExternalSFTwoWaysToggle(page) {
  const externalSwapTwoWaysToggle = page.locator("//input[@name='allowTowWays']")
  await expect(externalSwapTwoWaysToggle).toBeVisible({ timeout: 5000 })
  return externalSwapTwoWaysToggle
}

async function getExternalSwapLimitUserToggle(page) {
  const externalSwapLimitUserToggle = page.locator("//input[@name='useLimitUsers']")
  await expect(externalSwapLimitUserToggle).toBeVisible({ timeout: 5000 })
  return externalSwapLimitUserToggle
}

async function getExternalSwapNewUserToggle(page) {
  const externalSwapNewUserToggle = page.locator("//input[@name='newUser']")
  await expect(externalSwapNewUserToggle).toBeVisible({ timeout: 5000 })
  return externalSwapNewUserToggle
}

async function getExternalSFExpireDateToggle(page) {
  const externalExpireDateToggle = page.locator("//input[@name='useExpireDate']")
  await expect(externalExpireDateToggle).toBeVisible({ timeout: 5000 })
  return externalExpireDateToggle
}

async function getExternalDateFromToDateInput(page: Page) {
  const getExternalDateFromToDateInput = page.locator("//input[contains(@placeholder,'YYYY')]")
  const count = await getExternalDateFromToDateInput.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(getExternalDateFromToDateInput.nth(i))
  }
  // console.log("This is the value of external collab Date Input = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getExternalSFSubmitBtn(page) {
  const externalSwapSubmitBtn = page.locator("//button[text()='Submit']")
  await expect(externalSwapSubmitBtn).toBeVisible({ timeout: 5000 })
  return externalSwapSubmitBtn
}

async function getExternalSFCloseBtn(page) {
  const externalSFCloseBtn = page.locator("//*[name()='svg' and @data-testid='CloseIcon']/parent::div")
  await expect(externalSFCloseBtn).toBeVisible({ timeout: 5000 })
  return externalSFCloseBtn
}
// Swap token locators end

// Featured token locators start
async function getExternalFeaturedToken(page) {
  const externalFeaturedToken = page.locator("//input[@name='from']/preceding-sibling::div")
  await expect(externalFeaturedToken).toBeVisible({ timeout: 5000 })
  return externalFeaturedToken
}

async function getExternalFeaturedPageShown(page) {
  const externalFeaturedPageShown = page.locator("//p[text()='Community page shown']/following-sibling::div/div")
  await expect(externalFeaturedPageShown).toBeVisible({ timeout: 5000 })
  return externalFeaturedPageShown
}
// Featured token locators start

// Collaboration settings button start
async function getExternalCollabSettingText(page) {
  const externalCollabSettingText = page.locator("//h5[text()='Collaboration settings']")
  await expect(externalCollabSettingText).toBeVisible({ timeout: 5000 })
  return externalCollabSettingText
}

async function getExternalAllowCollaborateText(page) {
  const externalAllowCollaborateText = page.locator("//h6[text()='Allow collaborate']")
  await expect(externalAllowCollaborateText).toBeVisible({ timeout: 5000 })
  return externalAllowCollaborateText
}

async function getExternalCollabCommunityList(page) {
  const externalCollabSettingCommunityList = page.locator(
    "//h6[contains(text(),'recommend')]/parent::div/parent::div/following-sibling::div[2]"
  )
  await expect(externalCollabSettingCommunityList).toBeVisible({ timeout: 5000 })
  return externalCollabSettingCommunityList
}

async function getExternalCollabSettingBackBtn(page) {
  const externalCollabSettingBackBtn = page.locator(
    "//*[name()='svg' and contains(@data-testid,'Left')]/parent::button"
  )
  await expect(externalCollabSettingBackBtn).toBeVisible({ timeout: 5000 })
  return externalCollabSettingBackBtn
}
// Collaboration settings button end

// Partner matching start
async function getExternalPMDialogCloseBtn(page) {
  const externalPMDialogCloseBtn = page.locator("//*[name()='svg' and @data-testid='CloseIcon']/parent::button")
  await expect(externalPMDialogCloseBtn).toBeVisible({ timeout: 5000 })
  return externalPMDialogCloseBtn
}

async function getExternalPMSearchFilter(page) {
  const externalPMSearchFilter = page.getByRole("textbox", { name: "Search" })
  await expect(externalPMSearchFilter).toBeVisible({ timeout: 5000 })
  return externalPMSearchFilter
}

async function getExternalPMColumnHeaders(page: Page) {
  const externalPMColumnHeaders = page.getByRole("columnheader", { name: /^.+$/ })
  const count = await externalPMColumnHeaders.count()

  const textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(externalPMColumnHeaders.nth(i))
  }
  // console.log("This is the value of partner matching column headers = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getExternalPMChatBtn(page: Page): Promise<Locator[]> {
  const externalPMChatBtn = page.getByRole("button", { name: "Chat" })
  const count = await externalPMChatBtn.count()

  const buttons: Locator[] = []
  for (let i = 0; i < count; i++) {
    buttons.push(externalPMChatBtn.nth(i))
  }
  // console.log("This is the value of partner matching chat buttons = " + buttons.length + "\n")

  return buttons
}
// Partner matching end

// Dashboard start
async function getExternalDBSearchFilter(page: Page) {
  const externalPMSearchFilter = page.getByRole("textbox", { name: "Search" })
  await expect(externalPMSearchFilter).toBeVisible({ timeout: 5000 })
  return externalPMSearchFilter
}

async function getExternalDBColumnHeaders(page: Page) {
  const externalPMColumnHeaders = page.getByRole("columnheader", { name: /^.+$/ })
  const count = await externalPMColumnHeaders.count()

  const textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(externalPMColumnHeaders.nth(i))
  }
  // console.log("This is the value of partner matching column headers = " + textFieldArray.length + "\n")

  return textFieldArray
}
// Dashboard end

export {
  getExternalAllowCollaborateText,
  getExternalcollabDashboardColumnHeader,
  getExternalcollabDashboardSearchFilter,
  getExternalCollabFeaturedSelect,
  getExternalcollabInboxComposeMessageBtn,
  getExternalcollabInboxMessageArea,
  getExternalcollabInboxSearchFilter,
  getExternalCollaborateBtn,
  getExternalcollabPartnermatchColumnHeader,
  getExternalcollabPartnermatchNotificationWindow,
  getExternalcollabPartnermatchNotificationXBtn,
  getExternalcollabPartnermatchSearchFilter,
  getExternalCollabSettingBackBtn,
  getExternalcollabSettingBtn,
  getExternalCollabSettingText,
  getExternalCollabSwapSelect,
  getExternalcollabTabs,
  getExternalcollabText,
  getExternalCollabCommunityList,
  getExternalComposeCloseBtn,
  getExternalComposeGreeting,
  getExternalComposeSendBtn,
  getExternalComposeToToken,
  getExternalDateFromToDateInput,
  getExternalDBColumnHeaders,
  getExternalDBSearchFilter,
  getExternalFeaturedPageShown,
  getExternalFeaturedToken,
  getExternalPMChatBtn,
  getExternalPMColumnHeaders,
  getExternalPMDialogCloseBtn,
  getExternalPMSearchFilter,
  getExternalSFCloseBtn,
  getExternalSFExpireDateToggle,
  getExternalSFSubmitBtn,
  getExternalSFTwoWaysToggle,
  getExternalSwapFromTokenDropdown,
  getExternalSwapFromTokenInput,
  getExternalSwapLimitUserToggle,
  getExternalSwapNewUserToggle,
  getExternalSwapToTokenDropdown,
  getExternalSwapToTokenInput,
  getExternalcollabCommunityDropdown,
  getExternalcollab24KARAToption
}
