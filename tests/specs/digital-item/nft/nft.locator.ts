import { expect, Locator, Page } from "@playwright/test"
import { waitForAnElement } from "@/utils/load-helper"

async function getNFTTemplatesText(page) {
  const nftTemplatesText = page.locator("//div[text()='NFT Templates']")
  await expect(nftTemplatesText).toBeVisible({ timeout: 5000 })
  return nftTemplatesText
}

async function getNFTSelectionModeToggle(page) {
  const nftSelectionModeToggle = page.locator("//input[@type='checkbox']")
  await expect(nftSelectionModeToggle).toBeVisible({ timeout: 5000 })
  return nftSelectionModeToggle
}

async function getCreateNFTUploadFile(page: Page) {
  /*
    0 = create NFT Image
    1 = upload PDF file
    2 = unlockable content image (click first)
    */
  const createNFTUploadFile = page.locator("//div[@role='presentation']")
  const count = await createNFTUploadFile.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(createNFTUploadFile.nth(i))
  }
  console.log("This is the value of upload file = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getCreateNFTCommunityDropdown(page) {
  const createNFTCommunityDropdown = page.locator("//input[@name='community']/parent::div")
  await expect(createNFTCommunityDropdown).toBeVisible({ timeout: 5000 })
  return createNFTCommunityDropdown
}

async function getEditNFTSelectedToken(page) {
  const editNFTListingBtn = page.locator("//input[@name='token']/preceding-sibling::div/div[text()]")
  await expect(editNFTListingBtn).toBeVisible({ timeout: 5000 })
  return editNFTListingBtn
}

async function getCreateNFTTitle(page) {
  const createNFTTitle = page.locator("//input[@name='title']")
  await expect(createNFTTitle).toBeVisible({ timeout: 5000 })
  return createNFTTitle
}

async function getCreateNFTSupply(page) {
  const createNFTSupply = page.locator("//input[@name='supply']")
  await expect(createNFTSupply).toBeVisible({ timeout: 5000 })
  return createNFTSupply
}

async function getCreateNFTRoyaltyFee(page) {
  const createNFTRoyaltyFee = page.locator("//input[@name='royalty']")
  await expect(createNFTRoyaltyFee).toBeVisible({ timeout: 5000 })
  return createNFTRoyaltyFee
}

async function getCreateNFTExternalLink(page) {
  const createNFTExternalLink = page.locator("//input[@name='link']")
  await expect(createNFTExternalLink).toBeVisible({ timeout: 5000 })
  return createNFTExternalLink
}

async function getCreateNFTDescription(page) {
  const createNFTDescription = page.locator("//textarea[@name='description']")
  await expect(createNFTDescription).toBeVisible({ timeout: 5000 })
  return createNFTDescription
}

async function getCreateNFTCollectionTextfield(page) {
  const createNFTCollectionTextfield = page.locator("//input[@name='collection']")
  await expect(createNFTCollectionTextfield).toBeVisible({ timeout: 5000 })
  return createNFTCollectionTextfield
}

async function getCreateNFTChooseCollection(page) {
  const createNFTChooseCollection = page.locator("//button[contains(text(),'collection')]")
  await expect(createNFTChooseCollection).toBeVisible({ timeout: 5000 })
  return createNFTChooseCollection
}

async function getCreateNFTUnlockToggle(page) {
  const createNFTUnlockToggle = page.locator("//input[@name='unlockableContent']")
  await expect(createNFTUnlockToggle).toBeVisible({ timeout: 5000 })
  return createNFTUnlockToggle
}

async function getCreateNFTUnlockDescription(page) {
  const createNFTUnlockDescription = page.locator("//textarea[@name='unlockDescription']")
  await expect(createNFTUnlockDescription).toBeVisible({ timeout: 5000 })
  return createNFTUnlockDescription
}

async function getCreateNFTLimitUserToggle(page) {
  const createNFTLimitUserToggle = page.locator("//input[@name='limitPerUser']")
  await expect(createNFTLimitUserToggle).toBeVisible({ timeout: 5000 })
  return createNFTLimitUserToggle
}

async function getCreateNFTLimitUserTextfield(page) {
  const createNFTLimitUserTextfield = page.locator("//input[@name='numberOfLimit']")
  await expect(createNFTLimitUserTextfield).toBeVisible({ timeout: 5000 })
  return createNFTLimitUserTextfield
}

async function getCreateNFTOwnershiptransferToggle(page) {
  const createNFTOwnershipTransferToggle = page.locator("//input[@name='ownershipTransfer']")
  await expect(createNFTOwnershipTransferToggle).toBeVisible({ timeout: 5000 })
  return createNFTOwnershipTransferToggle
}

