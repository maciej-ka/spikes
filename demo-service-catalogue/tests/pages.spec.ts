import { test, expect } from "@playwright/test"

test("list", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByText("Antivirus as a Service")).toBeVisible()
  await expect(page.getByText("149 PLN/month").first()).toBeVisible()
  await expect(page.getByText("Cloud-based antivirus")).toBeVisible()
  await expect(page.getByText("your business remains secure")).not.toBeVisible()
})
