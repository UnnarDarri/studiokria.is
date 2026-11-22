import { test, expect } from '@playwright/test';

const pages = [
  { path: '/en/', name: 'home-en' },
  { path: '/is/', name: 'home-is' },
  { path: '/en/projects/', name: 'projects-en' },
  { path: '/is/projects/', name: 'projects-is' },
  { path: '/en/services/', name: 'services-en' },
  { path: '/is/services/', name: 'services-is' },
  { path: '/en/team/', name: 'team-en' },
  { path: '/is/team/', name: 'team-is' },
  { path: '/en/about/', name: 'about-en' },
  { path: '/is/about/', name: 'about-is' },
  { path: '/en/contact/', name: 'contact-en' },
  { path: '/is/contact/', name: 'contact-is' },
  { path: '/en/rentals/', name: 'rentals-en' },
  { path: '/is/rentals/', name: 'rentals-is' },
  { path: '/en/work/', name: 'work-en' },
  { path: '/is/work/', name: 'work-is' },
];

test.describe('Visual regression tests', () => {
  for (const page of pages) {
    test(`${page.name} - full page screenshot`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);
      await browserPage.waitForLoadState('networkidle');

      // Wait for film grain and animations to settle
      await browserPage.waitForTimeout(1000);

      // Disable animations for consistent screenshots
      await browserPage.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
          }
          .film-grain-canvas {
            display: none !important;
          }
          .cursor-glow {
            display: none !important;
          }
        `,
      });

      await expect(browserPage).toHaveScreenshot(`${page.name}.png`, {
        fullPage: true,
        animations: 'disabled',
      });
    });
  }
});

test.describe('Accessibility smoke tests', () => {
  test('Home page - no critical a11y violations', async ({ page }) => {
    await page.goto('/en/');
    await page.waitForLoadState('networkidle');

    // Check for basic accessibility issues
    const missingAlt = await page.$$eval('img:not([alt])', imgs => imgs.length);
    expect(missingAlt).toBe(0);

    const missingLang = await page.$eval('html', html => html.lang || 'missing');
    expect(missingLang).not.toBe('missing');

    const hasMain = await page.$('main, [role="main"]');
    expect(hasMain).toBeTruthy();
  });
});