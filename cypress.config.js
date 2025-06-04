const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wb3uhp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
