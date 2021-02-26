const test = (typeProject) => {
    cy.log("should be able to go to the import page")
    cy.contains("Start from Template", { timeout: 50000 }).click()
    if (typeProject) cy.contains(typeProject).click()
    cy.get('button[id="tab-samples"]').click()
    cy.get('div[id="sample0"]').click()
  }
  
  export default test