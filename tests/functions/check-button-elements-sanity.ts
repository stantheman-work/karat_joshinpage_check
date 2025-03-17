import {
  getCreatearticleDescription,
  getCreatearticleLink,
  getCreatearticleReward,
  getCreatearticleRewardType,
  getCreatearticleSpecificTokenDropdown,
  getCreatearticleTags,
  getCreateArticleThumbnail,
  getCreatearticleTitle,
  getCreatearticleTokenAssigned,
} from "@/locators/brand-admin-article-loc"
import {
  getBrandCancelBtn,
  getBrandCategoryBtn,
  getBrandDescription,
  getBrandEditBackBtn,
  getBrandEditText,
  getBrandImage,
  getBrandName,
  getBrandSaveBtn,
} from "@/locators/brand-admin-brandinfo-loc"
import {
  getDevAPIKeysText,
  getDevCancelBtn,
  getDevColumnHeaders,
  getDevCreateAPIName,
  getDevCreateBtn,
  getDevCreateNewAPIBtn,
} from "@/locators/brand-admin-developertool-loc"
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
  getCreategameTokenDropdown,
} from "@/locators/brand-admin-gamecorner-loc"
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
} from "@/locators/brand-admin-mission-loc"
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
  getCreateMysteryboxTokenDropdown,
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
import {
  getCreateQuizText,
  getQuizCancelBtn,
  getQuizChoices,
  getQuizContents,
  getQuizExplanation,
  getQuizSaveBtn,
  getQuizTag,
  getQuizTitle,
} from "@/locators/brand-admin-quiz-loc"
import {
  getCreateSocialroomAddNFTBtn,
  getCreatesocialroomBackBtn,
  getCreatesocialroomCreateBtn,
  getCreateSocialroomDescription,
  getCreateSocialroomName,
  getCreateSocialroomRequireNFTToggle,
  getCreateSocialroomText,
  getCreateSocialroomTokenDropdown,
  getCreateSocialroomUploadImage,
} from "@/locators/brand-admin-socialroom-loc"
import {
  getStamppassportCancelBtn,
  getStamppassportCreateText,
  getStamppassportDisplayToggle,
  getStamppassportName,
  getStamppassportRewardToggle,
  getStamppassportSaveBtn,
  getStamppassportUploadImage,
} from "@/locators/brand-admin-stamppassport-loc"
import {
  getSurveyAddNewQuestion,
  getSurveyAddTag,
  getSurveyCancelCreate,
  getSurveyIDInput,
  getSurveyQuestionTitle,
  getSurveyQuestionType,
  getSurveySaveCreate,
  getSurveyTitle,
} from "@/locators/brand-admin-survey-loc"
import { getTeamInviteEmail, getTeamInviteText, getTeamRoleDropdown } from "@/locators/brand-admin-team-loc"
import {
  getTokenActivityGraph,
  getTokenAddsection,
  getTokenBackBtn,
  getTokenBrandinfoEdit,
  getTokenCreatetokenBtn,
  getTokenDescription,
  getTokenName,
  getTokenPreview,
  getTokenSaveBtn,
  getTokenUploadFile,
} from "@/locators/brand-admin-tokeninfo-loc"
import {
  getInternalFeatureFromToken,
  getInternalFeatureToToken,
  getInternalSFExpireDateToggle,
  getInternalSFTwoWaysToggle,
  getInternalStartEndDate,
} from "@/specs/collaboration/internal/internal.locator"
import { scrollToElement, waitForPageToLoad } from "@/utils/load-helper"
import { expect, Page } from "@playwright/test"

async function brandEditCheck(page) {
  // console.log("Start Brand edit page check.")
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
  console.log("End Brand edit page check.")
}

