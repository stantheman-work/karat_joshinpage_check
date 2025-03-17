import {
  getActivitygraphCategoryTab,
  getActivitygraphExportBtn,
  getActivitygraphLeftRightBtn,
  getActivitygraphText,
  getActivitygraphTokenDropdown,
  getActivitygraphTotalWalletText,
  getActivitygraphYearDropdown,
} from "@/locators/brand-admin-activitygraph-loc"
import {
  getArticleColumnHeader,
  getArticleCreateBtn,
  getArticleSearchFilter,
  getArticleStatusDropdown,
  getArticleTagDropdown,
  getArticleText,
} from "@/locators/brand-admin-article-loc"
import {
  getCampaignColumnHeader,
  getCampaignCreateBtn,
  getCampaignSearchFilter,
  getCampaignText,
} from "@/locators/brand-admin-campaign-loc"
import { getDailytrendMenuSelected } from "@/locators/brand-admin-dailytrend-loc"
import {
  getBrandCreateTokenButton,
  getBrandEditButton,
  getBrandHomeText,
  getBrandTokenSettingsButton,
  getBrandTokenText,
  getSideBarItems,
  getSideBarParentMenu,
} from "@/locators/brand-admin-dashboard-loc"
import { getDevAPIKeysText, getDevColumnHeaders, getDevCreateNewAPIBtn } from "@/locators/brand-admin-developertool-loc"
import {
  getGamecornerColumnHeaders,
  getGamecornerCreateGameBtn,
  getGamecornerSearchFilter,
  getGamecornerStatusFilter,
  getGamecornerText,
  getGamecornerTokenFilter,
} from "@/locators/brand-admin-gamecorner-loc"
import {
  getLeaderboardColumnHeader,
  getLeaderboardSearchFilter,
  getLeaderboardStatusRoleFilter,
  getLeaderboardText,
  getLeaderboardTokenDropdown,
} from "@/locators/brand-admin-leaderboard-loc"
import {
  getLINELIFFAppColumnHeaders,
  getLINELIFFAppCreateBtn,
  getLINELIFFAppSearchFilter,
  getLINELIFFAppText,
} from "@/locators/brand-admin-lineliffappsettings-loc"
import { getLogsColumnHeader, getLogsRefreshBtn, getLogsSearchEntityFilter } from "@/locators/brand-admin-logs-loc"
import {
  getAirdropColumnHeader,
  getAirdropCreatebtn,
  getAirdropTab,
  getMessageColumnHeader,
  getMessageCreateBtn,
  getMessageTab,
  getMessageText,
} from "@/locators/brand-admin-message-loc"
import {
  getDropdownFilters,
  getMissionCardListView,
  getMissionCreateBtn,
  getMissionSearchFilter,
  getMissionText,
} from "@/locators/brand-admin-mission-loc"
import {
  getMysteryboxColumnHeader,
  getMysteryboxCreatebtn,
  getMysteryboxTab,
  getMysteryboxTokenFilter,
  getNFTCollectionFilter,
  getNFTCollectionManagementBtn,
  getNFTColumnHeader,
  getNFTCreateBtn,
  getNFTSearchNFTFilter,
  getNFTtab,
  getNFTTokenFilter,
} from "@/locators/brand-admin-nftmysterybox-loc"
import {
  getProposalCheckSubmissionBtn,
  getProposalColumnHeader,
  getProposalStatusDropdown,
  getProposalText,
} from "@/locators/brand-admin-proposal-loc"
import {
  getQuizColumnHeader,
  getQuizCreateBtn,
  getQuizSearchFilter,
  getQuizTemplateBtn,
  getQuizText,
  getQuizUploadBtn,
} from "@/locators/brand-admin-quiz-loc"
import { getScanColumnHeader, getScanNewScanBtn, getScanText } from "@/locators/brand-admin-scan-loc"
import {
  getSocialroomCardHeader,
  getSocialroomCardSettingBtn,
  getSocialroomCreateroomBtn,
  getSocialroomSearchFilter,
  getSocialroomText,
  getSocialroomTokenDropdown,
} from "@/locators/brand-admin-socialroom-loc"
import {
  getStamppassportColumnHeader,
  getStamppassportCreateBtn,
  getStamppassportSearchFilter,
  getStamppassportText,
} from "@/locators/brand-admin-stamppassport-loc"
import {
  getSurveyColumnHeader,
  getSurveyCreateBtn,
  getSurveySearchFilter,
  getSurveyTemplateBtn,
  getSurveyText,
  getSurveyUploadBtn,
} from "@/locators/brand-admin-survey-loc"
import {
  getTeamColumnHeader,
  getTeamDateFilter,
  getTeamInviteBtn,
  getTeamRoleSelectFilter,
  getTeamSearchUserFilter,
} from "@/locators/brand-admin-team-loc"
import {
  getVMMysteryboxColumnHeader,
  getVMMysteryboxSearchBoxFilter,
  getVMMysteryboxTab,
  getVMNFTColumnHeader,
  getVMNFTSearchNFTFilter,
  getVMNFTtab,
} from "@/locators/brand-admin-vendingmachine-loc"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement, waitForAnElement, waitForPageToLoad } from "@/utils/load-helper"
import { PageUtils } from "@/utils/page-utils"
import { expect, Page, test } from "@playwright/test"
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
  getExternalcollabTokenDropdown,
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
      // in Home page
      await brandHomePageCheck(page)
    } else if (i == 1) {
      // in Team page
      await brandTeamPageCheck(page)
    } else if (i == 2) {
      // in Logs page
      await brandLogsPageCheck(page)
    } else if (i == 3) {
      // in NFT / Mysterybox page
      await brandNFTMysteryboxPageCheck(page)
    } else if (i == 4) {
      // in Stamp passport page
      await brandStamppassportPageCheck(page)
    } else if (i == 5) {
      // in Vending machine page
      await brandVendingMachinePageCheck(page)
    } else if (i == 6) {
      // in Campaign page
      await brandCampaignPageCheck(page)
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
      // in Messages page
      await brandMessagePageCheck(page)
    } else if (i == 14) {
      // in Dailytrend page
      await brandDailytrendPageCheck(page)
    } else if (i == 15) {
      // in Activitygraph page
      await brandActivitygraphPageCheck(page)
    } else if (i == 16) {
      // in Leaderboard page
      await brandLeaderboardPageCheck(page)
    } else if (i == 17) {
      // in Developer tool
      await brandDevelopertoolPageCheck(page)
    } else if (i == 18) {
      // in LINE LIFF APP page
      await brandLINELIFFAppSettings(page)
    } else if (i == 19) {
      // in External collab page
      // await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.collaborationRooms !== undefined)
      // await brandExternalcollabPageCheck(page)
    } else if (i == 20) {
      // in Internal collab page
      // await brandInternalcollabPageCheck(page)
    } else if (i == 21) {
      // in Scan page
      await brandScanPageCheck(page)
    } else {
      // in Socialroom page
      await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.searchRooms !== undefined)
      await brandSocialroomPageCheck(page)
    }
  }
  console.log("[INFO] Brand Dashboard Sanity end.")
}

