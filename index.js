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
import BasePage from './pom/basePage.js';
import CreateCarModal from './pom/createCarModal.js';
import ExpensesModal from './pom/expensesModal.js';
import ExpensesPage from './pom/fuelExpensesPage.js';
import GaragePage from './pom/garagePage.js';
import MainPage from './pom/mainPage.js';
import ProfileModal from './pom/profileEditModal.js';
import ProfilePage from './pom/profilePage.js';
import SettingsPage from './pom/settingsPage.js';
import SignUpModal from './pom/signUpModal.js';

// Shared Components
import MainPageFooter from './pom/sharedComponents/footerMainPage.js';
import MainPageHeader from './pom/sharedComponents/headerMainPage.js';
import CabinetHeader from './pom/sharedComponents/headerOfCabinet.js';
import LeftNavPanel from './pom/sharedComponents/leftNavPanel.js';

// Environment
import dotenv from 'dotenv';
dotenv.config();


if (!process.env.BASE_URL || !process.env.USERNAME || !process.env.PASSWORD) {
    throw new Error("Missing required environment variables");
  }

// Export APIs
export { AuthAPI, FuelExpensesAPI, GarageAPI, SettingsAPI };

// Export Test Data
export { devTestData, prodTestData };

// Export Helpers
export { generalUtils };

// Export Page Objects
export {
  BasePage,
  CreateCarModal,
  ExpensesModal,
  ExpensesPage,
  GaragePage,
  MainPage,
  ProfileModal,
  ProfilePage,
  SettingsPage,
  SignUpModal
};

// Export Shared Components
export {
  MainPageFooter,
  MainPageHeader,
  CabinetHeader,
  LeftNavPanel
};

// Export Environment variables
export const BASE_URL = process.env.BASE_URL;
export const USERNAME = process.env.USERNAME;
export const PASSWORD = process.env.PASSWORD;

// Validate environment variables
if (!BASE_URL || !USERNAME || !PASSWORD) {
  throw new Error("Missing required environment variables");
}