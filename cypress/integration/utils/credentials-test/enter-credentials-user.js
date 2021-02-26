const enterCredentialsUser = () => {
  cy.get('input[id="username"]').focus().type(Cypress.env().COGNITO_USER_NAME)
  cy.get('input[id="password"]').focus().type(Cypress.env().COGNITO_USER_PASS)
}
const test = () => {
  it("Enter credentials user cognito", () => {
    cy.log("should be able to set user cognito config")
    cy.contains("Cognito").click()
    enterCredentialsUser()
    cy.get("button[id='sign-in']").click()
    cy.get("button[id='sign-in']", { timeout: 30000 }).should("not.exist")
  })
}
export default test
