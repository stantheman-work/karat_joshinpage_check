import {
  closeWindowPopup
} from "@/utils/keyboard-helper"
import {
  getActivitygraphCategoryTab,
  getActivitygraphExportBtn,
  getActivitygraphNoData,
  getActivitygraphLeftRightBtn,
  getActivitygraphText,
  getActivitygraphTokenDropdown,
  getActivitygraphTotalWalletText,
  getActivitygraphYearDropdown
} from "@/locators/activitygraph.locator"
import {
  getArticleColumnHeader,
  getArticleCreateBtn,
  getArticleSearchFilter,
  getArticleStatusDropdown,
  getArticleTagDropdown,
  getArticleText
} from "../contents/article/article.locator"
import {
  getCampaignColumnHeader,
  getCampaignCreateBtn,
  getCampaignSearchFilter,
  getCampaignText,
  getCampaignTypeFilter
} from "@/specs/campaign/campaign.locator"
import { 
  getInsightsMenuSelected
} from "@/locators/insights.locator"
import {
  getBrandEditButton,
  getBrandCommunityCreateBtn,
  getBrandCommunityTabs,
  getBrandSearchFilter,
  getBrandVisibilityFilter,
  getBrandStatusFilter,
  getBrandCommunityColumnHeaders,
  getSideBarItems,
  getSideBarParentMenu
} from "@/specs/general/dashboard.locator"
import {
  getDevAPIEditBtn,
  getDevAPIKeysText,
  getDevColumnHeaders,
  getDevCreateNewAPIBtn
} from "../developer-tool/developer-apikey/developer-apikey.locator"
import {
  getGamecornerColumnHeaders,
  getGamecornerCreateGameBtn,
  getGamecornerSearchFilter,
  getGamecornerStatusFilter,
  getGamecornerText,
  getGamecornerCommunityFilter
} from "@/specs/contents/game-corner/game-corner.locator"
import {
  getLeaderboardColumnHeader,
  getLeaderboardSearchFilter,
  getLeaderboardStatusRoleFilter,
  getLeaderboardText,
  getLeaderboardTokenDropdown
} from "@/locators/leaderboard.locator"
import {
  getUsersearchText, 
  getUsersearchAllcommunitiesDropdown,
  getUsersearchSearchfilter,
  getUsersearchSearchBy,
  getUsersearchSearchBtn
} from "@/specs/reports/usersearch.locator"
import {
  getLINELIFFAppColumnHeaders,
  getLINELIFFAppCreateBtn,
  getLINELIFFAppSearchFilter,
  getLINELIFFAppText
} from "@/locators/lineliffappsetting.locator"
import { getLogsColumnHeader, getLogsRefreshBtn, getLogsSearchFilter } from "@/specs/general/logs.locator"
import {
  getAirdropColumnHeader,
  getAirdropCreatebtn,
  getAirdropTab,
  getMessageColumnHeader,
  getMessageCreateBtn,
  getMessageTab,
  getMessageText
} from "@/specs/message/message.locator"
import {
  getDropdownFilters,
  getMissionCardListView,
  getMissionCreateBtn,
  getMissionSearchFilter,
  getMissionText,
  getMissionSettingsBtn
} from "@/specs/contents/mission/mission.locator"
import {
  getCommunitypostColumnHeaders,
  getCommunityFilter,
  getCommunitypostCreatePost,
  getSearchFilter,
  getCommunitypostTab,
  getFeedText,
  getSocialpostAccountBtn,
  getSocialpostColumnHeaders,
  getSocialpostDateFilter,
  getSocialpostRefreshBtn,
  getSocialpostSourcesFilter,
  getSocialpostTab
} from "../contents/feed/feed.locator"
import {
  getNFTSearchNFTFilter,
  getNFTSelectionModeToggle,
  getNFTCollectionFilter,
  getNFTCommunityFilter,
  getNFTCreateBtn,
  getNFTColumnHeader,
  getNFTCreateMoreOptionsDropdown,
  getNFTCreateMoreOptionsDropdownItems,
  getNFTMoreOptions
} from "../digital-item/nft/nft.locator"
import {
  getCollectionManagementBtn
} from "../digital-item/nft/collectionmanagement.locator"
import {
  getEditMysteryboxText,
  getMysteryboxColumnHeader,
  getMysteryboxCommunityFilter,
  getMysteryboxCreatebtn,
  getMysteryboxSearchFilter,
  getMysteryboxSettingToggle,
  getMysteryboxSettingToggleOptions,
  getMysteryboxText,
  getMysteryboxSelectionModeToggle
} from "../digital-item/mysterybox/mysterybox.locator"
import {
  getProposalCheckSubmissionBtn,
  getProposalColumnHeader,
  getProposalStatusDropdown,
  getProposalText
} from "@/locators/proposal.locator"
import {
  getQuizColumnHeader,
  getQuizCreateBtn,
  getQuizSearchFilter,
  getQuizTemplateBtn,
  getQuizText,
  getQuizUploadBtn
} from "@/specs/contents/quiz/quiz.locator"
import { 
  getSalesreportText, 
  getSalesreportColumnHeader
} from "@/specs/reports/salesreport.locator"
import { 
  getScanColumnHeader, 
  getScanNewScanBtn, 
  getScanText
} from "@/locators/scans.locator"
import {
  getSocialroomCardHeader,
  getSocialroomCardSettingBtn,
  getSocialroomCreateroomBtn,
  getSocialroomSearchFilter,
  getSocialroomText,
  getSocialroomCommunityFilter
} from "@/specs/contents/social room/social-room.locator"
import {
  getVideoText,
  getVideoSearchFilter,
  getVideoAddBtn,
  getVideoColumnHeader
} from "@/specs/contents/video/video.locator"
import {
  getStamppassportColumnHeader,
  getStamppassportCreateBtn,
  getStamppassportSearchFilter,
  getStamppassportText
} from "../digital-item/stamppassport/stamp-passport.locator"
import {
  getSurveyColumnHeader,
  getSurveyCreateBtn,
  getSurveySearchFilter,
  getSurveyTemplateBtn,
  getSurveyText,
  getSurveyUploadBtn
} from "@/specs/contents/survey/survey.locator"
import {
  getMemberInviteBtn,
  getMemberSearchFilter,
  getMemberRoleFilter,
  getMemberDateJoinedFilter,
  getMemberColumnHeader
} from "@/specs/general/member.locator"
import {
  getVMMysteryboxColumnHeader,
  getVMMysteryboxSearchBoxFilter,
  getVMMysteryboxTab,
  getVMNFTColumnHeader,
  getVMNFTSearchNFTFilter,
  getVMNFTtab
} from "@/locators/vendingmachine.locator"
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
  getExternalcollabDashboardColumnHeader,
  getExternalcollabDashboardSearchFilter,
  getExternalcollabInboxComposeMessageBtn,
  getExternalcollabInboxMessageArea,
  getExternalcollabInboxSearchFilter,
  getExternalCollaborateBtn,
  getExternalcollabPartnermatchColumnHeader,
  getExternalcollabPartnermatchNotificationWindow,
  getExternalcollabPartnermatchNotificationXBtn,
  getExternalcollabPartnermatchSearchFilter,
  getExternalcollabSettingBtn,
  getExternalcollabTabs,
  getExternalcollabText,
  getExternalcollabCommunityDropdown
} from "../collaboration/external/external.locator"
import {
  getInternalcollabAddCollabBtn,
  getInternalcollabColumnHeader,
  getInternalcollabText,
} from "../collaboration/internal/internal.locator"

