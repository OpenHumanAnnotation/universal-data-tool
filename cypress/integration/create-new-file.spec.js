describe("Create a new file in the universal data tool", () => {
  it("should be able to create a new file", () => {
    cy.visit("/")
    cy.get('input[id="react-select-2-input"]')
      .focus()
      .type("English", { force: true })
      .type("{enter}")
    cy.contains("New File").click()
  })
  it("should be able to select all the interfaces", () => {
    cy.contains("Image Segmentation").click()
    cy.matchImageSnapshot("image_segmentation", {
      failureThresholdType: "percent",
    })

    cy.contains("Data Type").click()
    cy.contains("Image Classification").click()
    cy.matchImageSnapshot("image_classification", {
      failureThresholdType: "percent",
    })

    cy.contains("Data Type").click()
    cy.contains("Video Segmentation").click()
    cy.matchImageSnapshot("video_segmentation", {
      failureThresholdType: "percent",
    })

    cy.contains("Data Type").click()
    cy.contains("Data Entry").click()
    cy.matchImageSnapshot("data_entry", { failureThresholdType: "percent" })

    cy.contains("Data Type").click()
    cy.contains("Named Entity Recognition").click()
    cy.matchImageSnapshot("named_entity_recognition", {
      failureThresholdType: "percent",
    })

    cy.contains("Data Type").click()
    cy.contains("Text Classification").click()
    cy.matchImageSnapshot("text_classification", {
      failureThresholdType: "percent",
    })

    cy.contains("Data Type").click()
    cy.contains("Audio Transcription").click()
    cy.matchImageSnapshot("audio_transctiption", {
      failureThresholdType: "percent",
    })

    cy.contains("Data Type").click()
    cy.contains("Composite").click()
    cy.matchImageSnapshot("composite", { failureThresholdType: "percent" })

    cy.contains("Data Type").click()
    cy.contains("3D Bounding Box").click()
    cy.matchImageSnapshot("3d_bounding_box", {
      failureThresholdType: "percent",
    })
  })
})
