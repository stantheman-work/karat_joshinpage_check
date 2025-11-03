import { expect, Locator, Page } from "@playwright/test"

async function getUsersearchText(page) {
  const usersearchText = page.locator("//h5[text()='User search']")
  await expect(usersearchText).toBeVisible({ timeout: 5000 })
  return usersearchText
}

async function getUsersearchAllcommunitiesDropdown(page) {
  const usersearchAllcommunitiesDropdown = page.locator("//div[text()='All communities']/parent::div")
  await expect(usersearchAllcommunitiesDropdown).toBeVisible({ timeout: 5000 })
  return usersearchAllcommunitiesDropdown
}

async function getUsersearchSearchfilter(page) {
  const usersearchSearchfilter = page.locator("//*[name()='svg' and @data-testid='SearchIcon']/parent::div/following-sibling::div/input")
  await expect(usersearchSearchfilter).toBeVisible({ timeout: 5000 })
  return usersearchSearchfilter
}

async function getUsersearchSearchBy(page) {
  const usersearchSearchBy = page.locator("//div[text()='Username & ID']")
  await expect(usersearchSearchBy).toBeVisible({ timeout: 5000 })
  return usersearchSearchBy
}

async function getUsersearchSearchBtn(page) {
  const usersearchSearchBtn = page.locator("//button[text()='Search']")
  await expect(usersearchSearchBtn).toBeVisible({ timeout: 5000 })
  return usersearchSearchBtn
}

async function getUsersearchExportBtn(page) {
  const usersearchExportBtn = page.locator("//div[contains(text(),'Export')]")
  await expect(usersearchExportBtn).toBeVisible({ timeout: 5000 })
  return usersearchExportBtn
}

async function getUsersearchOpenuserlinkBtn(page: Page) {
  const userserachOpenuserlinkBtn = page.locator("//*[name()='svg' and @data-testid='OpenInNewIcon']/parent::button")
  const count = await userserachOpenuserlinkBtn.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(userserachOpenuserlinkBtn.nth(i))
  }
  
  return textFieldArray
}

export { 
  getUsersearchAllcommunitiesDropdown,
  getUsersearchExportBtn,
  getUsersearchOpenuserlinkBtn,
  getUsersearchSearchBtn,
  getUsersearchSearchBy,
  getUsersearchSearchfilter,
  getUsersearchText
}