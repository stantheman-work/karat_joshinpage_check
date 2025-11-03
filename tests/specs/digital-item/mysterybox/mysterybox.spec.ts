import {
  getCreateMysteryboxCancelBtn,
  getMysteryboxCreatebtn,
  getCreateMysteryboxText,
  getCreateMysteryboxUploadImage,
  getCreateMysteryboxCommunityDropdown,
  getCreateMysteryboxName,
  getCreateMysteryboxTotalBoxes,
  getCreateMysteryboxCreateBtn,
  getMysteryboxSearchFilter,
  getMysteryColumnLoadingIcon
} from "@/specs/digital-item/mysterybox/mysterybox.locator"
import {
  getMysteryCompletelistingBtn,
  getMysteryGotitBtn,
  getMysteryListingBtn,
  getMysteryListOnlineSalesToggle,
  getMysteryMoreOptions,
  getMysteryOSAddChannelName,
  getMysteryOSDeleteBtn,
  getMysteryOSAddLinkBtn,
  getMysteryOSAddPrice,
  getMysteryOSAddScheduleStartEndDate,
  getMysteryOSCancelBtn,
  getMysteryOSCreatePaymentLinkBtn,
  getMysteryOSPublishOnMarketplaceBtn,
  getMysteryPopupText,
  getMysteryRevealdateSelection,
  getMysteryStartEndDate,
  getMysteryVendingListToggle,
  getMysteryVendingPrice,
  getMysteryVendingScheduleToggle,
  getMysteryZAPListToggle,
  getMysteryZAPPrice,
  getMysteryZAPScheduleToggle
} from "@/specs/digital-item/mysterybox/mysteryboxlisting.locator"
import { AuthUtils } from "@/utils/auth-utils"
import {
  waitForAnElement,
  waitForPageToLoad,
  waitForElementToBeHidden
} from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { test, expect } from "@playwright/test"
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

    try {
      await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findMysteryBoxes !== undefined, { timeout: 10000 })
    } catch (error) {
      console.error("This community does not have any mystery boxes")
    }
    
  })

  test("Create Mysterybox", async ({ page }) => {
    console.log("[INFO] Create Mysterybox check START")
    const mysteryboxCreateBtn = await getMysteryboxCreatebtn(page)
    await waitForAnElement(page, mysteryboxCreateBtn)
    await mysteryboxCreateBtn.click()
    await page.waitForTimeout(3000)
    const createMysteryboxText = await getCreateMysteryboxText(page)
    const createMysteryboxUploadImage = await getCreateMysteryboxUploadImage(page)
    const createMysteryboxTokenDropdown = await getCreateMysteryboxCommunityDropdown(page)
    const createMysteryboxName = await getCreateMysteryboxName(page)
    const createMysteryboxTotalBoxes = await getCreateMysteryboxTotalBoxes(page)
    const createMysteryboxCancelBtn = await getCreateMysteryboxCancelBtn(page)
    const createMysteryboxCreateBtn = await getCreateMysteryboxCreateBtn(page)
    await expect(createMysteryboxText).toBeVisible()
    await expect(createMysteryboxUploadImage).toBeVisible()
    await expect(createMysteryboxTokenDropdown).toBeVisible()
    await expect(createMysteryboxName).toBeVisible()
    await expect(createMysteryboxTotalBoxes).toBeVisible()
    await expect(createMysteryboxCancelBtn).toBeVisible()
    await expect(createMysteryboxCreateBtn).toBeVisible()
    const mysteryboxCancelBtn = await getCreateMysteryboxCancelBtn(page)
    await mysteryboxCancelBtn.click()
    await waitForAnElement(page, mysteryboxCreateBtn)
    console.log("[INFO] Create Mysterybox check END")
  })

  test("Mysterybox listing", async ({ page }) => {
    console.log("[INFO] Mysterybox listing check START")
    await waitForPageToLoad(page)
    const boxToUse = 'No NFT'
    const boxSearchFilter = await getMysteryboxSearchFilter(page)
    await boxSearchFilter.fill(boxToUse)
    const mysteryLoadingIcon = await getMysteryColumnLoadingIcon(page)
    await waitForElementToBeHidden(page, mysteryLoadingIcon)
    const mysteryMoreOptionsBtn = (await getMysteryMoreOptions(page))[0]
    await mysteryMoreOptionsBtn.click()
    const mysteryListingBtn = await getMysteryListingBtn(page)
    await mysteryListingBtn.click()
  
    await waitForPageToLoad(page)
    // Check if listing pop up appears or not
    try {
      const listPopupText = await getMysteryPopupText(page)
      await expect(listPopupText).toBeVisible()
      console.log("Pop up exists, click got it")
      const listPopupGotitBtn = await getMysteryGotitBtn(page)
      await listPopupGotitBtn.click();
    } catch (error) {
      console.log("There is no pop up to close, skip this part")
    }
    // Open all toggles ZAP, Vending machine and Online sales
    const zapListBtn = await getMysteryZAPListToggle(page)
    const vendingListBtn = await getMysteryVendingListToggle(page)
    const onlinesalesbtn = await getMysteryListOnlineSalesToggle(page)
    await zapListBtn.click()
    await vendingListBtn.click()
    await onlinesalesbtn.click()

    // [ZAP] Open all parent toggles inside ZAP section
    const zapListScheduleToggle = await getMysteryZAPScheduleToggle(page)
    await zapListScheduleToggle.click()
    // [ZAP] Verify all elements inside ZAP section
    const zapPrice = await getMysteryZAPPrice(page)
    const zapListStartDate = (await getMysteryStartEndDate(page))[0]
    const zapListEndDate = (await getMysteryStartEndDate(page))[1]
    const mysteryRevealDate = (await getMysteryStartEndDate(page))[2]
    await expect(zapPrice).toBeVisible()
    await expect(zapListStartDate).toBeVisible()
    await expect(zapListEndDate).toBeVisible()
    await expect(mysteryRevealDate).toBeVisible()

    // [VENDING] Open all parent toggles inside Vending machine section
    const mysteryListScheduleToggle = await getMysteryVendingScheduleToggle(page)
    await mysteryListScheduleToggle.click()
    // [VENDING] Verify all elements inside Vending machine section
    const vendingPrice = await getMysteryVendingPrice(page)
    const vendingStartDate = (await getMysteryStartEndDate(page))[3]
    const vendingEndDate = (await getMysteryStartEndDate(page))[4]
    await expect(vendingPrice).toBeVisible()
    await expect(vendingStartDate).toBeVisible()
    await expect(vendingEndDate).toBeVisible()

    // [ONLINE SALES] Click Add Purchase link button
    const mysteryOSAddPurchaselinkBtn = await getMysteryOSAddLinkBtn(page)
    await mysteryOSAddPurchaselinkBtn.click()
    // [ONLINE SALES] Verify all elements inside Add Purchase link button
    const mysteryOSAddChannelName = await getMysteryOSAddChannelName(page)
    const mysteryOSAddPrice = await getMysteryOSAddPrice(page)
    const mysteryOSStartDate = (await getMysteryOSAddScheduleStartEndDate(page))[0]
    const mysteryOSEndDate = (await getMysteryOSAddScheduleStartEndDate(page))[1]
    const mysteryOSPublishOnMarketplaceBtn = await getMysteryOSPublishOnMarketplaceBtn(page)
    const mysteryOSCreatePaymentlinkBtn = await getMysteryOSCreatePaymentLinkBtn(page)
    const mysteryOSCancelBtn = await getMysteryOSCancelBtn(page)
    const mysteryOSDeleteBtn = await getMysteryOSDeleteBtn(page)
    await expect(mysteryOSAddChannelName).toBeVisible()
    await expect(mysteryOSAddPrice).toBeVisible()
    await expect(mysteryOSStartDate).toBeVisible()
    await expect(mysteryOSEndDate).toBeVisible()
    await expect(mysteryOSPublishOnMarketplaceBtn).toBeVisible()
    await expect(mysteryOSCreatePaymentlinkBtn).toBeVisible()
    await expect(mysteryOSCancelBtn).toBeVisible()
    await expect(mysteryOSDeleteBtn).toBeVisible()

    const mysteryOSCompleteListingBtn = await getMysteryCompletelistingBtn(page)
    await expect(mysteryOSCompleteListingBtn).toBeVisible()
    console.log("[INFO] Mysterybox listing check END")
  })
})
