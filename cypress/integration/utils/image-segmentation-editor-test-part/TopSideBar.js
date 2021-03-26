import goToEditor from "../go-to-editor"
const tests = () => {
  it("Next Button", () => {
    goToEditor("Image Segmentation", 0)
    cy.contains("Next").click()
    cy.contains("Sample 1")
    cy.contains("Next").click()
    cy.contains("Percent Complete")
    cy.contains("0%")
  })

  it("Prev Button", () => {
    goToEditor("Image Segmentation", 1)
    cy.contains("Prev").click()
    cy.contains("Sample 0")
    cy.contains("Prev").click()
    cy.contains("Percent Complete")
    cy.contains("0%")
  })

  it("Settings", () => {
    goToEditor("Image Segmentation", 1)
    cy.contains("Settings").click()
    cy.get("h2").contains("Settings")
  })

  it("Fullscreen", () => {
    goToEditor("Image Segmentation", 0)
    cy.contains("Fullscreen").click()
    cy.contains("Window") //can't fullscreen without a user action but we can check the ui changes
  })

  it("Save", () => {
    goToEditor("Image Segmentation", 0)
    cy.contains("Save").click()
    cy.contains("Percent Complete")
  })
}
export default tests