test.setTimeout(120_000)
test.describe("Sanity Check", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test("Sanity Check", async ({ page }) => {
    await PageUtils.gotoToHome(page)

    await brandDashboardSanity(page)
  })
})

async function brandDashboardSanity(page: Page) {
  console.log("[INFO] Brand Dashboard Sanity start")

  // Click dropdown
  const parentMenu = await getSideBarParentMenu(page)
  for (let i = 0; i < parentMenu.length; i++) {
    await waitForPageToLoad(page)
    await scrollToElement(page, parentMenu[i])
    await parentMenu[i].click()
  }

  // Access all pages and check if it is working fine
  const subMenu = await getSideBarItems(page)
  for (let i = 0; i < subMenu.length; i++) {
    await waitForPageToLoad(page)
    await scrollToElement(page, subMenu[i])
    await subMenu[i].click()
    if (i == 0) {
      // in Home page. Check Community, Member and Logs tab
      await brandHomePageCheck(page)
      await brandCommunityMemberTabCheck(page)
      await brandCommunityLogsTabCheck(page)
    } else if (i == 1) {
      // in NFT page
      await brandNFTPageCheck(page)
    } else if (i == 2) {
      // in NFT page
      await brandMysteryboxPageCheck(page)
    } else if (i == 3) {
      // in Stamp passport page
      await brandStamppassportPageCheck(page)
    } else if (i == 4) {
      // in Vending machine page
      await brandVendingMachinePageCheck(page)
    } else if (i == 5) {
      // in Campaign page
      await brandCampaignPageCheck(page)
    } else if (i == 6) {
      // in Feed page
      await brandFeedPageCheck(page)
    } else if (i == 7) {
      // in Mission page
      await brandMissionPageCheck(page)
    } else if (i == 8) {
      // in Quiz page
      await brandQuizPageCheck(page)
    } else if (i == 9) {
      // in Survey page
      await brandSurveyPageCheck(page)
    } else if (i == 10) {
      // in Proposal page
      await brandProposalPageCheck(page)
    } else if (i == 11) {
      // in Articles page
      await brandArticlePageCheck(page)
    } else if (i == 12) {
      // in Game corner page
      await brandGamecornerPageCheck(page)
    } else if (i == 13) {
      // In Social Room page
      try {
        await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.searchRooms !== undefined, { timeout: 10000 })
        await brandSocialroomPageCheck(page)
      } catch (error) {
        console.log("This community does not have any social rooms")
      }
    } else if (i == 14) {
      // In Video page
      try {
        await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findVideos !== undefined, { timeout: 10000 })
        await brandVideoPageCheck(page)
      } catch (error) {
        console.log("This community does not have any videos")
      }
    } else if (i == 15) {
      // in Messages page
      await brandMessagePageCheck(page)
    } else if (i == 16) {
      // in Insights page
      await brandInsightsPageCheck(page)
    } else if (i == 17) {
      // in Activitygraph page
      try {
        await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.brandStats !== undefined, { timeout: 10000 })
        await brandActivitygraphPageCheck(page)
      } catch (error) {
        console.log("This community does not have any activities")
      }
    } else if (i == 18) {
      // in Leaderboard page
      await brandLeaderboardPageCheck(page)
    } else if (i == 19) {
      // in Leaderboard page
      await brandUsersearchPageCheck(page)
    } else if (i == 20) {
      // in Sales report page
      await brandSalesreportPageCheck(page)
    } else if (i == 21) {
      // in External collab page
      await brandExternalcollabPageCheck(page)
    } else if (i == 22) {
      // in Internal collab page
      await brandInternalcollabPageCheck(page)
    } else if (i == 23) {
      // in Scan page
      await brandScanPageCheck(page)
    } else if (i == 24) {
      // in Developer API Clients page
      await brandDeveloperAPIClientsPageCheck(page)
    } else {
      // in LINE LIFF APP page
      await brandLINELIFFAppSettings(page)
    }
  }
  console.log("[INFO] Brand Dashboard Sanity end.")
}