async function brandTokenCreateCheck(page) {
  console.log("Start token create page check.")
  await waitForPageToLoad(page)
  const tokenBackBtn = await getTokenBackBtn(page)
  const tokenUploadTokenImg = (await getTokenUploadFile(page))[0]
  const tokenUploadCoverImg = (await getTokenUploadFile(page))[1]
  const tokenUploadBannerImg = (await getTokenUploadFile(page))[2]
  const tokenName = await getTokenName(page)
  const tokenActivityGraph = await getTokenActivityGraph(page)
  const tokenBrandInfoEdit = await getTokenBrandinfoEdit(page)
  const tokenDesc = await getTokenDescription(page)
  const tokenAddSection = await getTokenAddsection(page)
  const tokenPreview = await getTokenPreview(page)
  const tokenCreateBtn = await getTokenCreatetokenBtn(page)
  await expect(tokenBackBtn).toBeVisible()
  await expect(tokenUploadTokenImg).toBeVisible()
  await expect(tokenUploadCoverImg).toBeVisible()
  await expect(tokenUploadBannerImg).toBeVisible()
  await expect(tokenName).toBeVisible()
  await expect(tokenActivityGraph).toBeVisible()
  await expect(tokenBrandInfoEdit).toBeVisible()
  await expect(tokenDesc).toBeVisible()
  await expect(tokenAddSection).toBeVisible()
  await expect(tokenPreview).toBeVisible()
  await expect(tokenCreateBtn).toBeVisible()
  console.log("End token create page check.")
}

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

async function brandTeamInviteBtnCheck(page) {
  const teamInviteText = await getTeamInviteText(page)
  const teamInviteEmail = await getTeamInviteEmail(page)
  const teamRoleDropdown = await getTeamRoleDropdown(page)
  await expect(teamInviteText).toBeVisible()
  await expect(teamInviteEmail).toBeVisible()
  await expect(teamRoleDropdown).toBeVisible()
}

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

async function brandCreateStamppassportCheck(page) {
  console.log("Start create stamp passport check.")
  await page.waitForTimeout(3000)
  const passportCreate = await getStamppassportCreateText(page)
  const passportUploadImg = await getStamppassportUploadImage(page)
  const passportName = await getStamppassportName(page)
  const passportRewardToggle = await getStamppassportRewardToggle(page)
  const passportDisplayToggle = await getStamppassportDisplayToggle(page)
  const passportCancelBtn = await getStamppassportCancelBtn(page)
  const passportSaveBtn = await getStamppassportSaveBtn(page)
  await expect(passportCreate).toBeVisible()
  await expect(passportUploadImg).toBeVisible()
  await expect(passportName).toBeVisible()
  await expect(passportRewardToggle).toBeVisible()
  await expect(passportDisplayToggle).toBeVisible()
  await expect(passportCancelBtn).toBeVisible()
  await expect(passportSaveBtn).toBeVisible()
  console.log("End create stamp passport check.")
}

async function brandCollectionManagementPageCheck(page: Page) {
  let waitCtr = 0
  const collectionMgmtInfoText = await getCollectionManagementInfoText(page)
  while (waitCtr < 5) {
    try {
      await getCollectionManagementColumnHeader(page)
      //await expect(collectionMgmtColumnHeader).toBeVisible()
      waitCtr = 5
    } catch (error) {
      console.log("[ERROR] Items have not yet loaded, waiting for a few seconds...", error)
      await page.waitForTimeout(3500)
      waitCtr++
    }
  }
  const collectionMgmtSearchFilter = await getCollectionManagementSearchFilter(page)
  const collectionMgmtCreateBtn = await getCollectionManagementCreateCollectionBtn(page)
  const collectionMgmtCloseBtn = await getCollectionManagementCloseBtn(page)
  await expect(collectionMgmtInfoText).toBeVisible()
  await expect(collectionMgmtSearchFilter).toBeVisible()
  await expect(collectionMgmtCreateBtn).toBeVisible()
  await expect(collectionMgmtCloseBtn).toBeVisible()
}

async function brandCreateMysteryboxPageCheck(page: Page) {
  await page.waitForTimeout(3000)
  const createMysteryboxText = await getCreateMysteryboxText(page)
  const createMysteryboxUploadImage = await getCreateMysteryboxUploadImage(page)
  const createMysteryboxTokenDropdown = await getCreateMysteryboxTokenDropdown(page)
  const createMysteryboxName = await getCreateMysteryboxName(page)
  const createMysteryboxTotalBoxes = await getCreateMysteryboxTotalBoxes(page)
  const createMysteryboxCancelBtn = await getCreateMysteryboxCancelBtn(page)
  const createMysteryboxCreateBtn = await getCreateMysteryboxCreateBtn(page)
  await expect(createMysteryboxText).toBeVisible()
  await expect(createMysteryboxUploadImage).toBeVisible()
  await expect(createMysteryboxTokenDropdown).toBeVisible()
  await expect(createMysteryboxName).toBeVisible()
  await expect(createMysteryboxTotalBoxes).toBeVisible()
  await expect(createMysteryboxCancelBtn).toBeVisible()
  await expect(createMysteryboxCreateBtn).toBeVisible()
}

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

