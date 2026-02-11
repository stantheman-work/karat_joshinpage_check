import { expect, Locator, Page } from "@playwright/test"

async function getActivitiesgraphText(page) {
  return page.locator("//h5[text()='Activities graph']")
}

export {
  getActivitiesgraphText
}
