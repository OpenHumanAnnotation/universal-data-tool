import goToImportPage from "../go-to-import-page"
const warningHeader = () => {
  it("Warning project name not set", () => {
    goToImportPage("Image Segmentation")
    cy.contains("Export to S3 (Cognito)").click()
    cy.contains("Warning : Please enter a project name.")
    cy.contains("Close").click()
  })
  it("Warning project already exist", () => {
    goToImportPage("Image Segmentation")
    cy.contains("Export to S3 (Cognito)").click()
    cy.get("input[id='ProjectName']")
      .focus()
      .clear()
      .type("Image Classification")
    cy.contains(
      "Warning : This project name already exist. If you continue the existing project with the same name will be replaced."
    )
    cy.contains("Close").click()
  })
}
export default warningHeader
