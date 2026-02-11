import { expect, Locator, Page } from "@playwright/test"

async function getCashrequestText(page) {
  const cashrequestText = page.locator("//h5[text()='Cashout request']")
  await expect(cashrequestText).toBeVisible({ timeout: 5000 })
  return cashrequestText
}

async function getCashrequestSearchFilter(page) {
  const cashrequestSearchFilter = page.locator("//input[@placeholder='Search ID']")
  await expect(cashrequestSearchFilter).toBeVisible({ timeout: 5000 })
  return cashrequestSearchFilter
}

async function getCashrequestStatusFilter(page) {
  const cashrequestStatusFilter = page.locator("//input/preceding-sibling::div[@role='combobox'][1]")
  await expect(cashrequestStatusFilter).toBeVisible({ timeout: 5000 })
  return cashrequestStatusFilter
}

async function getCashrequestDateFilter(page) {
  const cashrequestDateFilter = page.locator("//input[@placeholder='Select date range']")
  await expect(cashrequestDateFilter).toBeVisible({ timeout: 5000 })
  return cashrequestDateFilter
}

async function getCashrequestColumnHeaders(page) {
  const cashrequestColumnHeaders = page.locator("//th[text()]")
  await expect(cashrequestColumnHeaders).toBeVisible({ timeout: 5000 })
  return cashrequestColumnHeaders
}

export {
  getCashrequestColumnHeaders,
  getCashrequestDateFilter,
  getCashrequestSearchFilter,
  getCashrequestStatusFilter,
  getCashrequestText
}
