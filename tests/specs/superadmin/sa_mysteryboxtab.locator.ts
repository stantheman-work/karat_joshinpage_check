import { Page } from "@playwright/test"

export class sa_MBOXPage {
  constructor(private page: Page) {}

  tab() {
    return this.page.getByRole('tab', { name: 'Mystery box' , exact: true});
  }

  searchFilter() {
    return this.page.getByPlaceholder('Search');
  }

  exportButton() {
    return this.page.getByRole('button', { name: 'Export' });
  }

  columnHeaders() {
    return this.page.locator('th');
  }
}