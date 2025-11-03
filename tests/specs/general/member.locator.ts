import { expect, Locator, Page } from "@playwright/test"

async function getMemberSearchUserFilter(page) {
  const teamSearchUserFilter = page.locator("//input[contains(@placeholder,'user')]")
  await expect(teamSearchUserFilter).toBeVisible({ timeout: 5000 })
  return teamSearchUserFilter
}

async function getMemberRoleSelectFilter(page) {
  const teamRoleSelectFilter = page.locator("//label[text()='Role']/following-sibling::div")
  await expect(teamRoleSelectFilter).toBeVisible({ timeout: 5000 })
  return teamRoleSelectFilter
}

async function getMemberDateFilter(page) {
  const teamDateFilter = page.locator("//input[contains(@placeholder,'MM')]")
  await expect(teamDateFilter).toBeVisible({ timeout: 5000 })
  return teamDateFilter
}

async function getMemberColumnHeader(page: Page) {
  const teamColumnHeader = page.locator("//th[text()]")
  const count = await teamColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(teamColumnHeader.nth(i))
  }
  console.log("This is the value of column header = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getMemberInviteText(page) {
  const teamInviteText = page.locator("//h5[contains(text(),'Invite')]")
  await expect(teamInviteText).toBeVisible({ timeout: 5000 })
  return teamInviteText
}

async function getMemberInviteEmail(page) {
  const teamInviteEmailInput = page.locator("//input[contains(@placeholder,'people')]")
  await expect(teamInviteEmailInput).toBeVisible({ timeout: 5000 })
  return teamInviteEmailInput
}

async function getMemberRoleDropdown(page) {
  const teamRoleDropdown = page.locator("//h6[contains(text(),'role')]/following-sibling::div")
  await expect(teamRoleDropdown).toBeVisible({ timeout: 5000 })
  return teamRoleDropdown
}

async function getMemberInviteSendBtn(page) {
  const teamInviteSend = page.locator("//h6[contains(text(),'role')]/parent::div/following-sibling::div/button")
  await expect(teamInviteSend).toBeVisible({ timeout: 5000 })
  return teamInviteSend
}

async function getMemberInviteBtn(page) {
  const memberInviteBtn = page.locator("//button[text()='Invite']")
  await expect(memberInviteBtn).toBeVisible({ timeout: 5000 })
  return memberInviteBtn
}

async function getMemberSearchFilter(page) {
  const memberSearchFilter = page.locator("//input[contains(@placeholder,'Search user')]")
  await expect(memberSearchFilter).toBeVisible({ timeout: 5000 })
  return memberSearchFilter
}

async function getMemberRoleFilter(page) {
  const memberRoleFilter = page.locator("//div[text()='All Role']")
  await expect(memberRoleFilter).toBeVisible({ timeout: 5000 })
  return memberRoleFilter
}

async function getMemberDateJoinedFilter(page) {
  const memberDateJoinedFilter = page.locator("//input[@placeholder='YYYY/MM/DD']")
  await expect(memberDateJoinedFilter).toBeVisible({ timeout: 5000 })
  return memberDateJoinedFilter
}

async function getMemberColumnHeaders(page: Page) {
  const memberColumnHeaders = page.locator("//th[text()]")
  const count = await memberColumnHeaders.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(memberColumnHeaders.nth(i))
  }
  console.log("This is the value of member column headers = " + textFieldArray.length + "\n")

  return textFieldArray
}

export {
  getMemberColumnHeader,
  getMemberColumnHeaders,
  getMemberDateFilter,
  getMemberDateJoinedFilter,
  getMemberInviteBtn,
  getMemberInviteEmail,
  getMemberInviteSendBtn,
  getMemberInviteText,
  getMemberRoleDropdown,
  getMemberRoleFilter,
  getMemberRoleSelectFilter,
  getMemberSearchFilter,
  getMemberSearchUserFilter
}
