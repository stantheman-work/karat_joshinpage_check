import { test } from '@playwright/test';
import {
  api_joshinRequests
} from "@/Joshin/functions/function.spec"

test('Confirm Joshin community page is alive', async ({ request, page }) => {
  const apiRequest = new api_joshinRequests(page, request)
  const accesstokenResponse = await apiRequest.getUserAccessToken()
  const communitypageURL = await apiRequest.getJoshinURL(accesstokenResponse)
  // Open URL in browser
  await apiRequest.navigateToPage(page, communitypageURL)
  await page.screenshot({
    path: 'test-results/joshin-community-page.png',
    clip: {
      x: 250,
      y: 0,
      width: 800,
      height: 3000
    }
  })
  const socialroomURL = await apiRequest.getJoshinSocialroomLink(accesstokenResponse)
  await apiRequest.navigateToPage(page, socialroomURL)
  await page.screenshot({
    path: 'test-results/joshin-socialroom-page.png',
    clip: {
      x: 250,
      y: 0,
      width: 800,
      height: 3000
    }
  })
})