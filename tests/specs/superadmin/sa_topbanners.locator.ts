import { expect, Locator, Page } from "@playwright/test"

async function getTopbannersText(page) {
  const topbannersText = page.locator("//h5[text()='Top banners']")
  await expect(topbannersText).toBeVisible({ timeout: 5000 })
  return topbannersText
}

async function getTopbannersCreateBannerBtn(page) {
  const topbannersCreateBannerBtn = page.locator("//button[text()='Add new Banner']")
  await expect(topbannersCreateBannerBtn).toBeVisible({ timeout: 5000 })
  return topbannersCreateBannerBtn
}

async function getTopbannersColumnHeaders(page) {
  return page.locator("//th[text()]")
}

// The locators below are accessible when add new banner button is clicked
async function getAddbannerBtn(page) {
  const addbannerBtn = page.locator("//button[text()='Add new Banner']")
  await expect(addbannerBtn).toBeVisible({ timeout: 5000 })
  return addbannerBtn
}

async function getEditbannerText(page) {
  const editbannerText = page.locator("//h4[text()='Edit banner']")
  await expect(editbannerText).toBeVisible({ timeout: 5000 })
  return editbannerText
}

async function getBannerUploadimageField(page) {
  const bannerUploadimageField = page.locator("//input[@accept]/parent::div")
  await expect(bannerUploadimageField).toBeVisible({ timeout: 5000 })
  return bannerUploadimageField
}

async function getBannerUploadimage(page) {
  const bannerUploadimage = page.locator("//input[@accept]")
  await expect(bannerUploadimage).toBeVisible({ timeout: 5000 })
  return bannerUploadimage
}

async function getBannerName(page) {
  const bannerName = page.locator("//input[@name='name']")
  await expect(bannerName).toBeVisible({ timeout: 5000 })
  return bannerName
}

async function getBannerHeader(page) {
  const bannerHeader = page.locator("//input[@name='header']")
  await expect(bannerHeader).toBeVisible({ timeout: 5000 })
  return bannerHeader
}

async function getBannerTitle(page) {
  const bannerTitle = page.locator("//input[@name='title']")
  await expect(bannerTitle).toBeVisible({ timeout: 5000 })
  return bannerTitle
}

async function getBannerDescription(page) {
  const bannerDescription = page.locator("//div[@data-placeholder='Enter description']")
  await expect(bannerDescription).toBeVisible({ timeout: 5000 })
  return bannerDescription
}

async function getBannerButtonToggle(page) {
  const bannerButtonToggle = page.locator("//input[@name='useButton']")
  await expect(bannerButtonToggle).toBeVisible({ timeout: 5000 })
  return bannerButtonToggle
}

// Appears when getBannerButtonToggle is enabled
async function getBannerButtonName(page) {
  const bannerButtonName = page.locator("//input[@name='buttonName']")
  await expect(bannerButtonName).toBeVisible({ timeout: 5000 })
  return bannerButtonName
}

// Appears when getBannerButtonToggle is enabled
async function getBannerZAPLink(page) {
  const bannerZAPLink = page.locator("//input[@name='zapLink']")
  await expect(bannerZAPLink).toBeVisible({ timeout: 5000 })
  return bannerZAPLink
}

// This is ON by default
async function getBannerDisplayonZAP(page) {
  const bannerDisplayonZAP = page.locator("//input[@name='display']")
  await expect(bannerDisplayonZAP).toBeVisible({ timeout: 5000 })
  return bannerDisplayonZAP
}

async function getBannerCancelBtn(page) {
  const bannerDisplayonZAP = page.locator("//button[text()='Cancel']")
  await expect(bannerDisplayonZAP).toBeVisible({ timeout: 5000 })
  return bannerDisplayonZAP
}

async function getBannerSaveBtn(page) {
  const bannerDisplayonZAP = page.locator("//button[text()='Save']")
  await expect(bannerDisplayonZAP).toBeVisible({ timeout: 5000 })
  return bannerDisplayonZAP
}

export {
  getAddbannerBtn,
  getBannerButtonName,
  getBannerButtonToggle,
  getBannerCancelBtn,
  getBannerDescription,
  getBannerDisplayonZAP,
  getBannerHeader,
  getBannerName,
  getBannerSaveBtn,
  getBannerTitle,
  getBannerUploadimage,
  getBannerUploadimageField,
  getBannerZAPLink,
  getEditbannerText,
  getTopbannersColumnHeaders,
  getTopbannersCreateBannerBtn,
  getTopbannersText
}
