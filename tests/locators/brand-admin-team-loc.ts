import { expect, Locator, Page } from "@playwright/test"

async function getTeamSearchUserFilter(page) {
  const teamSearchUserFilter = page.locator("//input[contains(@placeholder,'user')]")
  await expect(teamSearchUserFilter).toBeVisible({ timeout: 5000 })
  return teamSearchUserFilter
}

async function getTeamRoleSelectFilter(page) {
  const teamRoleSelectFilter = page.locator("//label[text()='Role']/following-sibling::div")
  await expect(teamRoleSelectFilter).toBeVisible({ timeout: 5000 })
  return teamRoleSelectFilter
}

async function getTeamDateFilter(page) {
  const teamDateFilter = page.locator("//input[contains(@placeholder,'MM')]")
  await expect(teamDateFilter).toBeVisible({ timeout: 5000 })
  return teamDateFilter
}

async function getTeamInviteBtn(page) {
  const teamInviteBtn = page.locator("//button[text()='Invite']")
  await expect(teamInviteBtn).toBeVisible({ timeout: 5000 })
  return teamInviteBtn
}

async function getTeamColumnHeader(page: Page) {
  const teamColumnHeader = page.locator("//th[text()]")
  const count = await teamColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(teamColumnHeader.nth(i))
  }
  console.log("This is the value of column header = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getTeamInviteText(page) {
  const teamInviteText = page.locator("//h5[contains(text(),'Invite')]")
  await expect(teamInviteText).toBeVisible({ timeout: 5000 })
  return teamInviteText
}

async function getTeamInviteEmail(page) {
  const teamInviteEmailInput = page.locator("//input[contains(@placeholder,'people')]")
  await expect(teamInviteEmailInput).toBeVisible({ timeout: 5000 })
  return teamInviteEmailInput
}

async function getTeamRoleDropdown(page) {
  const teamRoleDropdown = page.locator("//h6[contains(text(),'role')]/following-sibling::div")
  await expect(teamRoleDropdown).toBeVisible({ timeout: 5000 })
  return teamRoleDropdown
}

async function getTeamInviteCancel(page) {
  const teamInviteCancel = page.locator("//button[text()='Cancel']")
  await expect(teamInviteCancel).toBeVisible({ timeout: 5000 })
  return teamInviteCancel
}

async function getTeamInviteSend(page) {
  const teamInviteSend = page.locator("//button[text()='Cancel']/following-sibling::button")
  await expect(teamInviteSend).toBeVisible({ timeout: 5000 })
  return teamInviteSend
}

export {
  getTeamColumnHeader,
  getTeamDateFilter,
  getTeamInviteBtn,
  getTeamInviteCancel,
  getTeamInviteEmail,
  getTeamInviteSend,
  getTeamInviteText,
  getTeamRoleDropdown,
  getTeamRoleSelectFilter,
  getTeamSearchUserFilter,
}
