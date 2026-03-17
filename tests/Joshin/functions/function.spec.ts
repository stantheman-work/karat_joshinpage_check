import {
  inputDataForTextfields
} from "@/utils/data-utils"
import {
  PageUtils
} from "@/utils/page-utils"
import {
  joshinCommunityPageLocators
} from "@/Joshin/joshincommunity.locator"
import { expect, Page, APIRequestContext } from "@playwright/test"

export class api_joshinRequests {
  private apiData: inputDataForTextfields
  private request: APIRequestContext
  private joshinLocs: joshinCommunityPageLocators
  private pageUtils: PageUtils
  constructor(private page: Page, request: APIRequestContext) {
    this.apiData = new inputDataForTextfields(page)
    this.request = request
    this.joshinLocs = new joshinCommunityPageLocators(page)
    this.pageUtils = new PageUtils()
  }

  async getUserAccessToken(): Promise<string> {
    const apiResponse = await this.request.post(this.apiData.api_getAccessTokenURL(), {
      headers: {
        'x-client-id': this.apiData.clientID(),
        'Content-Type': 'application/json',
      },
      data: {
        seed: this.apiData.userSeedPhraseSuperadmin(),
      },
    })

    expect(apiResponse.ok()).toBeTruthy()
    const api1Json = await apiResponse.json()
    console.log('API 1 response:', api1Json)
    const accesstokenResponse = api1Json.access_token
    expect(accesstokenResponse).toBeTruthy()

    return accesstokenResponse
  }

  async getJoshinURL(accessToken: string): Promise<string> {
    const apiResponse = await this.request.post(this.apiData.api_getJoshinURL(), {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'x-client-id': this.apiData.clientID(),
      },
    });

    expect(apiResponse.ok()).toBeTruthy();
    const api2Json = await apiResponse.json();
    console.log('API 2 response:', api2Json);
    const targetUrl = api2Json.url;
    expect(targetUrl).toBeTruthy();

    return targetUrl
  }

  async getJoshinSocialroomLink(accessToken: string): Promise<string> {
    const apiResponse = await this.request.post(this.apiData.api_getJoshinSocialroomURL(), {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'x-client-id': this.apiData.clientID(),
      },
    });

    expect(apiResponse.ok()).toBeTruthy();
    const api3Json = await apiResponse.json();
    console.log('API 3 response:', api3Json);
    const targetUrl = api3Json.url;
    expect(targetUrl).toBeTruthy();

    return targetUrl
  }

  async navigateToPage(page, responseURL) {
    await page.goto(responseURL)
    await expect(this.joshinLocs.flutterView()).toBeVisible({ timeout: 15000 })
    await page.waitForTimeout(7000)
  }
}