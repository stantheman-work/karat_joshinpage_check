import {
  closeWindowPopup,
  addDataOnTextfield
} from "@/utils/keyboard-helper"
import {
  getBrandEditButton,
  getBrandCommunityTabs,
  getBrandCustomizehomeBtn,
  getBrandSearchFilter,
  getBrandCommunityEditBtn,
  getBrand24karatCommunityVisibilitySettingBtn,
  getBrand24karatFilterResultSettingBtn
} from "@/specs/general/dashboard.locator"
import {
  brandInfo
} from "@/specs/general/brandinfo.locator"
import {
  communityInfoPage
} from "@/specs/general/communityinfo.locator"
import {
  customizeHome_Announcement
} from "@/specs/general/customizehome/announcement.locator"
import {
  customizeHome_Fanvoices
} from "@/specs/general/customizehome/fanvoices.locator"
import {
  customizeHome_FriendReferral
} from "@/specs/general/customizehome/friendreferral.locator"
import {
  customizeHome_Instagramsetting
} from "@/specs/general/customizehome/instagramsetting.locator"
import {
  customizeHome_ProductShowcase
} from "@/specs/general/customizehome/productshowcase.locator"
import {
  customizeHome_userStatus
} from "@/specs/general/customizehome/userstatus.locator"
import {
  visibilitySetting
} from "@/specs/general/visibilitysetting.locator"
import { AuthUtils } from "@/utils/auth-utils"
import {
  scrollToElement,
  waitForUIReady
} from "@/utils/load-helper"
import {
  expect,
  test
} from "@playwright/test"
import {
  getInviteMemberAccessDropdown,
  getInviteMemberEmailInput,
  getInviteMemberHeaderText,
  getInviteMemberSendBtn,
  getInviteMemberViaLinkBtn,
  getMemberColumnHeader,
  getMemberInviteBtn,
} from "../general/member.locator"
import {
  getViewDetailLink,
  getViewDetailHeaderText
} from "../general/logs.locator"
import { inputDataForTextfields } from "@/utils/data-utils"
import {
  create_FriendReferral,
  create_productShowcase,
  create_userStatus
} from "@/functions/create-functions"
import {
  redirect_24karatCommunity
} from "@/functions/redirect-functions"