async function brandHomePageCheck(page) {
  console.log("[INFO] Start community tab check.")
  await waitForPageToLoad(page);
  const comEditBtn = await getBrandEditButton(page)
  const comCreateCommunityBtn = await getBrandCommunityCreateBtn(page)
  const comCommunityTab = (await getBrandCommunityTabs(page))[0]
  const comMemberTab = (await getBrandCommunityTabs(page))[1]
  const comLogsTab = (await getBrandCommunityTabs(page))[2]
  const comSearchFilter = await getBrandSearchFilter(page)
  const comVisibilityFilter = await getBrandVisibilityFilter(page)
  const comStatusFilter = await getBrandStatusFilter(page)
  const comCommunityColumnHeaders = (await getBrandCommunityColumnHeaders(page))[0]
  await expect(comEditBtn).toBeVisible()
  await expect(comCreateCommunityBtn).toBeVisible()
  await expect(comCommunityTab).toBeVisible()
  await expect(comMemberTab).toBeVisible()
  await expect(comLogsTab).toBeVisible()
  await expect(comSearchFilter).toBeVisible()
  await expect(comVisibilityFilter).toBeVisible()
  await expect(comStatusFilter).toBeVisible()
  await expect(comCommunityColumnHeaders).toBeVisible()
  console.log("[INFO] End community tab check.")
}

async function brandCommunityMemberTabCheck(page) {
  console.log("[INFO] Start community member tab check.")
  const comMemberTab = (await getBrandCommunityTabs(page))[1]
  console.log("The value of member tab = " + comMemberTab)
  await expect(comMemberTab).toBeVisible();
  await comMemberTab.click()
  await waitForPageToLoad(page)
  
  const memInviteBtn = await getMemberInviteBtn(page)
  const memSearchFilter = await getMemberSearchFilter(page)
  const memRoleFilter = await getMemberRoleFilter(page)
  const memDateJoinedFilter = await getMemberDateJoinedFilter(page)
  const memColumnHeaders = getMemberColumnHeader(page)
  await expect((await memColumnHeaders).first()).toBeVisible({ timeout: 15000 })
  await expect(memInviteBtn).toBeVisible()
  await expect(memSearchFilter).toBeVisible()
  await expect(memRoleFilter).toBeVisible()
  await expect(memDateJoinedFilter).toBeVisible()
  console.log("[INFO] End community member tab check.")
}

async function brandCommunityLogsTabCheck(page) {
  console.log("[INFO] Start community logs tab check.")
  const comLogsTab = (await getBrandCommunityTabs(page))[2]
  await comLogsTab.click()
  await waitForPageToLoad(page)
  const logsSearchFilter = await getLogsSearchFilter(page)
  const logsRefreshBtn = await getLogsRefreshBtn(page)
  const logsColumnHeader = (await getLogsColumnHeader(page))[0]
  await expect(logsSearchFilter).toBeVisible()
  await expect(logsRefreshBtn).toBeVisible()
  await expect(logsColumnHeader).toBeVisible()
  console.log("[INFO] End community logs tab check.")
}

async function brandNFTPageCheck(page) {
  console.log("[INFO] Start NFT page check.")
  await waitForPageToLoad(page)
  const nftSelectionModeToggle = await getNFTSelectionModeToggle(page)
  const nftSearchNFTFilter = await getNFTSearchNFTFilter(page)
  const nftCollectionFilter = await getNFTCollectionFilter(page)
  const nftCommunityFilter = await getNFTCommunityFilter(page)
  const collectionManagementBtn = await getCollectionManagementBtn(page)
  const nftCreateBtn = await getNFTCreateBtn(page)
  const nftColumnHeader = getNFTColumnHeader(page)
  const nftMoreOptions = getNFTMoreOptions(page)
  await expect(nftSelectionModeToggle).toBeVisible()
  await expect(collectionManagementBtn).toBeVisible()
  await expect(nftCreateBtn).toBeVisible()
  await expect(nftSearchNFTFilter).toBeVisible()
  await expect(nftCollectionFilter).toBeVisible()
  await expect(nftCommunityFilter).toBeVisible()
  await expect((await nftMoreOptions).first()).toBeVisible({timeout: 15000})
  await expect((await nftColumnHeader).first()).toBeVisible()
  await expect((await nftColumnHeader).first()).toHaveText("NFT Name")
  await expect((await nftColumnHeader).first()).toBeVisible()
  const nftCreateMoreOptionsDropdown = await getNFTCreateMoreOptionsDropdown(page)
  await expect(nftCreateMoreOptionsDropdown).toBeVisible()
  await nftCreateMoreOptionsDropdown.click()
  const nftCreateMoreOptionsDropdownItems = (await getNFTCreateMoreOptionsDropdownItems(page))[0]
  await expect(nftCreateMoreOptionsDropdownItems).toBeVisible()
  await closeWindowPopup(page)
  console.log("[INFO] End NFT page check.")
}

