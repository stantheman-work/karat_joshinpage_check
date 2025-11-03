import { expect, Locator, Page } from "@playwright/test"

async function getMissionText(page) {
  const missionText = page.locator("//div[text()='Mission']")
  await expect(missionText).toBeVisible({ timeout: 5000 })
  return missionText
}

async function getMissionSearchFilter(page) {
  const missionSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(missionSearchFilter).toBeVisible({ timeout: 5000 })
  return missionSearchFilter
}

async function getDropdownFilters(page: Page) {
  // 0 = show on zap, 1 = status dropdown, 2 = pagination dropdown
  const dropdownFilters = page.locator("//div[@role='combobox']")
  const count = await dropdownFilters.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(dropdownFilters.nth(i))
  }
  console.log("This is the value of dropdown filter = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getMissionCreateBtn(page) {
  const missionCreateBtn = page.locator("//button[contains(text(),'Create')]")
  await expect(missionCreateBtn).toBeVisible({ timeout: 5000 })
  return missionCreateBtn
}

async function getMissionCardListView(page: Page) {
  // 0 = card, 1 = list
  const missionCardListView = page.locator("//button[@value]")
  const count = await missionCardListView.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(missionCardListView.nth(i))
  }
  console.log("This is the value of Card List view = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getMissionSettingsBtn(page: Page) {
  // Depends on the number of missions the brand has
  const missionSettingsBtn = page.locator("//button[@aria-label='settings']")
  const count = await missionSettingsBtn.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(missionSettingsBtn.nth(i))
  }
  console.log("This is the value of mission settings button = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getMissionSettingsSelect(page: Page) {
  // 0 = edit, 1 = duplicate, 2 = share link, 3 = delete
  const missionSettingsSelect = page.locator("//div[@role='menuitem']")
  const count = await missionSettingsSelect.count()
  let options: Locator[] = []
  for (let i = 0; i < count; i++) {
    options.push(missionSettingsSelect.nth(i))
  }
  return options
}

// Page 1 locators start
async function getEditMissionText(page) {
  const editMissionText = page.locator("//span[text()='Edit Mission']")
  await expect(editMissionText).toBeVisible({ timeout: 5000 })
  return editMissionText
}

async function getMissionStepsPage(page: Page) {
  // circle 1, 2, 3
  const missionStepsPage = page.locator("//*[name()='svg']/*[name()='text' and @class='MuiStepIcon-text']")
  const count = await missionStepsPage.count()

  const textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(missionStepsPage.nth(i))
  }
  console.log("This is the value of steps page mission = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getMissionChooseTaskText(page) {
  const missionChooseTaskText = page.locator("//h2[contains(text(),'Choose')]")
  await expect(missionChooseTaskText).toBeVisible({ timeout: 5000 })
  return missionChooseTaskText
}

async function getMissionTaskListText(page) {
  const missionTaskListText = page.locator("//div[text()='Task list']")
  await expect(missionTaskListText).toBeVisible({ timeout: 5000 })
  return missionTaskListText
}

async function getMissionAddTaskBtn(page) {
  const missionAddTaskBtn = page.locator("//*[name()='svg' and @data-testid='AddIcon']/parent::button")
  await expect(missionAddTaskBtn).toBeVisible({ timeout: 5000 })
  return missionAddTaskBtn
}

async function getMissionTaskSelection(page: Page) {
  /*
    0 = Play Video, 1 = Feedback, 2 = Quiz
    3 = Survey, 4 = Everyday Login, 5 = Visit a link
    6 = Read blog, 7 = ZAP Action, 8 = Exchange NFT
    9 = Send Token
    */
  const missionTaskSelection = page.locator("//h2/following-sibling::div/div/div/div[text()]")
  const count = await missionTaskSelection.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(missionTaskSelection.nth(i))
  }
  console.log("This is the value of mission task selection = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getMissionSelectionCloseBtn(page) {
  const missionSelectionCloseBtn = page.locator("//*[name()='svg' and @data-testid='CloseIcon']")
  const count = await missionSelectionCloseBtn.count()

  if (count === 0) {
    throw new Error("No close buttons found")
  }

  console.log(`Total close buttons found: ${count}`)

  return missionSelectionCloseBtn.nth(count - 1)
}

async function getMissionTaskList(page) {
  const missionTaskList = page.locator("//div[@data-rbd-droppable-id='tasks']/parent::div")
  await expect(missionTaskList).toBeVisible({ timeout: 5000 })
  return missionTaskList
}