async function brandCreateArticlePageCheck(page) {
  await page.waitForTimeout(3000)
  const createarticleTokenAssigned = (await getCreatearticleTokenAssigned(page))[1]
  await expect(createarticleTokenAssigned).toBeVisible()
  await createarticleTokenAssigned.click()
  const createarticleSpecificTokenDropdown = await getCreatearticleSpecificTokenDropdown(page)
  await expect(createarticleSpecificTokenDropdown).toBeVisible()
  const createarticleLink = await getCreatearticleLink(page)
  const createarticleThumbnail = await getCreateArticleThumbnail(page)
  if ((await createarticleThumbnail.count()) > 0) {
    console.log("Thumbnail input exists")
  } else {
    console.error("Thumbnail input does not exist")
  }
  const createarticleTitle = await getCreatearticleTitle(page)
  const createarticleDescription = await getCreatearticleDescription(page)
  const createarticleTags = await getCreatearticleTags(page)
  await expect(createarticleLink).toBeVisible()
  await expect(createarticleTitle).toBeVisible()
  await expect(createarticleDescription).toBeVisible()
  await expect(createarticleTags).toBeVisible()
  const createarticleReward = await getCreatearticleReward(page)
  await expect(createarticleReward).toBeVisible()
  await createarticleReward.click()
  const createarticleRewardType = await getCreatearticleRewardType(page)
  await expect(createarticleRewardType).toBeVisible()
}

