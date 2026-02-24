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
  PageUtils
} from "@/utils/page-utils"
import { 
  customizeHome_userStatus
} from "@/specs/general/customizehome/userstatus.locator"

export async function create_FriendReferral(page: Page) {
  const ch_friendRefer = new customizeHome_FriendReferral(page)
  // Select reward type for inviter
  await expect(ch_friendRefer.inviterRewardTypeDropdown()).toBeVisible()
  await ch_friendRefer.inviterRewardTypeDropdown().click()
  await expect(ch_friendRefer.inviterRewardTypeDropdownOptions().first()).toBeVisible()
  await ch_friendRefer.inviterRewardTypeDropdownOptions().first().click()
  // Select token reward for inviter
  await expect(ch_friendRefer.inviterSelectTokenRewardDropdown()).toBeVisible()
  await ch_friendRefer.inviterSelectTokenRewardDropdown().click()
  await expect(ch_friendRefer.inviterSelectTokenRewardDropdownOptions().first()).toBeVisible()
  await ch_friendRefer.inviterSelectTokenRewardDropdownOptions().first().click()
  const input = new inputDataForTextfields(page)
  await addDataOnTextfield(ch_friendRefer.inviterTokenRewardAmount(), input.generateTokenRewardAmount())
  // Select reward type for invited
  await expect(ch_friendRefer.invitedRewardTypeDropdown()).toBeVisible()
  await ch_friendRefer.invitedRewardTypeDropdown().click()
  await expect(ch_friendRefer.invitedRewardTypeDropdownOptions().first()).toBeVisible()
  await ch_friendRefer.invitedRewardTypeDropdownOptions().first().click()
  // Select token reward for invited
  await expect(ch_friendRefer.invitedSelectTokenRewardDropdown()).toBeVisible()
  await ch_friendRefer.invitedSelectTokenRewardDropdown().click()
  await expect(ch_friendRefer.invitedSelectTokenRewardDropdownOptions().first()).toBeVisible()
  await ch_friendRefer.invitedSelectTokenRewardDropdownOptions().first().click()
  await addDataOnTextfield(ch_friendRefer.invitedTokenRewardAmount(), input.generateTokenRewardAmount())
  await ch_friendRefer.savebtn().click()
  await expect(ch_friendRefer.pleaseWaitPopup()).toBeVisible({ timeout: 15000 })
  await expect(ch_friendRefer.pleaseWaitPopup()).toBeHidden({ timeout: 15000 })
}

// This function will create a new product as well as verifying if the fields are present
export async function create_productShowcase(page: Page) {
  const ch_prodShow = new customizeHome_ProductShowcase(page)
  // Card image upload field
  await expect(ch_prodShow.addBtn()).toBeVisible()
  await PageUtils.scrollToElement(page, ch_prodShow.addBtn())
  await ch_prodShow.addBtn().click()
  const product_input = new inputDataForTextfields(page)
  await expect(ch_prodShow.cardImage().first()).toBeVisible()
  await uploadImage(ch_prodShow.cardImageUploadField().first(), product_input.uploadFilePath())
  await expect(ch_prodShow.title()).toBeVisible()
  await addDataOnTextfield(ch_prodShow.title(), product_input.productShowcaseTitle())
  await expect(ch_prodShow.subTitle()).toBeVisible()
  await addDataOnTextfield(ch_prodShow.subTitle(), product_input.productShowcaseSubtitle())
  await expect(ch_prodShow.description()).toBeVisible()
  await addDataOnTextfield(ch_prodShow.description(), product_input.productShowcaseDescription())
  await expect(ch_prodShow.websiteUrl()).toBeVisible()
  await addDataOnTextfield(ch_prodShow.websiteUrl(), product_input.productShowcaseWebsite())
  await expect(ch_prodShow.price()).toBeVisible()
  await addDataOnTextfield(ch_prodShow.price(), product_input.productShowcasePrice())
  await expect(ch_prodShow.tagsTextfield()).toBeVisible()
  await addDataOnTextfield(ch_prodShow.tagsTextfield(), product_input.tagInput())
  await hitEnterKey(page)
  await expect(ch_prodShow.featuredCardToggle()).toBeVisible()
  await ch_prodShow.featuredCardToggle().click()
  await expect(ch_prodShow.cardImage().last()).toBeVisible()
  await uploadImage(ch_prodShow.cardImageUploadField().last(), product_input.uploadFilePath())
  await expect(ch_prodShow.featuredCardDoneBtn()).toBeVisible()
  await expect(ch_prodShow.featuredCardCancelBtn()).toBeVisible()
  await ch_prodShow.featuredCardDoneBtn().click()
  await expect(ch_prodShow.pleaseWaitPopup()).toBeVisible({ timeout: 15000 })
  await expect(ch_prodShow.pleaseWaitPopup()).toBeHidden({ timeout: 15000 })
}

export async function create_userStatus(page: Page) {
  // start create user status
  // .first() = Token
  const ch_userStat = new customizeHome_userStatus(page)
  const userInput = new inputDataForTextfields(page)
  await expect(ch_userStat.customizerank_statusBy().first()).toBeVisible()
  await expect(ch_userStat.customizerank_statusBy().first()).toBeChecked()
  await expect(ch_userStat.customizerank_settingName()).toBeVisible()
  await expect(ch_userStat.customizerank_settingFrom()).toBeVisible()
  await expect(ch_userStat.customizerank_addRanking()).toBeVisible()
  // .last() = NFT
  await expect(ch_userStat.customizerank_statusBy().last()).toBeVisible()
  await ch_userStat.customizerank_statusBy().last().click()
  await expect(ch_userStat.customizerank_statusBy().last()).toBeChecked()
  await expect(ch_userStat.customizerank_settingName()).toBeVisible()
  await expect(ch_userStat.customizerank_nftTemplateTextfield()).toBeVisible()
  await expect(ch_userStat.customizerank_nftTemplateChooseBtn()).toBeVisible()
  await expect(ch_userStat.customizerank_addRanking()).toBeVisible()
  // return to token page and add sample input
  await ch_userStat.customizerank_statusBy().first().click()
  await ch_userStat.customizerank_addRanking().click()
  await expect(ch_userStat.customizerank_closeBtn().last()).toBeVisible()
  await ch_userStat.customizerank_closeBtn().last().click()
  await addDataOnTextfield(ch_userStat.customizerank_settingName(), userInput.userStatusTitle())
  await addDataOnTextfield(ch_userStat.customizerank_settingFrom(), userInput.userStatusFrom())
  await expect(ch_userStat.customizerank_discardBtn()).toBeVisible()
  // Save button in pop up
  await expect(ch_userStat.customizerank_saveBtn().last()).toBeVisible()
  await ch_userStat.customizerank_saveBtn().last().click()
}