import { expect, Locator, Page } from "@playwright/test"

async function getProposalText(page) {
  const proposalText = page.locator("//div[text()='Proposals']")
  await expect(proposalText).toBeVisible({ timeout: 5000 })
  return proposalText
}

async function getProposalStatusDropdown(page) {
  const proposalStatusDropdown = page.locator("//div[text()='All']")
  await expect(proposalStatusDropdown).toBeVisible({ timeout: 5000 })
  return proposalStatusDropdown
}

async function getProposalCheckSubmissionBtn(page) {
  const proposalCheckSubmissionBtn = page.locator("//span[contains(text(),'submission')]/parent::button")
  await expect(proposalCheckSubmissionBtn).toBeVisible({ timeout: 5000 })
  return proposalCheckSubmissionBtn
}

async function getProposalColumnHeader(page: Page) {
  const proposalColumnHeader = page.locator("//th[text()]")
  const count = await proposalColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(proposalColumnHeader.nth(i))
  }
  console.log("This is the value of Proposal column header = " + textFieldArray.length + "\n")
  return textFieldArray
}

export { getProposalCheckSubmissionBtn, getProposalColumnHeader, getProposalStatusDropdown, getProposalText }