async function brandMysteryboxPageCheck(page) {
  console.log("[INFO] Start Mysterybox page check.")
  const mysteryboxText = await getMysteryboxText(page)
  const mysteryboxSelectionModeToggle = await getMysteryboxSelectionModeToggle(page)
  const mysteryboxCreateBtn = await getMysteryboxCreatebtn(page)
  const mysteryboxSearchFilter = await getMysteryboxSearchFilter(page)
  const mysteryboxCommunityFilter = await getMysteryboxCommunityFilter(page)
  const mysteryboxColumnHeader = (await getMysteryboxColumnHeader(page))[0]
  const mysteryboxSettingToggle = await getMysteryboxSettingToggle(page)
  await expect(mysteryboxText).toBeVisible()
  await expect(mysteryboxSelectionModeToggle).toBeVisible()
  await expect(mysteryboxColumnHeader).toHaveText("Box Name")
  await expect(mysteryboxCreateBtn).toBeVisible()
  await expect(mysteryboxSearchFilter).toBeVisible()
  await expect(mysteryboxCommunityFilter).toBeVisible()
  await expect(mysteryboxColumnHeader).toBeVisible()
  await expect(mysteryboxSettingToggle.first()).toBeVisible({ timeout: 15000 })
  await mysteryboxSettingToggle.first().click()
  const mysteryboxSettingToggleOptions = await getMysteryboxSettingToggleOptions(page)
  await expect(mysteryboxSettingToggleOptions.first()).toBeVisible()
  await closeWindowPopup(page)
  console.log("[INFO] End Mysterybox page check.")
}

async function brandStamppassportPageCheck(page) {
  console.log("[INFO] Start stamp passport page check.")
  await waitForPageToLoad(page)
  const stamppassportText = await getStamppassportText(page)
  const stamppassportSearchFilter = await getStamppassportSearchFilter(page)
  const stamppassportCreateBtn = await getStamppassportCreateBtn(page)
  const stamppassportColumnHeader = (await getStamppassportColumnHeader(page))[0]
  await expect(stamppassportText).toHaveText("Stamp passport")
  await expect(stamppassportSearchFilter).toBeVisible()
  await expect(stamppassportCreateBtn).toBeVisible()
  await expect(stamppassportColumnHeader).toBeVisible()
  console.log("[INFO] End stamp passport page check.")
}

async function brandVendingMachinePageCheck(page) {
  console.log("[INFO] Start Vending machine page check.")
  await waitForPageToLoad(page)
  const vmNftTab = await getVMNFTtab(page)
  const vmMysteryboxTab = await getVMMysteryboxTab(page)
  const vmMftSearchNFTFilter = await getVMNFTSearchNFTFilter(page)
  const vmNftColumnHeader = (await getVMNFTColumnHeader(page))[0]
  console.log("Start Vending machine checking NFT tab.")
  await expect(vmNftColumnHeader).toHaveText("NFT Name")
  await expect(vmNftTab).toBeVisible()
  await expect(vmMysteryboxTab).toBeVisible()
  await expect(vmMftSearchNFTFilter).toBeVisible()
  await expect(vmNftColumnHeader).toBeVisible()
  console.log("[INFO] Done checking Vending machine NFT tab.")
  console.log("[INFO] Start checking Vending machine Mysterybox tab.")
  await vmMysteryboxTab.click() // switch to mysterybox tab
  const vmMysteryboxSearchboxFilter = await getVMMysteryboxSearchBoxFilter(page)
  const vmMysteryboxColumnHeader = (await getVMMysteryboxColumnHeader(page))[0]
  await expect(vmNftColumnHeader).toHaveText("Name")
  await expect(vmMysteryboxSearchboxFilter).toBeVisible()
  await expect(vmMysteryboxColumnHeader).toBeVisible()
  console.log("[INFO] Done checking Vending machine Mysterybox tab.")
  console.log("[INFO] End Vending machine page check.")
}

async function brandCampaignPageCheck(page) {
  console.log("[INFO] Start Campaign page check.")
  await waitForPageToLoad(page)
  const campaignText = await getCampaignText(page)
  const campaignCreateBtn = await getCampaignCreateBtn(page)
  const campaignSearchFilter = await getCampaignSearchFilter(page)
  const campaignTypeFilter = await getCampaignTypeFilter(page)
  const campaignColumnHeader = (await getCampaignColumnHeader(page))[0]
  await expect(campaignText).toBeVisible()
  await expect(campaignCreateBtn).toBeVisible()
  await expect(campaignSearchFilter).toBeVisible()
  await expect(campaignTypeFilter).toBeVisible()
  await expect(campaignColumnHeader).toBeVisible()
  console.log("[INFO] End Campaign page check.")
}

