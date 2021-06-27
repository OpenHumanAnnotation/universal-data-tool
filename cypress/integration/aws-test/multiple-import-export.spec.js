import goToImportPage from "../utils/go-to-import-page"

import commandLocalStorage from "../utils/cypress-command/local-storage"
import commandAddAssetToAwsProject from "../utils/cypress-command/add-asset-to-aws-project"
import commandCredentialsAws from "../utils/cypress-command/credentials-aws"
import commandAddProjectToAws from "../utils/cypress-command/add-project-to-aws"
import commandCleanAws from "../utils/cypress-command/clean-aws"
import commandSetLanguage from "../utils/cypress-command/set-language"

commandLocalStorage()
commandCredentialsAws()
commandAddAssetToAwsProject()
commandAddProjectToAws()
commandCleanAws()
commandSetLanguage()

Cypress.config("defaultCommandTimeout", 3000)
if (Cypress.env().AWS_IDENTITY_POOL_ID)
  describe("Combination of import and export aws test", () => {
    before("Prepare tests", () => {
      cy.log("should be able to join the web site")
      cy.visit(`http://localhost:6001`)
      cy.setLanguage("en")
      //the following are very long processus try to keep them here so they execute only once
      cy.createCredentialsAws()
      cy.saveLocalStorage()
      cy.cleanAws()
      cy.addProjectToAws("ImageClassification.json")
      cy.addProjectToAws("ImageSegmentation.json")
      cy.addAssetToAwsProject("Image Segmentation", "image1.jpg")
      cy.addAssetToAwsProject("Image Segmentation", "image2.jpg")
      cy.addAssetToAwsProject("Image Classification", "image1.jpg")
      cy.addAssetToAwsProject("Image Classification", "image2.jpg")
    })

    beforeEach("Go to import page", () => {
      cy.restoreLocalStorage()
      goToImportPage("Image Classification")
    })

    //Comment below when debugging 1 test
    afterEach("Return to home page", () => {
      cy.get("button[title='Exit to Welcome Page']").click({ force: true })
    })

    //Comment below when debugging aws
    after("Clean AWS", () => {
      cy.cleanAws()
    })
  })
