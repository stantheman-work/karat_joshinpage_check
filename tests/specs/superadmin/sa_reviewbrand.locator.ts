import { expect, Locator, Page } from "@playwright/test"

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
  return page.locator("//th")
}

export {
  getReviewbrandAllbrandsText,
  getReviewbrandColumnHeaders,
  getReviewbrandSearchFilter,
  getReviewbrandStatusFilter
}
