import { expect, Locator, Page } from "@playwright/test"

async function getSocialroomText(page) {
  const socialroomText = page.locator("//div[text()='Social Room']")
  await expect(socialroomText).toBeVisible({ timeout: 5000 })
  return socialroomText
}

async function getSocialroomCreateroomBtn(page: Page) {
  const socialroomCreateRoomBtn = page.locator("//button[text()='Create room']")
  await expect(socialroomCreateRoomBtn).toBeVisible({ timeout: 5000 })
  return socialroomCreateRoomBtn
}

async function getSocialroomSearchFilter(page) {
  const socialroomSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(socialroomSearchFilter).toBeVisible({ timeout: 5000 })
  return socialroomSearchFilter
}

async function getSocialroomTokenDropdown(page) {
  const socialroomTokenDropdown = page.locator("//input[contains(@placeholder,'Choose')]/preceding-sibling::div")
  await expect(socialroomTokenDropdown).toBeVisible({ timeout: 5000 })
  return socialroomTokenDropdown
}

async function getSocialroomCardHeader(page: Page) {
  const socialroomCardHeader = page.locator("//div[@class='MuiCardHeader-root w-full css-faujvq']")
  const count = await socialroomCardHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(socialroomCardHeader.nth(i))
  }
  console.log("This is the value of card header = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getSocialroomCardSettingBtn(page: Page) {
  const socialroomCardSettingBtn = page.locator("//button[@aria-label='settings']")
  const count = await socialroomCardSettingBtn.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(socialroomCardSettingBtn.nth(i))
  }
  console.log("This is the value of card setting button = " + textFieldArray.length + "\n")

  return textFieldArray
}

/*
 *  Create social room locators start
 */

async function getCreateSocialroomText(page) {
  const createSocialRoomText = page.locator("//span[text()='Create Room']")
  await expect(createSocialRoomText).toBeVisible({ timeout: 5000 })
  return createSocialRoomText
}

async function getCreateSocialroomUploadImage(page) {
  const createSocialroomUploadImage = page.locator("//input[@accept]/parent::div")
  await expect(createSocialroomUploadImage).toBeVisible({ timeout: 5000 })
  return createSocialroomUploadImage
}

async function getCreateSocialroomName(page) {
  const createSocialroomName = page.locator("//input[@name='name']")
  await expect(createSocialroomName).toBeVisible({ timeout: 5000 })
  return createSocialroomName
}

async function getCreateSocialroomDescription(page) {
  const createSocialroomDescription = page.locator("//textarea[@name='description']")
  await expect(createSocialroomDescription).toBeVisible({ timeout: 5000 })
  return createSocialroomDescription
}

async function getCreateSocialroomTokenDropdown(page) {
  const createSocialroomTokenDropdown = page.locator("//input[@name='tokenId']/parent::div")
  await expect(createSocialroomTokenDropdown).toBeVisible({ timeout: 5000 })
  return createSocialroomTokenDropdown
}

async function getCreateSocialroomRequireNFTToggle(page) {
  const createSocialRoomRequireNFTToggle = page.locator(
    "//div[contains(text(),'Require NFT')]/parent::div/following-sibling::span/descendant::input"
  )
  await expect(createSocialRoomRequireNFTToggle).toBeVisible({ timeout: 5000 })
  return createSocialRoomRequireNFTToggle
}

async function getCreateSocialroomAddNFTBtn(page) {
  const createSocialroomAddNFTBtn = page.locator("//div[text()='Add NFTs']")
  await expect(createSocialroomAddNFTBtn).toBeVisible({ timeout: 5000 })
  return createSocialroomAddNFTBtn
}

async function getCreatesocialroomBackBtn(page) {
  const createSocialroomBackBtn = page.locator("//*[name()='svg' and @alt='Back']/parent::button")
  await expect(createSocialroomBackBtn).toBeVisible({ timeout: 5000 })
  return createSocialroomBackBtn
}

async function getCreatesocialroomCreateBtn(page) {
  const createSocialroomCreateBtn = page.locator("//button[text()='Create']")
  await expect(createSocialroomCreateBtn).toBeVisible({ timeout: 5000 })
  return createSocialroomCreateBtn
}
/*
 *  Create social room locators end
 */

export {
  getCreateSocialroomAddNFTBtn,
  getCreatesocialroomBackBtn,
  getCreatesocialroomCreateBtn,
  getCreateSocialroomDescription,
  getCreateSocialroomName,
  getCreateSocialroomRequireNFTToggle,
  /*
   * Create social room locators
   */
  getCreateSocialroomText,
  getCreateSocialroomTokenDropdown,
  getCreateSocialroomUploadImage,
  getSocialroomCardHeader,
  getSocialroomCardSettingBtn,
  getSocialroomCreateroomBtn,
  getSocialroomSearchFilter,
  getSocialroomText,
  getSocialroomTokenDropdown,
}
