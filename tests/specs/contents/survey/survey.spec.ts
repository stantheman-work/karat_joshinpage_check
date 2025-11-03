
import {
  getSurveyAddNewQuestion,
  getSurveyAddTag,
  getSurveyCancelCreate,
  getSurveyCreateBtn,
  getSurveyIDInput,
  getSurveyQuestionTitle,
  getSurveyQuestionType,
  getSurveySaveCreate,
  getSurveyTitle
} from "../survey/survey.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { test, expect } from "@playwright/test"

test.describe("Contents > Survey", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Contents$/ })
      .first()
    await scrollToElement(page, parentMenu)
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Survey$/ })
      .first()
    await childMenu.click()

    try {
      await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findSurveys !== undefined, { timeout: 10000 })
    } catch (error) {
      console.error("This community does not have any surveys")
    }
  })

  test("Survey", async ({ page }) => {
    console.log("[INFO] Create survey check START")
    const surveyCreateBtn = await getSurveyCreateBtn(page)
    await surveyCreateBtn.click()
    await page.waitForTimeout(3000)
    const surveyTitle = await getSurveyTitle(page)
    const surveyAddNewQuestion = await getSurveyAddNewQuestion(page)
    await expect(surveyTitle).toBeVisible()
    await expect(surveyAddNewQuestion).toBeVisible()
    await surveyAddNewQuestion.click()
    const surveyQuestionTitle = await getSurveyQuestionTitle(page)
    const surveyQuestionType = await getSurveyQuestionType(page)
    const surveyAddTag = await getSurveyAddTag(page)
    const surveyIDInput = await getSurveyIDInput(page)
    const surveyCancelCreate = await getSurveyCancelCreate(page)
    const surveySaveCreate = await getSurveySaveCreate(page)
    await expect(surveyQuestionTitle).toBeVisible()
    await expect(surveyQuestionType).toBeVisible()
    await expect(surveyAddTag).toBeVisible()
    await expect(surveyIDInput).toBeVisible()
    await expect(surveyCancelCreate).toBeVisible()
    await expect(surveySaveCreate).toBeVisible()
    console.log("[INFO] Create survey check END")
  })
})
