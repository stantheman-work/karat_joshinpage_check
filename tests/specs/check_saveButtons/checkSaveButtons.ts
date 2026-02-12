import {
  closeWindowPopup
} from "@/utils/keyboard-helper"
import {
  getBrandEditButton,
  getBrandCommunityCreateBtn,
  getBrandCommunityTabs,
  getBrandSearchFilter,
  getBrandVisibilityFilter,
  getBrandStatusFilter,
  getBrandCommunityColumnHeaders,
  getSideBarItems,
  getSideBarParentMenu,
  getBrandCommunityEditBtn
} from "@/specs/general/dashboard.locator"
import {
  brandInfo
} from "@/specs/general/brandinfo.locator"
import {
  communityInfoPage
} from "@/specs/general/communityinfo.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { 
  scrollToElement, 
  waitForAnElement, 
  waitForPageToLoad 
} from "@/utils/load-helper"
import { PageUtils } from "@/utils/page-utils"
import { 
  expect, 
  Page, 
  test 
} from "@playwright/test"
import { 
  getInviteMemberAccessDropdown,
  getInviteMemberEmailInput,
  getInviteMemberHeaderText,
  getInviteMemberSendBtn,
  getInviteMemberViaLinkBtn,
  getMemberColumnHeader,
  getMemberDateFilter,
  getMemberDateJoinedFilter,
  getMemberInviteBtn,
  getMemberRoleFilter,
  getMemberRoleSelectFilter,
  getMemberSearchFilter,
  getMemberSearchUserFilter
} from "../general/member.locator"
import { 
  getLogsColumnHeader, 
  getLogsRefreshBtn, 
  getLogsSearchFilter,
  getViewDetailLink,
  getViewDetailHeaderText
} from "../general/logs.locator"

