import { expect, Locator, Page } from "@playwright/test"

async function getArticleText(page) {
  const articleText = page.locator("//h5[text()='Articles']")
  await expect(articleText).toBeVisible({ timeout: 5000 })
  return articleText
}

async function getArticleSearchFilter(page) {
  const articleSearchFilter = page.locator("//input[@placeholder='Search']")
  await expect(articleSearchFilter).toBeVisible({ timeout: 5000 })
  return articleSearchFilter
}

async function getArticleTagDropdown(page) {
  const articleTagDropdown = page.locator("//label[text()='Tags']/parent::div")
  await expect(articleTagDropdown).toBeVisible({ timeout: 5000 })
  return articleTagDropdown
}

async function getArticleStatusDropdown(page) {
  const articleStatusDropdown = page.locator("//label[text()='Status']/parent::div")
  await expect(articleStatusDropdown).toBeVisible({ timeout: 5000 })
  return articleStatusDropdown
}

async function getArticleCreateBtn(page) {
  const articleCreateBtn = page.locator("//button[contains(text(),'Create')]")
  await expect(articleCreateBtn).toBeVisible({ timeout: 5000 })
  return articleCreateBtn
}

async function getArticleColumnHeader(page: Page) {
  const articleColumnHeader = page.locator("//th[text()]")
  const count = await articleColumnHeader.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(articleColumnHeader.nth(i))
  }
  console.log("This is the value of Article column header = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getCreatearticleTokenAssigned(page: Page) {
  const createarticleTokenAssigned = page.locator("//div[@role='radiogroup']/label/span[1]")
  const count = await createarticleTokenAssigned.count()

  let textFieldArray: Locator[] = []
  for (let i = 0; i < count; i++) {
    textFieldArray.push(createarticleTokenAssigned.nth(i))
  }
  console.log("This is the value of Create article token assigned = " + textFieldArray.length + "\n")
  return textFieldArray
}

async function getCreatearticleSpecificTokenDropdown(page) {
  const createarticleSpecificTokenDropdown = page.locator("//input[@placeholder='Choose token']/parent::div")
  await expect(createarticleSpecificTokenDropdown).toBeVisible({ timeout: 5000 })
  return createarticleSpecificTokenDropdown
}

async function getCreatearticleLink(page) {
  const createarticleLink = page.locator("//input[@name='link']")
  await expect(createarticleLink).toBeVisible({ timeout: 5000 })
  return createarticleLink
}

async function getCreateArticleThumbnail(page) {
  const createArticleThumbnail = page.locator("//input[@accept]")
  if ((await createArticleThumbnail.count()) > 0) {
    console.log("Thumbnail input exists")
  } else {
    console.error("Thumbnail input does not exist")
  }
  return createArticleThumbnail
}

async function getCreatearticleTitle(page) {
  const createarticleTitle = page.locator("//input[@name='title']")
  await expect(createarticleTitle).toBeVisible({ timeout: 5000 })
  return createarticleTitle
}

async function getCreatearticleDescription(page) {
  const createarticleDescription = page.locator("//textarea[@name='description']")
  await expect(createarticleDescription).toBeVisible({ timeout: 5000 })
  return createarticleDescription
}

async function getCreatearticleTags(page) {
  const createarticleTags = page.locator("//input[contains(@placeholder, 'tags')]")
  await expect(createarticleTags).toBeVisible({ timeout: 5000 })
  return createarticleTags
}

async function getCreatearticleReward(page) {
  const createarticleReward = page.locator("//input[@name='useBonusReward']")
  await expect(createarticleReward).toBeVisible({ timeout: 5000 })
  return createarticleReward
}

async function getCreatearticleRewardType(page) {
  const createarticleRewardType = page.locator("//input[@name='rewardType']/parent::div")
  await expect(createarticleRewardType).toBeVisible({ timeout: 5000 })
  return createarticleRewardType
}

async function getCreatearticleCancelBtn(page) {
  const createarticleCancelBtn = page.locator("//button[text()='Cancel']")
  await expect(createarticleCancelBtn).toBeVisible({ timeout: 5000 })
  return createarticleCancelBtn
}

async function getCreatearticlePublishBtn(page) {
  const createarticlePublishBtn = page.locator("//button[text()='Publish']")
  await expect(createarticlePublishBtn).toBeVisible({ timeout: 5000 })
  return createarticlePublishBtn
}

export {
  getArticleColumnHeader,
  getArticleCreateBtn,
  getArticleSearchFilter,
  getArticleStatusDropdown,
  getArticleTagDropdown,
  getArticleText,
  getCreatearticleCancelBtn,
  getCreatearticleDescription,
  getCreatearticleLink,
  getCreatearticlePublishBtn,
  getCreatearticleReward,
  getCreatearticleRewardType,
  getCreatearticleSpecificTokenDropdown,
  getCreatearticleTags,
  getCreateArticleThumbnail,
  getCreatearticleTitle,
  getCreatearticleTokenAssigned,
}
