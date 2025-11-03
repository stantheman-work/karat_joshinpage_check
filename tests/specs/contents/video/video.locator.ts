import { expect, Locator, Page } from "@playwright/test"

async function getVideoText(page) {
  const videoText = page.locator("//h5[text()='Videos']")
  await expect(videoText).toBeVisible({ timeout: 5000 })
  return videoText
}

async function getVideoSearchFilter(page) {
  const videoSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(videoSearchFilter).toBeVisible({ timeout: 5000 })
  return videoSearchFilter
}

async function getVideoAddBtn(page) {
  const videoAddBtn = page.locator("//button[text()='Add video']")
  await expect(videoAddBtn).toBeVisible({ timeout: 5000 })
  return videoAddBtn
}

async function getVideoColumnHeader(page: Page) {
  const videoColumnHeader = page.locator("//th[text()]")
  const count = await videoColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(videoColumnHeader.nth(i))
  }
  console.log("This is the value of video column header = " + textFieldArray.length + "\n")
  return textFieldArray
}

// Add video xpaths
async function getCreatevidCommunitySelect(page: Page) {
  const createvidCommunitySelect = page.locator("//input[@type='radio']")
  const count = await createvidCommunitySelect.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(createvidCommunitySelect.nth(i))
  }
  console.log("This is the value of create video community select = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getCreatevidCommunityDropdown(page) {
  const createvidChooseCommunity = page.locator("//input[@name='community']/parent::div")
  await expect(createvidChooseCommunity).toBeVisible({ timeout: 5000 })
  return createvidChooseCommunity
}

async function getCreatevidYoutubelink(page) {
  const createvidYoutubelink = page.locator("//input[@name='link']")
  await expect(createvidYoutubelink).toBeVisible({ timeout: 5000 })
  return createvidYoutubelink
}

// This is the button itself
async function getCreatevidImageUploadBtn(page) {
  const createvidImageUploadBtn = page.locator("//input[@accept]/parent::div")
  await expect(createvidImageUploadBtn).toBeVisible({ timeout: 5000 })
  return createvidImageUploadBtn
}

// Used to upload images in automation
async function getCreatevidImageUploadElement(page) {
  const createvidImageUploadElement = page.locator("//input[@accept]")
  await expect(createvidImageUploadElement).toBeVisible({ timeout: 5000 })
  return createvidImageUploadElement
}

async function getCreatevidTitle(page) {
  const createvidTitle = page.locator("//input[@name='title']")
  await expect(createvidTitle).toBeVisible({ timeout: 5000 })
  return createvidTitle
}

async function getCreatevidDescription(page) {
  const createvidDescription = page.locator("//textarea[@name='description']")
  await expect(createvidDescription).toBeVisible({ timeout: 5000 })
  return createvidDescription
}

async function getCreatevidNFTRequirementToggle(page) {
  const createvidNFTRequirement = page.locator("//input[@name='useRequirement']")
  await expect(createvidNFTRequirement).toBeVisible({ timeout: 5000 })
  return createvidNFTRequirement
}

async function getCreatevidChooseNFTBtn(page) {
  const createvidChooseNFTBtn = page.locator("//button[text()='Choose Item']")
  await expect(createvidChooseNFTBtn).toBeVisible({ timeout: 5000 })
  return createvidChooseNFTBtn
}

async function getCreatevidCancelBtn(page) {
  const createvidCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(createvidCancelBtn).toBeVisible({ timeout: 5000 })
  return createvidCancelBtn
}

async function getCreatevidPublishBtn(page) {
  const createvidPublishBtn = page.locator("//button[text()='Publish']")
  await expect(createvidPublishBtn).toBeVisible({ timeout: 5000 })
  return createvidPublishBtn
}

export {
  getVideoText,
  getVideoSearchFilter,
  getVideoAddBtn,
  getVideoColumnHeader,
  getCreatevidCommunitySelect,
  getCreatevidCommunityDropdown,
  getCreatevidYoutubelink,
  getCreatevidImageUploadBtn,
  getCreatevidImageUploadElement,
  getCreatevidTitle,
  getCreatevidDescription,
  getCreatevidNFTRequirementToggle,
  getCreatevidChooseNFTBtn,
  getCreatevidCancelBtn,
  getCreatevidPublishBtn
}
