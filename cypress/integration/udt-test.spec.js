import createNewFile from "./utils/interface-test/create-new-file"
import imageClassification from "./utils/interface-test/image-classification"
import imageSegmentation from "./utils/interface-test/image-segmentation"
import keyboardShortcuts from "./utils/interface-test/keyboard-shortcuts"
import namedEntityRecognition from "./utils/interface-test/named-entity-recognition"
import pasteImageUrlsWithCSV from "./utils/interface-test/paste-image-urls-with-csv"
import pasteImageUrls from "./utils/interface-test/paste-image-urls"
import textEntityClassification from "./utils/interface-test/text-entity-classification"
import defaultTemplate from "./utils/interface-test/default-template"
import commandSetTemplate from "./utils/cypress-command/set-template"
import templateNonVisible from "./utils/interface-test/template-non-visble"
import languageBoxTest from "./utils/interface-test/language-box"
import commandSetLanguage from "./utils/cypress-command/set-language"

commandSetLanguage()
commandSetTemplate()

Cypress.config("defaultCommandTimeout", 3000)
describe("Udt test", () => {
  beforeEach("Prepare test", () => {
    cy.visit(`http://localhost:6001`)
    cy.setLanguage("en")
    cy.setTemplate("Empty")
  })
  templateNonVisible()
  defaultTemplate()
  createNewFile()
  imageClassification()
  imageSegmentation()
  keyboardShortcuts()
  namedEntityRecognition()
  pasteImageUrlsWithCSV()
  pasteImageUrls()
  textEntityClassification()
  languageBoxTest()
})
