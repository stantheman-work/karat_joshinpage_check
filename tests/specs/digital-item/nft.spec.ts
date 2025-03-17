import { brandCollectionManagementPageCheck, brandCreateNFTPageCheck } from "@/functions/check-button-elements-sanity"
import {
  getCollectionManagementCloseBtn,
  getCreateNFTCancel,
  getNFTCollectionManagementBtn,
  getNFTCreateBtn,
} from "@/locators/brand-admin-nftmysterybox-loc"
import { AuthUtils } from "@/utils/auth-utils"
import { waitForAnElement, waitForPageToLoad } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import test from "@playwright/test"

test.describe("NFT Page", () => {
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
  })

  test("Create NFT", async ({ page }) => {
    // CREATE NFT
    console.log("[INFO] Create NFT button check START")
    const createNFTBtn = await getNFTCreateBtn(page)
    await createNFTBtn.click()
    await waitForPageToLoad(page)
    await brandCreateNFTPageCheck(page)
    const nftCancelBtn = await getCreateNFTCancel(page)
    await nftCancelBtn.click()
    await waitForAnElement(page, createNFTBtn)
    console.log("[INFO] Create NFT button check END")
  })

  // test("Edit NFT", async ({ page }) => {
  //   // EDIT NFT
  //   console.log("[INFO] Edit NFT check START")
  //   let waitCtr = 0
  //   while (waitCtr < 5) {
  //     try {
  //       const nftName = (await getNFTNameColumn(page))[0]
  //       await expect(nftName).toBeVisible()
  //       await nftName.click()
  //       waitCtr = 5
  //     } catch (error) {
  //       console.log("[ERROR] Page is still loading, waiting for a few seconds...")
  //       await page.waitForTimeout(3500)
  //       waitCtr++
  //     }
  //   }
  //   waitCtr = 0
  //   const nftInformationText = await getNFTInformationText(page)
  //   await expect(nftInformationText).toBeVisible()
  //   const nftEditBtn = await getNFTEditBtn(page)
  //   await expect(nftEditBtn).toBeVisible()
  //   await nftEditBtn.click()
  //   await brandEditNFTPageCheck(page)
  //   const nftCancelBtn = await getCreateNFTCancel(page)
  //   await nftCancelBtn.click()
  //   const createNFTBtn = await getNFTCreateBtn(page)
  //   await waitForAnElement(page, createNFTBtn)
  //   console.log("[INFO] Edit NFT check END")
  // })

  test("Collection Management", async ({ page }) => {
    // COLLECTION MANAGEMENT TAB
    console.log("[INFO] Collection Management button check START")
    const collectionMgmtBtn = await getNFTCollectionManagementBtn(page)
    await collectionMgmtBtn.click()
    await brandCollectionManagementPageCheck(page)
    const collectionMgmtCloseBtn = await getCollectionManagementCloseBtn(page)
    await collectionMgmtCloseBtn.click()
    const createNFTBtn = await getNFTCreateBtn(page)
    await waitForAnElement(page, createNFTBtn)
    console.log("[INFO] Collection Management button check END")
  })
})
