import { expect, Locator, Page } from "@playwright/test"

async function getNFTtab(page) {
  const nftTab = page.locator("//button[contains(text(),'NFT')]")
  await expect(nftTab).toBeVisible({ timeout: 5000 })
  return nftTab
}

async function getMysteryboxTab(page) {
  const mysteryboxTab = page.locator("//button[contains(text(),'Mystery')]")
  await expect(mysteryboxTab).toBeVisible({ timeout: 5000 })
  return mysteryboxTab
}

async function getNFTSearchNFTFilter(page) {
  const nftSearchNFTFilter = page.locator("//input[@placeholder='Search']")
  await expect(nftSearchNFTFilter).toBeVisible({ timeout: 5000 })
  return nftSearchNFTFilter
}

async function getNFTCollectionFilter(page) {
  const nftCollectionFilter = page.locator("//input[@role='combobox']")
  await expect(nftCollectionFilter).toBeVisible({ timeout: 5000 })
  return nftCollectionFilter
}

async function getNFTTokenFilter(page) {
  const nftTokenFilter = page.locator("//input[@placeholder='Choose token']/preceding-sibling::div")
  await expect(nftTokenFilter).toBeVisible({ timeout: 5000 })
  return nftTokenFilter
}

async function getNFTColumnHeader(page: Page) {
  const nftColumnHeader = page.locator("//th[text()]")
  const count = await nftColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(nftColumnHeader.nth(i))
  }
  console.log("This is the value of NFT column header = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getNFTCollectionManagementBtn(page) {
  const nftCollectionManagementBtn = page.locator("//span[contains(text(),'Collection')]/parent::button")
  await expect(nftCollectionManagementBtn).toBeVisible({ timeout: 5000 })
  return nftCollectionManagementBtn
}

async function getNFTCreateBtn(page) {
  const nftCreateBtn = page.locator("//button[contains(text(),'template')]")
  await expect(nftCreateBtn).toBeVisible({ timeout: 5000 })
  return nftCreateBtn
}

async function getMysteryboxCreatebtn(page) {
  const mysteryboxCreateBtn = page.locator("//button[text()='Mystery Box']")
  await expect(mysteryboxCreateBtn).toBeVisible({ timeout: 5000 })
  return mysteryboxCreateBtn
}

async function getMysteryboxTokenFilter(page) {
  const mysteryboxTokenFilter = page.locator("//div[contains(text(),'token')]")
  await expect(mysteryboxTokenFilter).toBeVisible({ timeout: 5000 })
  return mysteryboxTokenFilter
}

