const importAWS = () => {
  it("Try to import a project from annotations", () => {
    cy.log("Import project")
    cy.contains("Import from S3 (Cognito)").click()
    cy.contains("Image Classification", { timeout: 5000 }).click()
    cy.contains("Load Annotations").click()
    cy.get("input[name='select-row-0']").click()
    cy.contains("Take samples from project").click()
    cy.contains("Grid", { timeout: 10000 }).click()
    cy.contains("2 Samples")
    cy.contains("Import").click()
  })

  it("Try to import a project from assets", () => {
    cy.log("Import project")
    cy.contains("Import from S3 (Cognito)").click()
    cy.contains("Image Classification", { timeout: 5000 }).click()
    cy.get("input[name='select-row-0']").click()
    cy.contains("Take samples from project").click()
    cy.contains("Grid", { timeout: 10000 }).click()
    cy.contains("2 Samples")
    cy.contains("Import").click()
  })
}
export default importAWS
