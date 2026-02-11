import { Page } from "@playwright/test";

export class sa_cashoutRequestPage {
  constructor(private page: Page) {}

  cashrequestTitle() {
    return this.page.getByText('Cashout request');
  }

  searchFilter() {
    return this.page.getByPlaceholder('Search ID');
  }

  statusFilter() {
    return this.page.getByRole('combobox').first();
  }

  dateFilter() {
    return this.page.getByPlaceholder('Select date range');
  }

  columnHeaders() {
    return this.page.locator('//th[text()]');
  }
}