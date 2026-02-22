import {
    Page
} from "@playwright/test"

export class inputDataForTextfields {
  constructor(private page: Page) {}

  generateTokenRewardAmount() {
    const rewardAmount = "1"
    return rewardAmount
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  uploadFilePath() {
    const randomNum = this.getRandomNumber(1, 3);
    const imagePath = `test-images/image${randomNum}.png`
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

  pleaseWaitPopup() {
    return this.page.locator("//*[contains(text(),'please wait')]")
  }
}


/* 
export function generateTokenRewardAmount() {
    const rewardAmount = "1"
    return rewardAmount
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// The function below will generate a random number from 1 to 3, and use the image based on the number generated
export function uploadFilePath() {
    const randomNum = getRandomNumber(1, 3);
    const imagePath = `test-images/image${randomNum}.png`
    return imagePath
}

export function productShowcaseTitle() {
    const prod_title = "Product showcase title from automation"
    return prod_title
}

export function productShowcaseSubtitle() {
    const prod_subtitle = "Product showcase subtitle from automation"
    return prod_subtitle
}

export function productShowcaseDescription() {
    const prod_description = "Product showcase description from automation"
    return prod_description
}

export function productShowcaseWebsite() {
    const prod_website = "https://www.google.com"
    return prod_website
}

export function productShowcasePrice() {
    const prod_price = 1
    return prod_price
}

export function tagInput() {
    const tagInput = "tagFromAutomation"
    return tagInput
}
*/