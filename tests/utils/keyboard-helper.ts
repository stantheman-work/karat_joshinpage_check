import { Page, Locator } from "@playwright/test"

// Helper function to for keyboard related functions
async function closeWindowPopup(page: Page) {
  await page.bringToFront()
  await page.keyboard.press("Escape")
  console.log("Button / Popup has been closed")
}

async function addDataOnTextfield(page: Page, locator: Locator, value: string) {
  await locator.fill(value)
}

export { 
  closeWindowPopup,
  addDataOnTextfield
}
