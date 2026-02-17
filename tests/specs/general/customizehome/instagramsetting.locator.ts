// import { expect, Locator, Page } from "@playwright/test"

import { Page } from "@playwright/test";

export class customizeHome_Instagramsetting {
  constructor(private page: Page) {}

  headerText() {
    return this.page.locator("//h6[contains(text(),'Showoff on Instagram')]")
  }

  onoffToggle() {
    return this.page.locator("//input[@name='useInstagramShowcase']");
  }

  hashtagTextfield() {
    return this.page.getByPlaceholder("Enter your hashtag");
  }

  viewOnInstagramBtn() {
    return this.page.getByRole('button', { name: 'View on instagram' });
  }

  featuredpostsText() {
    return this.page.getByText("Featured posts");
  }

  postTextfield() {
    return this.page.getByPlaceholder('Enter link')
  }

  addContentBtn() {
    return this.page.getByRole('button', { name: 'Add content' })
    // return this.page.getByText('Add content')
  }

  saveBtn() {
    return this.page.getByRole('button', { name: 'Save' });
  }

  popupCancelBtn() {
    return this.page.locator("//button[text()='Cancel']");
  }

  popupSaveBtn() {
    return this.page.locator("//button[text()='Cancel']/following-sibling::button");
  }

  pleaseWaitPopup() {
    return this.page.locator("//*[contains(text(),'please wait')]")
  }
}