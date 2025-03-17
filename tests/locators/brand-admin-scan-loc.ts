import { expect, Locator, Page } from "@playwright/test"

async function getScanText(page) {
  const scanText = page.locator("//h5[text()='Scan history']")
  await expect(scanText).toBeVisible({ timeout: 5000 })
  return scanText
}

async function getScanNewScanBtn(page) {
  const scanNewScanBtn = page.locator("//button[text()='New scan']")
  await expect(scanNewScanBtn).toBeVisible({ timeout: 5000 })
  return scanNewScanBtn
}

async function getScanColumnHeader(page: Page) {
  const scanColumnHeader = page.locator("//th[text()]")
  const count = await scanColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(scanColumnHeader.nth(i))
  }
  console.log("This is the value of scan column header = " + textFieldArray.length + "\n")

  return textFieldArray
}

export { getScanColumnHeader, getScanNewScanBtn, getScanText }
