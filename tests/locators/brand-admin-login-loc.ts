import { expect, Locator } from "@playwright/test"

// Helper function to search for locators on the page
async function getBrandLoginConnectBtn(page) {
  // Define the locator for the element
  //const brandConnectBtn = page.locator("//button[@id=':r0:']");
  const brandConnectBtn = await page.getByRole("button", { name: "Connect to 24karat" })

  // Wait for the element to be visible (Playwright handles waiting internally)
  await expect(brandConnectBtn).toBeVisible({ timeout: 5000 })

  // Return the locator (not the element itself, as in Playwright locators are used directly)
  return brandConnectBtn
}

async function getBrandLoginWelcomeText(page) {
  const brandLoginWelcomeText = page.locator("//h5")
  await expect(brandLoginWelcomeText).toBeVisible({ timeout: 5000 })
  return brandLoginWelcomeText
}

async function getBrandEmailLoginTextField(page) {
  const brandEmailLoginTextField = page.locator("//input[@name='email']")
  await expect(brandEmailLoginTextField).toBeVisible({ timeout: 5000 })
  return brandEmailLoginTextField
}

async function getBrandLoginIFrame(page) {
  const iFrame = await page.frameLocator("//iframe[contains(@src,'karat-connect')]")
  return iFrame
}

async function getBrandEmailLoginBtn(page) {
  const brandEmailLoginBtn = page.locator("//button[@id=':R1mj6:']")
  await expect(brandEmailLoginBtn).toBeVisible({ timeout: 5000 })
  return brandEmailLoginBtn
}

async function getBrandMobileSelectionBtn(page) {
  const brandMobileSelectionBtn = page.locator("//span[contains(.,'mobile')]/parent::button")
  await expect(brandMobileSelectionBtn).toBeVisible({ timeout: 5000 })
  return brandMobileSelectionBtn
}

async function getBrandEmailSelectionBtn(page) {
  const brandEmailSelectionBtn = page.locator("//span[contains(text(),'Email')]/parent::button")
  await expect(brandEmailSelectionBtn).toBeVisible({ timeout: 5000 })
  return brandEmailSelectionBtn
}

// need to pass iFrame instead of page, because this button is inside an iFrame
async function getBrandPassphraseSelectionBtn(iFrame) {
  const brandPassphraseSelectionBtn = iFrame.locator("//span[contains(text(),'Phrase')]/parent::button")
  await expect(brandPassphraseSelectionBtn).toBeVisible({ timeout: 5000 })
  console.log("Button is visible.")
  return brandPassphraseSelectionBtn
}

async function getBrandQRSelectionBtn(page) {
  const brandQRSelectionBtn = page.locator("//span[contains(text(),'QR')]/parent::button")
  await expect(brandQRSelectionBtn).toBeVisible({ timeout: 5000 })
  return brandQRSelectionBtn
}

async function getBrandMobileLoginTextField(page) {
  const brandMobileLoginTextField = page.locator("//input[@type='tel']")
  await expect(brandMobileLoginTextField).toBeVisible({ timeout: 5000 })
  return brandMobileLoginTextField
}

async function getBrandPassphraseTextfield(iFrame: Locator) {
  // Get all the input fields matching the locator
  const brandPassphraseTextfields = iFrame.locator("//div/descendant::div[@class='flex-1']/input")
  const count = await brandPassphraseTextfields.count()

  // Return the list of text fields as an array of locators
  // per index of the array = textfield location (textfield 1, textfield 2, ....)
  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(brandPassphraseTextfields.nth(i))
  }
  //console.log("This is the value of textFieldArray = " + textFieldArray)

  return textFieldArray
}

async function getBrandPassphraseLoginBtn(page) {
  const brandPassphraseLoginBtn = page.locator("//button[contains(text(),'Continue')]")
  await expect(brandPassphraseLoginBtn).toBeVisible({ timeout: 5000 })
  return brandPassphraseLoginBtn
}

export {
  getBrandEmailLoginBtn,
  getBrandEmailLoginTextField,
  getBrandEmailSelectionBtn,
  getBrandLoginConnectBtn,
  getBrandLoginIFrame,
  getBrandLoginWelcomeText,
  getBrandMobileLoginTextField,
  getBrandMobileSelectionBtn,
  getBrandPassphraseLoginBtn,
  getBrandPassphraseSelectionBtn,
  getBrandPassphraseTextfield,
  getBrandQRSelectionBtn,
}