async function getMissionDiscardChanges(page) {
  const missionDiscardChanges = page.locator("//button[text()='Discard changes']")
  await expect(missionDiscardChanges).toBeVisible({ timeout: 5000 })
  return missionDiscardChanges
}

async function getMissionRequireNFTToggle(page: Page) {
  const missionRequireNFTToggle = page.locator(
    "//h6[contains(text(),'Requires')]/parent::div/following-sibling::span/descendant::input[@type='checkbox']"
  )
  const count = await missionRequireNFTToggle.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(missionRequireNFTToggle.nth(i))
  }
  console.log("This is the value of require NFT toggle = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getMissionTaskdropdownAndTitle(page: Page) {
  const missionTaskdropdownAndTitle = page.locator(
    "//div[text()='Type of task']/following-sibling::div/descendant::input[@value]"
  )
  const count = await missionTaskdropdownAndTitle.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(missionTaskdropdownAndTitle.nth(i))
  }
  console.log("Task dropdown and title = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getMissionDescriptionInput(page: Page) {
  const missionDescriptionInput = page.locator("//div[@data-placeholder='Input description']")
  const count = await missionDescriptionInput.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(missionDescriptionInput.nth(i))
  }
  console.log("This is the value of task description = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getTaskRewardToggle(page: Page) {
  const taskRewardToggle = page.locator(
    "//div[text()='Task reward']/parent::div/following-sibling::div"
  )
  const count = await taskRewardToggle.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(taskRewardToggle.nth(i))
  }
  console.log("This is the value of reward dropdown = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getTaskRewardToggleONLocator(page: Page) {
  const taskRewardONLocator = page.locator(
    "//div[text()='Task reward']/parent::div/following-sibling::div"
  )
  const count = await taskRewardONLocator.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(taskRewardONLocator.nth(i))
  }
  console.log("This is the value of reward dropdown = " + textFieldArray.length + "\n")

  return textFieldArray
}

// This is the dropdown where all reward options can be selected by user such as Token, NFT, Token and NFT
async function getTaskrewardDropdown(page) {
  //input[contains(@name,'reward.type')]/parent::div
  const taskrewardDropdown = page.locator("//input[@name='tasks.0.reward.type']/preceding-sibling::div")
  await expect(taskrewardDropdown).toBeVisible({ timeout: 5000 })
  return taskrewardDropdown
}

// After clicking getTaskrewardDropdown, this element will appear for user to choose which reward
// Token, NFT, Token and NFT
async function getTaskrewardDropdownOptionSelect(page: Page) {
  const taskrewardDropdownOptionSelect = page.locator("//li[@data-value]")
  const count = await taskrewardDropdownOptionSelect.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(taskrewardDropdownOptionSelect.nth(i))
  }
  console.log("Number of task reward options = " + textFieldArray.length + "\n")

  return textFieldArray
}

// This is the dropdown where admins can select which token the reward is for the task
async function getTaskrewardSelectToken(page) {
  const taskrewardSelectToken = page.locator("//input[@name='tasks.0.reward.token.symbol']/preceding-sibling::div")
  await expect(taskrewardSelectToken).toBeVisible({ timeout: 5000 })
  return taskrewardSelectToken
}

// Select 24KARAT as reward
async function getTaskSelectReward24KARAT(page) {
  const taskSelectReward24KARAT = page.locator("//li[@data-value='KARATV2']")
  await expect(taskSelectReward24KARAT).toBeVisible({ timeout: 5000 })
  return taskSelectReward24KARAT
}

async function getTaskRewardTokenAmount(page: Page) {
  const taskRewardTokenAmount = page.locator("//input[@name='tasks.0.reward.token.amount']")
  await expect(taskRewardTokenAmount).toBeVisible({ timeout: 5000 })
  return taskRewardTokenAmount
}

async function getMissionNextBtn(page) {
  const missionNextBtn = page.locator("//button[text()='Next']")
  await expect(missionNextBtn).toBeVisible({ timeout: 5000 })
  return missionNextBtn
}

async function getMissionPreview(page) {
  const missionPreview = page.locator("//div[text()='Preview']/parent::div/following-sibling::div")
  await expect(missionPreview).toBeVisible({ timeout: 5000 })
  return missionPreview
}

async function getMissionBackBtn(page) {
  const missionBackBtn = page.locator("//button[text()='Back']")
  await expect(missionBackBtn).toBeVisible({ timeout: 5000 })
  return missionBackBtn
}
// Page 1 locators end

// Page 2 locators start
async function getMissionTitle(page) {
  const missionTitle = page.locator("//input[@name='title']")
  await expect(missionTitle).toBeVisible({ timeout: 5000 })
  return missionTitle
}

