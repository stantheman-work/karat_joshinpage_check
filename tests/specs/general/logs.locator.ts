import { expect, Locator, Page } from "@playwright/test"

async function getLogsSearchFilter(page) {
  const logsSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(logsSearchFilter).toBeVisible({ timeout: 5000 })
  return logsSearchFilter
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
  console.log("This is the value of logs column header = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getViewDetailLink(page: Page) {
  return page.getByText('View Detail')
  /*
  const logsViewDetailLink = page.locator("//th[text()]")
  const count = await logsViewDetailLink.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(logsViewDetailLink.nth(i))
  }
  console.log("This is the value of logs column header = " + textFieldArray.length + "\n")

  return textFieldArray
  */
}

async function getViewDetailHeaderText(page: Page) {
  return page.getByText('The change details')
}

export { 
  getLogsColumnHeader, 
  getLogsRefreshBtn, 
  getLogsSearchFilter,
  getViewDetailLink,
  getViewDetailHeaderText
}
