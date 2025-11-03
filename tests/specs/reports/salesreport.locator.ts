import { expect, Locator, Page } from "@playwright/test"

async function getSalesreportText(page) {
  const salesreportText = page.locator("//h4[text()='Sales Report']")
  await expect(salesreportText).toBeVisible({ timeout: 5000 })
  return salesreportText
}

async function getSalesreportSearchFilter(page) {
  const salesreportSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(salesreportSearchFilter).toBeVisible({ timeout: 5000 })
  return salesreportSearchFilter
}

async function getSalesreportRevenuesharerateFilter(page) {
  const salesreportRevenuesharerateFilter = page.locator("//input[@placeholder='Revenue share rate']")
  await expect(salesreportRevenuesharerateFilter).toBeVisible({ timeout: 5000 })
  return salesreportRevenuesharerateFilter
}

async function getSalesreportLasttransferdateFilter(page) {
  const salesreportLasttransferdateFilter = page.locator("//input[@placeholder='MM/DD/YYYY']")
  await expect(salesreportLasttransferdateFilter).toBeVisible({ timeout: 5000 })
  return salesreportLasttransferdateFilter
}

async function getSalesreportReportdetailLink(page: Page) {
  const salesreportReportdetailLink = page.locator("//p[text()='Report Detail']")
  const count = await salesreportReportdetailLink.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(salesreportReportdetailLink.nth(i))
  }
  console.log("Number of creators = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getSalesreportColumnHeader(page: Page) {
  const salesreportColumnHeader = page.locator("//tr/th")
  const count = await salesreportColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(salesreportColumnHeader.nth(i))
  }
  console.log("This is the value of sales report column header = " + textFieldArray.length + "\n")

  return textFieldArray
}

export { 
  getSalesreportColumnHeader,
  getSalesreportLasttransferdateFilter,
  getSalesreportReportdetailLink,
  getSalesreportRevenuesharerateFilter,
  getSalesreportSearchFilter,
  getSalesreportText
}
