import { Page } from "@playwright/test"

export class collectionmanagementPage {
  constructor(private page: Page) {}

  collectionmanagementBtn() {
    return this.page.locator("//span[contains(text(),'Collection')]/parent::button")
  }

  headerText() {
    return this.page.getByRole('heading', { name: 'Collection Information' })
  }

  searchFilter() {
    return this.page.locator("//input[@placeholder='Search']")
  }

  loadingIcon() {
    return this.page.locator("//*[name()='svg']/parent::div[@id='lottie']");
  }

  columnHeader() {
    return this.page.locator("//h5[contains(text(),'Information')]/parent::h2/following-sibling::div/div[2]/descendant::th[text()]")
  }

  resultFromSearch(input: string) {
    return this.page.locator(`//div[normalize-space()="${input}"]`)
  }

  createCollectionBtn() {
    return this.page.locator("//span[text()='Create collection']/parent::button")
  }

  createCollectionBtnSelection() {
    return this.page.locator("//li[@role='menuitem']")
  }

  closeBtn() {
    return this.page.getByRole('button', { name: 'Close' })
  }

  xBtn() {
    return this.page.locator("//*[name()='svg' and @data-testid='CloseIcon']/parent::button")
  }

  info_title(input: string) {
    return this.page.locator(`//div[normalize-space()="${input}"]`)
  }

  info_imageFile() {
    return this.page.locator("//div[text()='Information']/preceding-sibling::div/img")
  }

  info_createdDate() {
    return this.page.locator("//div[text()='Created date']")
  }

  info_totalNFTs() {
    return this.page.locator("//div[text()='Total NFTs']")
  }

  info_nftItems() {
    return this.page.locator("//div[text()='NFT items")
  }

  info_stamppassportBtn() {
    return this.page.getByRole('button', { name: 'Make stamp passport' })
  }

  info_editcollectionBtn() {
    return this.page.getByRole('button', { name: 'Edit collection' })
  }

  info_edit_name() {
    return this.page.locator("//input[@name='name']")
  }

  info_edit_image() {
    return this.page.locator("//div[text()='Change']/parent::div")
  }

  info_edit_web3Toggle() {
    return this.page.getByRole('checkbox')
  }
}