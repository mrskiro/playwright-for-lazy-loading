import { test, expect } from "@playwright/test"

test("ss", async ({ page }) => {
  await page.goto("/")
  await page.waitForTimeout(2000)

  await page.evaluate(async () => {
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms))

    // scroll to bottom
    for (let i = 0; i < document.body.scrollHeight; i += 100) {
      window.scrollTo(0, i)
      await delay(50)
    }

    // scroll to top
    for (let i = document.body.scrollHeight; i > 0; i -= 100) {
      window.scrollTo(0, i)
      await delay(50)
    }
  })

  await expect(page).toHaveScreenshot({ fullPage: true })
})
