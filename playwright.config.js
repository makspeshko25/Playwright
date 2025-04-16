import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    baseURL: process.env.BASE_URL,
    httpCredentials: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  },

  projects: [
    // Cross-Browser Testing
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },

    // Custom Viewports
    {
      name: 'Desktop View',
      use: { viewport: { width: 1920, height: 1080 } },
    },
    {
      name: 'Tablet View',
      use: { viewport: { width: 768, height: 1024 } },
    },
    {
      name: 'Mobile View',
      use: { ...devices['iPhone 14'] },
    },
  ],
});
