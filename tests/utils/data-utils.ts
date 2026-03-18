import {
  Page
} from "@playwright/test"

export class inputDataForTextfields {
  constructor(private page: Page) {

  }

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

  collectionmgmtInput() {
    const input = "24karat"
    return input
  }

  // Used in joshin API test
  userSeedPhrase() {
    const seedPhrase = "dizzy unveil empty garden matter wash range east measure nut dog cost"
    return seedPhrase
  }

  userSeedPhraseSuperadmin() {
    // giggle million afford utility exhibit century board recall only faculty frame coconut
    const seedPhrase = "topic three hard work still obey orient mean crazy deputy sun asset"
    return seedPhrase
  }

  clientID() {
    const id = "BivYdb2X329zcVxxoAv0"
    return id
  }

  api_generalURL() {
    const url = "https://wallet.24karat.io"
    return url
  }

  api_getAccessTokenURL() {
    const accesstokenURL = "/v1/auth/seed/login"
    const url = this.api_generalURL() + accesstokenURL
    return url
  }

  api_getJoshinURL() {
    const joshinURL = "/api/v1/brands/JOSHIN_TEST/tokens/JOSHIN/zap-url"
    const url = this.api_generalURL() + joshinURL
    return url
  }

  api_getJoshinSocialroomURL() {
    const socialroomURL = "/api/v1/social/rooms/27d56b9d-8c0b-4a0f-8996-845cf12c4a54/entry-url"
    const url = this.api_generalURL() + socialroomURL
    return url
  }
}