async function getMissionDescription(page) {
  const missionDescription = page.locator("//div[@data-placeholder='Description of the mission']")
  await expect(missionDescription).toBeVisible({ timeout: 5000 })
  return missionDescription
}
// Page 2 locators end

// Page 3 locators start
async function getMissionVisibility(page: Page) {
  const missionVisibility = page.locator(
    "//div[text()='Visibility']/following-sibling::div/descendant::input[@type='radio']"
  )
  const count = await missionVisibility.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(missionVisibility.nth(i))
  }
  console.log("This is the value of mission visibility = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getMissionEnableDateToggle(page) {
  const missionEnableDateToggle = page.locator(
    "//div[text()='Enable date']/parent::div/following-sibling::div/descendant::input"
  )
  await expect(missionEnableDateToggle).toBeVisible({ timeout: 5000 })
  return missionEnableDateToggle
}

async function getMissionRequirementToggle(page) {
  const missionRequirementToggle = page.locator(
    "//div[contains(text(),'Requirement')]/parent::div/following-sibling::div/descendant::input"
  )
  await expect(missionRequirementToggle).toBeVisible({ timeout: 5000 })
  return missionRequirementToggle
}

async function getMissionShowZAPToggle(page) {
  const missionShowZAPToggle = page.locator(
    "//div[text()='Show on ZAP']/parent::div/following-sibling::div/descendant::input"
  )
  await expect(missionShowZAPToggle).toBeVisible({ timeout: 5000 })
  return missionShowZAPToggle
}

async function getMissionOnetaskonedayToggle(page) {
  const missionOnetaskonedayToggle = page.locator(
    "//div[contains(text(),'One task')]/parent::div/following-sibling::div/descendant::input"
  )
  await expect(missionOnetaskonedayToggle).toBeVisible({ timeout: 5000 })
  return missionOnetaskonedayToggle
}

async function getMissionTaskretryToggle(page) {
  const missionTaskretryToggle = page.locator(
    "//div[contains(text(),'Task re-tri')]/parent::div/following-sibling::div/descendant::input"
  )
  await expect(missionTaskretryToggle).toBeVisible({ timeout: 5000 })
  return missionTaskretryToggle
}

async function getMissionCorrectAnswerToggle(page) {
  const missionCorrectAnswerToggle = page.locator("//input[contains(@name,'Required')]")
  await expect(missionCorrectAnswerToggle).toBeVisible({ timeout: 5000 })
  return missionCorrectAnswerToggle
}

async function getMissionRetryToggle(page) {
  const missionRetryToggle = page.locator(
    "//div[contains(text(),'Mission re-tri')]/parent::div/following-sibling::div/descendant::input"
  )
  await expect(missionRetryToggle).toBeVisible({ timeout: 5000 })
  return missionRetryToggle
}

async function getMissionRewardToggle(page) {
  const missionRewardToggle = page.locator(
    "//div[contains(text(),'Mission reward')]/parent::div/following-sibling::div/descendant::input"
  )
  await expect(missionRewardToggle).toBeVisible({ timeout: 5000 })
  return missionRewardToggle
}
// Page 3 locators end

export {
  getDropdownFilters,
  getEditMissionText,
  getMissionAddTaskBtn,
  getMissionBackBtn,
  getMissionCardListView,
  getMissionChooseTaskText,
  getMissionCorrectAnswerToggle,
  getMissionCreateBtn,
  getMissionDescription,
  getMissionDescriptionInput,
  getMissionDiscardChanges,
  getMissionEnableDateToggle,
  getMissionNextBtn,
  getMissionOnetaskonedayToggle,
  getMissionPreview,
  getMissionRequirementToggle,
  getMissionRequireNFTToggle,
  getMissionRetryToggle,
  getMissionRewardToggle,
  getMissionSearchFilter,
  getMissionSelectionCloseBtn,
  getMissionSettingsBtn,
  getMissionSettingsSelect,
  getMissionShowZAPToggle,
  getMissionStepsPage,
  getMissionTaskList,
  getMissionTaskListText,
  getMissionTaskSelection,
  getMissionTaskdropdownAndTitle,
  getMissionTaskretryToggle,
  getMissionText,
  getMissionTitle,
  getMissionVisibility,
  getTaskRewardTokenAmount,
  getTaskRewardToggle,
  getTaskRewardToggleONLocator,
  getTaskSelectReward24KARAT,
  getTaskrewardSelectToken,
  getTaskrewardDropdown,
  getTaskrewardDropdownOptionSelect
}