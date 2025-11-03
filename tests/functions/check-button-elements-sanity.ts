import {
  getCreategameAddOptionBtn,
  getCreategameCancelBtn,
  getCreategameFrequencyAmt,
  getCreategameFrequencyUnit,
  getCreategameLimitUser,
  getCreategamePeriodToggle,
  getCreategameRewardColumnHeaders,
  getCreategameSaveBtn,
  getCreategameStartendDate,
  getCreategameTimezone,
  getCreategameTitle,
  getCreategameTokenAmount,
  getCreategameCommunityDropdown,
} from "@/specs/contents/game-corner/game-corner.locator"
import {
  getEditMissionText,
  getMissionAddTaskBtn,
  getMissionChooseTaskText,
  getMissionDescription,
  getMissionDiscardChanges,
  getMissionEnableDateToggle,
  getMissionNextBtn,
  getMissionOnetaskonedayToggle,
  getMissionPreview,
  getMissionRequirementToggle,
  getMissionRequireNFTToggle,
  getMissionRetryToggle,
  getMissionRewardToggle,
  getMissionSelectionCloseBtn,
  getMissionShowZAPToggle,
  getMissionStepsPage,
  getMissionTaskList,
  getMissionTaskListText,
  getMissionTaskretryToggle,
  getMissionTaskSelection,
  getMissionTitle,
  getMissionVisibility,
  getTaskRewardAmount,
  getTaskRewardToggle,
  getTaskTokenRewardDropdown,
} from "@/specs/contents/mission/mission.locator"
/*
import {
  getCollectionManagementCloseBtn,
  getCollectionManagementColumnHeader,
  getCollectionManagementCreateCollectionBtn,
  getCollectionManagementInfoText,
  getCollectionManagementSearchFilter,
  getCreateMysteryboxCancelBtn,
  getCreateMysteryboxCreateBtn,
  getCreateMysteryboxName,
  getCreateMysteryboxText,
  getCreateMysteryboxTotalBoxes,
  getCreateMysteryboxUploadImage,
  getCreateNFTCancel,
  getCreateNFTChooseCollection,
  getCreateNFTCollectionTextfield,
  getCreateNFTDescription,
  getCreateNFTOwnershiptransferToggle,
  getCreateNFTPreview,
  getCreateNFTSave,
  getCreateNFTSupply,
  getCreateNFTText,
  getCreateNFTTitle,
  getCreateNFTTokenDropdown,
  getCreateNFTUploadFile,
  getEditMysteryboxBackBtn,
  getEditMysteryboxListforsaleBtn,
  getEditMysteryboxSaveChangesBtn,
  getEditMysteryboxText,
  getEditNFTListingBtn,
  getEditNFTSelectedToken,
  getEditNFTText,
  getEditNFTUploadedImage,
} from "@/locators/brand-admin-nftmysterybox-loc"
*/
import {
  getCreateQuizText,
  getQuizCancelBtn,
  getQuizChoices,
  getQuizContents,
  getQuizExplanation,
  getQuizSaveBtn,
  getQuizTag,
  getQuizTitle,
} from "@/specs/contents/quiz/quiz.locator"
import {
  getSurveyAddNewQuestion,
  getSurveyAddTag,
  getSurveyCancelCreate,
  getSurveyIDInput,
  getSurveyQuestionTitle,
  getSurveyQuestionType,
  getSurveySaveCreate,
  getSurveyTitle,
} from "@/specs/contents/survey/survey.locator"
import {
  //getTeamInviteEmail, 
  //getTeamInviteText, 
  //getTeamRoleDropdown 
} from "@/specs/general/member.locator"
import {
  getCommunityAddSection,
  getCommunityAddsectionBtn,
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
  getCommunitySaveBtn,
  getCommunitySectionContent,
  getCommunitySectionName,
  getCommunitySubmitBtn,
  getCommunityTokenDoublecheckBtn,
  getCommunityTokenGobackBtn,
  getCommunityTokenName
} from "../specs/general/tokeninfo.locator"
import {
  getInternalfeatureFromCommunity,
  getInternalfeatureToCommunity,
  getInternalSFExpireDateToggle,
  getInternalSFTwoWaysToggle,
  getInternalStartEndDate,
} from "@/specs/collaboration/internal/internal.locator"
import { scrollToElement, waitForPageToLoad } from "@/utils/load-helper"
import { expect, Page } from "@playwright/test"

