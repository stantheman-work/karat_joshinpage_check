import { expect, Locator, Page } from "@playwright/test"

async function getDevAPIKeysText(page) {
  const devAPIKeysText = page.locator("//div[text()='API Keys']")
  await expect(devAPIKeysText).toBeVisible({ timeout: 5000 })
  return devAPIKeysText
}

async function getDevCreateNewAPIBtn(page) {
  const devCreateNewAPIBtn = page.locator("//button[text()='Create new']")
  await expect(devCreateNewAPIBtn).toBeVisible({ timeout: 5000 })
  return devCreateNewAPIBtn
}

async function getDevCreateAPIName(page) {
  const devCreateAPIName = page.locator("//input[@name='name']")
  await expect(devCreateAPIName).toBeVisible({ timeout: 5000 })
  return devCreateAPIName
}

async function getDevCancelBtn(page) {
  const devCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(devCancelBtn).toBeVisible({ timeout: 5000 })
  return devCancelBtn
}

async function getDevCreateBtn(page) {
  const devCreateBtn = page.locator("//button[text()='Create']")
  await expect(devCreateBtn).toBeVisible({ timeout: 5000 })
  return devCreateBtn
}

async function getDevColumnHeaders(page: Page) {
  const devColumnHeaders = page.locator("//th[text()]")
  const count = await devColumnHeaders.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(devColumnHeaders.nth(i))
  }
  console.log("This is the value of dev tools column headers = " + textFieldArray.length + "\n")
  return textFieldArray
}

export {
  getDevAPIKeysText,
  getDevCancelBtn,
  getDevColumnHeaders,
  getDevCreateAPIName,
  getDevCreateBtn,
  getDevCreateNewAPIBtn,
}
