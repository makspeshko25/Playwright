import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, 
  expect: {
    timeout: 5000 
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
    video: 'retain-on-failure', 
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure', 
    baseURL: 'http://localhost:3000',
  },

  projects: [
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
  ],
});