async function brandFeedPageCheck(page) {
  console.log("[INFO] Start Feed page check.")
  await waitForPageToLoad(page)
  const feedText = await getFeedText(page)
  console.log("[INFO] Social post tab check start")
  const socialpostTab = await getSocialpostTab(page)
  await socialpostTab.click();
  const socialpostRefreshBtn = await getSocialpostRefreshBtn(page)
  const socialpostAccountBtn = await getSocialpostAccountBtn(page)
  const socialpostSearchFilter = await getSearchFilter(page)
  const socialpostDateFilter = await getSocialpostDateFilter(page)
  const socialpostSourcesFilter = await getSocialpostSourcesFilter(page)
  const socialpostColumnHeaders = (await getSocialpostColumnHeaders(page))[0]
  await expect(feedText).toBeVisible()
  await expect(socialpostRefreshBtn).toBeVisible()
  await expect(socialpostAccountBtn).toBeVisible()
  await expect(socialpostSearchFilter).toBeVisible()
  await expect(socialpostDateFilter).toBeVisible()
  await expect(socialpostSourcesFilter).toBeVisible()
  await expect(socialpostColumnHeaders).toBeVisible()
  console.log("[INFO] Social post tab check end")
  console.log("[INFO] Community post tab check start")
  const communitypostTab = await getCommunitypostTab(page)
  await expect(communitypostTab).toBeVisible()
  await communitypostTab.click()
  const communityFilter = await getCommunityFilter(page)
  const communitypostCreateBtn = await getCommunitypostCreatePost(page)
  const communitypostSearchFilter = await getSearchFilter(page)
  const communitypostColumnHeaders = (await getCommunitypostColumnHeaders(page))[0]
  await expect(communityFilter).toBeVisible()
  await expect(communitypostCreateBtn).toBeVisible()
  await expect(communitypostSearchFilter).toBeVisible()
  await expect(communitypostColumnHeaders).toBeVisible()
  console.log("[INFO] Community post tab check end")
  console.log("[INFO] End Feed page check.")
}

async function brandMissionPageCheck(page) {
  console.log("[INFO] Start Mission page check.")
  await waitForPageToLoad(page)
  const missionText = await getMissionText(page)
  const missionSearchFilter = await getMissionSearchFilter(page)
  const missionShowonZAPDropdown = (await getDropdownFilters(page))[0]
  const missionStatusDropdown = (await getDropdownFilters(page))[1]
  const missionCreateBtn = await getMissionCreateBtn(page)
  const missionCardView = (await getMissionCardListView(page))[0]
  const missionListView = (await getMissionCardListView(page))[1]
  const missionSettingsBtn = await getMissionSettingsBtn(page)
  // const missionSettingsBtn = (await getMissionSettingsBtn(page))[0]
  await expect(missionText).toBeVisible()
  await expect(missionSearchFilter).toBeVisible()
  await expect(missionShowonZAPDropdown).toBeVisible()
  await expect(missionStatusDropdown).toBeVisible()
  await expect(missionCreateBtn).toBeVisible()
  await expect(missionCardView).toBeVisible()
  await expect(missionListView).toBeVisible()
  await expect(missionSettingsBtn.first()).toBeVisible({timeout: 15000})
  /*await waitForAnElement(page, missionSettingsBtn)
  await expect(missionSettingsBtn).toBeVisible()*/
  console.log("[INFO] End Mission page check.")
}

async function brandQuizPageCheck(page) {
  console.log("[INFO] Start Quiz page check.")
  await waitForPageToLoad(page)
  const quizText = await getQuizText(page)
  const quizSearchFilter = await getQuizSearchFilter(page)
  const quizTemplateBtn = await getQuizTemplateBtn(page)
  const quizUploadBtn = await getQuizUploadBtn(page)
  const quizCreateBtn = await getQuizCreateBtn(page)
  const quizColumnHeader = (await getQuizColumnHeader(page))[0]
  await expect(quizText).toBeVisible()
  await expect(quizSearchFilter).toBeVisible()
  await expect(quizTemplateBtn).toBeVisible()
  await expect(quizUploadBtn).toBeVisible()
  await expect(quizCreateBtn).toBeVisible()
  await expect(quizColumnHeader).toBeVisible()
  console.log("[INFO] End Quiz page check.")
}

async function brandSurveyPageCheck(page) {
  console.log("[INFO] Start Survey page check.")
  await waitForPageToLoad(page)
  const surveyText = await getSurveyText(page)
  const surveySearchFilter = await getSurveySearchFilter(page)
  const surveyTemplateBtn = await getSurveyTemplateBtn(page)
  const surveyUploadBtn = await getSurveyUploadBtn(page)
  const surveyCreateBtn = await getSurveyCreateBtn(page)
  const surveyColumnHeader = (await getSurveyColumnHeader(page))[0]
  await expect(surveyText).toBeVisible()
  await expect(surveySearchFilter).toBeVisible()
  await expect(surveyTemplateBtn).toBeVisible()
  await expect(surveyUploadBtn).toBeVisible()
  await expect(surveyCreateBtn).toBeVisible()
  await expect(surveyColumnHeader).toBeVisible()
  console.log("[INFO] End Survey page check.")
}

async function brandProposalPageCheck(page) {
  console.log("[INFO] Start Proposal page check.")
  await waitForPageToLoad(page)
  const proposalText = await getProposalText(page)
  const proposalStatusDropdown = await getProposalStatusDropdown(page)
  const proposalCheckSubmissionBtn = await getProposalCheckSubmissionBtn(page)
  const proposalColumnHeader = (await getProposalColumnHeader(page))[0]
  await expect(proposalText).toBeVisible()
  await expect(proposalStatusDropdown).toBeVisible()
  await expect(proposalCheckSubmissionBtn).toBeVisible()
  await expect(proposalColumnHeader).toBeVisible()
  console.log("[INFO] End Proposal page check.")
}

