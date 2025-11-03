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
  getMissionRetryToggle,
  getMissionRewardToggle,
  getMissionSelectionCloseBtn,
  getMissionSettingsSelect,
  getMissionShowZAPToggle,
  getMissionStepsPage,
  getMissionTaskList,
  getMissionTaskListText,
  getMissionTaskSelection,
  getMissionTaskretryToggle,
  getMissionTitle,
  getMissionVisibility,
  getTaskRewardTokenAmount,
  getTaskRewardToggle,
  getTaskRewardToggleONLocator,
  getTaskSelectReward24KARAT,
  getTaskrewardSelectToken,
  getTaskrewardDropdown,
  getTaskrewardDropdownOptionSelect
} from "../mission/mission.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement, waitForPageToLoad } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { addDataOnTextfield } from "@/utils/keyboard-helper"
import { PageUtils } from "@/utils/page-utils"
import test, { expect } from "@playwright/test"

test.describe("Mission page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Contents$/ })
      .first()
    await scrollToElement(page, parentMenu)
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Mission$/ })
      .first()
    await childMenu.click()

    try {
      await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findMissions, { timeout: 10000 })
    } catch (error) {
      console.error("This community does not have any missions")
    }
  })

  test("MISSION page", async ({ page }) => {
    console.log("[INFO] Mission page button check START")
    const missionSettingBtn = page.locator("//button[@aria-label='settings']").first()
    await missionSettingBtn.click()
    // Click edit button on the first mission
    const missionSettingSelect = (await getMissionSettingsSelect(page))[0]
    await missionSettingSelect.click()

    console.log("Now inside mission page, page 1")
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
    // Change to token reward
    // The code below will check whether task reward toggle is ON or OFF
    const taskRewardToggle = (await getTaskRewardToggle(page))[0]
    await expect(taskRewardToggle).toBeVisible() 
    // If toggle is ON, the element below will be visible (this element is the task reward dropdown)
    // dito huli mo
    try {
      const taskRewardONLocator = await getTaskrewardDropdown(page)
      await expect(taskRewardONLocator).toBeVisible()
      console.log("Toggle is set to ON, and dropdown is present")
    } catch (error) {
      console.log("Toggle is set to OFF, clicking it now to set it ON")

      await taskRewardToggle.click()
    }
    // Click token dropdown
    const taskSelectTokenReward = await getTaskrewardDropdown(page)
    await taskSelectTokenReward.click()
    // Select token
    const taskrewardOptionSelect = (await getTaskrewardDropdownOptionSelect(page))[0]
    await taskrewardOptionSelect.click()
    // Click token dropdown where users can select tokens from the list
    const taskRewardSelectToken = await getTaskrewardSelectToken(page)
    await taskRewardSelectToken.click()
    // Click 24KARAT token
    const taskSelectReward24KARAT = await getTaskSelectReward24KARAT(page)
    await taskSelectReward24KARAT.click()
    // Add token amount
    const tokenAmount = "1"
    const taskRewardTokenAmount = await getTaskRewardTokenAmount(page)
    await taskRewardTokenAmount.click()
    await addDataOnTextfield(page, taskRewardTokenAmount, tokenAmount)
    await missionNextBtn.click()

    console.log("Now inside page 2")
    const missionTitle = await getMissionTitle(page)
    const missionDescription = await getMissionDescription(page)
    await expect(missionTitle).toBeVisible()
    await expect(missionDescription).toBeVisible()
    await missionNextBtn.click()

    console.log("Now inside page 3")
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
    console.log("[INFO] Mission page button check END")
  })
})
