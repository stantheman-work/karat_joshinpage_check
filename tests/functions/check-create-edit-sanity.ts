import {
  getTokenAddsection,
  getTokenCreatetokenBtn,
  getTokenDescription,
  getTokenName,
  getTokenSectionAddBtn,
  getTokenSectionContent,
  getTokenSectionName,
  getTokenSubmitTokenBtn,
  getTokenUploadImageElement,
} from "@/specs/general/communityinfo.locator"
import { PageUtils } from "@/utils/page-utils"
import { Page } from "@playwright/test"
import * as path from "path"

async function brandAddTokenDetails(page: Page) {
  console.log("[INFO] Start creating a new token.")
  let tokenListCtr = 0
  let tokenListFlag = false
  await PageUtils.waitForPageToLoad(page)
  const tokenNameInput = "[TEST] Token " + new Date().toISOString().split("T")[0]
  const tokenDescriptionInput = "[TEST] Token description " + new Date().toISOString().split("T")[0]
  const sectionNameInput = "[TEST] Section " + new Date().toISOString().split("T")[0]
  const sectionDescriptionInput = "[TEST] Section description " + new Date().toISOString().split("T")[0]

  const tokenName = await getTokenName(page)
  const tokenDesc = await getTokenDescription(page)
  const tokenAddSection = await getTokenAddsection(page)
  const tokenCreateBtn = await getTokenCreatetokenBtn(page)
  await tokenName.fill(tokenNameInput)
  await PageUtils.scrollToElement(page, tokenDesc)
  const tokenNameStore = await tokenName.inputValue()
  await tokenDesc.fill(tokenDescriptionInput)

  const image1Location = path.join(__dirname, "..", "..", "test-images", "image1.png")
  const image2Location = path.join(__dirname, "..", "..", "test-images", "image2.png")
  const image3Location = path.join(__dirname, "..", "..", "test-images", "image3.png")
  const [tokenUploadTokenImg, tokenUploadCoverImg, tokenUploadBannerImg] = await getTokenUploadImageElement(page)
  await tokenUploadTokenImg.setInputFiles(image1Location)
  await tokenUploadCoverImg.setInputFiles(image2Location)
  await tokenUploadBannerImg.setInputFiles(image3Location)

  await PageUtils.scrollToElement(page, tokenAddSection)
  await tokenAddSection.click()
  const sectionName = await getTokenSectionName(page)
  const sectionDesc = await getTokenSectionContent(page)
  const sectionAddBtn = await getTokenSectionAddBtn(page)
  await sectionName.fill(sectionNameInput)
  await sectionDesc.fill(sectionDescriptionInput)
  await sectionAddBtn.click()
  await tokenCreateBtn.click()
  const tokenSubmitBtn = await getTokenSubmitTokenBtn(page)
  await tokenSubmitBtn.click()
}

export { brandAddTokenDetails }
