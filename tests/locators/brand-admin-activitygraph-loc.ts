import { expect, Locator, Page } from "@playwright/test"

async function getActivitygraphText(page: Page) {
  const activitygraphText = page.locator("//h5[text()='Activities graph']")
  await expect(activitygraphText).toBeVisible({ timeout: 5000 })
  return activitygraphText
}

async function getActivitygraphTokenDropdown(page: Page) {
  const activitygraphTokenDropdown = page.locator("//input[@placeholder='Choose token']/preceding-sibling::div")
  await expect(activitygraphTokenDropdown).toBeVisible({ timeout: 5000 })
  return activitygraphTokenDropdown
}

async function getActivitygraphExportBtn(page: Page) {
  const activitygraphExportBtn = page.locator("//button[text()='Export']")
  await expect(activitygraphExportBtn).toBeVisible({ timeout: 5000 })
  return activitygraphExportBtn
}

async function getActivitygraphTotalWalletText(page: Page) {
  const activitygraphTotalWalletText = page.locator("//h6[text()='Total wallet:']")
  await expect(activitygraphTotalWalletText).toBeVisible({ timeout: 5000 })
  return activitygraphTotalWalletText
}

async function getActivitygraphYearDropdown(page: Page) {
  const activitygraphYearDropdown = page.locator("//div[text()='Year']")
  await expect(activitygraphYearDropdown).toBeVisible({ timeout: 5000 })
  return activitygraphYearDropdown
}

async function getActivitygraphLeftRightBtn(page: Page) {
  const activitygraphLeftRightBtn = page.locator("//div[@class='MuiBox-root css-fllvbu']/div/button")
  const count = await activitygraphLeftRightBtn.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(activitygraphLeftRightBtn.nth(i))
  }
  console.log("This is the value of Left Right button = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getActivitygraphCategoryTab(page) {
  const activitygraphCategoryTab = page.locator("//div[@class='slick-track']/div")
  const count = await activitygraphCategoryTab.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(activitygraphCategoryTab.nth(i))
  }
  console.log("This is the value of Left Right button = " + textFieldArray.length + "\n")

  return textFieldArray
}

export {
  getActivitygraphCategoryTab,
  getActivitygraphExportBtn,
  getActivitygraphLeftRightBtn,
  getActivitygraphText,
  getActivitygraphTokenDropdown,
  getActivitygraphTotalWalletText,
  getActivitygraphYearDropdown,
}