/*
async function brandTokenEditCheck(page) {
  console.log("Start token edit page check.")
  await page.waitForTimeout(3000)
  const tokenBackBtn = await getTokenBackBtn(page)
  const tokenUploadTokenImg = (await getTokenUploadFile(page))[0]
  const tokenUploadCoverImg = (await getTokenUploadFile(page))[1]
  const tokenUploadBannerImg = (await getTokenUploadFile(page))[2]
  const tokenName = await getTokenName(page)
  const tokenActivityGraph = await getTokenActivityGraph(page)
  const tokenBrandInfoEdit = await getTokenBrandinfoEdit(page)
  const tokenDescription = await getTokenDescription(page)
  const tokenAddSection = await getTokenAddsection(page)
  const tokenPreview = await getTokenPreview(page)
  const tokenSaveBtn = await getTokenSaveBtn(page)
  await expect(tokenBackBtn).toBeVisible()
  await expect(tokenUploadTokenImg).toBeVisible()
  await expect(tokenUploadCoverImg).toBeVisible()
  await expect(tokenUploadBannerImg).toBeVisible()
  await expect(tokenName).toBeVisible()
  await expect(tokenActivityGraph).toBeVisible()
  await expect(tokenBrandInfoEdit).toBeVisible()
  await expect(tokenDescription).toBeVisible()
  await expect(tokenAddSection).toBeVisible()
  await expect(tokenPreview).toBeVisible()
  await expect(tokenSaveBtn).toBeVisible()
  console.log("End token edit page check.")
}
*/

/*
async function brandTeamInviteBtnCheck(page) {
  const teamInviteText = await getTeamInviteText(page)
  const teamInviteEmail = await getTeamInviteEmail(page)
  const teamRoleDropdown = await getTeamRoleDropdown(page)
  await expect(teamInviteText).toBeVisible()
  await expect(teamInviteEmail).toBeVisible()
  await expect(teamRoleDropdown).toBeVisible()
}
*/

/*
async function brandCreateNFTPageCheck(page) {
  await page.waitForTimeout(3000)
  const createNFTText = await getCreateNFTText(page)
  const createNFTImage = (await getCreateNFTUploadFile(page))[0]
  const createNFTTokenDropdown = await getCreateNFTTokenDropdown(page)
  const createNFTTitle = await getCreateNFTTitle(page)
  const createNFTSupply = await getCreateNFTSupply(page)
  const createNFTDescription = await getCreateNFTDescription(page)
  const createNFTChooseCollection = await getCreateNFTChooseCollection(page)
  const nftOwnershipToggle = await getCreateNFTOwnershiptransferToggle(page)
  const nftOwnershipToggleValue = await nftOwnershipToggle.isChecked()
  await expect(nftOwnershipToggleValue).toBe(true) // Default is ON
  const createNFTPreview = await getCreateNFTPreview(page)
  const createNFTCancel = await getCreateNFTCancel(page)
  const createNFTSave = await getCreateNFTSave(page)
  await expect(createNFTText).toBeVisible()
  await expect(createNFTImage).toBeVisible()
  await expect(createNFTTokenDropdown).toBeVisible()
  await expect(createNFTTitle).toBeVisible()
  await expect(createNFTSupply).toBeVisible()
  await expect(createNFTDescription).toBeVisible()
  await scrollToElement(page, createNFTChooseCollection)
  await expect(createNFTChooseCollection).toBeVisible()
  await expect(createNFTPreview).toBeVisible()
  await expect(createNFTCancel).toBeVisible()
  await expect(createNFTSave).toBeVisible()
}
*/

