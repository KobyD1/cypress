const { defineConfig } = require("cypress");

//  to run in incognito mode

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       on('before:browser:launch', (browser = {}, launchOptions) => {
//         if (browser.family === 'chromium' && browser.name !== 'electron') {
//           launchOptions.args.push('--incognito');
//         }
//         return launchOptions;
//       });
//     },
//   },
// });


module.exports = defineConfig({
  projectId: 'wb3uhp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