async function getCreateNFTCode(page) {
  const createNFTCode = page.locator("//input[@name='suffixCode']")
  await expect(createNFTCode).toBeVisible({ timeout: 5000 })
  return createNFTCode
}

async function getCreateNFTAdvancedoptions(page) {
  const createNFTAdvancedoptions = page.locator("//button[contains(text(),'advanced')]")
  await expect(createNFTAdvancedoptions).toBeVisible({ timeout: 5000 })
  return createNFTAdvancedoptions
}

async function getCreateNFTOptionsProperties(page) {
  const createNFTOptionsProperties = page.locator("//input[@name='useProperties']")
  await expect(createNFTOptionsProperties).toBeVisible({ timeout: 5000 })
  return createNFTOptionsProperties
}

async function getCreateNFTOptionsPropertiesAdd(page) {
  const createNFTOptionsPropertiesAdd = page.locator("//*[name()='svg' and @data-testid='AddCircleIcon']")
  await expect(createNFTOptionsPropertiesAdd).toBeVisible({ timeout: 5000 })
  return createNFTOptionsPropertiesAdd
}

async function getCreateNFTOptionsLicenseToggle(page) {
  const createNFTOptionsLicense = page.locator("//input[@name='license']")
  await expect(createNFTOptionsLicense).toBeVisible({ timeout: 5000 })
  return createNFTOptionsLicense
}

async function getCreateNFTOptionsLicenseDropdown(page) {
  const createNFTOptionsLicenseDropdown = page.locator("//input[@name='indexOfLicense']/preceding-sibling::div")
  await expect(createNFTOptionsLicenseDropdown).toBeVisible({ timeout: 5000 })
  return createNFTOptionsLicenseDropdown
}

async function getCreateNFTOptionsUtilityToggle(page) {
  const createNFTOptionsUtilityToggle = page.locator("//input[@name='utility']")
  await expect(createNFTOptionsUtilityToggle).toBeVisible({ timeout: 5000 })
  return createNFTOptionsUtilityToggle
}

async function getCreateNFTOptionsUtilityCheckbox(page) {
  const createNFTOptionsUtilityCheckbox = page.locator("//input[@name='redeemable']")
  await expect(createNFTOptionsUtilityCheckbox).toBeVisible({ timeout: 5000 })
  return createNFTOptionsUtilityCheckbox
}

async function getCreateNFTPreview(page) {
  const createNFTPreview = page.locator("//h5[text()='Preview']/parent::div")
  await expect(createNFTPreview).toBeVisible({ timeout: 5000 })
  return createNFTPreview
}

async function getCreateNFTCancel(page) {
  const createNFTCancel = page.locator("//button[text()='Cancel']")
  await expect(createNFTCancel).toBeVisible({ timeout: 5000 })
  return createNFTCancel
}

async function getCreateNFTSave(page) {
  const createNFTSave = page.locator("//button[text()='Save']")
  await expect(createNFTSave).toBeVisible({ timeout: 5000 })
  return createNFTSave
}

async function getNFTNameColumn(page: Page) {
  const nftNameColumn = page.locator("//tr/td[1]/div")
  const count = await nftNameColumn.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(nftNameColumn.nth(i))
  }
  console.log("This is the value of NFT name column = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getNFTInformationText(page) {
  const nftInformationText = page.locator("//h5[text()='NFT Information']")
  await expect(nftInformationText).toBeVisible({ timeout: 5000 })
  return nftInformationText
}

async function getNFTEditBtn(page) {
  const nftEditBtn = page.locator("//button[text()='Edit']")
  await expect(nftEditBtn).toBeVisible({ timeout: 5000 })
  return nftEditBtn
}

async function getNFTBOXListingBtn(page) {
  const nftboxListingBtn = page.locator("//button[contains(text(),'Full Listing')]")
  await expect(nftboxListingBtn).toBeVisible({ timeout: 5000 })
  return nftboxListingBtn
}

async function getEditNFTText(page) {
  const editNFTText = page.locator("//h5[text()='Edit NFT']")
  await expect(editNFTText).toBeVisible({ timeout: 5000 })
  return editNFTText
}

async function getEditNFTUploadedImage(page) {
  const editNFTUploadedImg = page.locator("//input/following-sibling::img")
  await expect(editNFTUploadedImg).toBeVisible({ timeout: 5000 })
  return editNFTUploadedImg
}

async function getEditNFTListingBtn(page) {
  const editNFTListingBtn = page.locator("//button[@id='listing_nft']")
  await waitForAnElement(page, editNFTListingBtn)
  await expect(editNFTListingBtn).toBeVisible({ timeout: 5000 })
  return editNFTListingBtn
}

