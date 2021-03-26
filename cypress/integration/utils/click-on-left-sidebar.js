const test = (titleButton) => {
  cy.get('button[title="' + titleButton + '"]')
    .click()
    .blur()
  cy.contains(titleButton).should("not.exist")
}
export default test
