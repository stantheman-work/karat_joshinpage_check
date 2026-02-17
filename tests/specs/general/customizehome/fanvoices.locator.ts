import { Page } from "@playwright/test";

export class customizeHome_Fanvoices {
  constructor(private page: Page) {}

  headerText() {
    return this.page.locator("//h6[text()='Fan voices']")
  }

  onoffToggle() {
    return this.page.locator("//input[@name='useFanVoices']")
  }

  sourceMaterialText() {
    return this.page.getByText('Source of materials')
  }

  addMissionBtn() {
    return this.page.locator("//button[text()='Add mission']");
  }

  saveBtn() {
    return this.page.getByText("Save");
  }

  pleaseWaitPopup() {
    return this.page.locator("//*[contains(text(),'please wait')]")
  }
}