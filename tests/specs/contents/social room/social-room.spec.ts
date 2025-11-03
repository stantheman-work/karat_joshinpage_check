import {
  getCreateSocialroomAddNFTBtn,
  getSocialroomCreateroomBtn,
  getCreateSocialroomDescription,
  getCreateSocialroomName,
  getCreateSocialroomRequireNFTToggle,
  getCreateSocialroomText,
  getCreateSocialroomCommunityDropdown,
  getCreateSocialroomUploadImage,
  getCreatesocialroomBackBtn,
  getCreatesocialroomCreateBtn,
} from "./social-room.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { expect, test } from "@playwright/test"

test.describe("Social Room", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Contents$/ })
      .first()
    await scrollToElement(page, parentMenu)
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Social room$/ })
      .first()
    await childMenu.click()

    try {
      await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.searchSocialRooms !== undefined, { timeout: 10000 })
    } catch (error) {
      console.error("This community does not have any social rooms")
    }
  })

  test("Social Room", async ({ page }) => {
    console.log("[INFO] Create social room check START")
    const addSocialRoomBtn = await getSocialroomCreateroomBtn(page)
    await addSocialRoomBtn.click()
    await page.waitForTimeout(3000)
    const createSocialroomText = await getCreateSocialroomText(page)
    const createSocialroomUploadImage = await getCreateSocialroomUploadImage(page)
    const createSocialroomName = await getCreateSocialroomName(page)
    const createSocialroomDescription = await getCreateSocialroomDescription(page)
    const createSocialroomTokenDropdown = await getCreateSocialroomCommunityDropdown(page)
    const createSocialroomRequireNFTToggle = await getCreateSocialroomRequireNFTToggle(page)
    const createSocialroomBackBtn = await getCreatesocialroomBackBtn(page)
    const createSocialroomCreateBtn = await getCreatesocialroomCreateBtn(page)
    await expect(createSocialroomText).toBeVisible()
    await expect(createSocialroomUploadImage).toBeVisible()
    await expect(createSocialroomName).toBeVisible()
    await expect(createSocialroomDescription).toBeVisible()
    await expect(createSocialroomTokenDropdown).toBeVisible()
    await expect(createSocialroomRequireNFTToggle).toBeVisible()
    await expect(createSocialroomBackBtn).toBeVisible()
    await expect(createSocialroomCreateBtn).toBeVisible()
    await createSocialroomRequireNFTToggle.click()
    const createSocialroomAddNFTBtn = await getCreateSocialroomAddNFTBtn(page)
    await expect(createSocialroomAddNFTBtn).toBeVisible()
    console.log("[INFO] Create social room check END")
  })
})