import {
  /*
  getCollectionManagementCloseBtn,
  getCollectionManagementColumnHeader,
  getCollectionManagementCreateCollectionBtn,
  getCollectionManagementInfoText,
  getCollectionManagementSearchFilter,
  */
  getCreateNFTCancel,
  getCreateNFTChooseCollection,
  getCreateNFTCommunityDropdown,
  getCreateNFTDescription,
  getNFTMoreOptions,
  getCreateNFTOwnershiptransferToggle,
  getCreateNFTPreview,
  getCreateNFTSave,
  getCreateNFTSupply,
  getCreateNFTText,
  getCreateNFTTitle,
  getCreateNFTUploadFile,
  //getNFTCollectionManagementBtn,
  getNFTCreateBtn,
  getNFTListingBtn,
  getNFTSearchNFTFilter,
  getNFTColumnLoadingIcon
} from "@/specs/digital-item/nft/nft.locator"
import {
  getNFTCompletelistingBtn,
  getNFTDiscountType,
  getNFTDiscountTypeOptions,
  getNFTLaunchText,
  getNFTListOnlineSalesToggle,
  getNFTListPopupGotitBtn,
  getNFTListPopupText,
  getNFTListVendingmachineToggle,
  getNFTListZAPToggle,
  getNFTLockRequirementToggle,
  getNFTLockRequirementType,
  getNFTOSAddLinkBtn,
  getNFTOSCancelBtn,
  getNFTOSAddChannelName,
  getNFTOSCreatePaymentLinkBtn,
  getNFTOSAddDeleteBtn,
  getNFTOSPublishOnMarketplaceBtn,
  getNFTOSAddPrice,
  getNFTOSAddScheduleStartEndDate,
  getNFTOSMonthlySubscriptionBtn,
  getNFTRefereeChooseNFTBtn,
  getNFTRefereeDiscountAmount,
  getNFTRefereeNFTReward,
  getNFTRefereeRewardOptions,
  getNFTRefereeRewardType,
  getNFTRefereeTokenAmount,
  getNFTRefereeTokenReward,
  getNFTReferralRewardToggle,
  getNFTReferrerCheckbox,
  getNFTRewardForReferrerAmount,
  getNFTVendingmachinePrice,
  getNFTVendingmachineScheduleToggle,
  getNFTVisibilityRequirementAddNFTBtn,
  getNFTVisibilityRequirementToggle,
  getNFTZAPPaymentType,
  getNFTZAPScheduleToggle,
  getNFTZAPStartEndDate
} from "@/specs/digital-item/nft/nftlisting.locator"
import {
  getCollectionManagementCloseBtn,
  getCollectionManagementColumnHeader,
  getCollectionManagementCreateBtnSelection,
  getCollectionManagementCreateCollectionBtn,
  getCollectionManagementInfoText,
  getCollectionManagementSearchFilter,
  getCollectionManagementBtn,
  getCollectionManagementXBtn
} from "@/specs/digital-item/nft/collectionmanagement.locator"
import { AuthUtils } from "@/utils/auth-utils"
import {
  waitForAnElement,
  waitForPageToLoad,
  scrollToElement,
  waitForElementToBeHidden
} from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { test, expect } from "@playwright/test"

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
    console.log("[INFO] Create NFT button check START")
    const createNFTBtn = await getNFTCreateBtn(page)
    await createNFTBtn.click()
    await waitForPageToLoad(page)
    await page.waitForTimeout(3000)
    const createNFTText = await getCreateNFTText(page)
    const createNFTImage = (await getCreateNFTUploadFile(page))[0]
    const createNFTCommunityDropdown = await getCreateNFTCommunityDropdown(page)
    const createNFTTitle = await getCreateNFTTitle(page)
    const createNFTSupply = await getCreateNFTSupply(page)
    const createNFTDescription = await getCreateNFTDescription(page)
    const createNFTChooseCollection = await getCreateNFTChooseCollection(page)
    const nftOwnershipToggle = await getCreateNFTOwnershiptransferToggle(page)
    const nftOwnershipToggleValue = await nftOwnershipToggle.isChecked()
    await expect(nftOwnershipToggleValue).toBe(true) // Default is ON
    const createNFTPreview = await getCreateNFTPreview(page)
    const createNFTCancel = await getCreateNFTCancel(page)
    const createNFTSave = await getCreateNFTSave(page)
    await expect(createNFTText).toBeVisible()
    await expect(createNFTImage).toBeVisible()
    await expect(createNFTCommunityDropdown).toBeVisible()
    await expect(createNFTTitle).toBeVisible()
    await expect(createNFTSupply).toBeVisible()
    await expect(createNFTDescription).toBeVisible()
    await scrollToElement(page, createNFTChooseCollection)
    await expect(createNFTChooseCollection).toBeVisible()
    await expect(createNFTPreview).toBeVisible()
    await expect(createNFTCancel).toBeVisible()
    await expect(createNFTSave).toBeVisible()
    const nftCancelBtn = await getCreateNFTCancel(page)
    await nftCancelBtn.click()
    await waitForAnElement(page, createNFTBtn)
    console.log("[INFO] Create NFT button check END")
  })

  test("NFT listing", async ({ page }) => {
    console.log("[INFO] NFT listing check START")
    await waitForPageToLoad(page)
    await page.waitForTimeout(3000)
    const nftToUse = '[DEPLOY] Charizard'
    const nftSearchFilter = await getNFTSearchNFTFilter(page)
    await nftSearchFilter.fill(nftToUse)
    const loadingIcon = await getNFTColumnLoadingIcon(page)
    await waitForElementToBeHidden(page, loadingIcon)
    const nftMoreOptions = await getNFTMoreOptions(page)
    await nftMoreOptions.click()
    const nftListingBtn = await getNFTListingBtn(page)
    await nftListingBtn.click()
    // check if pop up exists. if yes, close it
    try {
      const listPopupText = await getNFTListPopupText(page)
      await expect(listPopupText).toBeVisible()
      console.log("Pop up exists, click got it")
      const listPopupGotitBtn = await getNFTListPopupGotitBtn(page)
      await listPopupGotitBtn.click();
    } catch (error) {
      console.log("There is no pop up to close, skip this part")
    }
    const listOnZAPToggle = await getNFTListZAPToggle(page)
    const listOnVendingToggle = await getNFTListVendingmachineToggle(page)
    const listOnOnlineSalesToggle = await getNFTListOnlineSalesToggle(page)
    // Open ZAP, Vending machine and Online sales toggle
    await listOnVendingToggle.click()
    await listOnZAPToggle.click()
    await listOnOnlineSalesToggle.click()

    // [ZAP] Open all parent toggles in ZAP section
    const zapPayByToken = (await getNFTZAPPaymentType(page))[0]
    const zapPayByCash = (await getNFTZAPPaymentType(page))[1]
    const zapScheduleToggle = await getNFTZAPScheduleToggle(page)
    const zapReferralRewardToggle = await getNFTReferralRewardToggle(page)
    const zapLockRequirementToggle = await getNFTLockRequirementToggle(page)
    const zapVisibilityRequirementToggle = await getNFTVisibilityRequirementToggle(page)
    await zapScheduleToggle.click()
    await zapReferralRewardToggle.click()
    await zapLockRequirementToggle.click()
    await zapVisibilityRequirementToggle.click()
    const zapReferrerCheckbox = await getNFTReferrerCheckbox(page) // Reward for referrer checkbox
    await zapReferrerCheckbox.click()
    // [ZAP SECTION] Open all child toggles inside ZAP section
    const zapStartSched = (await getNFTZAPStartEndDate(page))[0] // ZAP schedule start
    const zapEndSched = (await getNFTZAPStartEndDate(page))[1] // ZAP schedule end
    const zapReferrerRewardToken = await getNFTRewardForReferrerAmount(page) // Reward for referrer - token amount
    const zapRefereeRewardTypeDropdown = await getNFTRewardForReferrerAmount(page) // Discount, Bonus reward, both dropdown
    const zapRefereeDiscountType = await getNFTDiscountType(page) // Fixed amount, Percentage
    const zapAccumulateEnoughTokens = (await getNFTLockRequirementType(page))[0] // Accumulate enough tokens
    const zapHoldCertainNFTs = (await getNFTLockRequirementType(page))[1] // Hold certain nft/s
    const zapVisibilityAddNFTBtn = await getNFTVisibilityRequirementAddNFTBtn(page)
    // [ZAP] Verify all elements inside ZAP section
    await expect(zapPayByToken).toBeVisible()
    await expect(zapPayByCash).toBeVisible()
    await expect(zapStartSched).toBeVisible()
    await expect(zapEndSched).toBeVisible()
    await expect(zapReferrerRewardToken).toBeVisible()
    await expect(zapRefereeRewardTypeDropdown).toBeVisible()
    await expect(zapRefereeDiscountType).toBeVisible()
    await expect(zapAccumulateEnoughTokens).toBeVisible()
    await expect(zapHoldCertainNFTs).toBeVisible()
    await expect(zapVisibilityAddNFTBtn).toBeVisible()

    // [VENDING] Open all parent toggles inside Vending machine section
    const vendingScheduleToggle = await getNFTVendingmachineScheduleToggle(page)
    const vendingPrice = await getNFTVendingmachinePrice(page)
    await vendingScheduleToggle.click()
    // [VENDING] Verify all elements inside Vending machine section
    await scrollToElement(page, vendingPrice)
    const vendingStartSched = (await getNFTZAPStartEndDate(page))[2] // VENDING schedule start
    const vendingEndSched = (await getNFTZAPStartEndDate(page))[3] // VENDING schedule end
    await expect(vendingPrice).toBeVisible()
    await expect(vendingStartSched).toBeVisible()
    await expect(vendingEndSched).toBeVisible()
    
    // [ONLINE SALES] Click Add new online sales link button
    const onlinesalesAddLinkBtn = await getNFTOSAddLinkBtn(page)
    await onlinesalesAddLinkBtn.click()
    // [ONLINE SALES] Verify all elements inside Online sales section
    const onlinesalesChannelName = await getNFTOSAddChannelName(page)
    const onlinesalesPrice = await getNFTOSAddPrice(page)
    const onlinesalesMonthlySubscriptionCheckbox = await getNFTOSMonthlySubscriptionBtn(page)
    const onlinesalesStartDate = (await getNFTOSAddScheduleStartEndDate(page))[0]
    const onlinesalesEndDate = (await getNFTOSAddScheduleStartEndDate(page))[1]
    const onlinesalesPublishOnMarketplaceToggle = await getNFTOSPublishOnMarketplaceBtn(page)
    const onlinesalesCreatePaymentlinkBtn = await getNFTOSCreatePaymentLinkBtn(page)
    const onlinesalesCancelBtn = await getNFTOSCancelBtn(page)
    await expect(onlinesalesChannelName).toBeVisible()
    await expect(onlinesalesPrice).toBeVisible()
    await expect(onlinesalesMonthlySubscriptionCheckbox).toBeVisible()
    await expect(onlinesalesStartDate).toBeVisible()
    await expect(onlinesalesEndDate).toBeVisible()
    await expect(onlinesalesPublishOnMarketplaceToggle).toBeVisible()
    await expect(onlinesalesCreatePaymentlinkBtn).toBeVisible()
    await expect(onlinesalesCancelBtn).toBeVisible()

    const completeListBtn = await getNFTCompletelistingBtn(page)
    await expect(completeListBtn).toBeVisible()
    console.log("[INFO] NFT listing check END")
  })

  test("Collection Management", async ({ page }) => {
    console.log("[INFO] Collection Management button check START")
    const collectionMgmtBtn = await getCollectionManagementBtn(page)
    await collectionMgmtBtn.click()
    let waitCtr = 0
    const collectionMgmtInfoText = await getCollectionManagementInfoText(page)
    while (waitCtr < 5) {
      try {
        await getCollectionManagementColumnHeader(page)
        //await expect(collectionMgmtColumnHeader).toBeVisible()
        waitCtr = 5
      } catch (error) {
        console.log("[ERROR] Items have not yet loaded, waiting for a few seconds...", error)
        await page.waitForTimeout(3500)
        waitCtr++
      }
    }
    const collectionMgmtSearchFilter = await getCollectionManagementSearchFilter(page)
    const collectionMgmtCreateBtn = await getCollectionManagementCreateCollectionBtn(page)
    // add here the new selections create new, upload, download template
    const collectionMgmtCloseBtn = await getCollectionManagementCloseBtn(page)
    await expect(collectionMgmtInfoText).toBeVisible()
    await expect(collectionMgmtSearchFilter).toBeVisible()
    await expect(collectionMgmtCreateBtn).toBeVisible()
    await expect(collectionMgmtCloseBtn).toBeVisible()
    await collectionMgmtCreateBtn.click()
    await page.waitForTimeout(3500)
    const collectionMgmtcreatenew = (await getCollectionManagementCreateBtnSelection(page))[0]
    const collectionMgmtuploadfolder = (await getCollectionManagementCreateBtnSelection(page))[1]
    const collectionMgmtdownloadtemplate = (await getCollectionManagementCreateBtnSelection(page))[2]
    await expect(collectionMgmtcreatenew).toBeVisible()
    await expect(collectionMgmtuploadfolder).toBeVisible()
    await expect(collectionMgmtdownloadtemplate).toBeVisible()
    await collectionMgmtcreatenew.click()
    await page.waitForTimeout(3500) 
    const collectionMgmtXBtn = await getCollectionManagementXBtn(page)
    await collectionMgmtXBtn.click()
    const createNFTBtn = await getNFTCreateBtn(page)
    await waitForAnElement(page, createNFTBtn)
    console.log("[INFO] Collection Management button check END")
  })
})