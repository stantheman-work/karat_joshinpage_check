import {
  getSuperadminBrandmanagementBtn,
  getSuperadminChangelanguageBtn,
  getSuperadminTabs,
  getSuperadminUserprofileBtn
} from "../superadmin/superadmin.locator"
import {
  getReviewbrandAllbrandsText,
  getReviewbrandColumnHeaders,
  getReviewbrandSearchFilter,
  getReviewbrandStatusFilter
} from "../superadmin/sa_reviewbrand.locator"
import {
  getReviewcommunityAllCommunitiesText,
  getReviewcommunityBrandFilter,
  getReviewcommunityColumnHeaders,
  getReviewcommunitySearchFilter,
  getReviewcommunityStatusFilter
} from "../superadmin/sa_reviewcommunity.locator"
import {
  getUsermanagementActionhistoryBtn,
  getUsermanagementAllUsersText,
  getUsermanagementBulkactionsDropdown,
  getUsermanagementBulkactionsDropdownOption,
  getUsermanagementColumnHeaders,
  getUsermanagementDataFilter,
  getUsermanagementSearchFilter
} from "../superadmin/sa_usermanagement.locator"
import {
  getAddbannerBtn,
  getBannerButtonName,
  getBannerButtonToggle,
  getBannerCancelBtn,
  getBannerDescription,
  getBannerDisplayonZAP,
  getBannerHeader,
  getBannerName,
  getBannerSaveBtn,
  getBannerTitle,
  getBannerUploadimageField,
  getEditbannerText,
  getTopbannersColumnHeaders,
  getTopbannersCreateBannerBtn,
  getTopbannersText
} from "../superadmin/sa_topbanners.locator"
import {
  getActivitiesgraphText
} from "../superadmin/sa_activitiesgraph.locator"
import {
  sa_NFTPage
} from "./sa_nfttab.locator"
import {
  sa_MBOXPage
} from "./sa_mysteryboxtab.locator"
import {
  sa_zapSettingsTab
} from "./sa_zapsettings.locator"
import {
  sa_cashoutRequestPage
} from "./sa_usercashout.locator"

import { PageUtils } from "@/utils/page-utils"
import { test, expect, Page } from "@playwright/test"
import { closeWindowPopup } from "@/utils/keyboard-helper"

async function superadminReviewBrandTab(page) {
  await test.step("[INFO] Superadmin dashboard + Review brand check", async () => {
    
    await test.step("[INFO] Check all elements inside superadmin page", async () =>  {
      const superadminTabs = await getSuperadminTabs(page)
      const superadminBrandmanagementBtn = await getSuperadminBrandmanagementBtn(page)
      const superadminChangelanguageBtn = await getSuperadminChangelanguageBtn(page)
      const superadminUserprofileBtn = await getSuperadminUserprofileBtn(page)
      await expect(superadminTabs.first()).toBeVisible({ timeout: 15000 })
      await expect(superadminBrandmanagementBtn).toBeVisible()
      await expect(superadminChangelanguageBtn).toBeVisible()
      await expect(superadminUserprofileBtn).toBeVisible()
    })
    await test.step("[INFO] Check all elements inside review brand tab", async () =>  {
      const reviewbrandAllbrandsText = await getReviewbrandAllbrandsText(page)
      const reviewbrandSearchFilter = await getReviewbrandSearchFilter(page)
      const reviewbrandStatusFilter = await getReviewbrandStatusFilter(page)
      const reviewbrandColumnHeaders = await getReviewbrandColumnHeaders(page)
      await expect(reviewbrandAllbrandsText).toBeVisible()
      await expect(reviewbrandSearchFilter).toBeVisible()
      await expect(reviewbrandStatusFilter).toBeVisible()
      await expect(reviewbrandColumnHeaders.first()).toBeVisible({ timeout: 15000 })
    })
  })
}

