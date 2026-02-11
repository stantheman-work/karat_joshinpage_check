import { expect, Locator, Page } from "@playwright/test"

async function getUsermanagementAllUsersText(page) {
  const usermanagementAllUsersText = page.locator("//h5[text()='All Users']")
  await expect(usermanagementAllUsersText).toBeVisible({ timeout: 5000 })
  return usermanagementAllUsersText
}

async function getUsermanagementSearchFilter(page) {
  const usermanagementSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(usermanagementSearchFilter).toBeVisible({ timeout: 5000 })
  return usermanagementSearchFilter
}

async function getUsermanagementDataFilter(page) {
  const usermanagementDataFilter = page.locator("//label[text()='Data filter']/parent::div")
  await expect(usermanagementDataFilter).toBeVisible({ timeout: 5000 })
  return usermanagementDataFilter
}

async function getUsermanagementActionhistoryBtn(page) {
  return page.locator("//button[text()='Action History']")
}

async function getUsermanagementBulkactionsDropdown(page) {
  return page.locator("//button[text()='Bulk Actions']")
}

async function getUsermanagementBulkactionsDropdownOption(page) {
  return page.locator("//ul")
}

async function getUsermanagementColumnHeaders(page: Page) {
  return page.locator("//th")
}

export {
  getUsermanagementActionhistoryBtn,
  getUsermanagementAllUsersText,
  getUsermanagementBulkactionsDropdown,
  getUsermanagementBulkactionsDropdownOption,
  getUsermanagementColumnHeaders,
  getUsermanagementDataFilter,
  getUsermanagementSearchFilter
}
