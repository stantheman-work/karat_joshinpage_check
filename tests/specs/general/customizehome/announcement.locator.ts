// import { expect, Locator, Page } from "@playwright/test"

import { Page } from "@playwright/test";

export class customizeHome_Announcement {
  constructor(private page: Page) {}

  backToDashboardBtn() {
    return this.page.locator("//*[name()='svg' and @data-testid='ChevronLeftIcon']")
  }
  // Tabs
  customizeHomeTablist() {
    return this.page.locator("//div[@aria-orientation='vertical']/button");
  }

  topOfTokenPageTab() {
    return this.page.getByText("Top of token page");
  }

  bottomOfTokenPageTab() {
    return this.page.getByText("Bottom of token page");
  }

  // Main Buttons
  disableAllBtn() {
    return this.page.getByText("Save order");
  }

  saveOrderBtn() {
    return this.page.getByText("turn all off");
  }

  // Add Buttons
  addNewTopBtn() {
    return this.page.getByText("Add new");
  }

  // This is only present if there are no announcements
  addNewFromAnnouncementListBtn() {
    return this.page.getByText("Add new Announcement");
  }

  // Actions
  toggleBtn() {
    return this.page.locator("//input[@type='checkbox']");
  }

  noAnnouncementText() {
    return this.page.getByText("No announcement available now");
  }

  // This button allows admins to edit or duplicate existing announcements
  settingsBtn() {
    return this.page.getByTestId("MoreHorizIcon");
  }

  // When settingsBtn is clicked, these elements are present
  // 0 = Edit, 1 = duplicate
  settingsOptionsList() {
    return this.page.getByRole("menuitem");
  }

  // Info Section
  infoBannerImg() {
    return this.page.locator("//div[text()='Change']/parent::div");
  }

  infoTitle() {
    return this.page.getByPlaceholder("Enter a name");
  }

  infoContentTypeDropdown() {
    return this.page.locator("//input[@placeholder='Choose a type of content']/parent::div");
  }

  infoPositionDropdown() {
    return this.page.locator("//input[@placeholder='Choose a type of position']/parent::div");
  }

  infoCustomizeContent() {
    return this.page.locator("//div[@data-placeholder]");
  }

  infoPreview() {
    return this.page.locator("//h6[text()='Preview']/following-sibling::div");
  }

  // Modal Buttons
  infoCancelBtn() {
    return this.page.getByText("Cancel");
  }

  infoSaveBtn() {
    return this.page.getByText("Save");
  }
}