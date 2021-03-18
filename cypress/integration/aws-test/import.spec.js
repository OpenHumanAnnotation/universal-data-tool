import warningHeader from "../utils/aws-unit-test/warning-header-import"
import importAWS from "../utils/aws-unit-test/import-aws"
import configImport from "../utils/aws-unit-test/config-import"

import commandLocalStorage from "../utils/cypress-command/local-storage"
import commandCredentialsAws from "../utils/cypress-command/credentials-aws"
import commandCleanAws from "../utils/cypress-command/clean-aws"
import commandSetUpAws from "../utils/cypress-command/set-up-aws"
import commandSetLanguage from "../utils/cypress-command/set-language"

commandLocalStorage()
commandCredentialsAws()
commandSetUpAws()
commandCleanAws()
commandSetLanguage()

Cypress.config("defaultCommandTimeout", 3000)
if (Cypress.env().AWS_IDENTITY_POOL_ID)
  describe("Import aws test", () => {
    before("Prepare tests", () => {
      cy.log("should be able to join the web site")
      cy.visit(`http://localhost:6001`)
      cy.setLanguage("en")
      //the following are very long processus try to keep them here so they execute only once
      cy.createCredentialsAws()
      cy.saveLocalStorage()
      cy.cleanAws()
      cy.setUpAws()
    })

    beforeEach("Go to import page", () => {
      cy.restoreLocalStorage()
    })

    warningHeader()
    importAWS()
    configImport()

    //Comment below when debugging 1 test
    afterEach("Return to home page", () => {
      cy.get("button[title='Exit to Welcome Page']").click({ force: true })
    })

    //Comment below when debugging aws
    after("Clean AWS", () => {
      cy.cleanAws()
    })
  })
