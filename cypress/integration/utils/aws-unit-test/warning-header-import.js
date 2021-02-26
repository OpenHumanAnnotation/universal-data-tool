import goToImportPage from "../go-to-import-page"
const warningHeader = () => {
  it("Warning select a project", () => {
    goToImportPage("Image Segmentation")
    cy.contains("Import from S3 (Cognito)").click()
    cy.contains("Warning : You need to select a project.")
    cy.contains("Close").click()
  })
}
export default warningHeader
