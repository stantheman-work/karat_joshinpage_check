import { expect, Locator, Page } from "@playwright/test"
import { waitForAnElement } from "@/utils/load-helper"

async function getCollectionManagementInfoText(page) {
  const collectionMgmtInfoText = page.locator("//h5[contains(text(),'Information')]")
  await expect(collectionMgmtInfoText).toBeVisible({ timeout: 5000 })
  return collectionMgmtInfoText
}

async function getCollectionManagementSearchFilter(page: Page) {
  const collectionMgmtSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(collectionMgmtSearchFilter).toBeVisible({ timeout: 5000 })
  return collectionMgmtSearchFilter
}

async function getCollectionManagementColumnHeader(page: Page) {
  const collectionMgmtColumnHeader = page.locator(
    "//h5[contains(text(),'Information')]/parent::h2/following-sibling::div/div[2]/descendant::th[text()]"
  )
  const count = await collectionMgmtColumnHeader.count()
  let columns: Locator[] = []
  for (let i = 0; i < count; i++) {
    columns.push(collectionMgmtColumnHeader.nth(i))
  }
  return columns
}

async function getCollectionManagementCreateCollectionBtn(page) {
  const collectionMgmtCreateCollectionBtn = page.locator("//span[text()='Create collection']/parent::button")
  await expect(collectionMgmtCreateCollectionBtn).toBeVisible({ timeout: 5000 })
  return collectionMgmtCreateCollectionBtn
}

async function getCollectionManagementCreateBtnSelection(page: Page) {
  const collectionMgmtCreateBtnSelection = page.locator("//li[@role='menuitem']")
  const count = await collectionMgmtCreateBtnSelection.count()
  let columns: Locator[] = []
  for (let i = 0; i < count; i++) {
    columns.push(collectionMgmtCreateBtnSelection.nth(i))
  }
  return columns
}

async function getCollectionManagementCloseBtn(page) {
  const collectionMgmtCreateCloseBtn = page.locator("//button[text()='Close']")
  await expect(collectionMgmtCreateCloseBtn).toBeVisible({ timeout: 5000 })
  return collectionMgmtCreateCloseBtn
}

async function getCollectionManagementXBtn(page) {
  const collectionMgmtXBtn = page.locator("//*[name()='svg' and @data-testid='CloseIcon']/parent::button")
  await expect(collectionMgmtXBtn).toBeVisible({ timeout: 5000 })
  return collectionMgmtXBtn
}

async function getCollectionManagementBtn(page) {
  const collectionManagementBtn = page.locator("//span[contains(text(),'Collection')]/parent::button")
  await expect(collectionManagementBtn).toBeVisible({ timeout: 5000 })
  return collectionManagementBtn
}

export {
  getCollectionManagementCloseBtn,
  getCollectionManagementColumnHeader,
  getCollectionManagementCreateBtnSelection,
  getCollectionManagementCreateCollectionBtn,
  getCollectionManagementInfoText,
  getCollectionManagementSearchFilter,
  getCollectionManagementBtn,
  getCollectionManagementXBtn
}
