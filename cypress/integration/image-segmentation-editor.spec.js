import commandSetLanguage from "./utils/cypress-command/set-language"
import goToEditor from "./utils/go-to-editor"
commandSetLanguage()

Cypress.config("defaultCommandTimeout", 3000)
describe("Udt test", () => {
  before("Prepare test", () => {
    cy.visit(`http://localhost:6001`)
    cy.setLanguage("en")
  })
  beforeEach("Go to editor", ()=>{
    goToEditor("Image Segmentation")
  })
  it("Drag picture",()=>{
    const dataTransfer = new DataTransfer;
    cy.get('button[title="Drag/Pan (right or middle click)"]').click()
    cy.screenshot("Drag")
    cy.get('canvas').focus().trigger('dragstart',{dataTransfer})
    cy.get().focus().trigger('drop',{dataTransfer})
    cy.get().focus().trigger('dragend',{dataTransfer})
    cy.matchImageSnapshot('Drag').should("not.equal");
  })
})
