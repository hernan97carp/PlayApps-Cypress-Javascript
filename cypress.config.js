const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    //baseUrl: 'https://qaplayground.dev',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    video: false, // Disable video recording
    screenshotOnRunFailure: false, // Disable screenshots on failure
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