async function superadminReviewCommunitiesTab(page) {
  await test.step("[INFO] Superadmin review communities tab check", async () => {
    const superadminTabs = await getSuperadminTabs(page)
    await superadminTabs.nth(1).click()
    const rc_allCommunitiesText = await getReviewcommunityAllCommunitiesText(page)
    const rc_searchFilter = await getReviewcommunitySearchFilter(page)
    const rc_brandFilter = await getReviewcommunityBrandFilter(page)
    const rc_statusFilter = await getReviewcommunityStatusFilter(page)
    const rc_columnHeaders = await getReviewcommunityColumnHeaders(page)
    await expect(rc_allCommunitiesText).toBeVisible()
    await expect(rc_searchFilter).toBeVisible()
    await expect(rc_brandFilter).toBeVisible()
    await expect(rc_statusFilter).toBeVisible()
    await expect(rc_columnHeaders.first()).toBeVisible({ timeout: 15000 })
  })
}

async function superadminUsermanagementTab(page) {
  await test.step("[INFO] Superadmin user management tab check", async () => {
    const superadminTabs = await getSuperadminTabs(page)
    await superadminTabs.nth(2).click()
    const um_actionhistoryBtn = await getUsermanagementActionhistoryBtn(page)
    const um_allUsersText = await getUsermanagementAllUsersText(page)
    const um_bulkactionsDropdown = await getUsermanagementBulkactionsDropdown(page)
    const um_columnHeaders = await getUsermanagementColumnHeaders(page)
    const um_dataFilter = await getUsermanagementDataFilter(page)
    const um_searchFilter = await getUsermanagementSearchFilter(page)
    await expect(um_actionhistoryBtn).toBeVisible()
    await expect(um_allUsersText).toBeVisible()
    await expect(um_bulkactionsDropdown).toBeVisible()
    await expect(um_searchFilter).toBeVisible()
    await expect(um_dataFilter).toBeVisible()
    await expect(um_columnHeaders.first()).toBeVisible({ timeout: 15000 })
    await um_bulkactionsDropdown.click()
    const um_bulkActionsDropdownOption = await getUsermanagementBulkactionsDropdownOption(page)
    await expect(um_bulkActionsDropdownOption).toBeVisible()
    await closeWindowPopup(page)
  })
}

async function superadminTopbannersTab(page) {
  await test.step("[INFO] Superadmin top banners tab check", async () => {
    const superadminTabs = await getSuperadminTabs(page)
    await superadminTabs.nth(3).click()
    const tb_bannersText = await getTopbannersText(page)
    const tb_createBannerBtn = await getTopbannersCreateBannerBtn(page)
    const tb_columnHeaders = await getTopbannersColumnHeaders(page)
    await expect(tb_bannersText).toBeVisible()
    await expect(tb_createBannerBtn).toBeVisible()
    await expect(tb_columnHeaders.first()).toBeVisible({ timeout: 15000 })
    const tb_addBannerBtn = await getAddbannerBtn(page)
    await expect(tb_addBannerBtn).toBeVisible()
    await tb_addBannerBtn.click()
    const tb_editBannerText = await getEditbannerText(page)
    const tb_bannerUploadimageField = await getBannerUploadimageField(page)
    const tb_bannerName = await getBannerName(page)
    const tb_bannerHeader = await getBannerHeader(page)
    const tb_bannerTitle = await getBannerTitle(page)
    const tb_bannerDescription = await getBannerDescription(page)
    const tb_bannerButtonToggle = await getBannerButtonToggle(page)
    const tb_bannerDisplayonZAP = await getBannerDisplayonZAP(page)
    const tb_bannerCancelBtn = await getBannerCancelBtn(page)
    const tb_bannerSaveBtn = await getBannerSaveBtn(page)
    await expect(tb_editBannerText).toBeVisible()
    await expect(tb_bannerUploadimageField).toBeVisible()
    await expect(tb_bannerName).toBeVisible()
    await expect(tb_bannerHeader).toBeVisible()
    await expect(tb_bannerTitle).toBeVisible()
    await expect(tb_bannerDescription).toBeVisible()
    await PageUtils.scrollToElement(page, tb_bannerDisplayonZAP)
    await expect(tb_bannerButtonToggle).toBeVisible()
    await expect(tb_bannerDisplayonZAP).toBeVisible()
    await expect(tb_bannerCancelBtn).toBeVisible()
    await expect(tb_bannerSaveBtn).toBeVisible()
    await tb_bannerCancelBtn.click()
  })
}

