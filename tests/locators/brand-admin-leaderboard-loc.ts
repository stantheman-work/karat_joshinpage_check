import { expect, Locator, Page } from "@playwright/test"

async function getLeaderboardText(page) {
  const leaderboardText = page.locator("//h5[text()='Leader board']")
  await expect(leaderboardText).toBeVisible({ timeout: 5000 })
  return leaderboardText
}

async function getLeaderboardTokenDropdown(page) {
  const leaderboardTokenDropdown = page.locator("//h5/parent::div/following-sibling::div/div/div")
  await expect(leaderboardTokenDropdown).toBeVisible({ timeout: 5000 })
  return leaderboardTokenDropdown
}

async function getLeaderboardSearchFilter(page) {
  const leaderboardSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(leaderboardSearchFilter).toBeVisible({ timeout: 5000 })
  return leaderboardSearchFilter
}

async function getLeaderboardStatusRoleFilter(page: Page) {
  const leaderboardStatusRoleFilter = page.locator(
    "//div[@class='MuiBox-root css-j0ozid']/child::div/following-sibling::div/div/div"
  )
  const count = await leaderboardStatusRoleFilter.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(leaderboardStatusRoleFilter.nth(i))
  }
  console.log("This is the value of status role filter = " + textFieldArray.length + "\n")

  return textFieldArray
}

async function getLeaderboardColumnHeader(page: Page) {
  const activitygraphCategoryTab = page.locator("//th[text()]")
  const count = await activitygraphCategoryTab.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(activitygraphCategoryTab.nth(i))
  }
  console.log("This is the value of Left Right button = " + textFieldArray.length + "\n")

  return textFieldArray
}

export {
  getLeaderboardColumnHeader,
  getLeaderboardSearchFilter,
  getLeaderboardStatusRoleFilter,
  getLeaderboardText,
  getLeaderboardTokenDropdown,
}
