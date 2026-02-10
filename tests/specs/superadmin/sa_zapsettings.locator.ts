import { expect, Locator, Page } from "@playwright/test"

async function getFriendReferBtn(page) {
  const friendReferBtn = page.locator("//button[text()='24kZAP friend referral']")
  await expect(friendReferBtn).toBeVisible({ timeout: 5000 })
  return friendReferBtn
}

async function getFriendReferToggle(page) {
  const friendReferToggle = page.locator("//input[@name='useReferral']")
  await expect(friendReferToggle).toBeVisible({ timeout: 5000 })
  return friendReferToggle
}

async function getFriendReferReferrerReward(page) {
  const friendReferralReferrerReward = page.locator("//input[@name='referrerReward']")
  await expect(friendReferralReferrerReward).toBeVisible({ timeout: 5000 })
  return friendReferralReferrerReward
}

async function getFriendReferRefereeReward(page) {
  const friendReferRefereeReward = page.locator("//input[@name='refereeReward']")
  await expect(friendReferRefereeReward).toBeVisible({ timeout: 5000 })
  return friendReferRefereeReward
}

async function getFriendReferSaveBtn(page) {
  const friendReferSaveBtn = page.locator("//button[text()='Save']")
  await expect(friendReferSaveBtn).toBeVisible({ timeout: 5000 })
  return friendReferSaveBtn
}

export {
  getFriendReferBtn,
  getFriendReferRefereeReward,
  getFriendReferReferrerReward,
  getFriendReferSaveBtn,
  getFriendReferToggle
}