/*
async function brandEditNFTPageCheck(page) {
  await page.waitForTimeout(3000)
  const editNFTUploadImage = (await getCreateNFTUploadFile(page))[0]
  try {
    const editNFTText = await getEditNFTText(page)
    await expect(editNFTText).toBeVisible()
  } catch (error) {
    console.log("[ERROR] User is not EDIT page. Closing test")
  }
  // Create and Edit have the same xpath values
  const editNFTTokenDropdown = await getCreateNFTTokenDropdown(page)
  const editNFTSelectedToken = await getEditNFTSelectedToken(page)
  const editNFTUploadedImg = await getEditNFTUploadedImage(page)
  const editNFTName = await getCreateNFTTitle(page)
  const editNFTSupply = await getCreateNFTSupply(page)
  const editNFTCollectionTextfield = await getCreateNFTCollectionTextfield(page)
  const editListingBtn = await getEditNFTListingBtn(page)
  const editPreview = await getCreateNFTPreview(page)
  await expect(editNFTUploadImage).toBeVisible()
  await expect(editNFTSelectedToken).toBeVisible()
  await expect(editNFTUploadedImg).toBeVisible()
  await expect(editNFTTokenDropdown).toBeVisible()
  await expect(editNFTName).toBeVisible()
  await expect(editNFTSupply).toBeVisible()
  await scrollToElement(page, editNFTCollectionTextfield)
  await expect(editNFTCollectionTextfield).toBeVisible()
  await expect(editListingBtn).toBeVisible()
  await expect(editPreview).toBeVisible()
}
*/

/*
async function brandEditMysteryboxPageCheck(page: Page) {
  await waitForPageToLoad(page)
  const editMysteryboxText = await getEditMysteryboxText(page)
  const editMysteryboxUploadImage = await getCreateMysteryboxUploadImage(page)
  const editMysteryboxTokenDropdown = await getCreateMysteryboxTokenDropdown(page)
  const editMysteryboxName = await getCreateMysteryboxName(page)
  const editMysteryboxTotalBoxes = await getCreateMysteryboxTotalBoxes(page)
  const editMysteryboxListforsaleBtn = await getEditMysteryboxListforsaleBtn(page)
  const editMysteryboxBackBtn = await getEditMysteryboxBackBtn(page)
  const editMysteryboxSaveChangesBtn = await getEditMysteryboxSaveChangesBtn(page)
  await expect(editMysteryboxText).toBeVisible()
  await expect(editMysteryboxUploadImage).toBeVisible()
  await expect(editMysteryboxTokenDropdown).toBeVisible()
  await expect(editMysteryboxName).toBeVisible()
  await expect(editMysteryboxTotalBoxes).toBeVisible()
  await expect(editMysteryboxListforsaleBtn).toBeVisible()
  await expect(editMysteryboxBackBtn).toBeVisible()
  await expect(editMysteryboxSaveChangesBtn).toBeVisible()
}
*/

