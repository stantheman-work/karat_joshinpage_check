import {
  getVideoAddBtn,
  getCreatevidCommunitySelect,
  getCreatevidCommunityDropdown,
  getCreatevidYoutubelink,
  getCreatevidImageUploadBtn,
  getCreatevidTitle,
  getCreatevidDescription,
  getCreatevidNFTRequirementToggle,
  getCreatevidChooseNFTBtn,
  getCreatevidCancelBtn,
  getCreatevidPublishBtn
} from "@/specs/contents/video/video.locator"
import { AuthUtils } from "@/utils/auth-utils"
import {
  waitForPageToLoad,
  scrollToElement
} from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { test, expect } from "@playwright/test"

test.describe("Video Page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Contents$/ })
      .first()
    await scrollToElement(page, parentMenu)
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Video$/ })
      .first()
    await childMenu.click()

    try {
      await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findVideos !== undefined, { timeout: 10000 })
    } catch (error) {
      console.error("This community does not have any videos")
    }
  })

  test("Create Video", async ({ page }) => {
    console.log("[INFO] Create video button check START")
    await waitForPageToLoad(page)
    const videoAddBtn = await getVideoAddBtn(page)
    await videoAddBtn.click()
    await page.waitForTimeout(3000)
    await waitForPageToLoad(page)
    const createvidAllCommunities = await getCreatevidCommunitySelect(page)
    const allCommunities = createvidAllCommunities[0]
    await expect(allCommunities).toBeVisible()
    const createvidSpecificCommunity = (await getCreatevidCommunitySelect(page))[1]
    const createvidYoutubelink = await getCreatevidYoutubelink(page)
    const createvidImageUploadBtn = await getCreatevidImageUploadBtn(page)
    const createvidTitle = await getCreatevidTitle(page)
    const createvidDescription = await getCreatevidDescription(page)
    const createvidNFTRequirement = await getCreatevidNFTRequirementToggle(page)
    await expect(createvidNFTRequirement).toBeVisible()
    await createvidNFTRequirement.click()
    const createvidChooseNFTBtn = await getCreatevidChooseNFTBtn(page)
    const createvidCancelBtn = await getCreatevidCancelBtn(page)
    const createvidPublishBtn = await getCreatevidPublishBtn(page)
    await expect(createvidSpecificCommunity).toBeVisible()
    await createvidSpecificCommunity.click()
    const createvidCommunityDropdown = await getCreatevidCommunityDropdown(page)
    await expect(createvidCommunityDropdown).toBeVisible()
    await expect(createvidYoutubelink).toBeVisible()
    await expect(createvidImageUploadBtn).toBeVisible()
    await expect(createvidTitle).toBeVisible()
    await expect(createvidDescription).toBeVisible()
    await expect(createvidChooseNFTBtn).toBeVisible()
    await expect(createvidCancelBtn).toBeVisible()
    await expect(createvidPublishBtn).toBeVisible()
    console.log("[INFO] Create video button check END")
  })
})