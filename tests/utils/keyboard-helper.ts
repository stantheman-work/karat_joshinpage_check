import { Page } from "@playwright/test"

// Helper function to for keyboard related functions
async function closeWindowPopup(page: Page) {
  await page.bringToFront()
  await page.keyboard.press("Escape")
  console.log("Button / Popup has been closed")
}

export { closeWindowPopup }
