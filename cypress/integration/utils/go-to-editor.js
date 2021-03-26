import imageReady from "./image-ready"
const test = (typeProject, numeroSample) => {
  cy.log("should be able to go to the import page")
  cy.contains("Start from Template", { timeout: 50000 }).click()
  if (typeProject) cy.contains(typeProject).click()
  cy.get('button[id="tab-samples"]').click()
  cy.get('div[id="sample' + numeroSample + '"]').click()
  imageReady(
    "https://s3.amazonaws.com/asset.workaround.online/example-jobs/sticky-notes/image" +
      (numeroSample + 1) +
      ".jpg"
  )
}

export default test
