import { expect, Locator, Page } from "@playwright/test"

async function getCommunityBacktoDashboardBtn(page) {
  const communityBacktoDashboardBtn = page.locator("//*[name()='svg' and contains(@data-testid,'ChevronLeftIcon')]")
  await expect(communityBacktoDashboardBtn).toBeVisible({ timeout: 5000 })
  return communityBacktoDashboardBtn
}

async function getCommunityImguploadFile(page: Page) {
  // 0 = Community Icon, 1 = Community Banner
  const communityImguploadFile = page.locator("//div[@role='presentation']")
  const count = await communityImguploadFile.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(communityImguploadFile.nth(i))
  }
  console.log("This is the value of community image upload = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getCommunityImguploadElement(page: Page) {
  // 0 = token image, 1 = cover image, 2 = banner image
  const communityImguploadElement = page.locator("//input[@type='file']")
  const count = await communityImguploadElement.count()

  const textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(communityImguploadElement.nth(i))
  }
  console.log("This is the value of community upload image element = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getCommunityName(page) {
  const communityName = page.locator("//input[@name='name']")
  await expect(communityName).toBeVisible({ timeout: 5000 })
  return communityName
}

async function getCommunityBrandinfoEdit(page) {
  const communityBrandinfoEdit = page.locator("//h6[text()='Brand Information']/parent::div/following-sibling::button")
  await expect(communityBrandinfoEdit).toBeVisible({ timeout: 5000 })
  return communityBrandinfoEdit
}

async function getCommunityDescription(page) {
  const communityDescription = page.locator("//div[contains(@data-placeholder,'description')]")
  await expect(communityDescription).toBeVisible({ timeout: 5000 })
  return communityDescription
}

async function getCommunityAddSection(page) {
  const communityAddSection = page.locator("//div[text()='Add section']")
  await expect(communityAddSection).toBeVisible({ timeout: 5000 })
  return communityAddSection
}

async function getCommunitySectionName(page) {
  const communitySectionName = page.locator("//input[@placeholder='Input name']")
  await expect(communitySectionName).toBeVisible({ timeout: 5000 })
  return communitySectionName
}

async function getCommunitySectionContent(page) {
  const communitySectionContent = page.locator("//div[@data-placeholder='Enter content']/p")
  await expect(communitySectionContent).toBeVisible({ timeout: 5000 })
  return communitySectionContent
}

async function getCommunityCancelBtn(page) {
  const communityCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(communityCancelBtn).toBeVisible({ timeout: 5000 })
  return communityCancelBtn
}

async function getCommunityAddsectionBtn(page) {
  const communityAddsectionBtn = page.locator("//button[text()='Add section']")
  await expect(communityAddsectionBtn).toBeVisible({ timeout: 5000 })
  return communityAddsectionBtn
}

async function getCommunityPreview(page) {
  const tokenPreview = page.locator("//h6[text()='Preview']/parent::div")
  await expect(tokenPreview).toBeVisible({ timeout: 5000 })
  return tokenPreview
}

async function getCommunityNextBtn(page) {
  const communityNextBtn = page.locator("//button[text()='Next']")
  await expect(communityNextBtn).toBeVisible({ timeout: 5000 })
  return communityNextBtn
}

async function getCommunityEnabletokenToggle(page) {
  const communityEnabledtokenToggle = page.locator("//input[@name='enableToken']")
  await expect(communityEnabledtokenToggle).toBeVisible({ timeout: 5000 })
  return communityEnabledtokenToggle
}

async function getCommunityTokenDoublecheckBtn(page) {
  const communityTokenDoublecheckBtn = page.locator("//button[contains(text(),'checked')]")
  await expect(communityTokenDoublecheckBtn).toBeVisible({ timeout: 5000 })
  return communityTokenDoublecheckBtn
}

async function getCommunityTokenGobackBtn(page) {
  const communityTokenGobackBtn = page.locator("//button[text()='Go back']")
  await expect(communityTokenGobackBtn).toBeVisible({ timeout: 5000 })
  return communityTokenGobackBtn
}

async function getCommunityTokenName(page) {
  const communityTokenName = page.locator("//input[@name='tokenName']")
  await expect(communityTokenName).toBeVisible({ timeout: 5000 })
  return communityTokenName
}

async function getCommunitySubmitBtn(page) {
  const communitySubmitBtn = page.locator("//button[text()='Submit']")
  await expect(communitySubmitBtn).toBeVisible({ timeout: 5000 })
  return communitySubmitBtn
}

async function getCommunityDraftBtn(page) {
  const communityDraftBtn = page.locator("//button[text()='Save as draft']")
  await expect(communityDraftBtn).toBeVisible({ timeout: 5000 })
  return communityDraftBtn
}

async function getCommunityBackBtn(page) {
  const communityBackBtn = page.locator("//button[text()='Back']")
  await expect(communityBackBtn).toBeVisible({ timeout: 5000 })
  return communityBackBtn
}

async function getCommunitySaveBtn(page) {
  const communitySaveBtn = page.locator("//button[text()='Save Change']")
  await expect(communitySaveBtn).toBeVisible({ timeout: 5000 })
  return communitySaveBtn
}

export {
  getCommunityAddSection,
  getCommunityAddsectionBtn,
  getCommunityBackBtn,
  getCommunityBacktoDashboardBtn,
  getCommunityBrandinfoEdit,
  getCommunityCancelBtn,
  getCommunityDescription,
  getCommunityDraftBtn,
  getCommunityEnabletokenToggle,
  getCommunityImguploadElement,
  getCommunityImguploadFile,
  getCommunityName,
  getCommunityNextBtn,
  getCommunityPreview,
  getCommunitySaveBtn,
  getCommunitySectionContent,
  getCommunitySectionName,
  getCommunitySubmitBtn,
  getCommunityTokenDoublecheckBtn,
  getCommunityTokenGobackBtn,
  getCommunityTokenName
}
