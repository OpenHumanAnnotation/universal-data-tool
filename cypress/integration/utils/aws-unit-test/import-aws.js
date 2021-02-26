import importFromAnnotation from "../import-from-aws-annotations"
import importFromAssets from "../import-from-aws-assets"
import goToImportPage from "../go-to-import-page"
const test = () => {
  it("Try to import a project from annotations(Image)", () => {
    goToImportPage("Image Classification")
    importFromAnnotation("Image Classification", 2, 3)
  })
  it("Try to import a project from annotations(Video)", () => {
    goToImportPage("Video Segmentation")
    importFromAnnotation("Video Segmentation", 1, 8)
  })
  it("Try to import a project from annotations(Audio)", () => {
    goToImportPage("Audio Transcription")
    importFromAnnotation("Audio Transcription", 1, 0)
  })
  it("Try to import a project from annotations(PDF)", () => {
    goToImportPage("Data Entry")
    importFromAnnotation("Data Entry", 2, 1)
  })
  it("Try to import a project from annotations(Text)", () => {
    goToImportPage("Text Classification")
    importFromAnnotation("Text Classification", 3, 5)
  })
  it("Try to import a project from annotations(Time:DataTime)", () => {
    goToImportPage("Time Series")
    importFromAnnotation("Time Series 2", 1, 6)
  })
  it("Try to import a project from annotations(Time:AudioUrl)", () => {
    goToImportPage("Time Series")
    importFromAnnotation("Time Series", 1, 7)
  })

  it("Try to import a project from assets(Image)", () => {
    goToImportPage("Image Classification")
    importFromAssets("Image Classification", 2, 3)
  })
  it("Try to import a project from assets(Audio)", () => {
    goToImportPage("Audio Transcription")
    importFromAssets("Audio Transcription", 1, 0)
  })
  it("Try to import a project from assets(Video)", () => {
    goToImportPage("Video Segmentation")
    importFromAssets("Video Segmentation", 1, 7)
  })
  it("Try to import a project from assets(PDF)", () => {
    goToImportPage("Data Entry")
    importFromAssets("Data Entry", 2, 1)
  })
  it("Try to import a project from assets(Text)", () => {
    goToImportPage("Text Classification")
    importFromAssets("Text Classification", 3, 5)
  })
  it("Try to import a project from assets(Time:DataTime)", () => {
    goToImportPage("Time Series")
    importFromAssets("Time Series 2", 1, 6)
  })
  it("Try to import a project from assets(Time:AudioUrl)", () => {
    goToImportPage("Time Series")
    importFromAssets("Time Series", 1, 7)
  })
}
export default test
