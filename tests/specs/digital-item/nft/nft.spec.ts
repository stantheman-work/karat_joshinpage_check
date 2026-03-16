import {
  nftPage
} from "@/specs/digital-item/nft/nft.locator"
import {
  NFTListingPage
} from "@/specs/digital-item/nft/nftlisting.locator"
import {
  collectionmanagementPage
} from "@/specs/digital-item/nft/collectionmanagement.locator"
import {
  inputDataForTextfields
} from "@/utils/data-utils"
import { AuthUtils } from "@/utils/auth-utils"
import {
  waitForUIReady
} from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import {
  closeWindowPopup,
  addDataOnTextfield
} from "@/utils/keyboard-helper"
import { PageUtils } from "@/utils/page-utils"
import { test, expect, Page } from "@playwright/test"

export class nft_actions {
  private inputData: inputDataForTextfields
  private NFTpage: nftPage
  private NFTListingPage: NFTListingPage
  private collectionMgmtPage: collectionmanagementPage
  constructor(private page: Page) {
    this.inputData = new inputDataForTextfields(page)
    this.NFTpage = new nftPage(page)
    this.NFTListingPage = new NFTListingPage(page)
    this.collectionMgmtPage = new collectionmanagementPage(page)
  }

  async navigateToNFTPage() {
    const parentMenu = LocatorUtils.getSideBarParentItems(this.page)
      .filter({ hasText: /^Digital item$/ })
      .first()
    await parentMenu.click()
    const childMenu = LocatorUtils.getSideBarChildItems(this.page)
      .filter({ hasText: /^NFT Templates$/ })
      .first()
    await childMenu.click()
  }

  async checkEditNFTSaveBtn() {
    await test.step("[INFO] Check save button in edit NFT page", async () => {
      let advancedpropertiesFlag = false
      let advancedlicenseFlag = false
      let unlockcontentToggle = false
      let ownershiptransferToggle = false
      await expect(this.NFTpage.ce_editNFTHeading()).toBeVisible()
      await expect(this.NFTpage.ce_existingNFTImageUploaded()).toBeVisible()
      await expect(this.NFTpage.ce_communityDropdown()).toBeVisible()
      await expect(this.NFTpage.ce_title()).toBeVisible()
      await expect(this.NFTpage.ce_nftCategory()).toBeVisible()
      await expect(this.NFTpage.ce_supply()).toBeVisible()
      await expect(this.NFTpage.ce_royaltyFee()).toBeVisible()
      await expect(this.NFTpage.ce_externalLink()).toBeVisible()
      await expect(this.NFTpage.ce_nftDescription()).toBeVisible()
      await expect(this.NFTpage.ce_uploadfile().nth(1)).toBeVisible()
      await expect(this.NFTpage.ce_collectionTextfield()).toBeVisible()
      await expect(this.NFTpage.ce_choosecollectionBtn()).toBeVisible()
      await expect(this.NFTpage.ce_unlockablecontentToggle()).toBeVisible()
      if (!await this.NFTpage.ce_unlockablecontentToggle().isChecked()) {
        unlockcontentToggle = true
        await this.NFTpage.ce_unlockablecontentToggle().click()
      }
      await expect(this.NFTpage.ce_unlockablecontentDescription()).toBeVisible()
      await expect(this.NFTpage.create_uploadfileBox().last()).toBeVisible()
      if (unlockcontentToggle === true) {
        await this.NFTpage.ce_unlockablecontentToggle().click()
      }
      await expect(this.NFTpage.ce_limituserToggle()).toBeVisible()
      await expect(this.NFTpage.ce_limituserTextfield()).toBeVisible()
      if (!await this.NFTpage.ce_ownershiptransferToggle().isChecked()) {
        ownershiptransferToggle = true
        await this.NFTpage.ce_ownershiptransferToggle().click()
      }
      await expect(this.NFTpage.ce_ownershiptransferToggle()).toBeVisible()
      await expect(this.NFTpage.ce_ownershiptransferDisableP2PToggle()).toBeVisible()
      if (ownershiptransferToggle === true) {
        await this.NFTpage.ce_ownershiptransferToggle().click()
      }
      await expect(this.NFTpage.edit_nftCode()).toBeVisible()
      if (await this.NFTpage.ce_advancedOptionsShow().isVisible()) {
        // Advanced properties is not clicked
        await this.NFTpage.ce_advancedOptionsShow().click()
        await expect(this.NFTpage.ce_advancedPropertiesToggle()).toBeVisible()
        await this.NFTpage.ce_advancedPropertiesToggle().click()
        await expect(this.NFTpage.ce_advancedPropertiesAddBtn()).toBeVisible()
        await expect(this.NFTpage.ce_advancedLicenseToggle()).toBeVisible()
        await this.NFTpage.ce_advancedLicenseToggle().click()
        await expect(this.NFTpage.ce_advancedLicenseDropdown()).toBeVisible()
        // Return to previous state, close the toggles
        await this.NFTpage.ce_advancedLicenseToggle().click()
        await this.NFTpage.ce_advancedPropertiesToggle().click()
        await expect(this.NFTpage.ce_advancedOptionsHide()).toBeVisible()
        await this.NFTpage.ce_advancedOptionsHide().click()
      } else {
        // Advanced properties is already clicked
        // Check whether PROPERTIES toggle is ON
        if (await this.NFTpage.ce_advancedPropertiesToggle().isChecked()) {
          // Do nothing
        } else {
          await this.NFTpage.ce_advancedPropertiesToggle().click()
          advancedpropertiesFlag = true
        }
        // Check whether LICENSE toggle is ON
        if (await this.NFTpage.ce_advancedLicenseToggle().isChecked()) {
          // Do nothing
        } else {
          await this.NFTpage.ce_advancedLicenseToggle().click()
          advancedlicenseFlag = true
        }
        await expect(this.NFTpage.ce_advancedPropertiesAddBtn()).toBeVisible()
        await expect(this.NFTpage.ce_advancedLicenseDropdown()).toBeVisible()
        // Return to previous state, close the toggles
        if (advancedpropertiesFlag === true)
          await this.NFTpage.ce_advancedPropertiesToggle().click()
        if (advancedlicenseFlag === true)
          await this.NFTpage.ce_advancedLicenseToggle().click()
      }
      await expect(this.NFTpage.ce_cancelBtn()).toBeVisible()
      await expect(this.NFTpage.ce_saveBtn()).toBeVisible()
      await this.NFTpage.ce_saveBtn().click()
    })
  }

