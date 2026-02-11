import { expect, Locator, Page } from "@playwright/test"

async function getSuperadminTabs(page: Page) {
  return page.locator("//div[@role='tablist']/button")
  /*
  const superadminTabs = page.locator("//div[@role='tablist']/button")
  await expect(superadminTabs).toBeVisible({ timeout: 5000 })
  return superadminTabs
  */
}

async function getSuperadminBrandmanagementBtn(page) {
  const superadminBrandmanagementBtn = page.locator("//button[contains(text(),'brand management')]")
  await expect(superadminBrandmanagementBtn).toBeVisible({ timeout: 5000 })
  return superadminBrandmanagementBtn
}

async function getSuperadminUserprofileBtn(page) {
  const superadminuserprofileBtn = page.locator("//button[@id='profile-button']")
  await expect(superadminuserprofileBtn).toBeVisible({ timeout: 5000 })
  return superadminuserprofileBtn
}

async function getSuperadminChangelanguageBtn(page) {
  const superadminChangelanguageBtn = page.locator("//button[@id='profile-button']/preceding-sibling::button")
  await expect(superadminChangelanguageBtn).toBeVisible({ timeout: 5000 })
  return superadminChangelanguageBtn
}

export {
  getSuperadminBrandmanagementBtn,
  getSuperadminChangelanguageBtn,
  getSuperadminTabs,
  getSuperadminUserprofileBtn
}
