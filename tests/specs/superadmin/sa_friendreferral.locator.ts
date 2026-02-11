import { Page } from "@playwright/test";

export class FriendReferralPage {
  constructor(private page: Page) {}

  button() {
    return this.page.getByRole('button', { name: '24kZAP friend referral' });
  }

  toggle() {
    return this.page.locator('input[name="useReferral"]');
  }

  referrerRewardInput() {
    return this.page.locator('input[name="referrerReward"]');
  }

  refereeRewardInput() {
    return this.page.locator('input[name="refereeReward"]');
  }

  saveButton() {
    return this.page.getByRole('button', { name: 'Save' });
  }
}