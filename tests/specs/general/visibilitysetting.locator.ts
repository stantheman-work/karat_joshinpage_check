import { Page } from "@playwright/test";

export class visibilitySetting {
  constructor(private page: Page) { }

  headerText() {
    return this.page.locator("//h5[text()='Visible Setting']");
  }

  setting_options() {
    /*
      0 = All users on ZAP
      1 = Only for admin
      2 = Customs
    */
    return this.page.locator("//input[@type='radio']");
  }

  setting_customVisibilityDropdown() {
    return this.page.locator("//div[@role='combobox']")
  }

  saveBtn() {
    return this.page.getByRole('button', { name: 'Save' })
  }

  pleaseWaitPopup() {
    return this.page.locator("//*[contains(text(),'please wait')]")
  }
}