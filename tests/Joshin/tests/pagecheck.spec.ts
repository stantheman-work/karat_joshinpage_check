import { test } from '@playwright/test';
import {
  api_joshinRequests
} from "@/Joshin/functions/function.spec"
import {
  PageUtils
} from "@/utils/page-utils"

test('Confirm Joshin community page is alive', async ({ request, page }) => {
  const apiRequest = new api_joshinRequests(page, request)
  const pageutils = new PageUtils()
  // Run API
  const accesstokenResponse = await apiRequest.getUserAccessToken()
  const targetUrl = await apiRequest.getJoshinURL(accesstokenResponse)
  // Open URL in browser
  await apiRequest.navigateToCommunityPage(page, targetUrl)
  // Screenshot
  await page.screenshot({
    path: 'joshin-community-page.png',
    fullPage: true
  });

});