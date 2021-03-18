const importFromAnnotation = (nomProject, numberSamples, numberRowToSelect) => {
  cy.log("Import roject")
  cy.contains("Import from S3 (Cognito)").click()
  cy.contains(nomProject, { timeout: 5000 }).click()
  cy.contains("Load Annotations").click()
  cy.get("input[name='select-row-" + numberRowToSelect + "']").click()
  cy.contains("Take samples from project").click()
  cy.contains("Grid", { timeout: 10000 }).click()
  cy.contains(numberSamples + " Samples")
  cy.contains("Import").click()
}
export default importFromAnnotation
