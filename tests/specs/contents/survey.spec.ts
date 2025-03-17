import { brandCreateSurveyPageCheck } from "@/functions/check-button-elements-sanity"
import { getSurveyCancelCreate, getSurveyCreateBtn } from "@/locators/brand-admin-survey-loc"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement, waitForAnElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { test } from "@playwright/test"

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

    await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findSurveys !== undefined)
  })

  test("Survey", async ({ page }) => {
    const surveyCreateBtn = await getSurveyCreateBtn(page)
    await surveyCreateBtn.click()
    await brandCreateSurveyPageCheck(page)
    const surveyCancelBtn = await getSurveyCancelCreate(page)
    await surveyCancelBtn.click()
    await waitForAnElement(page, surveyCreateBtn)
  })
})
