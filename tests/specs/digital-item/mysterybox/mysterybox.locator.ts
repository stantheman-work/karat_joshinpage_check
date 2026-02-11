import { expect, Locator, Page } from "@playwright/test"

async function getMysteryboxText(page) {
  const mysteryboxText = page.locator("//div[text()='Mystery boxes']")
  await expect(mysteryboxText).toBeVisible({ timeout: 5000 })
  return mysteryboxText
}

async function getMysteryboxSelectionModeToggle(page) {
  const selectionModeToggle = page.locator("//input[@type='checkbox']")
  await expect(selectionModeToggle).toBeVisible({ timeout: 5000 })
  return selectionModeToggle
}

async function getEditMysteryboxText(page) {
  const createMysteryboxText = page.locator("//span[text()='Edit mystery box']")
  await expect(createMysteryboxText).toBeVisible({ timeout: 5000 })
  return createMysteryboxText
}

async function getCreateMysteryboxUploadImage(page) {
  const createMysteryboxUploadFile = page.locator("//div[@role='presentation']")
  await expect(createMysteryboxUploadFile).toBeVisible({ timeout: 5000 })
  return createMysteryboxUploadFile
}

async function getCreateMysteryboxCommunityDropdown(page) {
  const createMysteryboxCommunityDropdown = page.locator("//input[@name='community']/preceding-sibling::div")
  await expect(createMysteryboxCommunityDropdown).toBeVisible({ timeout: 5000 })
  return createMysteryboxCommunityDropdown
}

async function getCreateMysteryboxName(page) {
  const createMysteryboxTokenName = page.locator("//input[@name='name']")
  await expect(createMysteryboxTokenName).toBeVisible({ timeout: 5000 })
  return createMysteryboxTokenName
}

async function getCreateMysteryboxTotalBoxes(page) {
  const createMysteryboxTotalBoxes = page.locator("//input[@name='sales.total']")
  await expect(createMysteryboxTotalBoxes).toBeVisible({ timeout: 5000 })
  return createMysteryboxTotalBoxes
}

async function getCreateMysteryboxCancelBtn(page) {
  const createMysteryboxCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(createMysteryboxCancelBtn).toBeVisible({ timeout: 5000 })
  return createMysteryboxCancelBtn
}

async function getCreateMysteryboxCreateBtn(page) {
  const createMysteryboxCreateBtn = page.locator("//button[text()='Create']")
  await expect(createMysteryboxCreateBtn).toBeVisible({ timeout: 5000 })
  return createMysteryboxCreateBtn
}

async function getMysteryboxNameColumn(page: Page) {
  const mysteryboxNameColumn = page.locator("//tr/td[1]/div")
  const count = await mysteryboxNameColumn.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(mysteryboxNameColumn.nth(i))
  }
  // console.log("This is the value of Mysterybox name column = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getMBOXWindowInformationText(page) {
  const editBoxWindowInformationText = page.locator("//h2[text()='Box Information']")
  await expect(editBoxWindowInformationText).toBeVisible({ timeout: 5000 })
  return editBoxWindowInformationText
}

async function getMBOXBoxWindowEditBtn(page) {
  const editBoxWindowEditBtn = page.locator("//button[text()='Edit']")
  await expect(editBoxWindowEditBtn).toBeVisible({ timeout: 5000 })
  return editBoxWindowEditBtn
}

async function getMBOXBoxWindowListingBtn(page) {
  const editBoxWindowListingBtn = page.locator("//button[contains(text(),'Listing')]")
  await expect(editBoxWindowListingBtn).toBeVisible({ timeout: 5000 })
  return editBoxWindowListingBtn
}

async function getEditMysteryboxBackBtn(page) {
  const editMysteryboxBackBtn = page.locator("//*[name()='svg' and @alt='Back']")
  await expect(editMysteryboxBackBtn).toBeVisible({ timeout: 5000 })
  return editMysteryboxBackBtn
}

