import goToImportPage from "../go-to-import-page"
const configImport = () => {
  it("Check behavior Load Assets/Annotations", () => {
    goToImportPage("Image Segmentation")
    cy.log("check initial config")
    cy.contains("Import from S3 (Cognito)").click()
    cy.contains("Load Assets").should("be.disabled")
    cy.contains("Load Annotations").should("not.be.disabled")

    /*cy.log("Check if type of import is kept")
    cy.contains("Load Annotations").click()
    cy.contains("Close").click()
    cy.contains("Import from S3 (Cognito)").click()
    cy.contains("Load Assets").should("not.be.disabled")
    cy.contains("Load Annotations").should("be.disabled")

    cy.log("return to initial state")
    cy.contains("Load Assets").click()
    cy.contains("Close").click()*/
  })

  it("Check behavior setting/storage panel", () => {
    goToImportPage("Image Segmentation")
    cy.log("Check if open on Storage panel")
    cy.contains("Import from S3 (Cognito)").click()
    cy.contains("Annotation processing").should("not.exist")
    cy.contains("Choose file type").should("not.exist")

    cy.log("Check if able to change panel")
    cy.get("svg[id='SettingIcon']").click()
    cy.contains("Choose file type")
    cy.contains("Close").click()

    /*cy.log("check if stay in setting panel when closed")
    cy.contains("Import from S3 (Cognito)").click()
    cy.contains("Choose file type")

    cy.log("Check if change setting for type of import")
    cy.contains("Load Annotations").click()
    cy.contains("Annotation processing")

    cy.log("return to initial state")
    cy.contains("Load Assets").click()
    cy.get("svg[id='StorageIcon']").click()
    cy.contains("Close").click()*/
  })

  it("Check if disable non compatible type of file (Empty)", () => {
    goToImportPage()
    cy.log("For Empty", { timeout: 2000 })
    cy.contains("Import from S3 (Cognito)").click()
    cy.get("svg[id='SettingIcon']").click()

    cy.get("input[value='Image']").should("not.be.checked")
    cy.get("input[value='Image']").should("not.be.disabled")

    cy.get("input[value='Video']").should("not.be.checked")
    cy.get("input[value='Video']").should("not.be.disabled")

    cy.get("input[value='Audio']").should("not.be.checked")
    cy.get("input[value='Audio']").should("not.be.disabled")

    cy.get("input[value='PDF']").should("not.be.checked")
    cy.get("input[value='PDF']").should("not.be.disabled")

    cy.get("input[value='Text']").should("not.be.checked")
    cy.get("input[value='Text']").should("not.be.disabled")

    cy.get("input[value='Time']").should("not.be.checked")
    cy.get("input[value='Time']").should("not.be.disabled")

    cy.get("svg[id='StorageIcon']").click()
    cy.contains("Close").click()
  })

  it("Check if disable non compatible type of file (Image)", () => {
    goToImportPage("Image Segmentation")
    cy.log("For Image")
    cy.contains("Import from S3 (Cognito)").click()
    cy.get("svg[id='SettingIcon']").click()

    cy.get("input[value='Image']").should("be.checked")
    cy.get("input[value='Image']").should("not.be.disabled")

    cy.get("input[value='Video']").should("not.be.checked")
    cy.get("input[value='Video']").should("be.disabled")

    cy.get("input[value='Audio']").should("not.be.checked")
    cy.get("input[value='Audio']").should("be.disabled")

    cy.get("input[value='PDF']").should("not.be.checked")
    cy.get("input[value='PDF']").should("be.disabled")

    cy.get("input[value='Text']").should("not.be.checked")
    cy.get("input[value='Text']").should("be.disabled")

    cy.get("input[value='Time']").should("not.be.checked")
    cy.get("input[value='Time']").should("be.disabled")

    cy.get("svg[id='StorageIcon']").click()
    cy.contains("Close").click()
  })

  it("Check if disable non compatible type of file (Audio)", () => {
    goToImportPage("Audio Transcription")
    cy.log("For Audio")
    cy.contains("Import from S3 (Cognito)").click()
    cy.get("svg[id='SettingIcon']").click()

    cy.get("input[value='Image']").should("not.be.checked")
    cy.get("input[value='Image']").should("be.disabled")

    cy.get("input[value='Video']").should("not.be.checked")
    cy.get("input[value='Video']").should("be.disabled")

    cy.get("input[value='Audio']").should("be.checked")
    cy.get("input[value='Audio']").should("not.be.disabled")

    cy.get("input[value='PDF']").should("not.be.checked")
    cy.get("input[value='PDF']").should("be.disabled")

    cy.get("input[value='Text']").should("not.be.checked")
    cy.get("input[value='Text']").should("be.disabled")

    cy.get("input[value='Time']").should("not.be.checked")
    cy.get("input[value='Time']").should("be.disabled")

    cy.get("svg[id='StorageIcon']").click()
    cy.contains("Close").click()
  })

  it("Check if disable non compatible type of file (Video)", () => {
    goToImportPage("Video Segmentation")
    cy.log("For Video")
    cy.contains("Import from S3 (Cognito)").click()
    cy.get("svg[id='SettingIcon']").click()

    cy.get("input[value='Image']").should("not.be.checked")
    cy.get("input[value='Image']").should("be.disabled")

    cy.get("input[value='Video']").should("be.checked")
    cy.get("input[value='Video']").should("not.be.disabled")

    cy.get("input[value='Audio']").should("not.be.checked")
    cy.get("input[value='Audio']").should("be.disabled")

    cy.get("input[value='PDF']").should("not.be.checked")
    cy.get("input[value='PDF']").should("be.disabled")

    cy.get("input[value='Text']").should("not.be.checked")
    cy.get("input[value='Text']").should("be.disabled")

    cy.get("input[value='Time']").should("not.be.checked")
    cy.get("input[value='Time']").should("be.disabled")

    cy.get("svg[id='StorageIcon']").click()
    cy.contains("Close").click()
  })

  it("Check if disable non compatible type of file (Text)", () => {
    goToImportPage("Text Classification")
    cy.log("For Text")
    cy.contains("Import from S3 (Cognito)").click()
    cy.get("svg[id='SettingIcon']").click()

    cy.get("input[value='Image']").should("not.be.checked")
    cy.get("input[value='Image']").should("be.disabled")

    cy.get("input[value='Video']").should("not.be.checked")
    cy.get("input[value='Video']").should("be.disabled")

    cy.get("input[value='Audio']").should("not.be.checked")
    cy.get("input[value='Audio']").should("be.disabled")

    cy.get("input[value='PDF']").should("not.be.checked")
    cy.get("input[value='PDF']").should("be.disabled")

    cy.get("input[value='Text']").should("be.checked")
    cy.get("input[value='Text']").should("not.be.disabled")

    cy.get("input[value='Time']").should("not.be.checked")
    cy.get("input[value='Time']").should("be.disabled")

    cy.get("svg[id='StorageIcon']").click()
    cy.contains("Close").click()
  })

  it("Check if disable non compatible type of file (PDF)", () => {
    goToImportPage("Data Entry")
    cy.log("For PDF")
    cy.contains("Import from S3 (Cognito)").click()
    cy.get("svg[id='SettingIcon']").click()

    cy.get("input[value='Image']").should("not.be.checked")
    cy.get("input[value='Image']").should("be.disabled")

    cy.get("input[value='Video']").should("not.be.checked")
    cy.get("input[value='Video']").should("be.disabled")

    cy.get("input[value='Audio']").should("not.be.checked")
    cy.get("input[value='Audio']").should("be.disabled")

    cy.get("input[value='PDF']").should("be.checked")
    cy.get("input[value='PDF']").should("not.be.disabled")

    cy.get("input[value='Text']").should("not.be.checked")
    cy.get("input[value='Text']").should("be.disabled")

    cy.get("input[value='Time']").should("not.be.checked")
    cy.get("input[value='Time']").should("be.disabled")

    cy.get("svg[id='StorageIcon']").click()
    cy.contains("Close").click()
  })

  it("Check if disable non compatible type of file (Time)", () => {
    goToImportPage("Time Series")
    cy.log("For Time")
    cy.contains("Import from S3 (Cognito)").click()
    cy.get("svg[id='SettingIcon']").click()

    cy.get("input[value='Image']").should("not.be.checked")
    cy.get("input[value='Image']").should("be.disabled")

    cy.get("input[value='Video']").should("not.be.checked")
    cy.get("input[value='Video']").should("be.disabled")

    cy.get("input[value='Audio']").should("not.be.checked")
    cy.get("input[value='Audio']").should("not.be.disabled")

    cy.get("input[value='PDF']").should("not.be.checked")
    cy.get("input[value='PDF']").should("be.disabled")

    cy.get("input[value='Text']").should("not.be.checked")
    cy.get("input[value='Text']").should("be.disabled")

    cy.get("input[value='Time']").should("be.checked")
    cy.get("input[value='Time']").should("not.be.disabled")

    cy.get("svg[id='StorageIcon']").click()
    cy.contains("Close").click()
  })

  /*it("Check if disable non compatible type of file", () => {
        goToImportPage("Image Segmentation")
        cy.log("For Other File(unsupported)")
        cy.contains("Import from S3 (Cognito)").click()
        cy.get("svg[id='SettingIcon']").click()
    
        cy.get("input[value='Image']").should("not.be.checked")
        cy.get("input[value='Image']").should("be.disabled")
    
        cy.get("input[value='Video']").should("not.be.checked")
        cy.get("input[value='Video']").should("be.disabled")
    
        cy.get("input[value='Audio']").should("not.be.checked")
        cy.get("input[value='Audio']").should("be.disabled")
    
        cy.get("input[value='PDF']").should("not.be.checked")
        cy.get("input[value='PDF']").should("be.disabled")
        
        cy.get("input[value='Text']").should("not.be.checked")
        cy.get("input[value='Text']").should("be.disabled")
    
        cy.get("svg[id='StorageIcon']").click()
        cy.contains("Close").click()
      })*/

  it("Check if disable import when project not selected", () => {
    goToImportPage("Image Segmentation")
    cy.contains("Import from S3 (Cognito)").click()
    cy.contains("Take samples from project").should("be.disabled")
    cy.get("input[name='select-row-0']").click()
    cy.contains("Take samples from project").should("not.be.disabled")
    cy.contains("Close").click()
  })
}
export default configImport