async function getNFTSearchNFTFilter(page) {
  const nftSearchNFTFilter = page.locator("//input[@placeholder='Search']")
  await expect(nftSearchNFTFilter).toBeVisible({ timeout: 5000 })
  return nftSearchNFTFilter
}

async function getNFTCollectionFilter(page) {
  const nftCollectionFilter = page.locator("//label[text()='Collection']/following-sibling::div/child::input")
  await expect(nftCollectionFilter).toBeVisible({ timeout: 5000 })
  return nftCollectionFilter
}

async function getNFTCommunityFilter(page) {
  const nftTokenFilter = page.locator("//label[text()='Community']/following-sibling::div")
  await expect(nftTokenFilter).toBeVisible({ timeout: 5000 })
  return nftTokenFilter
}

async function getNFTCreateBtn(page) {
  const nftCreateBtn = page.locator("//button[contains(text(),'template')]")
  await expect(nftCreateBtn).toBeVisible({ timeout: 5000 })
  return nftCreateBtn
}

async function getNFTCreateMoreOptionsDropdown(page) {
  const nftCreateMoreOptions = page.locator("//*[name()='svg' and @data-testid='ExpandMoreIcon']/parent::button")
  await expect(nftCreateMoreOptions).toBeVisible({ timeout: 5000 })
  return nftCreateMoreOptions
}

async function getNFTCreateMoreOptionsDropdownItems(page: Page) {
  const nftCreateMoreOptionsDropdownItems = page.locator("//div/li")
  const count = await nftCreateMoreOptionsDropdownItems.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(nftCreateMoreOptionsDropdownItems.nth(i))
  }
  console.log("This is the value of NFT column header = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getNFTMoreOptions(page: Page) {
  /*
  const nftMoreOptions = page.locator("//*[name()='svg' and @data-testid='MoreHorizIcon']/parent::button")
  await expect(nftMoreOptions).toBeVisible({ timeout: 5000 })
  return nftMoreOptions
  */
  return page.locator("//*[name()='svg' and @data-testid='MoreHorizIcon']/parent::button")
}

async function getNFTListingBtn(page) {
  const nftListingBtn = page.locator("//div[text()='Launch setting']")
  await expect(nftListingBtn).toBeVisible({ timeout: 5000 })
  return nftListingBtn
}

async function getNFTColumnHeader(page: Page) {
  /*
  const nftColumnHeader = page.locator("//th[text()]")
  const count = await nftColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(nftColumnHeader.nth(i))
  }
  console.log("This is the value of NFT column header = " + textFieldArray.length + "\n")

  return textFieldArray
  */
 return page.locator("//th[text()]")
}

async function getNFTColumnLoadingIcon(page) {
  const nftColumnLoadingIcon = page.locator("//*[name()='svg']/parent::div[@id='lottie']")
  await expect(nftColumnLoadingIcon).toBeVisible({ timeout: 5000 })
  return nftColumnLoadingIcon
}

export {
  getCreateNFTAdvancedoptions,
  getCreateNFTCancel,
  getCreateNFTChooseCollection,
  getCreateNFTCode,
  getCreateNFTCollectionTextfield,
  getCreateNFTCommunityDropdown,
  getCreateNFTDescription,
  getCreateNFTExternalLink,
  getCreateNFTLimitUserTextfield,
  getCreateNFTLimitUserToggle,
  getCreateNFTOwnershiptransferToggle,
  getCreateNFTOptionsLicenseDropdown,
  getCreateNFTOptionsLicenseToggle,
  getCreateNFTOptionsProperties,
  getCreateNFTOptionsPropertiesAdd,
  getCreateNFTOptionsUtilityCheckbox,
  getCreateNFTOptionsUtilityToggle,
  getCreateNFTPreview,
  getCreateNFTRoyaltyFee,
  getCreateNFTSave,
  getCreateNFTSupply,
  getCreateNFTTitle,
  getCreateNFTUnlockDescription,
  getCreateNFTUnlockToggle,
  getCreateNFTUploadFile,
  getEditNFTListingBtn,
  getEditNFTSelectedToken,
  getEditNFTText,
  getEditNFTUploadedImage,
  getNFTBOXListingBtn,
  getNFTCollectionFilter,
  getNFTColumnHeader,
  getNFTColumnLoadingIcon,
  getNFTCommunityFilter,
  getNFTCreateBtn,
  getNFTCreateMoreOptionsDropdown,
  getNFTCreateMoreOptionsDropdownItems,
  getNFTEditBtn,
  getNFTInformationText,
  getNFTListingBtn,
  getNFTMoreOptions,
  getNFTNameColumn,
  getNFTSearchNFTFilter,
  getNFTSelectionModeToggle,
  getNFTTemplatesText
}