async function brandArticlePageCheck(page) {
  console.log("[INFO] Start Article page check.")
  await waitForPageToLoad(page)
  let articleFlag = false
  try {
    await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findArticles !== undefined, { timeout: 5000 })
    console.log("There are existing article/s")
    const articleText = await getArticleText(page)
    const articleSearchFilter = await getArticleSearchFilter(page)
    const articleTagDropdown = await getArticleTagDropdown(page)
    const articleStatusDropdown = await getArticleStatusDropdown(page)
    const articleCreateBtn = await getArticleCreateBtn(page)
    const articleColumnHeader = (await getArticleColumnHeader(page))[0]
    await expect(articleText).toBeVisible()
    await expect(articleSearchFilter).toBeVisible()
    await expect(articleTagDropdown).toBeVisible()
    await expect(articleStatusDropdown).toBeVisible()
    await expect(articleCreateBtn).toBeVisible()
    await expect(articleColumnHeader).toBeVisible()
    articleFlag = true;
  } catch (error) {
    console.log("There are no existing article/s")
  }
  console.log("[INFO] End Article page check.")
}

async function brandGamecornerPageCheck(page) {
  console.log("[INFO] Start Gamecorner page check.")
  await waitForPageToLoad(page)
  const gamecornerText = await getGamecornerText(page)
  const gamecornerCreategameBtn = await getGamecornerCreateGameBtn(page)
  const gamecornerSearchFilter = await getGamecornerSearchFilter(page)
  const gamecornerCommunityFilter = await getGamecornerCommunityFilter(page)
  const gamecornerStatusFilter = await getGamecornerStatusFilter(page)
  const gamecornerColumnHeaders = (await getGamecornerColumnHeaders(page))[0]
  await expect(gamecornerText).toBeVisible()
  await expect(gamecornerCreategameBtn).toBeVisible()
  await expect(gamecornerSearchFilter).toBeVisible()
  await expect(gamecornerCommunityFilter).toBeVisible()
  await expect(gamecornerStatusFilter).toBeVisible()
  await expect(gamecornerColumnHeaders).toBeVisible()
  console.log("[INFO] End Gamecorner page check.")
}

async function brandSocialroomPageCheck(page) {
  console.log("[INFO] Start Socialroom page check.")
  await waitForPageToLoad(page)
  const socialroomText = await getSocialroomText(page)
  const socialroomCreateroomBtn = await getSocialroomCreateroomBtn(page)
  const socialroomSearchFilter = await getSocialroomSearchFilter(page)
  const socialroomCommunityFilter = await getSocialroomCommunityFilter(page)
  await expect(socialroomText).toBeVisible()
  await expect(socialroomCreateroomBtn).toBeVisible()
  await expect(socialroomSearchFilter).toBeVisible()
  await expect(socialroomCommunityFilter).toBeVisible()
  // Check if brand has social rooms created
  try {
    const socialroomCardHeader = (await getSocialroomCardHeader(page))[0]
    await waitForAnElement(page, socialroomCardHeader)
    console.log("Brand has at least 1 social room, checking room setting button")
    const socialroomCardSettingBtn = (await getSocialroomCardSettingBtn(page))[0]
    await waitForAnElement(page, socialroomCardSettingBtn)
    console.log("Room has setting button")
  } catch (error) {
    console.log("Brand has no social room, skipping this part")
  }
  console.log("[INFO] End Socialroom page check.")
}

async function brandVideoPageCheck(page) {
  console.log("[INFO] Start video page check.")
  await waitForPageToLoad(page)
  const videoText = await getVideoText(page)
  const videoSearchFilter = await getVideoSearchFilter(page)
  const videoAddBtn = await getVideoAddBtn(page)
  const videoColumnheader = (await getVideoColumnHeader(page))[0]
  await expect(videoText).toBeVisible()
  await expect(videoSearchFilter).toBeVisible()
  await expect(videoAddBtn).toBeVisible()
  await expect(videoColumnheader).toBeVisible()
  console.log("[INFO] End Video page check.")
}

async function brandMessagePageCheck(page) {
  console.log("[INFO] Start Message page check.")
  await waitForPageToLoad(page)
  const messageText = await getMessageText(page)
  const messageTab = await getMessageTab(page)
  const airdropTab = await getAirdropTab(page)
  const messageCreateBtn = await getMessageCreateBtn(page)
  const airdropCreatebtn = await getAirdropCreatebtn(page)
  const messageColumnHeader = (await getMessageColumnHeader(page))[0]
  await expect(messageText).toBeVisible()
  await expect(messageTab).toBeVisible()
  await expect(airdropTab).toBeVisible()
  await expect(messageCreateBtn).toBeVisible()
  await expect(airdropCreatebtn).toBeVisible()
  await expect(messageColumnHeader).toBeVisible()
  console.log("[INFO] End Message page check.")
  await airdropTab.click()
  console.log("[INFO] Start checking Airdrop tab")
  const airdropColumnHeader = (await getAirdropColumnHeader(page))[0]
  await expect(airdropColumnHeader).toBeVisible()
  console.log("[INFO] End checking Airdrop tab")
}

