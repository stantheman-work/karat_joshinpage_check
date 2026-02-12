import { Page } from "@playwright/test"

export class brandInfo {
  constructor(private page: Page) {}

  backBtn() {
    return this.page.locator("//*[name()='svg' and @alt='Back']")
  }

  editBrandText() {
    return this.page.getByText('Edit Brand');
  }

  image() {
    return this.page.locator("//div[@role='presentation']")
    // return this.page.getByRole('presentation')
  }

  name() {
    return this.page.locator("//input[@name='name']")
  }

  description() {
    return this.page.locator("//div[@data-placeholder]")
  }

  cancelBtn() {
    return this.page.getByText('Cancel')
  }

  saveBtn() {
    return this.page.getByText('Save')
  }

  addCategoryBtn() {
    return this.page.locator("//*[name()='svg']/parent::button").last()
  }

  webLinks() {
    return this.page.getByRole('button', { expanded: false })
  }
}
