import { expect, Locator, Page } from "@playwright/test"

async function getTokenBackBtn(page) {
  const tokenBackBtn = page.locator("//*[name()='svg' and contains(@data-testid,'ChevronLeftIcon')]")
  await expect(tokenBackBtn).toBeVisible({ timeout: 5000 })
  return tokenBackBtn
}

async function getTokenUploadFile(page: Page) {
  // 0 = token image, 1 = cover image, 2 = banner image
  const tokenUploadFile = page.locator("//div[@role='presentation']")
  const count = await tokenUploadFile.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(tokenUploadFile.nth(i))
  }
  console.log("This is the value of brand upload file = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getTokenUploadImageElement(page: Page) {
  // 0 = token image, 1 = cover image, 2 = banner image
  const tokenUploadImageElement = page.locator("//input[@type='file']")
  const count = await tokenUploadImageElement.count()

  const textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(tokenUploadImageElement.nth(i))
  }
  console.log("This is the value of token upload image element = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getTokenName(page) {
  const tokenName = page.locator("//input[@name='name']")
  await expect(tokenName).toBeVisible({ timeout: 5000 })
  return tokenName
}

async function getTokenActivityGraph(page) {
  const tokenActivityGraph = page.locator("//input[@name='showActivity']")
  await expect(tokenActivityGraph).toBeVisible({ timeout: 5000 })
  return tokenActivityGraph
}

async function getTokenBrandinfoEdit(page) {
  const tokenBrandinfoEdit = page.locator("//h6[text()='Brand Information']/parent::div/following-sibling::button")
  await expect(tokenBrandinfoEdit).toBeVisible({ timeout: 5000 })
  return tokenBrandinfoEdit
}

async function getTokenDescription(page) {
  const tokenDescription = page.locator("//div[contains(@data-placeholder,'description')]")
  await expect(tokenDescription).toBeVisible({ timeout: 5000 })
  return tokenDescription
}

async function getTokenAddsection(page) {
  const tokenAddsection = page.locator("//div[text()='Add section']")
  await expect(tokenAddsection).toBeVisible({ timeout: 5000 })
  return tokenAddsection
}

async function getTokenSectionName(page) {
  const tokenSectionName = page.locator("//input[@name='enName']")
  await expect(tokenSectionName).toBeVisible({ timeout: 5000 })
  return tokenSectionName
}

async function getTokenSectionContent(page) {
  const tokenSectionContent = page.locator("//div[@data-placeholder='Enter content']/p")
  await expect(tokenSectionContent).toBeVisible({ timeout: 5000 })
  return tokenSectionContent
}

async function getTokenSectionCancelBtn(page) {
  const tokenSectionCancelBtn = page.locator("//button[text()='Add section']")
  await expect(tokenSectionCancelBtn).toBeVisible({ timeout: 5000 })
  return tokenSectionCancelBtn
}

async function getTokenSectionAddBtn(page) {
  const tokenSectionAddBtn = page.locator("//button[text()='Cancel']")
  await expect(tokenSectionAddBtn).toBeVisible({ timeout: 5000 })
  return tokenSectionAddBtn
}

async function getTokenPreview(page) {
  const tokenPreview = page.locator("//h6[text()='Preview']/parent::div")
  await expect(tokenPreview).toBeVisible({ timeout: 5000 })
  return tokenPreview
}

async function getTokenCreatetokenBtn(page) {
  const tokenCreatetokenBtn = page.locator("//button[text()='Create']")
  await expect(tokenCreatetokenBtn).toBeVisible({ timeout: 5000 })
  return tokenCreatetokenBtn
}

async function getTokenSaveDraftBtn(page) {
  const tokenSaveDraftBtn = page.locator("//button[text()='Save as draft']")
  await expect(tokenSaveDraftBtn).toBeVisible({ timeout: 5000 })
  return tokenSaveDraftBtn
}

async function getTokenSubmitTokenBtn(page) {
  const tokenSubmitTokenBtn = page.locator("//button[text()='Submit token']")
  await expect(tokenSubmitTokenBtn).toBeVisible({ timeout: 5000 })
  return tokenSubmitTokenBtn
}

async function getTokenSaveBtn(page) {
  const tokenSaveBtn = page.locator("//button[text()='Save Change']")
  await expect(tokenSaveBtn).toBeVisible({ timeout: 5000 })
  return tokenSaveBtn
}

export {
  getTokenActivityGraph,
  getTokenAddsection,
  getTokenBackBtn,
  getTokenBrandinfoEdit,
  getTokenCreatetokenBtn,
  getTokenDescription,
  getTokenName,
  getTokenPreview,
  getTokenSaveBtn,
  getTokenSaveDraftBtn,
  getTokenSectionAddBtn,
  getTokenSectionCancelBtn,
  getTokenSectionContent,
  getTokenSectionName,
  getTokenSubmitTokenBtn,
  getTokenUploadFile,
  getTokenUploadImageElement,
}
