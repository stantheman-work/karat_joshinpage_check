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

async function getUsermanagementColumnHeaders(page: Page) {
  const usermanagementColumnHeaders = page.locator("//th")
  const count = await usermanagementColumnHeaders.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(usermanagementColumnHeaders.nth(i))
  }

  return textFieldArray
}

export {
  getUsermanagementAllUsersText,
  getUsermanagementSearchFilter,
  getUsermanagementDataFilter,
  getUsermanagementColumnHeaders
}
