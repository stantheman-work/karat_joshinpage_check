import { getBrand24karatOption, getBrandSelectDropdown } from "@/specs/general/dashboard.locator"
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

import { AuthUtils } from "@/utils/auth-utils"
import { waitForPageToLoad } from "@/utils/load-helper"
import { test, expect, Page } from "@playwright/test"

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
  })
}

export {
  superadminReviewBrandTab,
  superadminReviewCommunitiesTab,
  superadminUsermanagementTab
}