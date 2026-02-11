import { expect, Locator, Page } from "@playwright/test"

async function getSuperadminTabs(page) {
  const superadminTabs = page.locator("//div[@role='tablist']/button")
  await expect(superadminTabs).toBeVisible({ timeout: 5000 })
  return superadminTabs
}

async function getSuperadminBrandmanagementBtn(page) {
  const superadminBrandmanagementBtn = page.locator("//button[contains(text(),'brand management')]")
  await expect(superadminBrandmanagementBtn).toBeVisible({ timeout: 5000 })
  return superadminBrandmanagementBtn
}

async function getSuperadminUserprofileBtn(page) {
  const superadminuserprofileBtn = page.locator("//button[@id='profile-button']")
  await expect(superadminuserprofileBtn).toBeVisible({ timeout: 5000 })
  return superadminuserprofileBtn
}

async function getSuperadminChangelanguageBtn(page) {
  const superadminChangelanguageBtn = page.locator("//button[@id='profile-button']/preceding-sibling::button")
  await expect(superadminChangelanguageBtn).toBeVisible({ timeout: 5000 })
  return superadminChangelanguageBtn
}

async function getReviewbrandAllbrandsText(page) {
  const reviewbrandAllbrandsText = page.locator("//h5[text()='All Brands']")
  await expect(reviewbrandAllbrandsText).toBeVisible({ timeout: 5000 })
  return reviewbrandAllbrandsText
}

async function getReviewbrandSearchFilter(page) {
  const reviewbrandSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(reviewbrandSearchFilter).toBeVisible({ timeout: 5000 })
  return reviewbrandSearchFilter
}

async function getReviewbrandStatusFilter(page) {
  const reviewbrandStatusFilter = page.locator("//input[@value='submitted']/parent::div")
  await expect(reviewbrandStatusFilter).toBeVisible({ timeout: 5000 })
  return reviewbrandStatusFilter
}

async function getReviewbrandColumnHeaders(page: Page) {
  const reviewbrandcolumnHeaders = page.locator("//th")
  const count = await reviewbrandcolumnHeaders.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(reviewbrandcolumnHeaders.nth(i))
  }

  return textFieldArray
}

export {
  getReviewbrandAllbrandsText,
  getReviewbrandColumnHeaders,
  getReviewbrandSearchFilter,
  getReviewbrandStatusFilter,
  getSuperadminBrandmanagementBtn,
  getSuperadminChangelanguageBtn,
  getSuperadminTabs,
  getSuperadminUserprofileBtn
}
