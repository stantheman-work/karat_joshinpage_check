import { expect } from "@playwright/test"

async function getBrandEditBackBtn(page) {
  const brandEditBackBtn = page.locator("//*[name()='svg' and @alt='Back']")
  await expect(brandEditBackBtn).toBeVisible({ timeout: 5000 })
  return brandEditBackBtn
}

async function getBrandEditText(page) {
  const brandEditText = page.locator("//span[contains(text(),'Edit')]")
  await expect(brandEditText).toBeVisible({ timeout: 5000 })
  return brandEditText
}

async function getBrandImage(page) {
  const brandEditImage = page.locator("//div[@role='presentation']")
  await expect(brandEditImage).toBeVisible({ timeout: 5000 })
  return brandEditImage
}

async function getBrandName(page) {
  const brandName = page.locator("//input[@name='name']")
  await expect(brandName).toBeVisible({ timeout: 5000 })
  return brandName
}

async function getBrandDescription(page) {
  const brandName = page.locator("//div[@data-placeholder]")
  await expect(brandName).toBeVisible({ timeout: 5000 })
  return brandName
}

async function getBrandCancelBtn(page) {
  const brandCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(brandCancelBtn).toBeVisible({ timeout: 5000 })
  return brandCancelBtn
}

async function getBrandSaveBtn(page) {
  const brandSaveBtn = page.locator("//button[text()='Save']")
  await expect(brandSaveBtn).toBeVisible({ timeout: 5000 })
  return brandSaveBtn
}

async function getBrandCategoryBtn(page) {
  const brandCategoryBtn = page.locator("//*[name()='svg']/parent::button")
  const count = await brandCategoryBtn.count()

  if (count === 0) {
    throw new Error("No category buttons found")
  }

  console.log(`Total category buttons found: ${count}`)

  return brandCategoryBtn.nth(count - 1)
}

export {
  getBrandCancelBtn,
  getBrandCategoryBtn,
  getBrandDescription,
  getBrandEditBackBtn,
  getBrandEditText,
  getBrandImage,
  getBrandName,
  getBrandSaveBtn,
}
