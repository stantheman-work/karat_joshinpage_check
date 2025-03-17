import { test as setup } from "@playwright/test"
import { totp } from "otplib"
import path from "path"

const superAdminAuthFile = path.join(__dirname, "../.auth/super-admin.json")

setup("authenticate as super-admin", async ({ page }) => {
  await page.goto("https://brand.dev.24karat.io/login")
  await page.getByRole("button", { name: "Connect to 24karat" }).click()
  await page.locator("iframe").contentFrame().getByRole("textbox", { name: "you@example.com" }).click()
  await page
    .locator("iframe")
    .contentFrame()
    .getByRole("textbox", { name: "you@example.com" })
    .fill("dev+qa@24karat.io")
  await page.locator("iframe").contentFrame().getByRole("button", { name: "Continue", exact: true }).click()

  const otp = totp.generate("55HL72JVP4ANRBMW")

  await page.locator("iframe").contentFrame().getByRole("textbox", { name: "Character 1." }).fill(otp[0])
  await page.locator("iframe").contentFrame().getByRole("textbox", { name: "Character 2." }).fill(otp[1])
  await page.locator("iframe").contentFrame().getByRole("textbox", { name: "Character 3." }).fill(otp[2])
  await page.locator("iframe").contentFrame().getByRole("textbox", { name: "Character 4." }).fill(otp[3])
  await page.locator("iframe").contentFrame().getByRole("textbox", { name: "Character 5." }).fill(otp[4])
  await page.locator("iframe").contentFrame().getByRole("textbox", { name: "Character 6." }).fill(otp[5])
  await page.locator("iframe").contentFrame().getByRole("button", { name: "Continue", exact: true }).click()

  await page.waitForURL("https://brand.dev.24karat.io/")

  await page.context().storageState({ path: superAdminAuthFile })
})

// setup("authenticate as admin", async ({ page }) => {
//   await page.goto("https://brand.dev.24karat.io/login")
//   await page.getByRole("button", { name: "Connect to 24karat" }).click()
//   await page.locator("iframe").contentFrame().getByRole("textbox", { name: "you@example.com" }).click()
//   await page
//     .locator("iframe")
//     .contentFrame()
//     .getByRole("textbox", { name: "you@example.com" })
//     .fill("dev+qa+admin@24karat.io")
// })
