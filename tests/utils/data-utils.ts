import {
    Page
} from "@playwright/test"

export class inputDataForTextfields {
  constructor(private page: Page) {}

  communityInput24karat() {
    const communityInput = "24KARAT"
    return communityInput
  }

  generateTokenRewardAmount() {
    const rewardAmount = "1"
    return rewardAmount
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  uploadFilePath() {
    const randomNum = this.getRandomNumber(1, 3);
    const imagePath = `test-uploadfiles/image${randomNum}.png`
    return imagePath
  }

  productShowcaseTitle() {
    const prod_title = "Product showcase title from automation"
    return prod_title
  }

  productShowcaseSubtitle() {
    const prod_subtitle = "Product showcase subtitle from automation"
    return prod_subtitle
  }

  productShowcaseDescription() {
    const prod_description = "Product showcase description from automation"
    return prod_description
  }

  productShowcaseWebsite() {
    const prod_website = "https://www.google.com"
    return prod_website
  }

  productShowcasePrice() {
    const prod_price = "1"
    return prod_price
  }

  tagInput() {
    const tagInput = "tagFromAutomation"
    return tagInput
  }

  userStatusTitle() {
    const title = "Title From Automation"
    return title
  }

  userStatusFrom() {
    const from = "100"
    return from
  }

  pleaseWaitPopup() {
    return this.page.locator("//*[contains(text(),'please wait')]")
  }
}