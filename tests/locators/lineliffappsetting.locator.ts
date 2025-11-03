import { expect, Locator, Page } from "@playwright/test"

async function getLINELIFFAppText(page) {
  const lineLIFFAppText = page.locator("//div[text()='LINE LIFF app settings']")
  await expect(lineLIFFAppText).toBeVisible({ timeout: 5000 })
  return lineLIFFAppText
}

async function getLINELIFFAppCreateBtn(page) {
  const lineLIFFAppCreateBtn = page.locator("//div[text()='Create a new setting']/parent::button")
  await expect(lineLIFFAppCreateBtn).toBeVisible({ timeout: 5000 })
  return lineLIFFAppCreateBtn
}

async function getLINELIFFAppSearchFilter(page) {
  const lineLIFFAppSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(lineLIFFAppSearchFilter).toBeVisible({ timeout: 5000 })
  return lineLIFFAppSearchFilter
}

async function getLINELIFFAppColumnHeaders(page: Page) {
  const lineLIFFAppColumnHeaders = page.locator("//th[text()]")
  const count = await lineLIFFAppColumnHeaders.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(lineLIFFAppColumnHeaders.nth(i))
  }
  console.log("This is the value of column headers in LINE LIFF app page = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getLINELIFFAppChannelAlias(page) {
  const lineLIFFAppChannelAlias = page.locator("//tbody/tr/td[2]")
  await expect(lineLIFFAppChannelAlias).toBeVisible({ timeout: 5000 })
  return lineLIFFAppChannelAlias
}

async function getLINELIFFAppStatus(page) {
  const lineLIFFAppStatus = page.locator("//tbody/tr/td[7]")
  await expect(lineLIFFAppStatus).toBeVisible({ timeout: 5000 })
  return lineLIFFAppStatus
}

export {
  getLINELIFFAppChannelAlias,
  getLINELIFFAppColumnHeaders,
  getLINELIFFAppCreateBtn,
  getLINELIFFAppSearchFilter,
  getLINELIFFAppStatus,
  getLINELIFFAppText,
}
