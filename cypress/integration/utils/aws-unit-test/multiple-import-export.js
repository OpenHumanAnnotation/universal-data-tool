//This file include test who require multiple Import/Export
import importFromAnnotation from "../import-from-aws-annotations"
import importFromAssets from "../import-from-aws-assets"
import exportWithAsset from "../export-with-asset"
const test = () => {
  //Check if load two times same sample if create two indentical samples
  it("Double import from Assets only (should prevent duplicas)", () => {
    importFromAssets("Image Classification", 2, 0)
    cy.contains("Import").click()
    importFromAssets("Image Classification", 2, 0)
  })

  it("Double import from Annotations only (should prevent duplicas)", () => {
    importFromAnnotation("Image Classification", 2, 0)
    cy.contains("Import").click()
    importFromAnnotation("Image Classification", 2, 0)
  })

  it("Double import from Annotations then Assets only (should prevent duplicas)", () => {
    importFromAnnotation("Image Classification", 2, 0)
    cy.contains("Import").click()
    importFromAssets("Image Classification", 2, 0)
  })

  it("Double import from Assets then Annotations only (should prevent duplicas)", () => {
    importFromAssets("Image Classification", 2, 0)
    cy.contains("Import").click()
    importFromAnnotation("Image Classification", 2, 0)
  })
  //End of the concerning test of the comment above

  //Check if rename
  it("Rename test", () => {
    importFromAssets("Image Classification", 2, 0)
    cy.contains("Import").click()
    importFromAnnotation("Image Segmentation", 4, 1)
    cy.contains("Import").click()
    exportWithAsset("Rename Test", 2, "jpg")
    cy.log("Vérif rename")
    cy.contains("Import from S3 (Cognito)").click()
    cy.contains("Rename Test")
    cy.get("button[data-testid='expander-button-" + 2 + "']").click()
    cy.contains("(1)")
  })
}
export default test
