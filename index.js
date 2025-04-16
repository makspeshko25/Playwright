// APIs
import * as AuthAPI from './api/AuthAPI.js';
import * as FuelExpensesAPI from './api/FuelExpensesAPI.js';
import * as GarageAPI from './api/GarageAPI.js';
import * as SettingsAPI from './api/SettingsAPI.js';

// Data
import * as devTestData from './data/devTestData.dev.json';
import * as prodTestData from './data/prodTestData.prod.json';

// Helpers
import * as generalUtils from './helpers/generalUtils.js';

// Page Objects
import fuelExpensesPage from './pom/fuelExpensesPage.js';
import garagePage from './pom/garagePage.js';
import mainPage from './pom/mainPage.js';
import settingsPage from './pom/settingsPage.js';

// Shared Components
import footer from './sharedComponents/footer.js';
import header from './sharedComponents/header.js';
import leftNavPanel from './sharedComponents/leftNavPanel.js';

// Environment
import dotenv from 'dotenv';
dotenv.config();

export const BASE_URL = process.env.BASE_URL;
export const USERNAME = process.env.USERNAME;
export const PASSWORD = process.env.PASSWORD;

if (!process.env.BASE_URL || !process.env.USERNAME || !process.env.PASSWORD) {
    throw new Error("Missing required environment variables");
  }