import { test } from '@playwright/test';

[
    ['Good story', 'http://localhost:6006/iframe.html?args=&id=test--good-story&viewMode=story'],
    ['Bad story', 'http://localhost:6006/iframe.html?args=&id=test--bad-story&viewMode=story']
].forEach(([storyName, storyUrl]) => {
  test(`Should open select - ${storyName}`, async ({ page }) => {
    await page.goto(storyUrl);

    await page.getByLabel('Age').first().click()
    await page.getByText('Twenty').waitFor({ state: 'visible' })
  });
})