async function getMysteryboxColumnHeader(page: Page) {
  const mysteryboxColumnHeader = page.locator("//th[text()]")
  const count = await mysteryboxColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(mysteryboxColumnHeader.nth(i))
  }
  console.log("This is the value of Mysterybox column header = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getCreateNFTText(page) {
  const createNFTText = page.locator("//h5[text()='Create NFT']")
  await expect(createNFTText).toBeVisible({ timeout: 5000 })
  return createNFTText
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

async function getCreateNFTTokenDropdown(page) {
  const createNFTTokenDropdown = page.locator("//input[@name='token']/preceding-sibling::div")
  await expect(createNFTTokenDropdown).toBeVisible({ timeout: 5000 })
  return createNFTTokenDropdown
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
  await expect(editNFTListingBtn).toBeVisible({ timeout: 5000 })
  return editNFTListingBtn
}

async function getCollectionManagementInfoText(page) {
  const collectionMgmtInfoText = page.locator("//h5[contains(text(),'Information')]")
  await expect(collectionMgmtInfoText).toBeVisible({ timeout: 5000 })
  return collectionMgmtInfoText
}

async function getCollectionManagementSearchFilter(page: Page) {
  // const collectionMgmtSearchFilter = page.locator(
  //   "//*[name()='svg' and @data-testid='SearchIcon']/following-sibling::input"
  // )
  const collectionMgmtSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(collectionMgmtSearchFilter).toBeVisible({ timeout: 5000 })
  return collectionMgmtSearchFilter
}

async function getCollectionManagementColumnHeader(page: Page) {
  const collectionMgmtColumnHeader = page.locator(
    "//h5[contains(text(),'Information')]/parent::h2/following-sibling::div/div[2]/descendant::th[text()]"
  )
  const count = await collectionMgmtColumnHeader.count()
  let columns: Locator[] = []
  for (let i = 0; i < count; i++) {
    columns.push(collectionMgmtColumnHeader.nth(i))
  }
  return columns
}

async function getCollectionManagementCreateCollectionBtn(page) {
  const collectionMgmtCreateCollectionBtn = page.locator("//span[text()='Create collection']/parent::button")
  await expect(collectionMgmtCreateCollectionBtn).toBeVisible({ timeout: 5000 })
  return collectionMgmtCreateCollectionBtn
}

async function getCollectionManagementCloseBtn(page) {
  const collectionMgmtCreateCloseBtn = page.locator("//button[text()='Close']")
  await expect(collectionMgmtCreateCloseBtn).toBeVisible({ timeout: 5000 })
  return collectionMgmtCreateCloseBtn
}

async function getCreateMysteryboxText(page) {
  const createMysteryboxText = page.locator("//span[text()='Create mystery box']")
  await expect(createMysteryboxText).toBeVisible({ timeout: 5000 })
  return createMysteryboxText
}

async function getEditMysteryboxText(page) {
  const createMysteryboxText = page.locator("//span[text()='Edit mystery box']")
  await expect(createMysteryboxText).toBeVisible({ timeout: 5000 })
  return createMysteryboxText
}

async function getCreateMysteryboxUploadImage(page) {
  const createMysteryboxUploadFile = page.locator("//div[@role='presentation']")
  await expect(createMysteryboxUploadFile).toBeVisible({ timeout: 5000 })
  return createMysteryboxUploadFile
}

async function getCreateMysteryboxTokenDropdown(page) {
  const createMysteryboxTokenDropdown = page.locator("//input[@name='token']/preceding-sibling::div")
  await expect(createMysteryboxTokenDropdown).toBeVisible({ timeout: 5000 })
  return createMysteryboxTokenDropdown
}

async function getCreateMysteryboxName(page) {
  const createMysteryboxTokenName = page.locator("//input[@name='name']")
  await expect(createMysteryboxTokenName).toBeVisible({ timeout: 5000 })
  return createMysteryboxTokenName
}

async function getCreateMysteryboxTotalBoxes(page) {
  const createMysteryboxTotalBoxes = page.locator("//input[@name='sales.total']")
  await expect(createMysteryboxTotalBoxes).toBeVisible({ timeout: 5000 })
  return createMysteryboxTotalBoxes
}

async function getCreateMysteryboxCancelBtn(page) {
  const createMysteryboxCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(createMysteryboxCancelBtn).toBeVisible({ timeout: 5000 })
  return createMysteryboxCancelBtn
}

async function getCreateMysteryboxCreateBtn(page) {
  const createMysteryboxCreateBtn = page.locator("//button[text()='Create']")
  await expect(createMysteryboxCreateBtn).toBeVisible({ timeout: 5000 })
  return createMysteryboxCreateBtn
}

async function getMysteryboxNameColumn(page: Page) {
  const mysteryboxNameColumn = page.locator("//tr/td[1]/div")
  const count = await mysteryboxNameColumn.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(mysteryboxNameColumn.nth(i))
  }
  // console.log("This is the value of Mysterybox name column = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getMBOXWindowInformationText(page) {
  const editBoxWindowInformationText = page.locator("//h2[text()='Box Information']")
  await expect(editBoxWindowInformationText).toBeVisible({ timeout: 5000 })
  return editBoxWindowInformationText
}

async function getMBOXBoxWindowEditBtn(page) {
  const editBoxWindowEditBtn = page.locator("//button[text()='Edit']")
  await expect(editBoxWindowEditBtn).toBeVisible({ timeout: 5000 })
  return editBoxWindowEditBtn
}