async function brandInsightsPageCheck(page) {
  console.log("[INFO] Start Insights page check.")
  const insightsMenuSelected = await getInsightsMenuSelected(page)
  await expect(insightsMenuSelected).toBeVisible()
  console.log("[INFO] End Insights page check.")
}

async function brandActivitygraphPageCheck(page) {
  console.log("[INFO] Start Activitygraph page check.")
  try {
    let flag = false
    let flagCtr = 0
    while (flag == false && flagCtr < 5) {
      try {
        await page.waitForTimeout(3000)
        const activitygraphExportBtn = await getActivitygraphExportBtn(page)
        await expect(activitygraphExportBtn).toBeVisible()
        flag = true
        flagCtr = 5
      } catch (error) {
        console.log("Wait for a few more seconds....")
        flagCtr++
        console.log("flagCtr value = " + flagCtr)
      }
    }
    const activitygraphText = await getActivitygraphText(page)
    const activitygraphTokenDropdown = await getActivitygraphTokenDropdown(page)
    const activitygraphTotalWalletText = await getActivitygraphTotalWalletText(page)
    const activitygraphYearDropdown = await getActivitygraphYearDropdown(page)
    const activitygraphLeftRightBtn = (await getActivitygraphLeftRightBtn(page))[0]
    const activitygraphCategoryTab = (await getActivitygraphCategoryTab(page))[0]
    await expect(activitygraphTokenDropdown).toBeVisible()
    await expect(activitygraphText).toBeVisible()
    await expect(activitygraphTotalWalletText).toBeVisible()
    await expect(activitygraphYearDropdown).toBeVisible()
    await expect(activitygraphLeftRightBtn).toBeVisible()
    await expect(activitygraphCategoryTab).toBeVisible()
  } catch (error) {
    const activitygraphNoData = await getActivitygraphNoData(page)
    await expect(activitygraphNoData).toBeVisible()
    console.log("This community has no data")
  }
  console.log("[INFO] End Activitygraph page check.")
}

async function brandLeaderboardPageCheck(page) {
  console.log("[INFO] Start Leaderboard page check.")
  await waitForPageToLoad(page)
  const leaderboardText = await getLeaderboardText(page)
  const leaderboardSearchFilter = await getLeaderboardSearchFilter(page)
  const leaderboardStatusFilter = (await getLeaderboardStatusRoleFilter(page))[0]
  const leaderboardRoleFilter = (await getLeaderboardStatusRoleFilter(page))[1]
  const leaderboardTokenDropdown = await getLeaderboardTokenDropdown(page)
  const leaderboardColumnHeader = (await getLeaderboardColumnHeader(page))[0]
  await expect(leaderboardText).toBeVisible()
  await expect(leaderboardSearchFilter).toBeVisible()
  await expect(leaderboardStatusFilter).toBeVisible()
  await expect(leaderboardRoleFilter).toBeVisible()
  await expect(leaderboardTokenDropdown).toBeVisible()
  await expect(leaderboardColumnHeader).toBeVisible()
  console.log("[INFO] End Leaderboard page check.")
}

async function brandUsersearchPageCheck(page) {
  console.log("[INFO] Start User search page check.")
  await waitForPageToLoad(page)
  const usersearchText = await getUsersearchText(page)
  const usersearchAllcommunitiesDropdown = await getUsersearchAllcommunitiesDropdown(page)
  const usersearchSearchfilter = await getUsersearchSearchfilter(page)
  const usersearchSearchBy = await getUsersearchSearchBy(page)
  const usersearchSearchBtn = await getUsersearchSearchBtn(page)
  await expect(usersearchText).toBeVisible()
  await expect(usersearchAllcommunitiesDropdown).toBeVisible()
  await expect(usersearchSearchfilter).toBeVisible()
  await expect(usersearchSearchBy).toBeVisible()
  await expect(usersearchSearchBtn).toBeVisible()
  console.log("[INFO] End User page check.")
}

async function brandSalesreportPageCheck(page) {
  console.log("[INFO] Start Sales report page check.")
  await waitForPageToLoad(page)
  const salesreportText = await getSalesreportText(page)
  const salesreportColumnHeader = (await getSalesreportColumnHeader(page))[0]
  await expect(salesreportText).toBeVisible()
  await expect(salesreportColumnHeader).toBeVisible()
  console.log("[INFO] End Sales report page check.")
}

