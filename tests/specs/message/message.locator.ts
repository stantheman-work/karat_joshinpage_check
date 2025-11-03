import { expect, Locator, Page } from "@playwright/test"

async function getMessageText(page) {
  const articleText = page.locator("//h5[text()='Messages']")
  await expect(articleText).toBeVisible({ timeout: 5000 })
  return articleText
}

async function getMessageTab(page) {
  const messageTab = page.locator("//button[contains(text(),'Personalized')]")
  await expect(messageTab).toBeVisible({ timeout: 5000 })
  return messageTab
}

async function getAirdropTab(page) {
  const airdropTab = page.locator("//div[text()='Airdrop']")
  await expect(airdropTab).toBeVisible({ timeout: 5000 })
  return airdropTab
}

async function getMessageCreateBtn(page: Page) {
  const messageCreateBtn = page.locator("//button[contains(text(),'New')]")
  await expect(messageCreateBtn).toBeVisible({ timeout: 5000 })
  return messageCreateBtn
}

async function getAirdropCreatebtn(page) {
  const airdropCreatebtn = page.locator("//button[contains(text(),'CREATE')]")
  await expect(airdropCreatebtn).toBeVisible({ timeout: 5000 })
  return airdropCreatebtn
}

async function getAirdropCreateBtnSelection(page: Page) {
  const airdropCreateBtnSelection = page.locator("//li[@role='menuitem']")
  const count = await airdropCreateBtnSelection.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(airdropCreateBtnSelection.nth(i))
  }
  return textFieldArray
}

async function getMessageColumnHeader(page: Page) {
  const messageColumnHeader = page.locator("//table/thead/tr/th")
  const count = await messageColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(messageColumnHeader.nth(i))
  }
  console.log("This is the value of Message column header = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getAirdropColumnHeader(page: Page) {
  const airdropColumnHeader = page.locator("//table/thead/tr/th")
  const count = await airdropColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(airdropColumnHeader.nth(i))
  }
  console.log("This is the value of Airdrop column header = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getMessageCommunityandRecipient(page: Page) {
  const messageCommunityandRecipient = page.locator("//div[@role='combobox']")
  const count = await messageCommunityandRecipient.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(messageCommunityandRecipient.nth(i))
  }
  console.log("This is the value of Message community and recipient = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getMessageCancelBtn(page) {
  const messageCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(messageCancelBtn).toBeVisible({ timeout: 5000 })
  return messageCancelBtn
}

async function getMessageNextBtn(page) {
  const messageNextBtn = page.locator("//button[text()='Next']")
  await expect(messageNextBtn).toBeVisible({ timeout: 5000 })
  return messageNextBtn
}

async function getMessageCommunityDropdownItems(page: Page) {
  const messageCommunityDropdownItems = page.locator("//li[@role='option']/div")
  const count = await messageCommunityDropdownItems.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(messageCommunityDropdownItems.nth(i))
  }
  console.log("This is the value of Message community dropdown items = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getMessageTargetRecipientsList(page: Page) {
  const messageTargetRecipientsList = page.locator("//li[@role='option']")
  const count = await messageTargetRecipientsList.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(messageTargetRecipientsList.nth(i))
  }
  console.log("This is the value of Message target recipients = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getMessageEstimatedUsersText(page) {
  const messageEstimatedUsersText = page.locator("//h6[text()='Estimated Target User']")
  await expect(messageEstimatedUsersText).toBeVisible({ timeout: 5000 })
  return messageEstimatedUsersText
}

async function getMessageName(page) {
  const messageName = page.locator("//input[@name='name']")
  await expect(messageName).toBeVisible({ timeout: 5000 })
  return messageName
}

async function getMessageSubject(page) {
  const messageSubject = page.locator("//input[@name='subject']")
  await expect(messageSubject).toBeVisible({ timeout: 5000 })
  return messageSubject
}

async function getMessagePreheader(page) {
  const messagePreheader = page.locator("//input[@name='preheader']")
  await expect(messagePreheader).toBeVisible({ timeout: 5000 })
  return messagePreheader
}

async function getMessageBackButton(page) {
  const messageBackBtn = page.locator("//button[text()='Back']")
  await expect(messageBackBtn).toBeVisible({ timeout: 5000 })
  return messageBackBtn
}

async function getMessageChooseActionDropdown(page) {
  const messageChooseActionDropdown = page.locator("//label[text()='Choose action']/following-sibling::div")
  await expect(messageChooseActionDropdown).toBeVisible({ timeout: 5000 })
  return messageChooseActionDropdown
}

async function getMessageChooseActionOptions(page: Page) {
  /*
        0 = No action
        1 = View Detail Message (Custom)
        2 = Claim Reward/Gift
        3 = Open URL
        4 = Open in ZAP
      */
  const messageChooseActionOptions = page.locator("//li[@role='option']")
  const count = await messageChooseActionOptions.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(messageChooseActionOptions.nth(i))
  }
  console.log("This is the value of Message action options = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getMessageVDMUsepopup(page) {
  const messageVDMUsepopup = page.locator("//input[@name='usePopup']")
  await expect(messageVDMUsepopup).toBeVisible({ timeout: 5000 })
  return messageVDMUsepopup
}

async function getMessageVDMMessageContentToggle(page) {
  const messageVDMMessageContentToggle = page.locator("//input[@name='fullContent']")
  await expect(messageVDMMessageContentToggle).toBeVisible({ timeout: 5000 })
  return messageVDMMessageContentToggle
}

