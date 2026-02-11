import { expect } from "@playwright/test"

async function getInsightsText(page) {
  const dailytrendText = page.locator("//h2[contains(text(),'Dashboard')]")
  await expect(dailytrendText).toBeVisible({ timeout: 5000 })
  return dailytrendText
}

async function getInsightsIframe(page) {
  const iFrame = await page.frameLocator("//iframe")
  return iFrame
}

async function getInsightsMenuSelected(page) {
  const dailytrendMenuSelected = page.locator("//div[contains(@class,'active')]")
  await expect(dailytrendMenuSelected).toBeVisible({ timeout: 5000 })
  return dailytrendMenuSelected
}

export { 
  getInsightsText, 
  getInsightsIframe, 
  getInsightsMenuSelected 
}
