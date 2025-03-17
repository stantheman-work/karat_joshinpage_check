import {
  getAirdropCreateText,
  getAirdropDraftBtn,
  getAirdropName,
  getAirdropNetworkDropdown,
  getAirdropReward,
  getAirdropSendBtn,
  getAirdropTargetRecipients,
  getAirdropTargetToken,
} from "@/locators/brand-admin-airdrop-loc"
import {
  getMessageButtonAction,
  getMessageButtonName,
  getMessageButtonToggle,
  getMessageChooseActionDropdown,
  getMessageChooseActionOptions,
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
  getMessageTargetRecipientsList,
  getMessageTokenandRecipient,
  getMessageTokenDropdown,
  getMessageVDMMessageContent,
  getMessageVDMMessageContentToggle,
  getMessageVDMUsepopup,
  getMessageWebURL,
  getMessageZAPLink,
} from "@/locators/brand-admin-message-loc"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { expect, Page, test } from "@playwright/test"
test.describe("Message page", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Messages$/ })
      .first()
    await PageUtils.scrollToElement(page, childMenu)
    await childMenu.click()

    await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.notificationCampaigns !== undefined)
  })

  test("message", async ({ page }) => {
    const messageCreateBtn = page.getByRole("button", { name: "New Messages" })
    await messageCreateBtn.click()
    await brandCreateMessagePageCheck(page)
  })

  test("airdrop", async ({ page }) => {
    const airdropTab = page.locator("//div[text()='Airdrop']")
    await airdropTab.click()
    await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.airdrops !== undefined)

    const createAirdropBtn = page.getByRole("button", { name: "Create Airdrop" })
    await createAirdropBtn.click()

    await brandAirdropPageCheck(page)
  })
})

async function brandAirdropPageCheck(page: Page) {
  const airdropCreateText = await getAirdropCreateText(page)
  const airdropNetworkDropdown = await getAirdropNetworkDropdown(page)
  const airdropTargetToken = await getAirdropTargetToken(page)
  const airdropTargetRecipients = await getAirdropTargetRecipients(page)
  const airdropName = await getAirdropName(page)
  const airdropReward = await getAirdropReward(page)
  const airdropDraftBtn = await getAirdropDraftBtn(page)
  const airdropSendBtn = await getAirdropSendBtn(page)
  await expect(airdropCreateText).toBeVisible()
  await expect(airdropNetworkDropdown).toBeVisible()
  await expect(airdropTargetToken).toBeVisible()
  await expect(airdropTargetRecipients).toBeVisible()
  await expect(airdropName).toBeVisible()
  await expect(airdropReward).toBeVisible()
  await expect(airdropDraftBtn).toBeVisible()
  await expect(airdropSendBtn).toBeVisible()
}

