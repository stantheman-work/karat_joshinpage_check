import { Page } from "@playwright/test"

export class sa_NFTPage {
  constructor(private page: Page) {}

  nftmboxText() {
    return this.page.getByText('NFT & Mystery box');
  }

  tab() {
    return this.page.getByRole('tab', { name: 'NFT' , exact: true});
  }

  searchFilter() {
    return this.page.getByPlaceholder('Search');
  }

  collectionFilter() {
    return this.page.getByRole('combobox').nth(0);
  }

  exportButton() {
    return this.page.getByRole('button', { name: 'Export' });
  }

  columnHeaders() {
    return this.page.locator('th');
  }
}