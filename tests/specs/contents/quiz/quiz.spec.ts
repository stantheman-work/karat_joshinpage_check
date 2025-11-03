
import {
  getCreateQuizText,
  getQuizCancelBtn,
  getQuizChoices,
  getQuizContents,
  getQuizCreateBtn,
  getQuizExplanation,
  getQuizSaveBtn,
  getQuizTag,
  getQuizTitle,
} from "../quiz/quiz.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { test, expect } from "@playwright/test"

test.describe("Contents > Quiz", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Contents$/ })
      .first()
    await scrollToElement(page, parentMenu)
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Quiz$/ })
      .first()
    await childMenu.click()

    try {
      await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findQuizzes, { timeout: 10000 })
    } catch (error) {
      console.error("This community does not have any quizzes")
    }
  })

  test("Quiz", async ({ page }) => {
    console.log("[INFO] Create quiz check START")
    const quizCreateBtn = await getQuizCreateBtn(page)
    await quizCreateBtn.click()
    await page.waitForTimeout(3000)
    const quizCreateText = await getCreateQuizText(page)
    const quizTitle = await getQuizTitle(page)
    const quizContents = await getQuizContents(page)
    const quizChoices = (await getQuizChoices(page))[0]
    const quizExplanation = await getQuizExplanation(page)
    const quizTag = await getQuizTag(page)
    const quizCancelBtn = await getQuizCancelBtn(page)
    const quizSaveBtn = await getQuizSaveBtn(page)
    await expect(quizCreateText).toBeVisible()
    await expect(quizTitle).toBeVisible()
    await expect(quizContents).toBeVisible()
    await expect(quizChoices).toBeVisible()
    await expect(quizExplanation).toBeVisible()
    await expect(quizTag).toBeVisible()
    await expect(quizCancelBtn).toBeVisible()
    await expect(quizSaveBtn).toBeVisible()
    console.log("[INFO] Create quiz check END")
  })
})