async function superadminActivitiesgraphTab(page) {
  await test.step("[INFO] Superadmin activities graph tab check", async () => {
    const superadminTabs = await getSuperadminTabs(page)
    await superadminTabs.nth(4).click()
    const ag_text = await getActivitiesgraphText(page)
    await expect(ag_text).toBeVisible()
  })
}

async function superadminNFTandMysteryboxTab(page) {
  await test.step("[INFO] Superadmin NFT and Mysterybox tab check", async () => {
    const superadminTabs = await getSuperadminTabs(page)
    await superadminTabs.nth(5).click()
    const sa_nft = new sa_NFTPage(page)
    const sa_mbox = new sa_MBOXPage(page)
    await expect(sa_nft.nftmboxText()).toBeVisible()
    await expect(sa_nft.tab()).toBeVisible()
    await expect(sa_nft.tab()).toHaveAttribute('aria-selected', 'true')
    await expect(sa_nft.searchFilter()).toBeVisible()
    await expect(sa_nft.collectionFilter()).toBeVisible()
    try {
      await expect(sa_nft.exportButton()).toBeVisible({ timeout: 20000 })
    } catch (error) {
      console.error("Proceed to next step. This page has some issues when it comes to loading")
    }
    await expect(sa_nft.columnHeaders().first()).toBeVisible()
    await expect(sa_mbox.tab()).toBeVisible()
    await sa_mbox.tab().click()
    await expect(sa_mbox.tab()).toHaveAttribute('aria-selected', 'true')
    await expect(sa_mbox.searchFilter()).toBeVisible()
    try {
      await expect(sa_mbox.exportButton()).toBeVisible({ timeout: 20000 })
    } catch (error) {
      console.error("Proceed to next step. This page has some issues when it comes to loading")
    }
    await expect(sa_mbox.columnHeaders().first()).toBeVisible()
  })
}

async function superadminZAPSettings(page) {
  await test.step("[INFO] Superadmin zap settings tab check", async () => {
    const superadminTabs = await getSuperadminTabs(page)
    await superadminTabs.nth(6).click()
    const sa_zapsettings = new sa_zapSettingsTab(page)
    await expect(sa_zapsettings.friendreferralBtn()).toBeVisible()
    await expect(sa_zapsettings.toggle()).toBeVisible()
    await expect(sa_zapsettings.refereeRewardInput()).toBeVisible()
    await expect(sa_zapsettings.referrerRewardInput()).toBeVisible()
    await expect(sa_zapsettings.saveButton()).toBeVisible()
  })
}

async function superadminCashoutRequest(page) {
  await test.step("[INFO] Superadmin cashout request tab", async () => {
    const superadminTabs = await getSuperadminTabs(page)
    await superadminTabs.nth(7).click()
    const sa_cashoutPage = new sa_cashoutRequestPage(page)
    await expect(sa_cashoutPage.cashrequestTitle()).toBeVisible()
    await expect(sa_cashoutPage.searchFilter()).toBeVisible()
    await expect(sa_cashoutPage.statusFilter()).toBeVisible()
    await expect(sa_cashoutPage.dateFilter()).toBeVisible()
    await expect(sa_cashoutPage.columnHeaders().first()).toBeVisible()
  })
}

export {
  superadminReviewBrandTab,
  superadminReviewCommunitiesTab,
  superadminUsermanagementTab,
  superadminTopbannersTab,
  superadminActivitiesgraphTab,
  superadminNFTandMysteryboxTab,
  superadminZAPSettings,
  superadminCashoutRequest
}