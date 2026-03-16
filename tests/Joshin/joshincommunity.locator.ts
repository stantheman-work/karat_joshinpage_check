import { Page } from "@playwright/test";

export class joshinCommunityPageLocators {
  constructor(private page: Page) {}
  
  flutterView() {
    return this.page.locator("//flutter-view")
  }

  flutterGlassPane() {
    return this.page.locator("//flt-glass-pane")
  }
}