async function brandHomePageCheck(page) {
  console.log("[INFO] Start Home page check.")
  await waitForPageToLoad(page)
  const brandHomeText = await getBrandHomeText(page)
  const brandEditBtn = await getBrandEditButton(page)
  const brandCreateTokenBtn = await getBrandCreateTokenButton(page)
  const brandTokenText = await getBrandTokenText(page)
  const brandTokenSettingBtn = (await getBrandTokenSettingsButton(page))[0]
  await expect(brandHomeText).toBeVisible()
  await expect(brandEditBtn).toBeVisible()
  await expect(brandCreateTokenBtn).toBeVisible()
  await expect(brandTokenText).toBeVisible()
  await expect(brandTokenSettingBtn).toBeVisible()
  console.log("[INFO] End Home page check.")
}

async function brandTeamPageCheck(page) {
  console.log("[INFO] Start Team page check.")
  await waitForPageToLoad(page)
  const teamSearchUserFilter = await getTeamSearchUserFilter(page)
  const teamRoleSelectFilter = await getTeamRoleSelectFilter(page)
  const teamDateFilter = await getTeamDateFilter(page)
  const teamInviteBtn = await getTeamInviteBtn(page)
  const teamColumnHeader = (await getTeamColumnHeader(page))[0]
  await expect(teamSearchUserFilter).toBeVisible()
  await expect(teamRoleSelectFilter).toBeVisible()
  await expect(teamDateFilter).toBeVisible()
  await expect(teamInviteBtn).toBeVisible()
  await expect(teamColumnHeader).toBeVisible()
  console.log("[INFO] End Team page check.")
}

