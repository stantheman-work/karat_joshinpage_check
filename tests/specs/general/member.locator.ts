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

async function getMemberColumnHeader(page: Page) {
  return page.locator("//th[text()]")
}

async function getMemberInviteBtn(page) { 
  return page.getByRole('button', { name: 'Invite' })
}

async function getInviteMemberHeaderText(page) {
  return page.locator("//h5[text()='Invite people to your team']")
}

async function getInviteMemberEmailInput(page) {
  return page.getByPlaceholder('Add more people')
}

async function getInviteMemberAccessDropdown(page) {
  return page.locator("//h6[contains(text(),'role')]/following-sibling::div")
}

async function getInviteMemberViaLinkBtn(page) {
  return page.locator("//button[text()='Invite via link']")
}

async function getInviteMemberSendBtn(page) {
  return page.locator("//button[text()='Invite']")
}

export {
  getInviteMemberAccessDropdown,
  getInviteMemberEmailInput,
  getInviteMemberHeaderText,
  getInviteMemberSendBtn,
  getInviteMemberViaLinkBtn,
  getMemberColumnHeader,
  getMemberDateFilter,
  getMemberDateJoinedFilter,
  getMemberInviteBtn,
  getMemberRoleFilter,
  getMemberRoleSelectFilter,
  getMemberSearchFilter,
  getMemberSearchUserFilter
}
