import {
  brandDashboardSaveBtnCheck
} from "../check_saveButtons/checkSaveButtons"
import {
  nftPage
} from "../digital-item/nft/nft.locator"
import {
  nft_actions
} from "../digital-item/nft/nft.spec"
import { AuthUtils } from "@/utils/auth-utils"
import { PageUtils } from "@/utils/page-utils"
import { test, expect } from "@playwright/test"

test.describe("Check save buttons in all pages", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await test.step("PageUtils.gotoToHome()", async () => {
      await PageUtils.gotoToHome(page)
    })
  })

  test("Dashboard page save button check", async ({ page }) => {
    console.log("[INFO] Check save buttons START")
    await brandDashboardSaveBtnCheck(page)
    // go to nft page
    const NFTpage = new nftPage(page)
    const nftActions = new nft_actions(page)
    await nftActions.navigateToNFTPage()
    await expect(NFTpage.mainNameColumnItems().first()).toBeVisible({ timeout: 15000 })
    await NFTpage.mainNameColumnItems().first().click()
    await expect(NFTpage.mainEditBtn()).toBeVisible()
    await NFTpage.mainEditBtn().click()
    await nftActions.checkEditNFTSaveBtn()
    // check nft listing button page
    await expect(NFTpage.mainNameColumnItems().first()).toBeVisible({ timeout: 15000 })
    await NFTpage.mainNameColumnItems().first().click()
    await expect(NFTpage.mainNFTInfoListingBtn()).toBeVisible()
    await NFTpage.mainNFTInfoListingBtn().click()
    await nftActions.checkListingpageSaveBtn()
    // go to mystery box page
    console.log("[INFO] Check save buttons END")
  })
})