async function brandLogsPageCheck(page) {
  console.log("[INFO] Start Logs page check.")
  await waitForPageToLoad(page)
  const logsSearchEntityFilter = await getLogsSearchEntityFilter(page)
  const logsRefreshBtn = await getLogsRefreshBtn(page)
  const logsColumnHeader = (await getLogsColumnHeader(page))[0]
  await expect(logsSearchEntityFilter).toBeVisible()
  await expect(logsRefreshBtn).toBeVisible()
  await expect(logsColumnHeader).toBeVisible()
  console.log("[INFO] End Logs page check.")
}

async function brandNFTMysteryboxPageCheck(page) {
  console.log("[INFO] Start NFT / Mysterybox page check.")
  await waitForPageToLoad(page)
  const nftTab = await getNFTtab(page)
  const mysteryboxTab = await getMysteryboxTab(page)
  const nftSearchNFTFilter = await getNFTSearchNFTFilter(page)
  const nftCollectionFilter = await getNFTCollectionFilter(page)
  const nftTokenFilter = await getNFTTokenFilter(page)
  const nftColumnHeader = (await getNFTColumnHeader(page))[0]
  const nftCollectionManagementBtn = await getNFTCollectionManagementBtn(page)
  const nftCreateBtn = await getNFTCreateBtn(page)
  console.log("[INFO] Start checking NFT tab.")
  await expect(nftColumnHeader).toHaveText("NFT Name")
  await expect(nftTab).toBeVisible()
  await expect(mysteryboxTab).toBeVisible()
  await expect(nftSearchNFTFilter).toBeVisible()
  await expect(nftCollectionFilter).toBeVisible()
  await expect(nftTokenFilter).toBeVisible()
  await expect(nftColumnHeader).toBeVisible()
  await expect(nftCollectionManagementBtn).toBeVisible()
  await expect(nftCreateBtn).toBeVisible()
  console.log("[INFO] Done checking NFT tab.")
  console.log("[INFO] Start checking Mysterybox tab.")
  await mysteryboxTab.click() // switch to mysterybox tab
  const mysteryboxCreateBtn = await getMysteryboxCreatebtn(page)
  const mysteryboxTokenFilter = await getMysteryboxTokenFilter(page)
  const mysteryboxColumnHeader = (await getMysteryboxColumnHeader(page))[0]
  await expect(nftColumnHeader).toHaveText("Box Name")
  await expect(mysteryboxCreateBtn).toBeVisible()
  await expect(mysteryboxTokenFilter).toBeVisible()
  await expect(mysteryboxColumnHeader).toBeVisible()
  console.log("[INFO] Done checking Mysterybox tab.")
  console.log("[INFO] End NFT / Mysterybox page check.")
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
  const campaignColumnHeader = (await getCampaignColumnHeader(page))[0]
  await expect(campaignText).toBeVisible()
  await expect(campaignCreateBtn).toBeVisible()
  await expect(campaignSearchFilter).toBeVisible()
  await expect(campaignColumnHeader).toBeVisible()
  console.log("[INFO] End Campaign page check.")
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
  await expect(missionText).toBeVisible()
  await expect(missionSearchFilter).toBeVisible()
  await expect(missionShowonZAPDropdown).toBeVisible()
  await expect(missionStatusDropdown).toBeVisible()
  await expect(missionCreateBtn).toBeVisible()
  await expect(missionCardView).toBeVisible()
  await expect(missionListView).toBeVisible()
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
  const articleText = await getArticleText(page)
  const articleSearchDropdown = await getArticleSearchFilter(page)
  const articleTagDropdown = await getArticleTagDropdown(page)
  const articleStatusDropdown = await getArticleStatusDropdown(page)
  const articleCreateBtn = await getArticleCreateBtn(page)
  const articleColumnHeader = (await getArticleColumnHeader(page))[0]
  await expect(articleText).toBeVisible()
  await expect(articleSearchDropdown).toBeVisible()
  await expect(articleTagDropdown).toBeVisible()
  await expect(articleStatusDropdown).toBeVisible()
  await expect(articleCreateBtn).toBeVisible()
  await expect(articleColumnHeader).toBeVisible()
  console.log("[INFO] End Article page check.")
}

