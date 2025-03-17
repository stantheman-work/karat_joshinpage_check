import { getBrand24karatOption, getBrandSelectDropdown } from "@/locators/brand-admin-dashboard-loc"
import { AuthUtils } from "@/utils/auth-utils"
import { waitForPageToLoad } from "@/utils/load-helper"
import { Page } from "@playwright/test"

export async function brandCheckBrand(page: Page) {
  // Skip notification reminder
  try {
    await page.getByRole("button", { name: "Later" }).click()
  } catch {
    // Do nothing
  }

  const brandName = AuthUtils.getDefaultBrand().name
  let brandSelectDropdown = await getBrandSelectDropdown(page)
  let selectedBrand = await brandSelectDropdown.textContent()
  if (selectedBrand === brandName) {
    // console.log(`Brand selected is ${brandName}`)
  } else {
    // console.log(`Brand selected is ${selectedBrand}, changing to ${brandName}....`)
    await brandSelectDropdown.click()
    const brand24karatOption = await getBrand24karatOption(page)
    await brand24karatOption.click()
    await waitForPageToLoad(page)
    brandSelectDropdown = await getBrandSelectDropdown(page)
    selectedBrand = await brandSelectDropdown.textContent()
    if (selectedBrand !== brandName) {
      throw new Error("24karat brand is missing! Please check brand admin.")
    }
  }
}