/* 
  There are times where clicking save button returns an error message.
  The goal of this script is to verify whether all save buttons are working or not
*/
export async function brandDashboardSaveBtnCheck(page) {
  await test.step("[INFO] Brand dashboard page save buttons check", async () => {
    await test.step("[INFO] Check save buttons in communities tab", async () => {

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

      // Customize home page

      await test.step("[INFO] Check save buttons inside customize home button", async () => {
        let announcementFlag
        const customizeHomeBtn = await getBrandCustomizehomeBtn(page)
        const comm_searchFilter = await getBrandSearchFilter(page)
        await expect(comm_searchFilter).toBeVisible({ timeout: 15000 })
        await redirect_24karatCommunity(page)
        const searchResult = await getBrand24karatFilterResultSettingBtn(page)
        await expect(searchResult).toBeVisible({ timeout: 15000 })
        await searchResult.click()

        // Announcement
        const ch_announce = new customizeHome_Announcement(page)
        await waitForUIReady(page)
        await expect(ch_announce.topOfTokenPageTab()).toBeVisible()
        await expect(ch_announce.topOfTokenPageTab()).toHaveAttribute('aria-selected', 'true')
        await expect(ch_announce.bottomOfTokenPageTab()).toBeVisible()
        await expect(ch_announce.customizeHomeTablist().first()).toBeVisible()
        await expect(ch_announce.disableAllBtn().first()).toBeVisible()
        await expect(ch_announce.saveOrderBtn().first()).toBeVisible()
        await test.step("Checks whether this community has an existing announcement", async () => {
          for (let ctr = 0; ctr < 2; ctr++) {
            if (ctr === 1) {
              await ch_announce.bottomOfTokenPageTab().click()
            }
            try {
              // Check whether this community has an existing announcement or none
              await expect(ch_announce.addNewFromAnnouncementListBtn()).toBeVisible()
              announcementFlag = false
            } catch (error) {
              await expect(ch_announce.addNewTopBtn()).toBeVisible()
              announcementFlag = true
            }
            if (announcementFlag === true) {
              console.log("Community has an existing announcement")
              await expect(ch_announce.settingsBtn()).toBeVisible()
              ch_announce.settingsBtn().click()
              await expect(ch_announce.settingsOptionsList().first()).toBeVisible({ timeout: 15000 })
              await expect(ch_announce.settingsOptionsList().last()).toBeVisible()
              ch_announce.settingsOptionsList().last().click()
              // Now inside existing announcement edit page
              await expect(ch_announce.infoBannerImg()).toBeVisible({ timeout: 15000 })
              await expect(ch_announce.infoTitle()).toBeVisible()
              await expect(ch_announce.infoContentTypeDropdown()).toBeVisible()
              await expect(ch_announce.infoPositionDropdown()).toBeVisible()
              await expect(ch_announce.infoCustomizeContent()).toBeVisible()
              await expect(ch_announce.infoPreview()).toBeVisible()
              await expect(ch_announce.infoCancelBtn()).toBeVisible()
              await expect(ch_announce.infoSaveBtn()).toBeVisible()
              ch_announce.infoSaveBtn().click()
              await expect(ch_announce.topOfTokenPageTab()).toBeVisible({ timeout: 15000 })
            } else {
              console.log("Community has no existing announcement")
            }
          }
        })
        // Fan voices
        await test.step("Check fan voices tab", async () => {
          const ch_announce = new customizeHome_Announcement(page)
          await ch_announce.customizeHomeTablist().nth(1).click()
          await expect(ch_announce.customizeHomeTablist().nth(1)).toHaveAttribute('aria-selected', 'true', { timeout: 15000 })
          const ch_fanvoices = new customizeHome_Fanvoices(page)
          await expect(ch_fanvoices.onoffToggle()).toBeVisible({ timeout: 15000 })
          await expect(ch_fanvoices.headerText()).toBeVisible()
          await expect(ch_fanvoices.sourceMaterialText()).toBeVisible({ timeout: 15000 }) // for some reason, this is not being visible
          await scrollToElement(page, ch_fanvoices.addMissionBtn())
          await expect(ch_fanvoices.addMissionBtn()).toBeVisible({ timeout: 15000 })
          await expect(ch_fanvoices.saveBtn()).toBeVisible()
          ch_fanvoices.saveBtn().click()
          await expect(ch_fanvoices.pleaseWaitPopup()).toBeVisible({ timeout: 15000 })
          await expect(ch_fanvoices.pleaseWaitPopup()).toBeHidden({ timeout: 15000 })
        })
        // Showoff on Instagram
        await test.step("Check instagram settings tab", async () => {
          const ch_announce = new customizeHome_Announcement(page)
          await ch_announce.customizeHomeTablist().nth(2).click()
          await expect(ch_announce.customizeHomeTablist().nth(2)).toHaveAttribute('aria-selected', 'true', { timeout: 15000 })
          const ch_igsetting = new customizeHome_Instagramsetting(page)
          await expect(ch_igsetting.headerText()).toBeVisible({ timeout: 15000 })
          try {
            await expect(ch_igsetting.onoffToggle()).toHaveAttribute('value', 'true', { timeout: 15000 })
          } catch (error) {
            // turn on toggle if it is off
            await expect(ch_igsetting.onoffToggle()).toHaveAttribute('value', 'false', { timeout: 15000 })
            ch_igsetting.onoffToggle().click()
          }
          await expect(ch_igsetting.hashtagTextfield()).toBeVisible({ timeout: 15000 })
          await expect(ch_igsetting.viewOnInstagramBtn()).toBeVisible()
          await expect(ch_igsetting.featuredpostsText()).toBeVisible()
          await expect(ch_igsetting.postTextfield().first()).toBeVisible()
          await expect(ch_igsetting.addContentBtn()).toBeVisible()
          await expect(ch_igsetting.saveBtn()).toBeVisible()
          try {
            // Instagram post textfield not blank
            await expect(ch_igsetting.postTextfield().first()).not.toHaveValue('')
          } catch (error) {
            // Instagram post textfield is blank
            await ch_igsetting.saveBtn().click()
            await expect(ch_igsetting.popupCancelBtn()).toBeVisible()
            await expect(ch_igsetting.popupSaveBtn()).toBeVisible()
            await ch_igsetting.popupSaveBtn().click()
          }
          await ch_igsetting.saveBtn().click()
          await expect(ch_igsetting.pleaseWaitPopup()).toBeVisible({ timeout: 15000 })
          await expect(ch_igsetting.pleaseWaitPopup()).toBeHidden({ timeout: 15000 })
        })
        
        // Friend referral
        await test.step("Check friend referral tab", async () => {
          const ch_announce = new customizeHome_Announcement(page)
          await ch_announce.customizeHomeTablist().nth(3).click()
          await expect(ch_announce.customizeHomeTablist().nth(3)).toHaveAttribute('aria-selected', 'true', { timeout: 15000 })
          const ch_friendRefer = new customizeHome_FriendReferral(page)
          await waitForUIReady(page)
          await expect(ch_friendRefer.onoffToggle()).toBeVisible()
          await expect(ch_friendRefer.headerText()).toBeVisible()
          try {
            // toggle is ON
            await expect(ch_friendRefer.onoffToggle()).toBeChecked()
          } catch (error) {
            // toggle is OFF
            await ch_friendRefer.onoffToggle().click()
            await expect(ch_friendRefer.onoffToggle()).toBeChecked()
          }
          await create_FriendReferral(page) // Create new friend referral process
          await waitForUIReady(page)
          // turn off the switch
          await ch_friendRefer.onoffToggle().click()
          await ch_friendRefer.savebtn().click()
          await ch_friendRefer.onoffToggle().click({ trial: true, timeout: 30000 });
          await expect(ch_friendRefer.onoffToggle()).toBeVisible({ timeout: 15000 })
          await waitForUIReady(page)
        })
        // Products showcase
        await test.step("Check products showcase tab", async () => {
          const ch_announce = new customizeHome_Announcement(page)
          await ch_announce.customizeHomeTablist().nth(4).click()
          await expect(ch_announce.customizeHomeTablist().nth(4)).toHaveAttribute('aria-selected', 'true', { timeout: 15000 })
          await page.waitForLoadState('networkidle')
          const ch_product = new customizeHome_ProductShowcase(page)
          await expect(ch_product.toggleBtn()).toBeVisible({ timeout: 15000 })
          await expect(ch_product.toggleBtn()).toBeEnabled({ timeout: 15000 })
          await waitForUIReady(page)
          // Tests whether toggle works fine
          try {
            // If toggle = ON, class contains text Mui-checked
            // Afterwards, click it again to return to original state
            await expect(ch_product.toggleBtn()).toHaveClass(/Mui-checked/)
            await ch_product.toggleBtn().click() 
          } catch (error) {
            // Else, turn it ON
            // Afterwards, click it again to return to original state
            await ch_product.toggleBtn().click()
          }
          await waitForUIReady(page)
          await ch_product.toggleBtn().click()
          await waitForUIReady(page)
          await create_productShowcase(page) // start creation process
          await waitForUIReady(page)
          await expect(ch_product.productEditDeleteBtn().first()).toBeVisible()
          await expect(ch_product.productEditDeleteBtn().last()).toBeVisible()
          await waitForUIReady(page)
        })

        // User status
        await test.step("Check user status tab", async () => {
          const ch_announce = new customizeHome_Announcement(page)
          await ch_announce.customizeHomeTablist().nth(5).click()
          await expect(ch_announce.customizeHomeTablist().nth(5)).toHaveAttribute('aria-selected', 'true', { timeout: 15000 })
          // start in user status page
          const ch_userStat = new customizeHome_userStatus(page)
          // After clicking, a pop up appears. Wait for the add button to be shown
          let waitFlag = false
          while (waitFlag === false) {
            try {
              await expect(ch_userStat.toggleBtn()).toBeVisible({ timeout: 15000 })
              waitFlag = true
            } catch (error) {
              // Do nothing. Still saving, wait for more time
            }
          }
          await expect(ch_userStat.headerText()).toBeVisible()
          await expect(ch_userStat.title()).toBeVisible()
          // Check whether customized home is selected
          try {
            // Radio button is selected
            await expect(ch_userStat.statusCustomizedRadioBtn()).toBeChecked()
            await expect(ch_userStat.customizerank_editBtn()).toBeVisible()
            await ch_userStat.customizerank_editBtn().click()
          } catch (error) {
            // Radio button is not selected
            await ch_userStat.statusCustomizedRadioBtn().click()
            await expect(ch_userStat.statusCustomized_customizeBtn()).toBeVisible()
            await ch_userStat.statusCustomized_customizeBtn().click()
          }
          await create_userStatus(page)
          await expect(ch_userStat.customizerank_saveBtn().first()).toBeVisible()
          await scrollToElement(page, ch_userStat.customizerank_saveBtn().first())
          await ch_userStat.customizerank_saveBtn().first().click()
          await waitForUIReady(page)
        })
        await page.goto(`/${AuthUtils.getDefaultBrand().id}`) // use this temporarily because back button has an issue
        let waitFlag = false
          while (waitFlag === false) {
            try {
              const communityEditBrandBtn = await getBrandEditButton(page)
              await expect(communityEditBrandBtn).toBeVisible({ timeout: 15000 })
              waitFlag = true
            } catch (error) {
              // Do nothing.
            }
          }
      })
      // Visibility setting page
      await test.step("Check visibility setting page", async () => {
        await redirect_24karatCommunity(page)
        const visibilitySettingBtn = await getBrand24karatCommunityVisibilitySettingBtn(page)
        await expect(visibilitySettingBtn).toBeVisible({ timeout: 15000 })
        await visibilitySettingBtn.click()
        const visibleSetting = new visibilitySetting(page)
        await expect(visibleSetting.headerText()).toBeVisible()
        await expect(visibleSetting.setting_options().first()).toBeVisible()
        await expect(visibleSetting.setting_options().nth(1)).toBeVisible()
        await expect(visibleSetting.setting_options().last()).toBeVisible()
        await expect(visibleSetting.saveBtn()).toBeVisible()
        await visibleSetting.saveBtn().click()
        //await expect(visibleSetting.pleaseWaitPopup()).toBeVisible({ timeout: 15000 })
        await expect(visibleSetting.pleaseWaitPopup()).toBeHidden({ timeout: 15000 })
        await waitForUIReady(page)
        const communityEditBrandBtn = await getBrandEditButton(page)
        await expect(communityEditBrandBtn).toBeVisible({ timeout: 15000 })
      })
    })
  })

  await test.step("[INFO] Check save buttons in members tab", async () => {
    await waitForUIReady(page)
    const memberTab = (await getBrandCommunityTabs(page))[1]
    await expect(memberTab).toBeVisible()
    await memberTab.click()
    await expect(memberTab).toHaveAttribute('aria-selected', 'true')
    await page.reload()
    const memberColumnHeader = await getMemberColumnHeader(page)
    await expect(memberColumnHeader.first()).toBeVisible({ timeout: 20000 })
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
  await test.step("[INFO] Check save buttons in logs tab", async () => {
    const logsTab = (await getBrandCommunityTabs(page))[2]
    await expect(logsTab).toBeVisible()
    await logsTab.click()
    await waitForUIReady(page)
    await expect(logsTab).toHaveAttribute('aria-selected', 'true')
    const logsViewDetailLink = (await getViewDetailLink(page)).nth(0)
    await expect(logsViewDetailLink).toBeVisible({ timeout: 15000 })
    await logsViewDetailLink.click()
    const vd_headerText = await getViewDetailHeaderText(page)
    await expect(vd_headerText).toBeVisible()
    await closeWindowPopup(page)
  })
}