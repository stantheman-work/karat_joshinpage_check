import {
  getBrandCancelBtn,
  getBrandCategoryBtn,
  getBrandDescription,
  getBrandEditBackBtn,
  getBrandEditText,
  getBrandImage,
  getBrandName,
  getBrandSaveBtn
} from "../general/brandinfo.locator"
import {
  getBrandCommunityCreateBtn,
  getBrandCommunityTabs,
  getBrandEditButton
} from "../general/dashboard.locator"
import {
  getMemberColumnHeader,
  getMemberColumnHeaders,
  getMemberDateFilter,
  getMemberDateJoinedFilter,
  getMemberInviteBtn,
  getMemberInviteCancelBtn,
  getMemberInviteEmail,
  getMemberInviteSendBtn,
  getMemberInviteText,
  getMemberRoleDropdown,
  getMemberRoleFilter,
  getMemberRoleSelectFilter,
  getMemberSearchFilter,
  getMemberSearchUserFilter
} from "../general/member.locator"
import {
  getCommunityAddSection,
  getCommunityBackBtn,
  getCommunityBacktoDashboardBtn,
  getCommunityBrandinfoEdit,
  getCommunityCancelBtn,
  getCommunityDescription,
  getCommunityDraftBtn,
  getCommunityEnabletokenToggle,
  getCommunityImguploadElement,
  getCommunityImguploadFile,
  getCommunityName,
  getCommunityNextBtn,
  getCommunityPreview,
  getCommunitySubmitBtn,
  getCommunityTokenName
} from "./communityinfo.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { waitForPageToLoad, scrollToElement } from "@/utils/load-helper"
import { PageUtils } from "@/utils/page-utils"
import { expect, test } from "@playwright/test"

test.describe("General > Home page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)
  })

  test("brand edit", async ({ page }) => {
    // Click brand edit button and check if elements exists inside the page
    console.log("[INFO] Brand edit check START")
    const brandEditBtn = await getBrandEditButton(page)
    await brandEditBtn.click()
    await waitForPageToLoad(page)
    const brandEditBackBtn = await getBrandEditBackBtn(page)
    const brandEditText = await getBrandEditText(page)
    const brandImage = await getBrandImage(page)
    const brandName = await getBrandName(page)
    const brandDesc = await getBrandDescription(page)
    const brandAddCategoryBtn = await getBrandCategoryBtn(page)
    const brandCancelBtn = await getBrandCancelBtn(page)
    const brandSaveBtn = await getBrandSaveBtn(page)
    await expect(brandEditBackBtn).toBeVisible()
    await expect(brandEditText).toBeVisible()
    await expect(brandImage).toBeVisible()
    await expect(brandName).toBeVisible()
    await scrollToElement(page, brandName)
    await expect(brandDesc).toBeVisible()
    await scrollToElement(page, brandAddCategoryBtn)
    await expect(brandAddCategoryBtn).toBeVisible()
    await scrollToElement(page, brandDesc)
    await expect(brandCancelBtn).toBeVisible()
    await scrollToElement(page, brandCancelBtn)
    await expect(brandSaveBtn).toBeVisible()
    await brandEditBackBtn.click()
    console.log("[INFO] Brand edit check END")
  })

  test("community create", async ({ page }) => {
    console.log("[INFO] Community create check START")
    const path = require('path')
    const communityNameText = 'Random community name'
    const communityDescriptionText = 'Random community Description'
    const communityCreateBtn = await getBrandCommunityCreateBtn(page)
    await communityCreateBtn.click()
    await waitForPageToLoad(page)
    const communityBacktoDashboardBtn = await getCommunityBacktoDashboardBtn(page)
    const communityIconImage = (await getCommunityImguploadFile(page))[0]
    const communityBannerImage = (await getCommunityImguploadFile(page))[1]
    const iconUploadFile = (await getCommunityImguploadElement(page))[0]
    const bannerUploadFile = (await getCommunityImguploadElement(page))[1]
    const communityName = await getCommunityName(page)
    const communityBrandinfoEdit = await getCommunityBrandinfoEdit(page)
    const communityDescription = await getCommunityDescription(page)
    const communityAddsectionBtn = await getCommunityAddSection(page)
    const communityPreview = await getCommunityPreview(page)
    const communityNextBtn = await getCommunityNextBtn(page)
    await expect(communityBacktoDashboardBtn).toBeVisible()
    await expect(communityIconImage).toBeVisible()
    await expect(communityBannerImage).toBeVisible()
    await expect(communityName).toBeVisible()
    await expect(communityBrandinfoEdit).toBeVisible()
    await expect(communityDescription).toBeVisible()
    await expect(communityAddsectionBtn).toBeVisible()
    await expect(communityNextBtn).toBeVisible()
    await expect(communityPreview).toBeVisible()
    // Upload images to icon and banner
    const imageOne = path.join(__dirname, '..', '..', '..', 'test-images', 'image1.png')
    const imageTwo = path.join(__dirname, '..', '..', '..', 'test-images', 'image2.png')
    await iconUploadFile.setInputFiles(imageOne)
    await bannerUploadFile.setInputFiles(imageTwo)
    await communityName.fill(communityNameText)
    await communityDescription.fill(communityDescriptionText)
    await communityNextBtn.click();
    const communityEnabledtokenToggle = await getCommunityEnabletokenToggle(page)
    const communityBackBtn = await getCommunityBackBtn(page)
    const communityDraftBtn = await getCommunityDraftBtn(page)
    const communitySubmitBtn = await getCommunitySubmitBtn(page)
    await expect(communityEnabledtokenToggle).toBeVisible()
    await communityEnabledtokenToggle.click();
    const communityTokenName = await getCommunityTokenName(page)
    await expect(communityTokenName).toBeVisible()
    await expect(communityBackBtn).toBeVisible()
    await expect(communityDraftBtn).toBeVisible()
    await expect(communitySubmitBtn).toBeVisible()
    await communityBackBtn.click()
    console.log("[INFO] Community create check END")
  })

  test("member tab", async ({ page }) => {
    console.log("[INFO] Member tab check START")
    const memberTab = (await getBrandCommunityTabs(page))[1]
    await memberTab.click();
    await waitForPageToLoad(page)
    const memberInviteBtn = await getMemberInviteBtn(page)
    await memberInviteBtn.click()
    const memberInviteText = await getMemberInviteText(page)
    const memberInviteEmail = await getMemberInviteEmail(page)
    const memberRoleDropdown = await getMemberRoleDropdown(page)
    const memberInviteSendBtn = await getMemberInviteSendBtn(page)
    await expect(memberInviteText).toBeVisible()
    await expect(memberInviteEmail).toBeVisible()
    await expect(memberRoleDropdown).toBeVisible()
    await expect(memberInviteSendBtn).toBeVisible()
    console.log("[INFO] Member tab check END")
  })
})
