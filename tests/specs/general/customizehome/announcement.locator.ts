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

/*
async function getCustomizehomeTablist(page) {
  return page.locator("//div[@aria-orientation='vertical']/button")
}

async function getAnnouncementTopoftokenpageTab(page) {
  return page.getByText('Top of token page')
}

async function getAnnouncementBottomoftokenpageTab(page) {
  return page.getByText('Bottom of token page')
}

async function getAnnouncementDisableAllBtn(page) {
  return page.getByText('Save order')
}

async function getAnnouncementSaveorderbtn(page) {
  return page.getByText('turn all off')
}

// Add new button on top page
async function getAnnouncementAddnewTopBtn(page) {
  return page.getByText('Add new')
}

// If there is no announcement, this button is visible
async function getAnnouncementAddnewListBtn(page) {
  return page.getByText('Add new Announcement')
}

async function getAnnouncementEditBtn(page) {
  return page.getByTestId('MoreHorizIcon')
}

async function getAnnouncementToggleBtn(page) {
  return page.locator("//input[@type='checkbox']")
}

async function getAnnouncementNoannounceText(page) {
  return page.getByText("No announcement available now")
}

// Clicking this will allow admin to edit or duplicate an announcement
async function getAnnouncementSettingsBtn(page) {
  return page.getByTestId("MoreHorizIcon")
}

// Options from the button above
async function getAnnouncementSettingsOptionsList(page) {
  return page.getByRole("menuitem")
}

async function getAnnouncementinfoBannerImg(page) {
  return page.locator("//div[text()='Change']/parent::div")
}

async function getAnnouncementinfoTitle(page) {
  return page.getByPlaceholder("Enter a name")
}

async function getAnnouncementinfoContenttypeDropdown(page) {
  return page.locator("//input[@placeholder='Choose a type of content']/parent::div")
}

async function getAnnouncementinfoPositionDropdown(page) {
  return page.locator("//input[@placeholder='Choose a type of position']/parent::div")
}

async function getAnnouncementinfoCustomizeContent(page) {
  return page.locator("//div[@data-placeholder]")
}

async function getAnnouncementinfoPreview(page) {
  return page.locator("//h6[text()='Preview']/following-sibling::div")
}

async function getAnnouncementinfoCancelBtn(page) {
  return page.getByText("Cancel")
}

async function getAnnouncementinfoSaveBtn(page) {
  return page.getByText("Save")
}

export {

}
*/