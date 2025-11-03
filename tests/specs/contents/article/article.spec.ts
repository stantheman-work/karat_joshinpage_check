// import { getArticleCreateBtn, getCreatearticleCancelBtn } from "@/specs/contents/article/article.locator"
import {
  getArticleCreateBtn,
  getCreatearticleCancelBtn,
  getCreatearticleCommunityAssigned,
  getCreatearticleDescription,
  getCreatearticleLink,
  getCreatearticleReward,
  getCreatearticleRewardType,
  getCreatearticleSpecificcommunityDropdown,
  getCreatearticleTags,
  getCreatearticleTitle
} from "@/specs/contents/article/article.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement, waitForGraphqlResponse, waitForPageToLoad, waitForAnElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { test, expect } from "@playwright/test"

test.describe("Contents > Articles", () => {
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

    try {
      await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findArticles !== undefined, { timeout: 10000 })
    } catch (error) {
      console.log("This community does not have any articles")
    }
  })

  test("Article", async ({ page }) => {
    console.log("[INFO] Article page check start")
    const articleCreateBtn = await getArticleCreateBtn(page)
    await articleCreateBtn.click()
    await page.waitForTimeout(3000)
    const createarticleTokenAssigned = (await getCreatearticleCommunityAssigned(page))[1]
    await expect(createarticleTokenAssigned).toBeVisible()
    await createarticleTokenAssigned.click()
    const createarticleSpecificTokenDropdown = await getCreatearticleSpecificcommunityDropdown(page)
    await expect(createarticleSpecificTokenDropdown).toBeVisible()
    const createarticleLink = await getCreatearticleLink(page)
    const createarticleTitle = await getCreatearticleTitle(page)
    const createarticleDescription = await getCreatearticleDescription(page)
    const createarticleTags = await getCreatearticleTags(page)
    await expect(createarticleLink).toBeVisible()
    await expect(createarticleTitle).toBeVisible()
    await expect(createarticleDescription).toBeVisible()
    await expect(createarticleTags).toBeVisible()
    const createarticleReward = await getCreatearticleReward(page)
    await expect(createarticleReward).toBeVisible()
    await createarticleReward.click()
    const createarticleRewardType = await getCreatearticleRewardType(page)
    await expect(createarticleRewardType).toBeVisible()
    const createarticleCancelBtn = await getCreatearticleCancelBtn(page)
    await createarticleCancelBtn.click()
    await waitForAnElement(page, articleCreateBtn)
    console.log("[INFO] Article page check end")
  })
})