async function getMessageVDMMessageContent(page) {
  const messageVDMMessageContent = page.locator("//div[contains(@data-placeholder,'content')]")
  await expect(messageVDMMessageContent).toBeVisible({ timeout: 5000 })
  return messageVDMMessageContent
}

async function getMessageRichmediaToggle(page) {
  const messageRichmediaToggle = page.locator("//input[@name='useMedia']")
  await expect(messageRichmediaToggle).toBeVisible({ timeout: 5000 })
  return messageRichmediaToggle
}

async function getMessageRichmediaUpload(page) {
  const messageRichmediaUpload = page.locator("//input[@accept]/parent::div")
  await expect(messageRichmediaUpload).toBeVisible({ timeout: 5000 })
  return messageRichmediaUpload
}

async function getMessageButtonToggle(page) {
  const messageButtonToggle = page.locator("//input[@name='useButton']")
  await expect(messageButtonToggle).toBeVisible({ timeout: 5000 })
  return messageButtonToggle
}

async function getMessageButtonName(page) {
  const messageButtonName = page.locator("//input[@name='buttonName']")
  await expect(messageButtonName).toBeVisible({ timeout: 5000 })
  return messageButtonName
}

async function getMessageButtonAction(page) {
  const messageButtonAction = page.locator("//input[@name='action']/preceding-sibling::div")
  await expect(messageButtonAction).toBeVisible({ timeout: 5000 })
  return messageButtonAction
}

async function getMessageButtonActionOptions(page) {
  /*
      0 = Go to Web URL
      1 = Open in ZAP
    */
  const messageButtonActionOptions = page.locator("//li[@role='option']")
  const count = await messageButtonActionOptions.count()

  let textFieldArray = []
  for (let i = 0; i < count; i++) {
    messageButtonActionOptions
  }
  console.log("This is the value of message button action options = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getMessageCRGMMessagecontentToggle(page) {
  const messageCRGMessagecontentToggle = page.locator("//input[@name='useCustom']")
  await expect(messageCRGMessagecontentToggle).toBeVisible({ timeout: 5000 })
  return messageCRGMessagecontentToggle
}

async function getMessageCRGMMessagecontentTitle(page) {
  const messageCRGMessageTitle = page.locator("//input[@name='title']")
  await expect(messageCRGMessageTitle).toBeVisible({ timeout: 5000 })
  return messageCRGMessageTitle
}

async function getMessageCRGMessageContent(page) {
  const messageCRGMessageContent = page.locator("//textarea[@name='message']")
  await expect(messageCRGMessageContent).toBeVisible({ timeout: 5000 })
  return messageCRGMessageContent
}

async function getMessageCRGCustomButtonToggle(page) {
  const messageCRGCustomButtonToggle = page.locator("//input[@name='useCustomButton']")
  await expect(messageCRGCustomButtonToggle).toBeVisible({ timeout: 5000 })
  return messageCRGCustomButtonToggle
}

async function getMessageCRGRewardToggle(page) {
  const messageCRGRewardToggle = page.locator("//input[@name='useCustomGift']")
  await expect(messageCRGRewardToggle).toBeVisible({ timeout: 5000 })
  return messageCRGRewardToggle
}

async function getMessageCRGReward(page) {
  const messageCRGReward = page.locator("//input[@name='rewardType']/preceding-sibling::div")
  await expect(messageCRGReward).toBeVisible({ timeout: 5000 })
  return messageCRGReward
}

async function getMessageWebURL(page) {
  const messageWebURL = page.locator("//input[@name='url']")
  await expect(messageWebURL).toBeVisible({ timeout: 5000 })
  return messageWebURL
}

async function getMessageZAPLink(page) {
  const messageZAPLink = page.locator("//input[contains(@placeholder,'ZAP')]")
  await expect(messageZAPLink).toBeVisible({ timeout: 5000 })
  return messageZAPLink
}

async function getMessageZAPChooseSection(page) {
  const messageZAPChooseSection = page.locator("//button[contains(text(),'Zap')]")
  await expect(messageZAPChooseSection).toBeVisible({ timeout: 5000 })
  return messageZAPChooseSection
}

export {
  getAirdropColumnHeader,
  getAirdropCreatebtn,
  getAirdropCreateBtnSelection,
  getAirdropTab,
  getMessageBackButton,
  getMessageButtonAction,
  getMessageButtonActionOptions,
  getMessageButtonName,
  getMessageButtonToggle,
  getMessageCancelBtn,
  getMessageChooseActionDropdown,
  getMessageChooseActionOptions,
  getMessageColumnHeader,
  getMessageCreateBtn,
  getMessageCRGCustomButtonToggle,
  getMessageCRGMessageContent,
  getMessageCRGMMessagecontentTitle,
  getMessageCRGMMessagecontentToggle,
  getMessageCRGReward,
  getMessageCRGRewardToggle,
  getMessageEstimatedUsersText,
  getMessageName,
  getMessageNextBtn,
  getMessagePreheader,
  getMessageRichmediaToggle,
  getMessageRichmediaUpload,
  getMessageSubject,
  getMessageTab,
  getMessageTargetRecipientsList,
  getMessageText,
  getMessageCommunityandRecipient,
  getMessageCommunityDropdownItems,
  getMessageVDMMessageContent,
  getMessageVDMMessageContentToggle,
  getMessageVDMUsepopup,
  getMessageWebURL,
  getMessageZAPChooseSection,
  getMessageZAPLink
}