async function brandGamecornerPageCheck(page) {
  console.log("[INFO] Start Gamecorner page check.")
  await waitForPageToLoad(page)
  const gamecornerText = await getGamecornerText(page)
  const gamecornerCreategameBtn = await getGamecornerCreateGameBtn(page)
  const gamecornerSearchFilter = await getGamecornerSearchFilter(page)
  const gamecornerTokenFilter = await getGamecornerTokenFilter(page)
  const gamecornerStatusFilter = await getGamecornerStatusFilter(page)
  const gamecornerColumnHeaders = (await getGamecornerColumnHeaders(page))[0]
  await expect(gamecornerText).toBeVisible()
  await expect(gamecornerCreategameBtn).toBeVisible()
  await expect(gamecornerSearchFilter).toBeVisible()
  await expect(gamecornerTokenFilter).toBeVisible()
  await expect(gamecornerStatusFilter).toBeVisible()
  await expect(gamecornerColumnHeaders).toBeVisible()
  console.log("[INFO] End Gamecorner page check.")
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

async function brandDailytrendPageCheck(page) {
  /*
    Use this for now because loading of this page is quite random (sometimes it's too long)
    Need to look for an alternate way to check dailytrendText
    */
  console.log("[INFO] Start Dailytrend page check.")
  const dailytrendMenuSelected = await getDailytrendMenuSelected(page)
  await expect(dailytrendMenuSelected).toBeVisible()
  console.log("[INFO] End Dailytrend page check.")
  /*
    let flag = false;
    let flagCtr = 0;
    while(flag == false && flagCtr < 5) {
      try {
        await page.waitForTimeout(5000);
        const iframe = await getDailytrendIframe(page);
        const dailytrendText = await getDailytrendText(iframe);
        await expect(dailytrendText).toBeVisible();
        flag = true;
        flagCtr = 5;
        console.log("Daily trend text is present.");
      } catch (error) {
        console.log("Wait for a few more seconds....");
        flagCtr++;
        console.log("flagCtr value = "+flagCtr);
      }
   }
    */
}

async function brandActivitygraphPageCheck(page) {
  console.log("[INFO] Start Activitygraph page check.")
  await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.brandStats !== undefined)
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

async function brandDevelopertoolPageCheck(page) {
  console.log("[INFO] Start Developer page check.")
  const devAPIKeysText = await getDevAPIKeysText(page)
  const devColumnHeaders = (await getDevColumnHeaders(page))[0]
  const devCreateNewAPIBtn = await getDevCreateNewAPIBtn(page)
  await expect(devAPIKeysText).toBeVisible()
  await expect(devColumnHeaders).toBeVisible()
  await expect(devCreateNewAPIBtn).toBeVisible()
  console.log("[INFO] End Developer page check.")
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

async function brandExternalcollabPageCheck(page: Page) {
  console.log("[INFO] Start External collab page check.")

  let flag = false
  let flagCtr = 0
  await waitForPageToLoad(page)
  while (flag == false && flagCtr < 5) {
    try {
      await page.waitForTimeout(3000)
      const externalCollaborateBtn = await getExternalCollaborateBtn(page)
      await expect(externalCollaborateBtn).toBeVisible()
      flag = true
      flagCtr = 5
    } catch (error) {
      console.log("Wait for a few more seconds....")
      flagCtr++
      console.log("flagCtr value = " + flagCtr)
    }
  }
  const externalText = await getExternalcollabText(page)
  await expect(externalText).toBeVisible()
  const externalTokenDropdown = await getExternalcollabTokenDropdown(page)
  await expect(externalTokenDropdown).toBeVisible()

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

async function brandSocialroomPageCheck(page) {
  console.log("[INFO] Start Socialroom page check.")
  await waitForPageToLoad(page)
  const socialroomText = await getSocialroomText(page)
  const socialroomCreateroomBtn = await getSocialroomCreateroomBtn(page)
  const socialroomSearchFilter = await getSocialroomSearchFilter(page)
  const socialroomTokenDropdown = await getSocialroomTokenDropdown(page)
  await expect(socialroomText).toBeVisible()
  await expect(socialroomCreateroomBtn).toBeVisible()
  await expect(socialroomSearchFilter).toBeVisible()
  await expect(socialroomTokenDropdown).toBeVisible()
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
