import { brandCreateQuizPageCheck } from "@/functions/check-button-elements-sanity"
import { getQuizCancelBtn, getQuizCreateBtn } from "@/locators/brand-admin-quiz-loc"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement, waitForAnElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { test } from "@playwright/test"

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

    await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findQuizzes)
  })

  test("Quiz", async ({ page }) => {
    const quizCreateBtn = await getQuizCreateBtn(page)
    await quizCreateBtn.click()
    await brandCreateQuizPageCheck(page)
    const quizCancelBtn = await getQuizCancelBtn(page)
    await quizCancelBtn.click()
    await waitForAnElement(page, quizCreateBtn)
  })
})
