import { expect, Locator, Page } from "@playwright/test"

async function getNFTMBOXtext(page) {
  const nftmboxText = page.locator("//h5[text()='NFT & Mystery box']")
  await expect(nftmboxText).toBeVisible({ timeout: 5000 })
  return nftmboxText
}

async function getNFTMBOXtabs(page: Page) {
  const nftmboxTabs = page.locator("//div[@role='tabpanel']/descendant::div[@role='tablist']/button")
  const count = await nftmboxTabs.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(nftmboxTabs.nth(i))
  }

  return textFieldArray
}

async function getNFTSearchFilter(page) {
  const nftSearchField = page.locator("//input[@placeholder='Search']")
  await expect(nftSearchField).toBeVisible({ timeout: 5000 })
  return nftSearchField
}

async function getNFTCollectionFilter(page) {
  const nftSearchFilter = page.locator("//input[@role='combobox']")
  await expect(nftSearchFilter).toBeVisible({ timeout: 5000 })
  return nftSearchFilter
}

async function getNFTExportBtn(page) {
  const nftExportBtn = page.locator("//button[text()='Export']")
  await expect(nftExportBtn).toBeVisible({ timeout: 5000 })
  return nftExportBtn
}

async function getMBOXSearchFilter(page) {
  const mboxSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(mboxSearchFilter).toBeVisible({ timeout: 5000 })
  return mboxSearchFilter
}

async function getMBOXExportBtn(page) {
  const mboxExportBtn = page.locator("//button[text()='Export']")
  await expect(mboxExportBtn).toBeVisible({ timeout: 5000 })
  return mboxExportBtn
}

async function getNFTMBOXColumnHeaders(page: Page) {
  const nftmboxColumnHeaders = page.locator("//th[text()]")
  const count = await nftmboxColumnHeaders.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(nftmboxColumnHeaders.nth(i))
  }

  return textFieldArray
}

export {
  getMBOXExportBtn,
  getMBOXSearchFilter,
  getNFTCollectionFilter,
  getNFTExportBtn,
  getNFTMBOXColumnHeaders,
  getNFTMBOXtabs,
  getNFTMBOXtext,
  getNFTSearchFilter
}
