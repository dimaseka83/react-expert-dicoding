/* eslint-disable consistent-return */
/* eslint-disable default-param-last */
/* eslint-disable import/no-extraneous-dependencies */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-dev-shm-usage');
          return launchOptions;
        }
      });
    },
    video: false,
  },
});