async function getEditMysteryboxListforsaleBtn(page) {
  const editMysteryboxListofsaleBtn = page.locator("//button[contains(text(),'LIST')]")
  await expect(editMysteryboxListofsaleBtn).toBeVisible({ timeout: 5000 })
  return editMysteryboxListofsaleBtn
}

async function getEditMysteryboxSaveChangesBtn(page) {
  const editMysteryboxSaveChangesBtn = page.locator("//button[text()='SAVE CHANGES']")
  await expect(editMysteryboxSaveChangesBtn).toBeVisible({ timeout: 5000 })
  return editMysteryboxSaveChangesBtn
}

async function getMysteryboxCreatebtn(page) {
  const mysteryboxCreateBtn = page.locator("//button[text()='Mystery Box']")
  await expect(mysteryboxCreateBtn).toBeVisible({ timeout: 5000 })
  return mysteryboxCreateBtn
}

async function getMysteryboxSearchFilter(page) {
  const mysteryboxSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(mysteryboxSearchFilter).toBeVisible({ timeout: 5000 })
  return mysteryboxSearchFilter
}

async function getMysteryboxCommunityFilter(page) {
  const mysteryboxTokenFilter = page.locator("//label[text()='Community']/following-sibling::div")
  await expect(mysteryboxTokenFilter).toBeVisible({ timeout: 5000 })
  return mysteryboxTokenFilter
}

// This is the three dot icon located per mystery box which contains the edit, duplicate and launch setting
async function getMysteryboxSettingToggle(page: Page) {
  /*
  const mysteryboxSettingToggle = page.locator("//*[name()='svg' and @data-testid='MoreHorizIcon']")
  const count = await mysteryboxSettingToggle.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(mysteryboxSettingToggle.nth(i))
  }
  return textFieldArray
  */
  return page.locator("//*[name()='svg' and @data-testid='MoreHorizIcon']")
}

// This contains the values inside the Mysterybox settings toggle
async function getMysteryboxSettingToggleOptions(page: Page) {
  /*
  const mysteryboxSettingToggleOptions = page.locator("//div/li")
  const count = await mysteryboxSettingToggleOptions.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(mysteryboxSettingToggleOptions.nth(i))
  }
  return textFieldArray
  */
  return page.locator("//div/li")
}

async function getMysteryboxColumnHeader(page: Page) {
  const mysteryboxColumnHeader = page.locator("//th[text()]")
  const count = await mysteryboxColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(mysteryboxColumnHeader.nth(i))
  }
  console.log("This is the value of Mysterybox column header = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getMysteryColumnLoadingIcon(page) {
  const mysteryColumnLoadingIcon = page.locator("//*[name()='svg']/parent::div[@id='lottie']")
  await expect(mysteryColumnLoadingIcon).toBeVisible({ timeout: 5000 })
  return mysteryColumnLoadingIcon
}

export {
  getCreateMysteryboxCancelBtn,
  getCreateMysteryboxCommunityDropdown,
  getCreateMysteryboxCreateBtn,
  getCreateMysteryboxName,
  getCreateMysteryboxTotalBoxes,
  getCreateMysteryboxUploadImage,
  getEditMysteryboxBackBtn,
  getEditMysteryboxListforsaleBtn,
  getEditMysteryboxSaveChangesBtn,
  getEditMysteryboxText,
  getMBOXBoxWindowEditBtn,
  getMBOXBoxWindowListingBtn,
  getMBOXWindowInformationText,
  getMysteryboxColumnHeader,
  getMysteryboxCommunityFilter,
  getMysteryboxCreatebtn,
  getMysteryboxNameColumn,
  getMysteryboxSearchFilter,
  getMysteryboxSettingToggle,
  getMysteryboxSettingToggleOptions,
  getMysteryboxText,
  getMysteryColumnLoadingIcon,
  getMysteryboxSelectionModeToggle
}