async function brandCreateGamePageCheck(page) {
  await page.waitForTimeout(3000)
  const creategameTitle = await getCreategameTitle(page)
  const creategameTokenDropdown = await getCreategameTokenDropdown(page)
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
async function brandDeveloperToolPageCheck(page: Page) {
  await page.waitForTimeout(3000)
  const devAPIKeysText = await getDevAPIKeysText(page)
  const devColumnHeaders = (await getDevColumnHeaders(page))[0]
  const devCreateNewAPIBtn = await getDevCreateNewAPIBtn(page)
  await expect(devAPIKeysText).toBeVisible()
  await expect(devColumnHeaders).toBeVisible()
  await expect(devCreateNewAPIBtn).toBeVisible()
  await devCreateNewAPIBtn.click()
  await waitForPageToLoad(page)
  const devCreateAPIName = await getDevCreateAPIName(page)
  const devCancelBtn = await getDevCancelBtn(page)
  const devCreateBtn = await getDevCreateBtn(page)
  await expect(devCreateAPIName).toBeVisible()
  await expect(devCancelBtn).toBeVisible()
  await expect(devCreateBtn).toBeVisible()
}

async function brandInternalCollabFeatureTokenPageCheck(page) {
  await page.waitForTimeout(3000)
  const internalFeatureFromToken = await getInternalFeatureFromToken(page)
  const internalFeatureToToken = await getInternalFeatureToToken(page)
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

async function brandCreateSocialroomPageCheck(page) {
  await page.waitForTimeout(3000)
  const createSocialroomText = await getCreateSocialroomText(page)
  const createSocialroomUploadImage = await getCreateSocialroomUploadImage(page)
  const createSocialroomName = await getCreateSocialroomName(page)
  const createSocialroomDescription = await getCreateSocialroomDescription(page)
  const createSocialroomTokenDropdown = await getCreateSocialroomTokenDropdown(page)
  const createSocialroomRequireNFTToggle = await getCreateSocialroomRequireNFTToggle(page)
  const createSocialroomBackBtn = await getCreatesocialroomBackBtn(page)
  const createSocialroomCreateBtn = await getCreatesocialroomCreateBtn(page)
  await expect(createSocialroomText).toBeVisible()
  await expect(createSocialroomUploadImage).toBeVisible()
  await expect(createSocialroomName).toBeVisible()
  await expect(createSocialroomDescription).toBeVisible()
  await expect(createSocialroomTokenDropdown).toBeVisible()
  await expect(createSocialroomRequireNFTToggle).toBeVisible()
  await expect(createSocialroomBackBtn).toBeVisible()
  await expect(createSocialroomCreateBtn).toBeVisible()
  await createSocialroomRequireNFTToggle.click()
  const createSocialroomAddNFTBtn = await getCreateSocialroomAddNFTBtn(page)
  await expect(createSocialroomAddNFTBtn).toBeVisible()
}
/*
Scrapped.  Not needed anymore.
  async function brandTokenEditCheck(page, counter) {
    console.log("Start token edit page check.");
    await page.waitForTimeout(3500);
    const tokenBackBtn = await getTokenBackBtn(page);
    const tokenUploadTokenImg = (await getTokenUploadFile(page))[0];
    const tokenUploadCoverImg = (await getTokenUploadFile(page))[1];
    const tokenUploadBannerImg = (await getTokenUploadFile(page))[2];
    const tokenName = await getTokenName(page);
    const tokenActivityGraph = await getTokenActivityGraph(page);
    const tokenBrandInfoEdit = await getTokenBrandinfoEdit(page);
    const tokenENDesc = (await getTokenDescription(page))[0];
    const tokenJPDesc = (await getTokenDescription(page))[1];
    const tokenAddSection = await getTokenAddsection(page);
    const tokenPreview = await getTokenPreview(page);
    const tokenSaveBtn = await getTokenSaveBtn(page);
    await expect(tokenBackBtn).toBeVisible();
    await expect(tokenUploadTokenImg).toBeVisible();
    await expect(tokenUploadCoverImg).toBeVisible();
    await expect(tokenUploadBannerImg).toBeVisible();
    await expect(tokenName).toBeVisible();
    await expect(tokenActivityGraph).toBeVisible();
    await expect(tokenBrandInfoEdit).toBeVisible();
    await expect(tokenENDesc).toBeVisible();
    await expect(tokenJPDesc).toBeVisible();
    await expect(tokenAddSection).toBeVisible();
    await expect(tokenPreview).toBeVisible();
    await expect(tokenSaveBtn).toBeVisible();
    if(counter === 0) {
      // Add changes on token name and description, to check if edit works fine
      const tokenNameOrigText = await tokenName.getAttribute("value");
      tokenEditDesc.push(tokenNameOrigText);
      console.log("Value of tokenNameOrigText = "+tokenNameOrigText);
      await scrollToElement(page, tokenName);
      await tokenName.fill(""); // clear existing text
      await tokenName.fill(tokenNameOrigText + " EDIT");
      const tokenENDescOrigText = await tokenENDesc.textContent();
      tokenEditDesc.push(tokenENDescOrigText);
      await scrollToElement(page, tokenENDesc);
      await tokenENDesc.fill(""); // clear existing text
      await tokenENDesc.fill(tokenENDescOrigText + " EDIT");
      const tokenJPDescOrigText = await tokenJPDesc.textContent();
      tokenEditDesc.push(tokenJPDescOrigText);
      await scrollToElement(page, tokenJPDesc);
      await tokenJPDesc.fill(""); // clear existing text
      await tokenJPDesc.fill(tokenJPDescOrigText + " EDIT");
    } else {
      // Revert back to original text
      await tokenName.fill(tokenEditDesc[0]);
      await tokenENDesc.fill(tokenEditDesc[1]);
      await tokenJPDesc.fill(tokenEditDesc[2]);
    }
    await tokenSaveBtn.click();
    console.log("End token edit page check.");
  }
  */

export {
  brandCollectionManagementPageCheck,
  brandCreateArticlePageCheck,
  brandCreateGamePageCheck,
  brandCreateMysteryboxPageCheck,
  brandCreateNFTPageCheck,
  brandCreateQuizPageCheck,
  brandCreateSocialroomPageCheck,
  brandCreateStamppassportCheck,
  brandCreateSurveyPageCheck,
  brandDeveloperToolPageCheck,
  brandEditCheck,
  brandEditMissionPageCheck,
  brandEditMysteryboxPageCheck,
  brandEditNFTPageCheck,
  brandInternalCollabFeatureTokenPageCheck,
  brandTeamInviteBtnCheck,
  brandTokenCreateCheck,
  brandTokenEditCheck,
}
