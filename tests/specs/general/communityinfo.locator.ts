import { Page } from "@playwright/test";

export class communityInfoPage {
  constructor(private page: Page) {}

  backToDashboardBtn() {
    return this.page.locator(
      "//*[name()='svg' and contains(@data-testid,'ChevronLeftIcon')]"
    );
  }

  // 0 = Community Icon, 1 = Community Banner
  imgUploadFile() {
    return this.page.getByRole("presentation");
  }

  // 0 = token image, 1 = cover image, 2 = banner image
  imgUploadElement() {
    return this.page.locator("//input[@type='file']");
    // better if you can: return this.page.locator("input[type='file']");
  }

  name() {
    return this.page.locator("//input[@name='name']");
    // better if label exists: return this.page.getByRole('textbox', { name: 'Name' })
  }

  brandInfoEdit() {
    // Your original was getByText('Edit') (can be ambiguous if multiple "Edit")
    // Better if you can scope it to "Brand Information" area or use role+name:
    return this.page.locator("//button[text()='Edit']")
    // return this.page.getByRole("button", { name: "Edit" }).or(this.page.getByText("Edit"));
  }

  description() {
    return this.page.locator("//div[contains(@data-placeholder,'description')]");
  }

  addANewSection() {
    return this.page.locator("//div[text()='Add section']")
    // return this.page.getByText("Add section");
    // if it's a real button: return this.page.getByRole('button', { name: 'Add section' })
  }

  sectionName() {
    return this.page.getByPlaceholder("Input name");
  }

  sectionContent() {
    return this.page.locator("//div[@data-placeholder='Enter content']");
  }

  cancelBtn() {
    return this.page.getByRole('button', { name: 'Cancel' })
    // return this.page.getByText("Cancel");
    // better if it's a button: return this.page.getByRole('button', { name: 'Cancel' })
  }

  addSectionBtn() {
    return this.page.getByRole('button', { name: 'Add section' })
    // return this.page.getByText("Add section");
    // better if it's a button: return this.page.getByRole('button', { name: 'Add section' })
  }

  preview() {
    return this.page.getByRole('heading', { name: 'Preview' }).locator('..')
    // return this.page.locator("//h6[text()='Preview']/parent::div");
    // better if it's a heading: return this.page.getByRole('heading', { name: 'Preview' }).locator('..')
  }

  nextBtn() {
    return this.page.getByText("Next");
    // better if it's a button: return this.page.getByRole('button', { name: 'Next' })
  }

  enableTokenToggle() {
    return this.page.locator("//input[@name='enableToken']");
  }

  // If enableTokenToggle is clicked, this button will be present. Clicking this will enable/disable the toggle
  tokenDoublecheckBtn() {
    return this.page.getByRole('button', { name: 'I have double-checked' })
    // return this.page.getByText("I have double-checked");
    // better if it's a button: return this.page.getByRole('button', { name: 'I have double-checked' })
  }

  // If enableTokenToggle is clicked, this button will be present. Clicking this will close the window
  tokenGoBackBtn() {
    return this.page.getByRole('button', { name: 'Go back' })
    // return this.page.getByText("Go back");
    // better if it's a button: return this.page.getByRole('button', { name: 'Go back' })
  }

  tokenName() {
    return this.page.locator("//input[@name='tokenName']");
  }

  // This button is only present if a new community is created
  submitBtn() {
    return this.page.getByRole('button', { name: 'Submit' })
    // return this.page.getByText("Submit");
    // better if it's a button: return this.page.getByRole('button', { name: 'Submit' })
  }

  // This button is only present if a new community is created
  draftBtn() {
    return this.page.getByRole('button', { name: 'Save as draft' })
    // return this.page.getByText("Save as draft");
    // better if it's a button: return this.page.getByRole('button', { name: 'Save as draft' })
  }

  backBtn() {
    return this.page.getByRole('button', { name: 'Back' })
    // return this.page.getByText("Back");
    // better if it's a button: return this.page.getByRole('button', { name: 'Back' })
  }

  // This button is only present if editing an existing community
  saveBtn() {
    return this.page.getByRole('button', { name: 'Save Change' })
    // return this.page.getByText("Save Change");
    // better if it's a button: return this.page.getByRole('button', { name: 'Save Change' })
  }

  communityInfoHeaderText() {
    return this.page.getByRole('heading', { name: 'Confirm Create Community' })
    // return this.page.getByText("Save Change");
    // better if it's a button: return this.page.getByRole('button', { name: 'Save Change' })
  }

  confirmCreateCancelBtn() {
    return this.page.locator("//button[text()='Cancel']")
  }

  confirmCreateUpdateBtn() {
    return this.page.locator("//button[text()='Update Changes']")
  }
}

/*
async function getCommunityBacktoDashboardBtn(page) {
  return page.locator("//*[name()='svg' and contains(@data-testid,'ChevronLeftIcon')]")
}

async function getCommunityImguploadFile(page: Page) {
  return page.getByRole('presentation')
  // 0 = Community Icon, 1 = Community Banner
}

async function getCommunityImguploadElement(page: Page) {
  // 0 = token image, 1 = cover image, 2 = banner image
  return page.locator("//input[@type='file']")
}

async function getCommunityName(page) {
  return page.locator("//input[@name='name']")
}

async function getCommunityBrandinfoEdit(page) {
  return page.getByText('Edit')
}

async function getCommunityDescription(page) {
  return page.locator("//div[contains(@data-placeholder,'description')]")
}

async function getCommunityAddSection(page) {
  return page.getByText('Add section')
}

async function getCommunitySectionName(page) {
  return page.getByPlaceholder('Input name')
}

async function getCommunitySectionContent(page) {
  return page.locator("//div[@data-placeholder='Enter content']")
}

async function getCommunityCancelBtn(page) {
  return page.getByText('Cancel')
}

async function getCommunityAddsectionBtn(page) {
  return page.getByText('Add section')
}

async function getCommunityPreview(page) {
  return page.locator("//h6[text()='Preview']/parent::div")
}

async function getCommunityNextBtn(page) {
  return page.getByText('Next')
}

async function getCommunityEnabletokenToggle(page) {
  return page.locator("//input[@name='enableToken']")
}

async function getCommunityTokenDoublecheckBtn(page) {
  return page.getByText('I have double-checked')
}

async function getCommunityTokenGobackBtn(page) {
  return page.getByText('Go back')
}

async function getCommunityTokenName(page) {
  return page.locator("//input[@name='tokenName']")
}

async function getCommunitySubmitBtn(page) {
  return page.getByText('Submit')
}

async function getCommunityDraftBtn(page) {
  return page.getByText('Save as draft')
}

async function getCommunityBackBtn(page) {
  return page.getByText('Back')
}

async function getCommunitySaveBtn(page) {
  return page.getByText('Save Change')
}

export {
  getCommunityAddSection,
  getCommunityAddsectionBtn,
  getCommunityBackBtn,
  getCommunityBacktoDashboardBtn,
  getCommunityBrandinfoEdit,
  getCommunityCancelBtn,
  getCommunityDescription,
  getCommunityDraftBtn,
  getCommunityEnabletokenToggle,
  getCommunityImguploadElement,
  getCommunityImguploadFile,
  getCommunityName,
  getCommunityNextBtn,
  getCommunityPreview,
  getCommunitySaveBtn,
  getCommunitySectionContent,
  getCommunitySectionName,
  getCommunitySubmitBtn,
  getCommunityTokenDoublecheckBtn,
  getCommunityTokenGobackBtn,
  getCommunityTokenName
}
*/