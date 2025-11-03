import {
  getCommunitypostContentInput,
  getCommunitypostCreateCancelBtn,
  getCommunitypostCreatePost,
  getCommunitypostSavePostBtn,
  getCommunitypostCreatepostText,
  getCommunitypostTab,
  getCommunitypostUpdatephotosBtn,
} from "@/specs/contents/feed/feed.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement, waitForPageToLoad } from "@/utils/load-helper"
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
      .filter({ hasText: /^Feed$/ })
      .first()
    await childMenu.click()

    try {
      await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findCommunityFeeds !== undefined, { timeout: 10000 })
    } catch (error) {
      console.error("This community does not have any feeds")
    }
  })

  test("Feed", async ({ page }) => {
    console.log("[INFO] Feed page check start")
    await waitForPageToLoad(page)
    const communityTab = await getCommunitypostTab(page)
    await communityTab.click()
    const createpostBtn = await getCommunitypostCreatePost(page)
    await createpostBtn.click()
    const createpostText = await getCommunitypostCreatepostText(page)
    const postContent = await getCommunitypostContentInput(page)
    const uploadPhotos = await getCommunitypostUpdatephotosBtn(page)
    const cancelBtn = await getCommunitypostCreateCancelBtn(page)
    const saveBtn = await getCommunitypostSavePostBtn(page)
    await expect(createpostText).toBeVisible()
    await expect(postContent).toBeVisible()
    await expect(uploadPhotos).toBeVisible()
    await expect(cancelBtn).toBeVisible()
    await expect(saveBtn).toBeVisible()
    console.log("[INFO] Feed page check end")
  })
})
