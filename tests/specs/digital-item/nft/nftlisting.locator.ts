import { Page } from "@playwright/test";

export class NFTListingPage {
  constructor(private page: Page) { }

  zapToggle() {
    return this.page.locator("//input[@name='listOnZap']")
  }

  zapPaymentType() {
    return this.page.locator("//input[@name='zapPaymentType']")
  }

  zapScheduleToggle() {
    return this.page.locator("//input[@name='enableZapSchedule']")
  }

  zapScheduleSelect() {
    return this.page.getByPlaceholder("YYYY/MM/DD hh:mm")
  }

  zapReferralrewardToggle() {
    return this.page.locator("//input[@name='enableReferralRewards']")
  }

  zapReferrerCheckbox() {
    return this.page.locator("//input[@name='enableRewardForReferrer']")
  }

  zapReferrerrewardAmount() {
    return this.page.locator("//input[@name='rewardForReferrerAmount']")
  }

  zapRefereeRewardType() {
    return this.page.locator("//input[@name='refereeRewardType']/parent::div")
  }

  zapRefereeRewardTypeOptions() {
    return this.page.locator("//li[@role and @data-value]")
  }

  zapDiscountSelection() {
    return this.page.locator("//li[@role and @data-value='DISCOUNT']")
  }

  zapBonusrewardSelection() {
    return this.page.locator("//li[@role and @data-value='BONUS']")
  }

  zapDiscountandBonusrewardSelection() {
    return this.page.locator("//li[@role and @data-value='DISCOUNT_AND_BONUS']")
  }

  zapDiscountType() {
    return this.page.locator("//input[@name='discountRefereeType']/parent::div")
  }

  zapDiscountTypeOptions() {
    return this.page.locator("//li[@role]")
  }

  zapDiscountAmount() {
    return this.page.locator("//input[@name='discountRefereeAmount']")
  }

  zapBonusrewardToken() {
    return this.page.locator("//input[@name='tokenRefereeReward']")
  }

  zapBonusrewardAmount() {
    return this.page.locator("//input[@name='amountRefereeReward']")
  }

  zapBonusrewardNFT() {
    return this.page.locator("//input[@name='nftRefereeReward']")
  }

  zapBonusrewardChooseNFTBtn() {
    return this.page.getByRole('button', { name: 'Choose Item' })
  }

  zapLockrequirementToggle() {
    return this.page.locator("//input[@name='exchangeRequirement']")
  }

  zapLockrequirementType() {
    return this.page.locator("//input[@name='exchangeRequirementType']")
  }

  zapVisibilityToggle() {
    return this.page.locator("//input[@name='visibilityRequirement']")
  }

  zapVisibilityAddBtn() {
    return this.page.getByRole('button', { name: 'Add NFTs' })
  }

  vendingmachineToggle() {
    return this.page.locator("//input[@name='listOnVendingMachine']")
  }

  vendingmachinePrice() {
    return this.page.locator("//input[@name='vending_machinePrice']")
  }

  vendingmachineScheduleToggle() {
    return this.page.locator("//input[@name='enabledVendingMachineSchedule']")
  }

  vendingmachineScheduleSelect() {
    return this.page.getByPlaceholder("YYYY/MM/DD hh:mm")
  }

  onlinesalesToggle() {
    return this.page.locator("//input[@name='enableOnlineSales']")
  }

  onlinesalesAddBtn() {
    return this.page.locator("//div[text()='Add purchase link']/ancestor::button")
  }

  osadd_channelname() {
    return this.page.locator("//input[@name='channelName']")
  }

  osadd_price() {
    return this.page.locator("//input[@name='price']")
  }

  osadd_monthlysubscriptionCheckbox() {
    return this.page.locator("//input[@name='subscription']")
  }

  osadd_schedule() {
    return this.page.getByPlaceholder("YYYY/MM/DD hh:mm")
  }

  osadd_marketplaceToggle() {
    return this.page.locator("//input[@name='market_place']")
  }

  osadd_createPaymentlinkBtn() {
    return this.page.getByRole('button', { name: 'Create payment Link' })
  }

  osadd_cancelBtn() {
    return this.page.getByRole('button', { name: 'Cancel' })
  }

  osadd_deleteBtn() {
    return this.page.locator("//*[name()='svg' and contains(@data-testid,'Delete')]/parent::button")
  }

  completeListBtn() {
    return this.page.getByRole('button', { name: 'Complete listing' })
  }

  listingPopupText() {
    return this.page.getByRole('heading', { name: 'Launch setting for NFT' })
  }

  listingGotitBtn() {
    return this.page.locator("//button[text()='Got it']")
  }
}