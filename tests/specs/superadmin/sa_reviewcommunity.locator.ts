import { expect, Locator, Page } from "@playwright/test"

async function getReviewcommunityAllCommunitiesText(page) {
  const reviewcommunityAllCommunitiesText = page.locator("//h5[text()='All Communities']")
  await expect(reviewcommunityAllCommunitiesText).toBeVisible({ timeout: 5000 })
  return reviewcommunityAllCommunitiesText
}

async function getReviewcommunitySearchFilter(page) {
  const reviewcommunitySearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(reviewcommunitySearchFilter).toBeVisible({ timeout: 5000 })
  return reviewcommunitySearchFilter
}

async function getReviewcommunityBrandFilter(page) {
  const reviewcommunityBrandFilter = page.locator("//label[text()='Brand']/parent::div")
  await expect(reviewcommunityBrandFilter).toBeVisible({ timeout: 5000 })
  return reviewcommunityBrandFilter
}

async function getReviewcommunityStatusFilter(page) {
  const reviewcommunityStatusFilter = page.locator("//input[@value='submitted']/parent::div")
  await expect(reviewcommunityStatusFilter).toBeVisible({ timeout: 5000 })
  return reviewcommunityStatusFilter
}

async function getReviewcommunityColumnHeaders(page: Page) {
  const reviewcommunitycolumnHeaders = page.locator("//th")
  const count = await reviewcommunitycolumnHeaders.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(reviewcommunitycolumnHeaders.nth(i))
  }

  return textFieldArray
}

export {
  getReviewcommunityAllCommunitiesText,
  getReviewcommunityBrandFilter,
  getReviewcommunityColumnHeaders,
  getReviewcommunitySearchFilter,
  getReviewcommunityStatusFilter
}
