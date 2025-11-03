import { expect, Locator, Page } from "@playwright/test"

export async function waitForGraphqlResponse(page: Page, check: (json: any) => boolean) {
  await page.waitForResponse(async (resp) => {
    if (resp.url().includes("/graphql")) {
      const json = await resp.json()
      return check(json)
    }
    return false
  })
}

// Helper function to search for locators on the page
export async function waitForPageToLoad(page: Page) {
  try {
    // Wait for the page to reach the "load" state, which indicates that all resources (e.g., images, scripts) have been loaded
    await page.waitForLoadState("load", { timeout: 10000 }) // Timeout is optional, set it according to your needs

    // Optionally, wait for network activity to be idle (no network requests in flight)
    await page.waitForLoadState("networkidle", { timeout: 10000 })
  } catch (error) {
    console.log("Page has not loaded, please check the page.", error)
  }

  // Additionally, you can ensure that a specific element is visible, which might indicate the page has fully rendered
  // await expect(page.locator('specific-element-selector')).toBeVisible({ timeout: 5000 });

  // console.log("Page has fully loaded.")
}

export async function waitForAnElement(page: Page, locator: Locator) {
  await expect(locator).toBeVisible({ timeout: 5000 })
  // console.log("The locator exists on the page.")
}

export async function waitForAnElement2(page: Page, locator: Locator) {
  // use elementHandle instead of locator
  // Ensure the element exists before trying to get ElementHandle
  // error here
  await locator.waitFor({ state: "attached", timeout: 5000 })

  // Convert Locator to ElementHandle
  const elementHandle = await locator.elementHandle()

  if (!elementHandle) {
    throw new Error("ElementHandle is undefined or null.")
  }

  // Wait for visibility using ElementHandle
  await elementHandle.waitForElementState("visible", { timeout: 5000 })
  // console.log("The element exists on the page.")
}

export async function scrollToElement(page: Page, locator: Locator) {
  try {
    await waitForAnElement(page, locator) // Wait for the element to be visible
  } catch (error) {
    // console.log("use another method to waitForElement")
    await waitForAnElement2(page, locator) // Wait for the element to be visible
  }
  await locator.scrollIntoViewIfNeeded() // Scroll to the element if it's not in view
  // console.log("Element is now in view")
}

export async function refreshPage(page: Page) {
  await page.goto(page.url(), { waitUntil: "networkidle" })
  // console.log("Page is being refreshed, please wait.")
  await waitForPageToLoad(page)
  // console.log("Page has been refreshed.")
}

export async function waitForElementToBeHidden(page: Page, locator: Locator) {
  await expect(locator).toBeHidden({ timeout: 5000 })
}