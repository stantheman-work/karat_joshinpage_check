import { expect, Locator, Page } from "@playwright/test"

async function getQuizText(page) {
  const quizText = page.locator("//div[text()='Quiz']")
  await expect(quizText).toBeVisible({ timeout: 5000 })
  return quizText
}

async function getQuizSearchFilter(page) {
  const quizSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(quizSearchFilter).toBeVisible({ timeout: 5000 })
  return quizSearchFilter
}

async function getQuizTemplateBtn(page) {
  const quizTemplateBtn = page.locator("//span[text()='Template']/parent::button")
  await expect(quizTemplateBtn).toBeVisible({ timeout: 5000 })
  return quizTemplateBtn
}

async function getQuizUploadBtn(page) {
  const quizUploadBtn = page.locator("//span[text()='Upload']/parent::button")
  await expect(quizUploadBtn).toBeVisible({ timeout: 5000 })
  return quizUploadBtn
}

async function getQuizCreateBtn(page) {
  const quizCreateBtn = page.locator("//button[text()='Create']")
  await expect(quizCreateBtn).toBeVisible({ timeout: 5000 })
  return quizCreateBtn
}

async function getQuizColumnHeader(page: Page) {
  const quizColumnHeader = page.locator("//th[text()]")
  const count = await quizColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(quizColumnHeader.nth(i))
  }
  console.log("This is the value of Quiz column header = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getCreateQuizText(page) {
  const createQuiztext = page.locator("//h5[text()='Create Quiz']")
  await expect(createQuiztext).toBeVisible({ timeout: 5000 })
  return createQuiztext
}

async function getQuizTitle(page) {
  const quizTitle = page.locator("//input[@name='title']")
  await expect(quizTitle).toBeVisible({ timeout: 5000 })
  return quizTitle
}

async function getQuizContents(page) {
  const quizContents = page.locator("//div[contains(@data-placeholder,'Content')]")
  await expect(quizContents).toBeVisible({ timeout: 5000 })
  return quizContents
}

async function getQuizChoices(page: Page) {
  const quizChoices = page.locator("//input[contains(@placeholder,'Write')]")
  const count = await quizChoices.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(quizChoices.nth(i))
  }
  console.log("This is the value of Quiz choices = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getQuizExplanation(page) {
  const quizExplanation = page.locator("//div[contains(@data-placeholder,'Explanation')]")
  await expect(quizExplanation).toBeVisible({ timeout: 5000 })
  return quizExplanation
}

async function getQuizTag(page) {
  const quizTag = page.locator("//input[contains(@placeholder,'tag')]")
  await expect(quizTag).toBeVisible({ timeout: 5000 })
  return quizTag
}

async function getQuizCancelBtn(page) {
  const quizCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(quizCancelBtn).toBeVisible({ timeout: 5000 })
  return quizCancelBtn
}

async function getQuizSaveBtn(page) {
  const quizSaveBtn = page.locator("//button[text()='Save']")
  await expect(quizSaveBtn).toBeVisible({ timeout: 5000 })
  return quizSaveBtn
}

export {
  getCreateQuizText,
  getQuizCancelBtn,
  getQuizChoices,
  getQuizColumnHeader,
  getQuizContents,
  getQuizCreateBtn,
  getQuizExplanation,
  getQuizSaveBtn,
  getQuizSearchFilter,
  getQuizTag,
  getQuizTemplateBtn,
  getQuizText,
  getQuizTitle,
  getQuizUploadBtn,
}
