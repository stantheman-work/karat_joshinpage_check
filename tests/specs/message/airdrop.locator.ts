import { expect } from "@playwright/test"

async function getAirdropReturntodashboardBtn(page) {
  const airdropReturntodashboardBtn = page.locator("//*[name()='svg' and @data-testid='ChevronLeftIcon']/parent::button")
  await expect(airdropReturntodashboardBtn).toBeVisible({ timeout: 5000 })
  return airdropReturntodashboardBtn
}

async function getAirdropCreateText(page) {
  const airdropCreateText = page.locator("//h5[text()='Create airdrop']")
  await expect(airdropCreateText).toBeVisible({ timeout: 5000 })
  return airdropCreateText
}

async function getAirdropNetworkDropdown(page) {
  const airdropNetworkDropdown = page.locator("//label[text()='Choose reward network']/following-sibling::div")
  await expect(airdropNetworkDropdown).toBeVisible({ timeout: 5000 })
  return airdropNetworkDropdown
}

async function getAirdropTargetCommunity(page) {
  const airdropTargetCommunity = page.locator("//input[@name='community']/preceding-sibling::div")
  await expect(airdropTargetCommunity).toBeVisible({ timeout: 5000 })
  return airdropTargetCommunity
}

async function getAirdropTargetRecipients(page) {
  const airdropTargetRecipients = page.locator("//input[@name='targetType']/preceding-sibling::div")
  await expect(airdropTargetRecipients).toBeVisible({ timeout: 5000 })
  return airdropTargetRecipients
}

async function getAirdropName(page) {
  const airdropName = page.locator("//input[@name='name']")
  await expect(airdropName).toBeVisible({ timeout: 5000 })
  return airdropName
}

async function getAirdropReward(page) {
  const airdropReward = page.locator("//input[@name='rewardType']/preceding-sibling::div")
  await expect(airdropReward).toBeVisible({ timeout: 5000 })
  return airdropReward
}

async function getAirdropDraftBtn(page) {
  const airdropDraftBtn = page.locator("//button[contains(text(),'draft')]")
  await expect(airdropDraftBtn).toBeVisible({ timeout: 5000 })
  return airdropDraftBtn
}

async function getAirdropSendBtn(page) {
  const airdropSendBtn = page.locator("//button[text()='Send']")
  await expect(airdropSendBtn).toBeVisible({ timeout: 5000 })
  return airdropSendBtn
}

export {
  getAirdropCreateText,
  getAirdropDraftBtn,
  getAirdropName,
  getAirdropNetworkDropdown,
  getAirdropReturntodashboardBtn,
  getAirdropReward,
  getAirdropSendBtn,
  getAirdropTargetRecipients,
  getAirdropTargetCommunity
}
