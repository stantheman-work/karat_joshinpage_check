import { AuthUtils } from "@/utils/auth-utils"
import { waitForPageToLoad } from "@/utils/load-helper"
import {
  Page,
  expect
} from "@playwright/test"
import {
  addDataOnTextfield,
  uploadImage,
  hitEnterKey
} from "@/utils/keyboard-helper"
import {
  customizeHome_FriendReferral
} from "@/specs/general/customizehome/friendreferral.locator"
import {
  customizeHome_ProductShowcase
} from "@/specs/general/customizehome/productshowcase.locator"
import {
  inputDataForTextfields
} from "@/utils/data-utils"
import {
  getBrandSearchFilter,
  getBrand24karatFilterResultSettingBtn,
  getBrandSearchLoadingIcon
} from "../specs/general/dashboard.locator"

// In dashboard, search for the community named 24KARAT
export async function redirect_24karatCommunity(page: Page) {
  let loadingFlag = false
  const comm_input = new inputDataForTextfields(page)
  const comm_searchFilter = await getBrandSearchFilter(page)
  await addDataOnTextfield(comm_searchFilter, comm_input.communityInput24karat())
  const comm_loadingIcon = await getBrandSearchLoadingIcon(page)
  while (loadingFlag == false) {
    try {
      await expect(comm_loadingIcon).toBeVisible({ timeout: 15000 })
      loadingFlag = true
    } catch (error) {
      console.log("Loading icon is still not present")
    }
  }
}