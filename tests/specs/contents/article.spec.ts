import { brandCreateArticlePageCheck } from "@/functions/check-button-elements-sanity"
import { getArticleCreateBtn, getCreatearticleCancelBtn } from "@/locators/brand-admin-article-loc"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement, waitForAnElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { test } from "@playwright/test"

test.describe("Contents > Article", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Contents$/ })
      .first()
    await scrollToElement(page, parentMenu)
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Articles$/ })
      .first()
    await childMenu.click()

    await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findArticles !== undefined)
  })

  test("Article", async ({ page }) => {
    const articleCreateBtn = await getArticleCreateBtn(page)
    await articleCreateBtn.click()
    await brandCreateArticlePageCheck(page)
    const createarticleCancelBtn = await getCreatearticleCancelBtn(page)
    await createarticleCancelBtn.click()
    await waitForAnElement(page, articleCreateBtn)
  })
})