/* 
  There are times where clicking save button returns an error message.
  The goal of this script is to verify whether all save buttons are working or not
*/
async function brandDashboardSaveBtnCheck(page) {
  await test.step("[INFO] Brand dashboard page save buttons check", async () => {
    await test.step("[INFO] Check save buttons in communities tab", async () =>  {
      await test.step("[INFO] Check elements and save button while editing brand", async () => {
        const communityEditBrandBtn = await getBrandEditButton(page)
        await expect(communityEditBrandBtn).toBeVisible()
        await communityEditBrandBtn.click()
        const bi_Elements = new brandInfo(page)
        await expect(bi_Elements.backBtn()).toBeVisible()
        await expect(bi_Elements.editBrandText()).toBeVisible()
        await expect(bi_Elements.image()).toBeVisible({ timeout: 15000 })
        await expect(bi_Elements.name()).toBeVisible()
        await expect(bi_Elements.description()).toBeVisible()
        await expect(bi_Elements.cancelBtn()).toBeVisible()
        await expect(bi_Elements.saveBtn()).toBeVisible()
        await expect(bi_Elements.addCategoryBtn()).toBeVisible()
        await expect(bi_Elements.webLinks().nth(1)).toBeVisible()
        await expect(bi_Elements.webLinks().nth(2)).toBeVisible()
        await expect(bi_Elements.webLinks().nth(3)).toBeVisible()
        await expect(bi_Elements.webLinks().nth(4)).toBeVisible()
        await expect(bi_Elements.webLinks().nth(5)).toBeVisible()
        await expect(bi_Elements.webLinks().nth(6)).toBeVisible()
        await bi_Elements.saveBtn().click()
        await expect(communityEditBrandBtn).toBeVisible({ timeout: 15000 })
      })
      await test.step("[INFO] Check elements and save button while editing community", async () => {
        const communityEditBtn = await getBrandCommunityEditBtn(page)
        await expect(communityEditBtn.first()).toBeVisible({ timeout: 15000 })
        await communityEditBtn.first().click()
        const ci_Elements = new communityInfoPage(page)
        await expect(ci_Elements.backToDashboardBtn()).toBeVisible({ timeout: 15000 }) // added timeout in case the page loads slowly
        await expect(ci_Elements.imgUploadFile().first()).toBeVisible() // Community image
        await expect(ci_Elements.name()).toBeVisible()
        await expect(ci_Elements.imgUploadFile().last()).toBeVisible() // Community banner add button
        await expect(ci_Elements.brandInfoEdit()).toBeVisible()
        await expect(ci_Elements.description()).toBeVisible()
        await expect(ci_Elements.addANewSection()).toBeVisible()
        await ci_Elements.addANewSection().click()
        await expect(ci_Elements.sectionName()).toBeVisible({ timeout: 15000 })
        await expect(ci_Elements.sectionContent()).toBeVisible()
        await expect(ci_Elements.cancelBtn()).toBeVisible()
        await expect(ci_Elements.addSectionBtn()).toBeVisible()
        await ci_Elements.cancelBtn().click()
        await expect(ci_Elements.preview()).toBeVisible({ timeout: 15000 })
        await expect(ci_Elements.nextBtn()).toBeVisible()
        await ci_Elements.nextBtn().click()
        await expect(ci_Elements.enableTokenToggle()).toBeVisible()
        let toggleFlag = false
        try {
          await expect(ci_Elements.enableTokenToggle()).toBeChecked();     // ON
          toggleFlag = true
        } catch (error) {
          await expect(ci_Elements.enableTokenToggle()).not.toBeChecked(); // OFF
        }
        if (toggleFlag === true) {
          await test.step("[INFO] Token toggle is ON", async () => {
            await ci_Elements.enableTokenToggle().click()
            await expect(ci_Elements.tokenDoublecheckBtn()).toBeVisible()
            await expect(ci_Elements.tokenGoBackBtn()).toBeVisible()
            await ci_Elements.tokenGoBackBtn().click()
          })
        } else {
          await test.step("[INFO] Token toggle is OFF", async () => {
            await ci_Elements.enableTokenToggle().click()
            await expect(ci_Elements.tokenName()).toBeVisible()
          })
        }
        await expect(ci_Elements.backBtn()).toBeVisible()
        await expect(ci_Elements.saveBtn()).toBeVisible()
        await ci_Elements.saveBtn().click()
        await expect(ci_Elements.confirmCreateCancelBtn()).toBeVisible()
        await expect(ci_Elements.confirmCreateUpdateBtn()).toBeVisible()
        await ci_Elements.confirmCreateUpdateBtn().click()
        const communityEditBrandBtn = await getBrandEditButton(page)
        await expect(communityEditBrandBtn).toBeVisible({ timeout: 15000 }) // added timeout in case the page loads slowly
      })
      // Add settings and visibility checks here
    })
    await test.step("[INFO] Check save buttons in members tab", async () =>  {
      const memberTab = (await getBrandCommunityTabs(page))[1]
      await expect(memberTab).toBeVisible()
      await memberTab.click()
      await expect(memberTab).toHaveAttribute('aria-selected', 'true')
      const memberColumnHeader = await getMemberColumnHeader(page)
      await expect(memberColumnHeader.first()).toBeVisible({ timeout: 15000 })
      // const memberColumnHeader = (await getMemberColumnHeader(page))[0]
      // await expect(memberColumnHeader).toBeVisible({ timeout: 15000 }) // This locator doesn't load automatically
      const inviteMemberBtn = await getMemberInviteBtn(page)
      await inviteMemberBtn.click()
      const im_headerText = await getInviteMemberHeaderText(page)
      const im_emailInput = await getInviteMemberEmailInput(page)
      const im_memberAccessDropdown = await getInviteMemberAccessDropdown(page)
      const im_inviteViaLinkBtn = await getInviteMemberViaLinkBtn(page)
      const im_inviteBtn = await getInviteMemberSendBtn(page)
      await expect(im_headerText).toBeVisible()
      await expect(im_emailInput).toBeVisible()
      await expect(im_memberAccessDropdown).toBeVisible()
      await expect(im_inviteViaLinkBtn).toBeVisible()
      await expect(im_inviteBtn.last()).toBeVisible()
      await closeWindowPopup(page)
    })
    await test.step("[INFO] Check save buttons in logs tab", async () =>  {
      const logsTab = (await getBrandCommunityTabs(page))[2]
      await expect(logsTab).toBeVisible()
      await logsTab.click()
      await expect(logsTab).toHaveAttribute('aria-selected', 'true')
      const logsViewDetailLink = (await getViewDetailLink(page)).nth(0)
      await expect(logsViewDetailLink).toBeVisible({ timeout: 15000 })
      await logsViewDetailLink.click()
      const vd_headerText = await getViewDetailHeaderText(page)
      await expect(vd_headerText).toBeVisible()
      await closeWindowPopup(page)
    })
  })
}

export {
  brandDashboardSaveBtnCheck
}