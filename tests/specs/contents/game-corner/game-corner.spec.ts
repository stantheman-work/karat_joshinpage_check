import {
  getCreategameAddOptionBtn,
  getCreategameCancelBtn,
  getCreategameFrequencyAmt,
  getCreategameFrequencyUnit,
  getCreategameLimitUser,
  getCreategamePeriodToggle,
  getCreategameRewardColumnHeaders,
  getCreategameSaveBtn,
  getCreategameStartendDate,
  getCreategameTimezone,
  getCreategameTitle,
  getCreategameTokenAmount,
  getCreategameCommunityDropdown,
} from "@/specs/contents/game-corner/game-corner.locator"
import { AuthUtils } from "@/utils/auth-utils"
import { scrollToElement } from "@/utils/load-helper"
import { LocatorUtils } from "@/utils/locator-utils"
import { PageUtils } from "@/utils/page-utils"
import { expect, test } from "@playwright/test"
test.describe("Contents > Game Corner", () => {
  test.use({ storageState: AuthUtils.getSuperAdminAuthState() })

  test.beforeEach(async ({ page }) => {
    await PageUtils.gotoToHome(page)

    const parentMenu = LocatorUtils.getSideBarParentItems(page)
      .filter({ hasText: /^Contents$/ })
      .first()
    await scrollToElement(page, parentMenu)
    await parentMenu.click()

    const childMenu = LocatorUtils.getSideBarChildItems(page)
      .filter({ hasText: /^Game Corner$/ })
      .first()
    await childMenu.click()

    try {
      await PageUtils.waitForGraphqlResponse(page, (json) => json.data?.findGameRoulettes !== undefined, { timeout: 10000 })
    } catch (error) {
      console.error("This community does not have any games")
    }
  })

  test("Create game", async ({ page }) => {
    const gamecornerCreateGameBtn = page.locator("//button[text()='Create game']")
    await expect(gamecornerCreateGameBtn).toBeVisible({ timeout: 5000 })
    await gamecornerCreateGameBtn.click()

    await brandCreateGamePageCheck(page)
    const creategameCancelBtn = page.locator("//button[text()='Cancel']")
    await expect(creategameCancelBtn).toBeVisible({ timeout: 5000 })
    await creategameCancelBtn.click()
  })
})

async function brandCreateGamePageCheck(page) {
  console.log("[INFO] Create game check START")
  const creategameTitle = await getCreategameTitle(page)
  const creategameCommunityDropdown = await getCreategameCommunityDropdown(page)
  const creategameTokenAmount = await getCreategameTokenAmount(page)
  const creategamePeriodToggle = await getCreategamePeriodToggle(page)
  await expect(creategamePeriodToggle).toBeVisible()
  await creategamePeriodToggle.click()
  const creategameStartendDate = (await getCreategameStartendDate(page))[0]
  const creategameTimezone = await getCreategameTimezone(page)
  const creategameLimitUser = await getCreategameLimitUser(page)
  await expect(creategameLimitUser).toBeVisible()
  await creategameLimitUser.click()
  const creategameFrequencyAmt = await getCreategameFrequencyAmt(page)
  const creategameFrequencyUnit = await getCreategameFrequencyUnit(page)
  const creategameRewardColumnHeaders = (await getCreategameRewardColumnHeaders(page))[0]
  const creategameAddOptionBtn = await getCreategameAddOptionBtn(page)
  const creategameCancelBtn = await getCreategameCancelBtn(page)
  const creategameSaveBtn = await getCreategameSaveBtn(page)
  await expect(creategameTitle).toBeVisible()
  await expect(creategameCommunityDropdown).toBeVisible()
  await expect(creategameTokenAmount).toBeVisible()
  await expect(creategameStartendDate).toBeVisible()
  await expect(creategameTimezone).toBeVisible()
  await expect(creategameFrequencyAmt).toBeVisible()
  await expect(creategameFrequencyUnit).toBeVisible()
  await expect(creategameRewardColumnHeaders).toBeVisible()
  await expect(creategameAddOptionBtn).toBeVisible()
  await expect(creategameCancelBtn).toBeVisible()
  await expect(creategameSaveBtn).toBeVisible()
  console.log("[INFO] Create game check END")
}
