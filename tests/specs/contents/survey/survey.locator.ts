import { expect, Locator, Page } from "@playwright/test"

async function getSurveyText(page) {
  const surveyText = page.locator("//div[text()='Survey']")
  await expect(surveyText).toBeVisible({ timeout: 5000 })
  return surveyText
}

async function getSurveySearchFilter(page) {
  const surveySearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(surveySearchFilter).toBeVisible({ timeout: 5000 })
  return surveySearchFilter
}

async function getSurveyTemplateBtn(page) {
  const surveyTemplateBtn = page.locator("//span[text()='Template']/parent::button")
  await expect(surveyTemplateBtn).toBeVisible({ timeout: 5000 })
  return surveyTemplateBtn
}

async function getSurveyUploadBtn(page) {
  const surveyUploadBtn = page.locator("//span[text()='Upload']/parent::button")
  await expect(surveyUploadBtn).toBeVisible({ timeout: 5000 })
  return surveyUploadBtn
}

async function getSurveyCreateBtn(page) {
  const surveyCreateBtn = page.locator("//button[text()='Create']")
  await expect(surveyCreateBtn).toBeVisible({ timeout: 5000 })
  return surveyCreateBtn
}

async function getSurveyColumnHeader(page: Page) {
  const surveyColumnHeader = page.locator("//th[text()]")
  const count = await surveyColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(surveyColumnHeader.nth(i))
  }
  console.log("This is the value of Survey column header = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getSurveyTitle(page) {
  const surveyTitle = page.locator("//input[@name='title']")
  await expect(surveyTitle).toBeVisible({ timeout: 5000 })
  return surveyTitle
}

async function getSurveyAddNewQuestion(page) {
  const surveyAddNewQuestion = page.locator("//div[text()='Add new question']")
  await expect(surveyAddNewQuestion).toBeVisible({ timeout: 5000 })
  return surveyAddNewQuestion
}

async function getSurveyQuestionTitle(page) {
  const surveyQuestionTitle = page.locator("//input[@placeholder='Enter a name']")
  await expect(surveyQuestionTitle).toBeVisible({ timeout: 5000 })
  return surveyQuestionTitle
}

async function getSurveyQuestionType(page) {
  const surveyQuestionType = page.locator("//div[text()='Short answer']/parent::div")
  await expect(surveyQuestionType).toBeVisible({ timeout: 5000 })
  return surveyQuestionType
}

async function getSurveyAddTag(page) {
  const surveyAddTag = page.locator("//input[contains(@placeholder,'Input or select tag')]")
  await expect(surveyAddTag).toBeVisible({ timeout: 5000 })
  return surveyAddTag
}

async function getSurveyIDInput(page) {
  const surveyIDInput = page.locator("//input[@name='code']")
  await expect(surveyIDInput).toBeVisible({ timeout: 5000 })
  return surveyIDInput
}

async function getSurveyCancelCreate(page) {
  const surveyCancelCreate = page.locator("//button[text()='Cancel']")
  await expect(surveyCancelCreate).toBeVisible({ timeout: 5000 })
  return surveyCancelCreate
}

async function getSurveySaveCreate(page) {
  const surveySaveCreate = page.locator("//button[text()='Save']")
  await expect(surveySaveCreate).toBeVisible({ timeout: 5000 })
  return surveySaveCreate
}

export {
  getSurveyAddNewQuestion,
  getSurveyAddTag,
  getSurveyCancelCreate,
  getSurveyColumnHeader,
  getSurveyCreateBtn,
  getSurveyIDInput,
  getSurveyQuestionTitle,
  getSurveyQuestionType,
  getSurveySaveCreate,
  getSurveySearchFilter,
  getSurveyTemplateBtn,
  getSurveyText,
  getSurveyTitle,
  getSurveyUploadBtn,
}
