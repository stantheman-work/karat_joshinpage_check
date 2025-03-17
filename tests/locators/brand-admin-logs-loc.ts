import { expect, Locator, Page } from "@playwright/test"

async function getLogsSearchEntityFilter(page) {
  const logsSearchEntityFilter = page.locator("//input[@name='search']")
  await expect(logsSearchEntityFilter).toBeVisible({ timeout: 5000 })
  return logsSearchEntityFilter
}

async function getLogsRefreshBtn(page) {
  const logsRefreshBtn = page.locator("//button[text()='Refresh']")
  await expect(logsRefreshBtn).toBeVisible({ timeout: 5000 })
  return logsRefreshBtn
}

async function getLogsColumnHeader(page: Page) {
  const logsColumnHeader = page.locator("//th[text()]")
  const count = await logsColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(logsColumnHeader.nth(i))
  }
  console.log("This is the value of column text = " + textFieldArray.length + "\n")

  return textFieldArray
}

export { getLogsColumnHeader, getLogsRefreshBtn, getLogsSearchEntityFilter }