async function brandExternalcollabPageCheck(page: Page) {
  console.log("[INFO] Start External collab page check.")
  await waitForPageToLoad(page)
  let flag = false
  let flagCtr = 0
  await waitForPageToLoad(page)
  while (flag == false && flagCtr < 3) {
    try {
      await page.waitForTimeout(2000)
      const externalCollaborateBtn = await getExternalCollaborateBtn(page)
      await expect(externalCollaborateBtn).toBeVisible()
      console.log("There are existing chats on the page")
      flag = true
      flagCtr = 3
    } catch (error) {
      console.log("Wait for a few more seconds....")
      flagCtr++
      console.log("flagCtr value = " + flagCtr)
    }
  }
  if (flag == true) { // If there are existing collaborations
    const externalText = await getExternalcollabText(page)
    await expect(externalText).toBeVisible()
    const externalCommunityDropdown = await getExternalcollabCommunityDropdown(page)
    await expect(externalCommunityDropdown).toBeVisible()

    const externalSettingBtn = await getExternalcollabSettingBtn(page)
    await expect(externalSettingBtn).toBeVisible()

    const [
      externalInboxTab,
      externalPartnermatchTab,
      externalDashboardTab,
      externalTokenInforTab,
      externalCollaborationTab,
    ] = await getExternalcollabTabs(page)

    await expect(externalInboxTab).toBeVisible()
    await expect(externalPartnermatchTab).toBeVisible()
    await expect(externalDashboardTab).toBeVisible()

    // Show info tab

    await expect(externalTokenInforTab).toBeHidden()
    await expect(externalCollaborationTab).toBeHidden()

    const externalInboxSearchFilter = await getExternalcollabInboxSearchFilter(page)
    await expect(externalInboxSearchFilter).toBeVisible()

    const externalInboxComposeMessageBtn = await getExternalcollabInboxComposeMessageBtn(page)
    await expect(externalInboxComposeMessageBtn).toBeVisible()

    const externalInboxMessageArea = await getExternalcollabInboxMessageArea(page)
    await expect(externalInboxMessageArea).toBeVisible()
    await externalPartnermatchTab.click()
    // Check if notification window exists
    try {
      const externalPartnermatchNotifWindow = await getExternalcollabPartnermatchNotificationWindow(page)
      await waitForAnElement(page, externalPartnermatchNotifWindow)
      console.log("Notification window exists, closing it")
      const notifCloseBtn = await getExternalcollabPartnermatchNotificationXBtn(page)
      await notifCloseBtn.click()
    } catch (error) {
      console.log("Partner matching info window not shown, skipping this part")
    }
    const externalPartnermatchSearchFilter = await getExternalcollabPartnermatchSearchFilter(page)
    const externalPartnermatchColumnHeader = (await getExternalcollabPartnermatchColumnHeader(page))[0]
    await expect(externalPartnermatchSearchFilter).toBeVisible()
    await expect(externalPartnermatchColumnHeader).toBeVisible()
    await externalDashboardTab.click()
    const externalDashboardSearchFilter = await getExternalcollabDashboardSearchFilter(page)
    const externalDashboardColumnHeader = (await getExternalcollabDashboardColumnHeader(page))[0]
    await expect(externalDashboardSearchFilter).toBeVisible()
    await expect(externalDashboardColumnHeader).toBeVisible()
  }
  else {
    console.log("There are no existing collaboration chat/s")
  }
  console.log("[INFO] End External collab page check.")
}

async function brandInternalcollabPageCheck(page) {
  console.log("[INFO] Start Internal collab page check.")
  await waitForPageToLoad(page)
  const internalText = await getInternalcollabText(page)
  const internalAddCollabBtn = await getInternalcollabAddCollabBtn(page)
  const internalColumnHeader = (await getInternalcollabColumnHeader(page))[0]
  await expect(internalText).toBeVisible()
  await expect(internalAddCollabBtn).toBeVisible()
  await expect(internalColumnHeader).toBeVisible()
  console.log("[INFO] End Internal collab page check.")
}

async function brandScanPageCheck(page) {
  console.log("[INFO] Start Scan page check.")
  await waitForPageToLoad(page)
  const scanText = await getScanText(page)
  const scanNewScanBtn = await getScanNewScanBtn(page)
  const scanColumnHeader = (await getScanColumnHeader(page))[0]
  await expect(scanText).toBeVisible()
  await expect(scanNewScanBtn).toBeVisible()
  await expect(scanColumnHeader).toBeVisible()
  console.log("[INFO] End Scan page check.")
}

async function brandDeveloperAPIClientsPageCheck(page) {
  console.log("[INFO] Start Developer API Clients page check.")
  const devAPIKeysText = await getDevAPIKeysText(page)
  const devColumnHeaders = (await getDevColumnHeaders(page))[0]
  const devCreateNewAPIBtn = await getDevCreateNewAPIBtn(page)
  // const devAPIEditBtn = (await getDevAPIEditBtn(page))[0]
  const devAPIEditBtn = await getDevAPIEditBtn(page)
  await expect(devAPIKeysText).toBeVisible()
  await expect(devColumnHeaders).toBeVisible()
  await expect(devCreateNewAPIBtn).toBeVisible()
  try {
    await expect(devAPIEditBtn.first()).toBeVisible({timeout: 10000})
  } catch (error) {
    console.log("Brand has no API clients set up")
  }
  console.log("[INFO] End Developer API Clients page check.")
}

async function brandLINELIFFAppSettings(page) {
  console.log("[INFO] Start LINE LIFF APP Settings page check.")
  const lineLIFFAppText = await getLINELIFFAppText(page)
  const lineLIFFAppSearchFilter = await getLINELIFFAppSearchFilter(page)
  const lineLIFFAppCreateBtn = await getLINELIFFAppCreateBtn(page)
  const lineLIFFAppColumnHeaders = (await getLINELIFFAppColumnHeaders(page))[0]
  await expect(lineLIFFAppText).toBeVisible()
  await expect(lineLIFFAppSearchFilter).toBeVisible()
  await expect(lineLIFFAppCreateBtn).toBeVisible()
  await expect(lineLIFFAppColumnHeaders).toBeVisible()
  console.log("[INFO] End LINE LIFF APP Settings page check.")
}