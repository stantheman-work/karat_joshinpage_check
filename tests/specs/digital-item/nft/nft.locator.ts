import { Page } from "@playwright/test";

export class nftPage {
  constructor(private page: Page) {}

  // --- Main ---

  mainTemplatesText() {
    return this.page.locator("//div[text()='NFT Templates']");
  }

  mainSelectionModeToggle() {
    return this.page.locator("//input[@type='checkbox']");
  }

  mainSearchNFTFilter() {
    return this.page.locator("//input[@placeholder='Search']");
  }

  mainCollectionFilter() {
    return this.page.locator("//label[text()='Collection']/following-sibling::div/child::input");
  }

  mainCommunityFilter() {
    return this.page.locator("//label[text()='Community']/following-sibling::div");
  }

  mainCreateBtn() {
    return this.page.locator("//button[contains(text(),'template')]");
  }

  mainEditBtn() {
    return this.page.locator("//button[text()='Edit']");
  }

  mainNFTInfoListingBtn() {
    return this.page.locator("//button[contains(text(),'Full Listing')]");
  }

  mainNFTSettingListingBtn() {
    return this.page.locator("//div[text()='Launch setting']");
  }

  mainNFTSettingBtn() {
    return this.page.locator("//*[name()='svg' and @data-testid='MoreHorizIcon']/parent::button");
  }

  // return here
  // Button beside create template
  mainCreateOptionsBtn() {
    return this.page.locator("//*[name()='svg' and @data-testid='ExpandMoreIcon']/parent::button");
  }

  // After clicking mainNFTCreateOptionsBtn, this will show up
  mainCreateOptionsBtnItems() {
    // Previously returned Locator[]; return the list locator instead.
    return this.page.locator("//div/li");
  }

  mainColumnHeader() {
    // Previously returned Locator[]; return the list locator instead.
    return this.page.locator("//th[text()]");
  }

  mainColumnLoadingIcon() {
    return this.page.locator("//*[name()='svg']/parent::div[@id='lottie']");
  }

  mainNameColumnItems() {
    // Previously returned Locator[]; return the list locator instead.
    return this.page.locator("//tr/td[1]/div/p");
  }

  mainNFTInfoHeader() {
    return this.page.locator("//h5[text()='NFT Information']");
  }

  /* 
  --- EDIT NFT ---
  ce = create / edit
  */

  ce_createtextHeading() {
    return this.page.getByRole('heading', { name: 'Create NFT' })
  }

  ce_uploadfile() {
    /*
      0 = create NFT Image
      1 = upload PDF file
      2 = unlockable content image (click first)
    */
    return this.page.locator("//div[@role='presentation']");
  }

  ce_communityDropdown() {
    return this.page.locator("//input[@name='community']/parent::div");
  }

  ce_communityDropdownItems() {
    return this.page.locator("//li[@role='option']");
  }

  ce_title() {
    return this.page.locator("//input[@name='title']");
  }
  
  ce_nftCategory() {
    return this.page.locator("//input[@name='category']/parent::div")
  }

  ce_supply() {
    return this.page.locator("//input[@name='supply']");
  }

  ce_royaltyFee() {
    return this.page.locator("//input[@name='royalty']");
  }

  ce_externalLink() {
    return this.page.locator("//input[@name='link']");
  }

  create_uploadfileBox() {
    /*
      .first() = NFT image
      .nth(1) = upload PDF
      .last() = unlockable content image
    */
    return this.page.locator("//div[@role='presentation']")
  }

  ce_nftDescription() {
    return this.page.locator("//textarea[@name='description']");
  }

  ce_collectionTextfield() {
    return this.page.locator("//input[@name='collection']");
  }

  ce_choosecollectionBtn() {
    return this.page.getByRole('button', { name: 'Choose collection' })
  }

  ce_unlockablecontentToggle() {
    return this.page.locator("//input[@name='unlockableContent']");
  }

  ce_unlockablecontentDescription() {
    return this.page.locator("//textarea[@name='unlockDescription']");
  }

  ce_limituserToggle() {
    return this.page.locator("//input[@name='limitPerUser']");
  }

  ce_limituserTextfield() {
    return this.page.locator("//input[@name='numberOfLimit']");
  }

  ce_ownershiptransferToggle() {
    return this.page.locator("//input[@name='ownershipTransfer']");
  }

  ce_ownershiptransferDisableP2PToggle() {
    return this.page.locator("//input[@name='disableP2PMarketplace']")
  }

  create_nftCode() {
    return this.page.locator("//input[@name='suffixCode']");
  }

  edit_nftCode() {
    return this.page.locator("//input[contains(@value,'NFT-')]")
  }

  create_nftCodeGenerateBtn() {
    return this.page.getByRole('button', { name: 'Generate' })
  }

  ce_advancedOptionsShow() {
    return this.page.getByRole('button', { name: 'Show advanced options' })
  }

  ce_advancedOptionsHide() {
    return this.page.getByRole('button', { name: 'Hide advanced options' })
  }

  ce_advancedPropertiesToggle() {
    return this.page.locator("//input[@name='useProperties']");
  }

  ce_advancedPropertiesAddBtn() {
    return this.page.locator("//*[name()='svg' and @data-testid='AddCircleIcon']");
  }

  ce_advancedLicenseToggle() {
    return this.page.locator("//input[@name='license']");
  }

  ce_advancedLicenseDropdown() {
    return this.page.locator("//input[@name='indexOfLicense']/preceding-sibling::div");
  }

  ce_advancedLicenseDropdownItems() {
    return this.page.locator("//li[@role]")
  }

  ce_cancelBtn() {
    return this.page.getByRole('button', { name: 'Cancel' })
  }

  ce_saveBtn() {
    return this.page.getByRole('button', { name: 'Save' })
  }

  ce_preview() {
    return this.page.locator("//h5[text()='Preview']/parent::div")
  }

  ce_editNFTHeading() {
    return this.page.getByRole('heading', { name: 'Edit NFT' })
    return this.page.locator("//h5[text()='Edit NFT']");
  }

  ce_existingNFTImageUploaded() {
    return this.page.locator("//input/following-sibling::img");
  }

  ce_listonappBtn() {
    return this.page.getByRole('button', { name: 'listing_nft' })
  }
}