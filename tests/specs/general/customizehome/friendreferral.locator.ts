import { Page } from "@playwright/test";

export class customizeHome_FriendReferral {
  constructor(private page: Page) {}

  headerText() {
    return this.page.locator("//h6[contains(text(),'Friend referral')]")
  }

  onoffToggle() {
    return this.page.locator("//input[@name='useReferral']")
  }

  // Inviter reward type xpaths
  inviterRewardTypeDropdown() {
    return this.page.locator("//input[@name='referrerRewardType']/preceding-sibling::div")
  }

  inviterRewardTypeDropdownOptions() {
    return this.page.locator("//ul[@role='listbox']/li")
  }

  // Inviter select token reward
  inviterSelectTokenRewardDropdown() {
    return this.page.locator("//input[@name='tokenReferrerReward']/preceding-sibling::div")
  }

  inviterSelectTokenRewardDropdownOptions() {
    return this.page.locator("//ul[@role='listbox']/li")
  }

  inviterTokenRewardAmount() {
    return this.page.locator("//input[@name='amountReferrerReward']")
  }

  // Invited reward type xpaths
  invitedRewardTypeDropdown() {
    return this.page.locator("//input[@name='refereeRewardType']/preceding-sibling::div")
  }

  invitedRewardTypeDropdownOptions() {
    return this.page.locator("//ul[@role='listbox']/li")
  }

  // Invited select token reward
  invitedSelectTokenRewardDropdown() {
    return this.page.locator("//input[@name='tokenRefereeReward']/preceding-sibling::div")
  }

  invitedSelectTokenRewardDropdownOptions() {
    return this.page.locator("//ul[@role='listbox']/li")
  }

  invitedTokenRewardAmount() {
    return this.page.locator("//input[@name='amountRefereeReward']")
  }

  savebtn() {
    return this.page.locator("//button[text()='Save']")
  }
  
  pleaseWaitPopup() {
    return this.page.locator('[role="dialog"][aria-modal="true"][data-headlessui-state="open"]').filter({ hasText: /Saving/i });
    // return this.page.locator("//*[contains(text(),'please wait')]")
  }
}