async function getMBOXBoxWindowListingBtn(page) {
  const editBoxWindowListingBtn = page.locator("//button[contains(text(),'Listing')]")
  await expect(editBoxWindowListingBtn).toBeVisible({ timeout: 5000 })
  return editBoxWindowListingBtn
}

async function getEditMysteryboxBackBtn(page) {
  const editMysteryboxBackBtn = page.locator("//*[name()='svg' and @alt='Back']")
  await expect(editMysteryboxBackBtn).toBeVisible({ timeout: 5000 })
  return editMysteryboxBackBtn
}

async function getEditMysteryboxListforsaleBtn(page) {
  const editMysteryboxListofsaleBtn = page.locator("//button[contains(text(),'LIST')]")
  await expect(editMysteryboxListofsaleBtn).toBeVisible({ timeout: 5000 })
  return editMysteryboxListofsaleBtn
}

async function getEditMysteryboxSaveChangesBtn(page) {
  const editMysteryboxSaveChangesBtn = page.locator("//button[text()='SAVE CHANGES']")
  await expect(editMysteryboxSaveChangesBtn).toBeVisible({ timeout: 5000 })
  return editMysteryboxSaveChangesBtn
}

export {
  getCollectionManagementCloseBtn,
  getCollectionManagementColumnHeader,
  getCollectionManagementCreateCollectionBtn,
  getCollectionManagementInfoText,
  getCollectionManagementSearchFilter,
  getCreateMysteryboxCancelBtn,
  getCreateMysteryboxCreateBtn,
  getCreateMysteryboxName,
  getCreateMysteryboxText,
  getCreateMysteryboxTokenDropdown,
  getCreateMysteryboxTotalBoxes,
  getCreateMysteryboxUploadImage,
  getCreateNFTAdvancedoptions,
  getCreateNFTCancel,
  getCreateNFTChooseCollection,
  getCreateNFTCode,
  getCreateNFTCollectionTextfield,
  getCreateNFTDescription,
  getCreateNFTExternalLink,
  getCreateNFTLimitUserTextfield,
  getCreateNFTLimitUserToggle,
  getCreateNFTOptionsLicenseDropdown,
  getCreateNFTOptionsLicenseToggle,
  getCreateNFTOptionsProperties,
  getCreateNFTOptionsPropertiesAdd,
  getCreateNFTOptionsUtilityCheckbox,
  getCreateNFTOptionsUtilityToggle,
  getCreateNFTOwnershiptransferToggle,
  getCreateNFTPreview,
  getCreateNFTRoyaltyFee,
  getCreateNFTSave,
  getCreateNFTSupply,
  getCreateNFTText,
  getCreateNFTTitle,
  getCreateNFTTokenDropdown,
  getCreateNFTUnlockDescription,
  getCreateNFTUnlockToggle,
  getCreateNFTUploadFile,
  getEditMysteryboxBackBtn,
  getEditMysteryboxListforsaleBtn,
  getEditMysteryboxSaveChangesBtn,
  getEditMysteryboxText,
  getEditNFTListingBtn,
  getEditNFTSelectedToken,
  getEditNFTText,
  getEditNFTUploadedImage,
  getMBOXBoxWindowEditBtn,
  getMBOXBoxWindowListingBtn,
  getMBOXWindowInformationText,
  getMysteryboxColumnHeader,
  getMysteryboxCreatebtn,
  getMysteryboxNameColumn,
  getMysteryboxTab,
  getMysteryboxTokenFilter,
  getNFTBOXListingBtn,
  getNFTCollectionFilter,
  getNFTCollectionManagementBtn,
  getNFTColumnHeader,
  getNFTCreateBtn,
  getNFTEditBtn,
  getNFTInformationText,
  getNFTNameColumn,
  getNFTSearchNFTFilter,
  getNFTtab,
  getNFTTokenFilter,
}
