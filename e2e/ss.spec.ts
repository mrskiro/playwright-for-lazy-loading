import { test, expect } from "@playwright/test"

test("ss", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveScreenshot({ fullPage: true })
})