  async checkListingpageSaveBtn() {
    await test.step("[INFO] Check edit nft save button START", async () => {
      let zapToggleFlag = false
      let vendingToggleFlag = false
      let onlinesalesToggleFlag = false
      let rewardTypeCtr = 0
      let vendingScheduleFlag = false
      // Sometimes, listing pop up instruction appears
      await expect(this.NFTListingPage.listingGotitBtn()).toBeVisible()
      await this.NFTListingPage.listingGotitBtn().click()
      await expect(this.NFTListingPage.zapToggle()).toBeVisible({ timeout: 5000 })
      await expect(this.NFTListingPage.vendingmachineToggle()).toBeVisible()
      await expect(this.NFTListingPage.onlinesalesToggle()).toBeVisible()
      // Check whether toggles are active or not
      if (!await this.NFTListingPage.zapToggle().isChecked()) {
        await this.NFTListingPage.zapToggle().click()
        zapToggleFlag = true
      }
      if (!await this.NFTListingPage.vendingmachineToggle().isChecked()) {
        await this.NFTListingPage.vendingmachineToggle().click()
        vendingToggleFlag = true
      }
      if (!await this.NFTListingPage.onlinesalesToggle().isChecked()) {
        await this.NFTListingPage.onlinesalesToggle().click()
        onlinesalesToggleFlag = true
      }
      await expect(this.NFTListingPage.zapPaymentType().first()).toBeVisible()
      await expect(this.NFTListingPage.zapPaymentType().last()).toBeVisible()
      await expect(this.NFTListingPage.zapScheduleToggle()).toBeVisible()
      /*
        Check ZAP section start
      */
      // Checks whether toggles inside ZAP section are active or not
      if (!await this.NFTListingPage.zapScheduleToggle().isChecked()) {
        await this.NFTListingPage.zapScheduleToggle().click()
      }
      if (!await this.NFTListingPage.zapReferralrewardToggle().isChecked()) {
        await this.NFTListingPage.zapReferralrewardToggle().click()
      }
      if (!await this.NFTListingPage.zapLockrequirementToggle().isChecked()) {
        await this.NFTListingPage.zapLockrequirementToggle().click()
      }
      if (!await this.NFTListingPage.zapVisibilityToggle().isChecked()) {
        await this.NFTListingPage.zapVisibilityToggle().click()
      }
      await expect(this.NFTListingPage.zapScheduleSelect().first()).toBeVisible()
      await expect(this.NFTListingPage.zapScheduleSelect().last()).toBeVisible()
      await expect(this.NFTListingPage.zapReferrerCheckbox()).toBeVisible()
      await expect(this.NFTListingPage.zapRefereeRewardType()).toBeVisible()
      await this.NFTListingPage.zapRefereeRewardType().click()
      rewardTypeCtr = await this.NFTListingPage.zapRefereeRewardTypeOptions().count()
      await closeWindowPopup(this.page)
      console.log("rewardTypeCtr count = " + rewardTypeCtr)
      for (let ctr = 0; ctr < rewardTypeCtr; ctr++) {
        switch (ctr) {
          case 0:
            // Discount
            await expect(this.NFTListingPage.zapDiscountType()).toBeVisible()
            await expect(this.NFTListingPage.zapDiscountAmount()).toBeVisible()
          case 1:
            // Bonus reward
            await this.NFTListingPage.zapRefereeRewardType().click()
            await expect(this.NFTListingPage.zapBonusrewardSelection()).toBeVisible()
            await this.NFTListingPage.zapBonusrewardSelection().click()
            await expect(this.NFTListingPage.zapBonusrewardToken()).toBeVisible()
            await expect(this.NFTListingPage.zapBonusrewardAmount()).toBeVisible()
            await expect(this.NFTListingPage.zapBonusrewardChooseNFTBtn()).toBeVisible()
          default:
            // Both discount and reward type
            await this.NFTListingPage.zapRefereeRewardType().click()
            await this.NFTListingPage.zapDiscountandBonusrewardSelection().click()
            await expect(this.NFTListingPage.zapDiscountType()).toBeVisible()
            await expect(this.NFTListingPage.zapDiscountAmount()).toBeVisible()
            await expect(this.NFTListingPage.zapBonusrewardToken()).toBeVisible()
            await expect(this.NFTListingPage.zapBonusrewardAmount()).toBeVisible()
            await expect(this.NFTListingPage.zapBonusrewardChooseNFTBtn()).toBeVisible()
        }
      }
      await expect(this.NFTListingPage.zapLockrequirementType().first()).toBeVisible()
      await expect(this.NFTListingPage.zapLockrequirementType().last()).toBeVisible()
      await expect(this.NFTListingPage.zapVisibilityAddBtn()).toBeVisible()
      /*
        Check Vending machine section start
      */
      await expect(this.NFTListingPage.vendingmachinePrice().first()).toBeVisible()
      await expect(this.NFTListingPage.vendingmachineScheduleToggle().first()).toBeVisible()
      if (!await this.NFTListingPage.vendingmachineScheduleToggle().isChecked()) {
        await this.NFTListingPage.vendingmachineScheduleToggle().click()
        vendingScheduleFlag = true
      }
      await expect(this.NFTListingPage.vendingmachineScheduleSelect().first()).toBeVisible()
      await expect(this.NFTListingPage.vendingmachineScheduleSelect().last()).toBeVisible()
      /*
        Check Online sales section start
      */
      await expect(this.NFTListingPage.onlinesalesAddBtn()).toBeVisible()
      await this.NFTListingPage.onlinesalesAddBtn().click()
      await expect(this.NFTListingPage.osadd_channelname()).toBeVisible()
      await expect(this.NFTListingPage.osadd_price()).toBeVisible()
      await expect(this.NFTListingPage.osadd_monthlysubscriptionCheckbox()).toBeVisible()
      await expect(this.NFTListingPage.osadd_schedule().first()).toBeVisible()
      await expect(this.NFTListingPage.osadd_schedule().first()).toBeVisible()
      await expect(this.NFTListingPage.osadd_marketplaceToggle()).toBeVisible()
      await expect(this.NFTListingPage.osadd_createPaymentlinkBtn()).toBeVisible()
      await expect(this.NFTListingPage.osadd_cancelBtn()).toBeVisible()
      /*
        After checking the elements above, close toggles which are originally inactive
      */
      if (zapToggleFlag === true) {
        await this.NFTListingPage.zapToggle().click()
      }
      if (vendingToggleFlag === true) {
        await this.NFTListingPage.vendingmachineToggle().click()
      }
      if (onlinesalesToggleFlag === true) {
        await this.NFTListingPage.onlinesalesToggle().click()
      }
      await expect(this.NFTListingPage.completeListBtn()).toBeVisible()
      await this.NFTListingPage.completeListBtn().click()
    })
  }
  async checkCollectionmanagementSaveBtn() {
    await expect(this.collectionMgmtPage.headerText()).toBeVisible()
    await expect(this.collectionMgmtPage.searchFilter()).toBeVisible()
    await expect(this.collectionMgmtPage.columnHeader().first()).toBeVisible()
    await expect(this.collectionMgmtPage.createCollectionBtn()).toBeVisible()
    await expect(this.collectionMgmtPage.closeBtn()).toBeVisible()
    await addDataOnTextfield(this.collectionMgmtPage.searchFilter(), this.inputData.collectionmgmtInput())
    await expect(this.collectionMgmtPage.loadingIcon()).toBeHidden()
    console.log("this.inputData.collectionmgmtInput() = "+this.inputData.collectionmgmtInput())
    await expect(this.collectionMgmtPage.resultFromSearch(this.inputData.collectionmgmtInput())).toBeVisible()
    await this.collectionMgmtPage.resultFromSearch(this.inputData.collectionmgmtInput()).click()
  }
}