import { expect, Locator, Page } from "@playwright/test"

async function getFeedText(page) {
  const feedText = page.locator("//div[text()='Feed']")
  await expect(feedText).toBeVisible({ timeout: 5000 })
  return feedText
}

async function getCommunityFilter(page) {
  const communityFilter = page.locator("//label[text()='Community']/following-sibling::div")
  await expect(communityFilter).toBeVisible({ timeout: 5000 })
  return communityFilter
}

async function getCommunitypostCreatePost(page) {
  const communitypostCreatePost = page.locator("//button[text()='Create post']")
  await expect(communitypostCreatePost).toBeVisible({ timeout: 5000 })
  return communitypostCreatePost
}

async function getCommunitypostTab(page) {
  const communitypostTab = page.locator("//button[text()='Community Post']")
  await expect(communitypostTab).toBeVisible({ timeout: 5000 })
  return communitypostTab
}

async function getSearchFilter(page) {
  const searchFilter = page.locator("//input[@placeholder='Search']")
  await expect(searchFilter).toBeVisible({ timeout: 5000 })
  return searchFilter
}

async function getCommunitypostColumnHeaders(page: Page) {
  const communitypostColumnHeaders = page.locator("//th[text()]")
  const count = await communitypostColumnHeaders.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(communitypostColumnHeaders.nth(i))
  }
  console.log("This is the value of community post column headers = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getSocialpostTab(page) {
  const socialpostTab = page.locator("//button[text()='Social post']")
  await expect(socialpostTab).toBeVisible({ timeout: 5000 })
  return socialpostTab
}

async function getSocialpostRefreshBtn(page) {
  const socialpostRefreshBtn = page.locator("//button[text()='Refresh']")
  await expect(socialpostRefreshBtn).toBeVisible({ timeout: 5000 })
  return socialpostRefreshBtn
}

async function getSocialpostAccountBtn(page) {
  const socialpostAccountBtn = page.locator("//button[text()='Account']")
  await expect(socialpostAccountBtn).toBeVisible({ timeout: 5000 })
  return socialpostAccountBtn
}

async function getSocialpostSourcesFilter(page) {
  const socialpostSourcesFilter = page.locator("//div[contains(text(),'sources')]")
  await expect(socialpostSourcesFilter).toBeVisible({ timeout: 5000 })
  return socialpostSourcesFilter
}

async function getSocialpostDateFilter(page) {
  const socialpostDateFilter = page.locator("//input[@placeholder='YYYY/MM/DD']")
  await expect(socialpostDateFilter).toBeVisible({ timeout: 5000 })
  return socialpostDateFilter
}

async function getSocialpostColumnHeaders(page: Page) {
  const socialpostColumnHeaders = page.locator("//th[text()]")
  const count = await socialpostColumnHeaders.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(socialpostColumnHeaders.nth(i))
  }
  console.log("This is the value of social post column headers = " + textFieldArray.length + "\n")

  return textFieldArray
}

// Create post locators start
async function getCommunitypostCreatepostText(page) {
  const communitypostCreatepostText = page.locator("//h5[text()='Create post']")
  await expect(communitypostCreatepostText).toBeVisible({ timeout: 5000 })
  return communitypostCreatepostText
}

async function getCommunitypostContentInput(page) {
  const communitypostContentInput = page.locator("//textarea[@name='content']")
  await expect(communitypostContentInput).toBeVisible({ timeout: 5000 })
  return communitypostContentInput
}

async function getCommunitypostUpdatephotosBtn(page) {
  const communitypostUploadPhotos = page.locator("//button[text()='Upload photos']")
  await expect(communitypostUploadPhotos).toBeVisible({ timeout: 5000 })
  return communitypostUploadPhotos
}

async function getCommunitypostCreateCancelBtn(page) {
  const communutypostCreateCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(communutypostCreateCancelBtn).toBeVisible({ timeout: 5000 })
  return communutypostCreateCancelBtn
}

async function getCommunitypostSavePostBtn(page) {
  const communitypostSaveBtn = page.locator("//button[text()='Post']")
  await expect(communitypostSaveBtn).toBeVisible({ timeout: 5000 })
  return communitypostSaveBtn
}
// Create post locators end

export {
  getCommunityFilter,
  getCommunitypostColumnHeaders,
  getCommunitypostContentInput,
  getCommunitypostCreateCancelBtn,
  getCommunitypostCreatePost,
  getCommunitypostSavePostBtn,
  getCommunitypostCreatepostText,
  getCommunitypostTab,
  getCommunitypostUpdatephotosBtn,
  getFeedText,
  getSearchFilter,
  getSocialpostAccountBtn,
  getSocialpostColumnHeaders,
  getSocialpostDateFilter,
  getSocialpostRefreshBtn,
  getSocialpostSourcesFilter,
  getSocialpostTab
}
