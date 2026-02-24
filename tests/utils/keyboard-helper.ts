import { Page, Locator } from "@playwright/test"

// Helper function to for keyboard related functions
export async function closeWindowPopup(page: Page) {
  await page.bringToFront()
  await page.keyboard.press("Escape")
  console.log("Button / Popup has been closed")
}

export async function addDataOnTextfield(locator: Locator, value: string) {
  await locator.clear()
  await locator.fill(value)
}

export async function hitEnterKey(page) {
  await page.keyboard.press("Enter")
}

export async function uploadImage(locator: Locator, uploadFileLocation: string) {
  await locator.setInputFiles(uploadFileLocation)
}