/*
async function brandEditMissionPageCheck(page: Page) {
  console.log("Start Edit mission page check.")
  await waitForPageToLoad(page)
  const editMissionText = await getEditMissionText(page)
  const missionStepsLabel = await getMissionStepsPage(page)
  for (let ctr = 0; ctr < missionStepsLabel.length; ctr++) {
    await expect(missionStepsLabel[ctr]).toBeVisible()
    console.log("Label  " + ctr + " is visible.")
  }
  const missionTaskListText = await getMissionTaskListText(page)
  const missionTaskList = await getMissionTaskList(page)
  const missionDiscardChangesBtn = await getMissionDiscardChanges(page)
  const missionAddTaskBtn = await getMissionAddTaskBtn(page)
  await scrollToElement(page, missionAddTaskBtn)
  await expect(missionTaskListText).toBeVisible()
  await expect(missionTaskList).toBeVisible()
  await expect(missionDiscardChangesBtn).toBeVisible()
  await expect(editMissionText).toBeVisible()
  await expect(missionAddTaskBtn).toBeVisible()
  // add a new task
  await missionAddTaskBtn.click()
  const missionChoosetaskText = await getMissionChooseTaskText(page)
  const missionNextBtn = await getMissionNextBtn(page)
  await expect(missionChoosetaskText).toBeVisible()
  const missionTaskSelection = await getMissionTaskSelection(page)
  let taskSelectionText
  // check if icons are in proper order
  for (let ctr = 0; ctr < missionTaskSelection.length; ctr++) {
    taskSelectionText = await missionTaskSelection[ctr].textContent()
    console.log("Value of taskSelectionText = " + taskSelectionText)
    switch (ctr) {
      case 0:
        if (taskSelectionText === "Play Video") {
          console.log("Selection is Play Video, moving to the next one.")
        } else {
          throw new Error("[ERROR] Selection should be Play Video")
        }
        break
      case 1:
        if (taskSelectionText === "Feedback") {
          console.log("Selection is Feedback, moving to the next one.")
        } else {
          throw new Error("[ERROR] Selection should be Feedback")
        }
        break
      case 2:
        if (taskSelectionText === "Quiz") {
          console.log("Selection is Quiz, moving to the next one.")
        } else {
          throw new Error("[ERROR] Selection should be Quiz")
        }
        break
      case 3:
        if (taskSelectionText === "Survey") {
          console.log("Selection is Survey, moving to the next one.")
        } else {
          throw new Error("[ERROR] Selection should be Survey")
        }
        break
      case 4:
        if (taskSelectionText === "Everyday Login") {
          console.log("Selection is Everyday Login, moving to the next one.")
        } else {
          throw new Error("[ERROR] Selection should be Everyday Login")
        }
        break
      case 5:
        if (taskSelectionText === "Visit a link") {
          console.log("Selection is Visit a link, moving to the next one.")
        } else {
          throw new Error("[ERROR] Selection should be Visit a link")
        }
        break
      case 6:
        if (taskSelectionText === "Read blog") {
          console.log("Selection is Read blog, moving to the next one.")
        } else {
          throw new Error("[ERROR] Selection should be Read blog")
        }
        break
      case 7:
        if (taskSelectionText === "ZAP Action") {
          console.log("Selection is ZAP Action, moving to the next one.")
        } else {
          throw new Error("[ERROR] Selection should be ZAP Action")
        }
        break
      case 8:
        if (taskSelectionText === "Exchange NFT") {
          console.log("Selection is Exchange NFT, moving to the next one.")
        } else {
          throw new Error("[ERROR] Selection should be Exchange NFT")
        }
        break
      default:
        if (taskSelectionText === "Send Token") {
          console.log("Selection is Send Token, moving to the next one.")
        } else {
          throw new Error("[ERROR] Selection should be Send Token")
        }
        break
    }
  }
  const taskSelectionCloseBtn = await getMissionSelectionCloseBtn(page)
  await taskSelectionCloseBtn.click()
  // check if required nft toggle exists
  const taskRequiredNFTToggle = (await getMissionRequireNFTToggle(page))[0]
  const taskRewardToggle = (await getTaskRewardToggle(page))[0]
  await expect(taskRequiredNFTToggle).toBeVisible()
  await scrollToElement(page, taskRewardToggle)
  await expect(taskRewardToggle).toBeVisible()
  try {
    const taskTokenRewardDropdown = (await getTaskTokenRewardDropdown(page))[0]
    const taskRewardAmount = (await getTaskRewardAmount(page))[0]
    await expect(taskTokenRewardDropdown).toBeVisible()
    await expect(taskRewardAmount).toBeVisible()
  } catch (error) {
    console.log("Task reward not set, clicking toggle")
    await taskRewardToggle.click()
    const taskTokenRewardDropdown = (await getTaskTokenRewardDropdown(page))[0]
    const taskRewardAmount = (await getTaskRewardAmount(page))[0]
    await scrollToElement(page, taskTokenRewardDropdown)
    await expect(taskTokenRewardDropdown).toBeVisible()
    await scrollToElement(page, taskRewardAmount)
    await expect(taskRewardAmount).toBeVisible()
  }
  await taskRewardToggle.click()
  await missionNextBtn.click()
  // Start check locators on page 2
  const missionTitle = await getMissionTitle(page)
  const missionDescription = await getMissionDescription(page)
  await expect(missionTitle).toBeVisible()
  await expect(missionDescription).toBeVisible()
  // End check locators on page 2
  await missionNextBtn.click()
  // Start check locators on page 3
  const missionPreview = await getMissionPreview(page)
  await expect(missionPreview).toBeVisible()
  const missionTokenVisibility = await getMissionVisibility(page)
  const missionEnableDate = await getMissionEnableDateToggle(page)
  const missionRequireParticipant = await getMissionRequirementToggle(page)
  const missionShowonZAP = await getMissionShowZAPToggle(page)
  const missionOnetaskonedayToggle = await getMissionOnetaskonedayToggle(page)
  const missionTaskRetryToggle = await getMissionTaskretryToggle(page)
  const missionRetryToggle = await getMissionRetryToggle(page)
  const missionReward = await getMissionRewardToggle(page)
  for (let ctr = 0; ctr < missionTokenVisibility.length; ctr++) {
    await expect(missionTokenVisibility[ctr]).toBeVisible()
  }
  await expect(missionEnableDate).toBeVisible()
  await expect(missionRequireParticipant).toBeVisible()
  await expect(missionShowonZAP).toBeVisible()
  await expect(missionOnetaskonedayToggle).toBeVisible()
  await expect(missionTaskRetryToggle).toBeVisible()
  await expect(missionRetryToggle).toBeVisible()
  await expect(missionReward).toBeVisible()
  // End check locators on page 3
  console.log("End Edit mission page check.")
}
*/

