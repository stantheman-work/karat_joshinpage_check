import { brandCreateMysteryboxPageCheck } from "@/functions/check-button-elements-sanity"
import { getCreateMysteryboxCancelBtn, getMysteryboxCreatebtn } from "@/locators/brand-admin-nftmysterybox-loc"
import { AuthUtils } from "@/utils/auth-utils"
import { waitForAnElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import test from "@playwright/test"
test.describe("MysteryBox Page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)
    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Digital item$/ })
      .first()
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^NFT & Mystery box$/ })
      .first()
    await childMenu.click()

    const mysteryboxTab = page.getByRole("tab", { name: "Mystery boxes" })
    await mysteryboxTab.click()

    await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findMysteryBoxes !== undefined)
  })

  test("Create Mysterybox", async ({ page }) => {
    const mysteryboxCreateBtn = await getMysteryboxCreatebtn(page)
    await waitForAnElement(page, mysteryboxCreateBtn)
    await mysteryboxCreateBtn.click()
    await brandCreateMysteryboxPageCheck(page)
    const mysteryboxCancelBtn = await getCreateMysteryboxCancelBtn(page)
    await mysteryboxCancelBtn.click()
    await waitForAnElement(page, mysteryboxCreateBtn)
  })

  // test("Edit Mysterybox", async ({ page }) => {
  //   const mysteryboxName = (await getMysteryboxNameColumn(page))[0]
  //   await expect(mysteryboxName).toBeVisible()
  //   await mysteryboxName.click()

  //   const mboxWindowInformationText = page.getByRole("heading", { name: "Box Information" })
  //   await expect(mboxWindowInformationText).toBeVisible()

  //   const mboxWindowListingBtn = page.getByRole("button", { name: "Open Full Listing Page" })
  //   await expect(mboxWindowListingBtn).toBeVisible()

  //   const mboxWindowEditBtn = page.getByRole("button", { name: "Edit" })
  //   await expect(mboxWindowEditBtn).toBeVisible()
  //   await mboxWindowEditBtn.click()
  //   await brandEditMysteryboxPageCheck(page)
  // })
})
