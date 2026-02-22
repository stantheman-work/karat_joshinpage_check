import { Page } from "@playwright/test";

export class customizeHome_ProductShowcase {
  constructor(private page: Page) {}

  headerText() {
    return this.page.locator("//h6[contains(text(),'Products showcase')]")
  }

  toggleBtn() {
    return this.page.locator("//input[@type='checkbox']").first()
  }

  addBtn() {
    return this.page.locator("//div[text()='Add card']")
  }

  cardImage() {
    /*
      becomes an array if featured card toggle is ON
      .first() > card image
      .last() > featured card image
    */
    return this.page.locator("//div[@role='presentation']")
  }

  cardImageUploadField() {
    /*
      becomes an array if featured card toggle is ON
      .first() > card image upload field
      .last() > card image upload field
    */
    return this.page.locator("//input[@accept]")
  }

  title() {
    return this.page.getByPlaceholder("Input section title")
  }

  subTitle() {
    return this.page.getByPlaceholder("Input subtitle")
  }

  description() {
    return this.page.locator("//div[@data-placeholder='Enter content...']")
  }

  websiteUrl() {
    return this.page.locator("//input[@name='website_url']")
  }

  price() {
    return this.page.locator("//input[@name='price']")
  }

  tagsTextfield() {
    return this.page.getByPlaceholder("Enter tags")
  }

  featuredCardToggle() {
    return this.page.locator("//input[@type='checkbox']").last()
  }

  featuredCardDoneBtn() {
    return this.page.getByRole('button', { name: 'Done' })
  }

  featuredCardCancelBtn() {
    return this.page.getByRole('button', { name: 'Cancel' })
  }

  productEditDeleteBtn() {
    /*
      .first() > edit
      .last() > delete
    */
    return this.page.locator("//div[contains(@data-rbd-drag-handle-draggable-id,'productsShowcase-0')]/following-sibling::div/descendant::button")
  }

  pleaseWaitPopup() {
    return this.page.locator("//*[contains(text(),'please wait')]")
  }
}