/*
async function brandCreateQuizPageCheck(page) {
  await page.waitForTimeout(3000)
  const quizCreateText = await getCreateQuizText(page)
  const quizTitle = await getQuizTitle(page)
  const quizContents = await getQuizContents(page)
  const quizChoices = (await getQuizChoices(page))[0]
  const quizExplanation = await getQuizExplanation(page)
  const quizTag = await getQuizTag(page)
  const quizCancelBtn = await getQuizCancelBtn(page)
  const quizSaveBtn = await getQuizSaveBtn(page)
  await expect(quizCreateText).toBeVisible()
  await expect(quizTitle).toBeVisible()
  await expect(quizContents).toBeVisible()
  await expect(quizChoices).toBeVisible()
  await expect(quizExplanation).toBeVisible()
  await expect(quizTag).toBeVisible()
  await expect(quizCancelBtn).toBeVisible()
  await expect(quizSaveBtn).toBeVisible()
}
*/

/*
async function brandCreateSurveyPageCheck(page) {
  await page.waitForTimeout(3000)
  const surveyTitle = await getSurveyTitle(page)
  const surveyAddNewQuestion = await getSurveyAddNewQuestion(page)
  await expect(surveyTitle).toBeVisible()
  await expect(surveyAddNewQuestion).toBeVisible()
  await surveyAddNewQuestion.click()
  const surveyQuestionTitle = await getSurveyQuestionTitle(page)
  const surveyQuestionType = await getSurveyQuestionType(page)
  const surveyAddTag = await getSurveyAddTag(page)
  const surveyIDInput = await getSurveyIDInput(page)
  const surveyCancelCreate = await getSurveyCancelCreate(page)
  const surveySaveCreate = await getSurveySaveCreate(page)
  await expect(surveyQuestionTitle).toBeVisible()
  await expect(surveyQuestionType).toBeVisible()
  await expect(surveyAddTag).toBeVisible()
  await expect(surveyIDInput).toBeVisible()
  await expect(surveyCancelCreate).toBeVisible()
  await expect(surveySaveCreate).toBeVisible()
}
*/