async function brandCreateMessagePageCheck(page: Page) {
  let mTitle = "Message title"
  let mSubject = "Message subject"
  let mPreheader = "Message preheader"
  const messageTargetToken = (await getMessageTokenandRecipient(page))[0]
  const messageTargetRecipient = (await getMessageTokenandRecipient(page))[1]
  const messageEstimatedUsers = await getMessageEstimatedUsersText(page)
  await expect(messageTargetToken).toBeVisible()
  await expect(messageTargetRecipient).toBeVisible()
  await expect(messageEstimatedUsers).toBeVisible()
  await messageTargetToken.click()
  const messageTokenList = (await getMessageTokenDropdown(page))[0]
  await expect(messageTokenList).toBeVisible()
  await messageTokenList.click()
  await messageTargetRecipient.click()
  const messageRecipientList = (await getMessageTargetRecipientsList(page))[3]
  await expect(messageRecipientList).toBeVisible()
  await messageRecipientList.click()
  const messageNextBtn = await getMessageNextBtn(page)
  await expect(messageNextBtn).toBeVisible()
  await messageNextBtn.click()
  await page.waitForTimeout(3000)
  const messageName = await getMessageName(page)
  const messageSubject = await getMessageSubject(page)
  const messagePreheader = await getMessagePreheader(page)
  await messageName.fill(mTitle)
  await messageSubject.fill(mSubject)
  await messagePreheader.fill(mPreheader)
  await expect(messageNextBtn).toBeVisible()
  await messageNextBtn.click()
  const messageActionDropdown = await getMessageChooseActionDropdown(page)
  await expect(messageActionDropdown).toBeVisible()
  await messageActionDropdown.click()
  let messageActionList = await getMessageChooseActionOptions(page)
  for (let ctr = 0; ctr < messageActionList.length; ctr++) {
    if (ctr > 0) {
      await messageActionDropdown.click()
    }
    let messageActionList = (await getMessageChooseActionOptions(page))[ctr]
    if (ctr == 0) {
      console.log("Check No Action start")
      await messageActionList.click()
      await page.waitForTimeout(3000) //wait for resources to load
      console.log("Check No Action end")
    } else if (ctr == 1) {
      console.log("Check View Detail Message (Custom) start")
      await messageActionList.click()
      await page.waitForTimeout(3000) //wait for resources to load
      const popupToggle = await getMessageVDMUsepopup(page)
      await expect(popupToggle).toBeVisible()
      const messageContentToggle = await getMessageVDMMessageContentToggle(page)
      await expect(messageContentToggle).toBeVisible()
      await messageContentToggle.click()
      const messageTitle = await getMessageCRGMMessagecontentTitle(page)
      const messageContent = await getMessageVDMMessageContent(page)
      await scrollToElement(page, messageContent)
      await expect(messageTitle).toBeVisible()
      await expect(messageContent).toBeVisible()
      const richMediaToggle = await getMessageRichmediaToggle(page)
      await scrollToElement(page, richMediaToggle)
      await expect(richMediaToggle).toBeVisible()
      await richMediaToggle.click()
      const richMediaUpload = await getMessageRichmediaUpload(page)
      await scrollToElement(page, richMediaUpload)
      await expect(richMediaUpload).toBeVisible()
      const buttonToggle = await getMessageButtonToggle(page)
      await scrollToElement(page, buttonToggle)
      await expect(buttonToggle).toBeVisible()
      await buttonToggle.click()
      const buttonName = await getMessageButtonName(page)
      await scrollToElement(page, buttonName)
      await expect(buttonName).toBeVisible()
      const buttonAction = await getMessageButtonAction(page)
      await scrollToElement(page, buttonAction)
      await expect(buttonAction).toBeVisible()
      console.log("Check View Detail Message (Custom) end")
    } else if (ctr == 2) {
      console.log("Check Claim Reward/Gift start")
      await messageActionList.click()
      await page.waitForTimeout(3000) //wait for resources to load
      const customMessageContent = await getMessageCRGMMessagecontentToggle(page)
      const messageTitle = await getMessageCRGMMessagecontentTitle(page)
      const messageText = await getMessageCRGMessageContent(page)
      await expect(customMessageContent).toBeVisible()
      await expect(messageTitle).toBeVisible()
      await expect(messageText).toBeVisible()
      const customButtonToggle = await getMessageCRGCustomButtonToggle(page)
      await scrollToElement(page, customButtonToggle)
      await expect(customButtonToggle).toBeVisible()
      await customButtonToggle.click()
      const buttonName = await getMessageButtonName(page)
      await expect(buttonName).toBeVisible()
      const rewardToggle = await getMessageCRGRewardToggle(page)
      const rewardGift = await getMessageCRGReward(page)
      await expect(rewardToggle).toBeVisible()
      await expect(rewardGift).toBeVisible()
      await scrollToElement(page, rewardGift)
      console.log("Check Claim Reward/Gift end")
    } else if (ctr == 3) {
      console.log("Check Open URL start")
      await messageActionList.click()
      await page.waitForTimeout(3000) //wait for resources to load
      const webURL = await getMessageWebURL(page)
      await expect(webURL).toBeVisible()
      console.log("Check Open URL end")
    } else if (ctr == 4) {
      console.log("Check Open in ZAP start")
      await messageActionList.click()
      await page.waitForTimeout(3000) //wait for resources to load
      const inappLink = await getMessageZAPLink(page)
      await expect(inappLink).toBeVisible()
      console.log("Check Open in ZAP end")
    } else {
      console.error("This option does not exist.")
    }
  }
}
