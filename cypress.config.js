const { defineConfig } = require('cypress');

module.exports = defineConfig({
  pageLoadTimeout: 120000, // sets timeout to 2 minutes
  defaultCommandTimeout: 8000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    retries: {

      runMode: 1,
      
      },
    specPattern: 'cypress/integration/examples/*.js',
    reporter: "cypress-mochawesome-reporter",
   
   

   
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true
      
    },
    video: true
    
    // Update the specPattern to point to your examples folder
     // Adjust the pattern as necessary
    
  }
});