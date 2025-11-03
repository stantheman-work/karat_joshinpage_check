import { expect, Locator, Page } from "@playwright/test"

async function getVMNFTtab(page) {
  const vmNftTab = page.locator("//button[contains(text(),'NFT')]")
  await expect(vmNftTab).toBeVisible({ timeout: 5000 })
  return vmNftTab
}

async function getVMMysteryboxTab(page) {
  const vmMysteryboxTab = page.locator("//button[contains(text(),'Mystery')]")
  await expect(vmMysteryboxTab).toBeVisible({ timeout: 5000 })
  return vmMysteryboxTab
}

async function getVMNFTSearchNFTFilter(page) {
  const vmNftSearchNFTFilter = page.locator("//input[@placeholder]")
  await expect(vmNftSearchNFTFilter).toBeVisible({ timeout: 5000 })
  return vmNftSearchNFTFilter
}

async function getVMNFTColumnHeader(page: Page) {
  const vmNftColumnHeader = page.locator("//th[text()]")
  const count = await vmNftColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(vmNftColumnHeader.nth(i))
  }
  console.log("This is the value of NFT column header = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getVMMysteryboxSearchBoxFilter(page) {
  const vmMysteryboxSearchBoxFilter = page.locator("//input[@placeholder]")
  await expect(vmMysteryboxSearchBoxFilter).toBeVisible({ timeout: 5000 })
  return vmMysteryboxSearchBoxFilter
}

async function getVMMysteryboxColumnHeader(page: Page) {
  const vmMysteryboxColumnHeader = page.locator("//th[text()]")
  const count = await vmMysteryboxColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(vmMysteryboxColumnHeader.nth(i))
  }
  console.log("This is the value of Mysterybox column header = " + textFieldArray.length + "\n")

  return textFieldArray
}

export {
  getVMMysteryboxColumnHeader,
  getVMMysteryboxSearchBoxFilter,
  getVMMysteryboxTab,
  getVMNFTColumnHeader,
  getVMNFTSearchNFTFilter,
  getVMNFTtab,
}
