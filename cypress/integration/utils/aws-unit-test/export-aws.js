import goToImportPage from "../go-to-import-page"
import commandSetTemplate from "../cypress-command/set-template"
import testExportAssets from "../export-with-asset"
import testExportWithoutAssets from "../export-without-asset"
const exportAWS = () => {
  commandSetTemplate()
  it("Try to export with assets (Video)", () => {
    cy.setTemplate("Video Segmentation")
    goToImportPage()
    testExportAssets("CypressTestExportAssetsVideo", 0, "mp4")
  })

  it("Try to export with assets (Time:DataTime)", () => {
    cy.setTemplate("Time Series 2")
    goToImportPage()
    testExportAssets("CypressTestExportAssetsTime2", 0, "json")
  })

  it("Try to export with assets (Time:AudioUrl)", () => {
    cy.setTemplate("Time Series")
    goToImportPage()
    testExportAssets("CypressTestExportAssetsTime", 0, "mp3")
  })

  it("Try to export with assets (Text)", () => {
    cy.setTemplate("Text Classification")
    goToImportPage()
    testExportAssets("CypressTestExportAssetsText", 0, "txt")
  })

  it("Try to export with assets (PDF)", () => {
    cy.setTemplate("Data Entry")
    goToImportPage()
    testExportAssets("CypressTestExportAssetsPDF", 0, "pdf")
  })

  it("Try to export with assets (Image)", () => {
    cy.setTemplate("Image Classification")
    goToImportPage()
    testExportAssets("CypressTestExportAssetsImage", 0, "jpg")
  })

  it("Try to export with assets (Audio)", () => {
    cy.setTemplate("Audio Transcription")
    goToImportPage()
    testExportAssets("CypressTestExportAssetsAudio", 0, "mp3")
  })

  it("Try to export a project without assets (Video)", () => {
    cy.setTemplate("Video Segmentation")
    goToImportPage()
    testExportWithoutAssets("CypressTestExportAnnotationOnlyVideo", 0)
  })

  it("Try to export a project without assets (Time)", () => {
    cy.setTemplate("Time Series")
    goToImportPage()
    testExportWithoutAssets("CypressTestExportAnnotationOnlyTime", 0)
  })

  it("Try to export a project without assets (Text)", () => {
    cy.setTemplate("Text Classification")
    goToImportPage()
    testExportWithoutAssets("CypressTestExportAnnotationOnlyText", 0)
  })

  it("Try to export a project without assets (PDF)", () => {
    cy.setTemplate("Data Entry")
    goToImportPage()
    testExportWithoutAssets("CypressTestExportAnnotationOnlyPDF", 0)
  })

  it("Try to export a project without assets (Image)", () => {
    cy.setTemplate("Image Segmentation")
    goToImportPage()
    testExportWithoutAssets("CypressTestExportAnnotationOnlyImage", 0)
  })

  it("Try to export a project without assets (Audio)", () => {
    cy.setTemplate("Audio Transcription")
    goToImportPage()
    testExportWithoutAssets("CypressTestExportAnnotationOnlyAudio", 0)
  })
}
export default exportAWS
