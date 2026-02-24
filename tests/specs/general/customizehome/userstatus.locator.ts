import { expect, Locator, Page } from "@playwright/test"

export class customizeHome_userStatus {
  constructor(private page: Page) {}

  headerText() {
    return this.page.locator("//h6[text()='Show user status']")
  }

  toggleBtn() {
    return this.page.locator("//input[@name='useUserStatus']")
  }

  title() {
    return this.page.getByPlaceholder("Your ranking")
  }

  statusCustomizedRadioBtn() {
    return this.page.locator("//input[@value='custom']")
  }

  statusCustomized_customizeBtn() {
    return this.page.getByRole('button', { name: 'Customize' })
  }

  customizerank_statusBy() {
    // 0 = Token, 1 = NFT
    return this.page.locator("//input[@name='rankingType']")
  }

  customizerank_addRanking() {
    return this.page.getByRole('button', { name: 'Add ranking' })
  }

  customizerank_settingName() {
    return this.page.getByPlaceholder("Enter name")
  }

  // from token amount
  customizerank_settingFrom() {
    return this.page.getByPlaceholder("Enter from")
  }

  customizerank_nftTemplateTextfield() {
    return this.page.getByPlaceholder("Paste or choose NFT item")
  }

  customizerank_nftTemplateChooseBtn() {
    return this.page.getByRole('button', { name: 'Choose Item' })
  }

  customizerank_closeBtn() {
    return this.page.getByTestId("CloseIcon")
  }

  customizerank_discardBtn() {
    return this.page.getByRole('button', { name: 'Discard' }) 
  }

  customizerank_saveBtn() {
    return this.page.locator("//button[text()='Save']")
  }

  customizerank_editBtn() {
    return this.page.getByRole('button', { name: 'Edit' }) 
  }

  statusCSVRadioBtn() {
    return this.page.locator("//input[@value='csv']")
  }

  pleaseWaitPopup() {
    return this.page.locator("//*[contains(text(),'please wait')]")
  }
}