/*
async function brandCreateGamePageCheck(page) {
  await page.waitForTimeout(3000)
  const creategameTitle = await getCreategameTitle(page)
  const creategameTokenDropdown = await getCreategameCommunityDropdown(page)
  const creategameTokenAmount = await getCreategameTokenAmount(page)
  const creategamePeriodToggle = await getCreategamePeriodToggle(page)
  await expect(creategamePeriodToggle).toBeVisible()
  await creategamePeriodToggle.click()
  const creategameStartendDate = (await getCreategameStartendDate(page))[0]
  const creategameTimezone = await getCreategameTimezone(page)
  const creategameLimitUser = await getCreategameLimitUser(page)
  await expect(creategameLimitUser).toBeVisible()
  await creategameLimitUser.click()
  const creategameFrequencyAmt = await getCreategameFrequencyAmt(page)
  const creategameFrequencyUnit = await getCreategameFrequencyUnit(page)
  const creategameRewardColumnHeaders = (await getCreategameRewardColumnHeaders(page))[0]
  const creategameAddOptionBtn = await getCreategameAddOptionBtn(page)
  const creategameCancelBtn = await getCreategameCancelBtn(page)
  const creategameSaveBtn = await getCreategameSaveBtn(page)
  await expect(creategameTitle).toBeVisible()
  await expect(creategameTokenDropdown).toBeVisible()
  await expect(creategameTokenAmount).toBeVisible()
  await expect(creategameStartendDate).toBeVisible()
  await expect(creategameTimezone).toBeVisible()
  await expect(creategameFrequencyAmt).toBeVisible()
  await expect(creategameFrequencyUnit).toBeVisible()
  await expect(creategameRewardColumnHeaders).toBeVisible()
  await expect(creategameAddOptionBtn).toBeVisible()
  await expect(creategameCancelBtn).toBeVisible()
  await expect(creategameSaveBtn).toBeVisible()
}
*/

/*
async function brandInternalCollabFeatureTokenPageCheck(page) {
  await page.waitForTimeout(3000)
  const internalFeatureFromToken = await getInternalfeatureFromCommunity(page)
  const internalFeatureToToken = await getInternalfeatureToCommunity(page)
  const internalSFTwoWaysToggle = await getInternalSFTwoWaysToggle(page)
  await expect(internalFeatureFromToken).toBeVisible()
  await expect(internalFeatureToToken).toBeVisible()
  await expect(internalSFTwoWaysToggle).toBeVisible()
  const internalSFExpireDateToggle = await getInternalSFExpireDateToggle(page)
  await expect(internalSFExpireDateToggle).toBeVisible()
  await scrollToElement(page, internalSFExpireDateToggle)
  await expect(internalSFExpireDateToggle).toBeVisible()
  await internalSFExpireDateToggle.click()
  const internalStartDate = (await getInternalStartEndDate(page))[0]
  const internalEndDate = (await getInternalStartEndDate(page))[1]
  await expect(internalStartDate).toBeVisible()
  await expect(internalEndDate).toBeVisible()
}
*/

export {
  brandCreateGamePageCheck,
  brandCreateNFTPageCheck,
  brandCreateQuizPageCheck,
  brandCreateSurveyPageCheck,
  brandEditMissionPageCheck,
  brandEditMysteryboxPageCheck,
  brandEditNFTPageCheck,
  brandInternalCollabFeatureTokenPageCheck
  /*
  brandTeamInviteBtnCheck,
  brandTokenEditCheck
  */
}
