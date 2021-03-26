import clickOnLeftSidebar from "../click-on-left-sidebar"
import goToEditor from "../go-to-editor"
const tests = () => {
  it("Drag picture", () => {
    goToEditor("Image Segmentation", 0)
    clickOnLeftSidebar("Drag/Pan (right or middle click)")
    cy.matchImageSnapshot("DragStart", {
      failureThreshold: 0.03,
    })
    cy.get("div[id='root']").trigger("mousedown", 150, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mousemove", 200, 200, { button: 0 })
    cy.get("div[id='root']").trigger("mouseup", 200, 200, { button: 0 })
    cy.matchImageSnapshot("DragEnd", {
      failureThreshold: 0.03,
    })
  })

  it("Zoom in out", () => {
    goToEditor("Image Segmentation", 0)
    clickOnLeftSidebar("Zoom In/Out (scroll)")
    cy.matchImageSnapshot("ZoomOut", {
      failureThreshold: 0.04,
    })
    cy.get("div[id='root']").trigger("mousedown", 150, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mouseup", 150, 80, { button: 0 })
    cy.matchImageSnapshot("ZoomIn", {
      failureThreshold: 0.03,
    })
    cy.get("div[id='root']").trigger("mousedown", 150, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mouseup", 150, 80, { button: 0 })
    cy.matchImageSnapshot("ZoomOut")
  })

  it("Add point", () => {
    goToEditor("Image Segmentation", 0)
    clickOnLeftSidebar("Add Point")
    cy.get("div[id='root']").trigger("mousedown", 150, 80, { button: 0 })
    cy.get(
      "path[stroke-width='2'][stroke='#ff0000'][fill='transparent']"
    ).should("exist")
    cy.log("check annotation detail")
    cy.contains("point")
    cy.contains("Classification").click()
    cy.contains("invalid").click()
    cy.get(
      "path[stroke-width='2'][stroke='#2196f3'][fill='transparent']"
    ).should("exist")
    cy.get(
      "button[class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall']"
    ).click()
    cy.get(
      "path[stroke-width='2'][stroke='#2196f3'][fill='transparent']"
    ).should("not.exist")
  })

  it("Add bounding box", () => {
    goToEditor("Image Segmentation", 0)
    clickOnLeftSidebar("Add Bounding Box")
    cy.get("div[id='root']").trigger("mousedown", 150, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mousemove", 200, 200, { button: 0 })
    cy.get("div[id='root']").trigger("mouseup", 200, 200, { button: 0 })
    cy.get("rect").should("be.visible")
    cy.contains("box")
  })

  it("Add bounding polygon", () => {
    goToEditor("Image Segmentation", 0)
    clickOnLeftSidebar("Add Polygon")

    cy.log("Trace a polygon")
    cy.get("div[id='root']").trigger("mousemove", 150, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mousedown", 150, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mouseup", 150, 80, { button: 0 })

    cy.get("div[id='root']").trigger("mousemove", 200, 200, { button: 0 })
    cy.get("div[id='root']").trigger("mousedown", 200, 200, { button: 0 })
    cy.get("div[id='root']").trigger("mouseup", 200, 200, { button: 0 })

    cy.get("div[id='root']").trigger("mousemove", 200, 100, { button: 0 })
    cy.get("div[id='root']").trigger("mousedown", 200, 100, { button: 0 })
    cy.get("div[id='root']").trigger("mouseup", 200, 100, { button: 0 })

    cy.get("div[id='root']").trigger("mousemove", 150, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mousedown", 150, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mouseup", 150, 80, { button: 0 })

    cy.log("open polygon detail box")
    cy.get(
      "div[class='MuiPaper-root makeStyles-regionInfo-159 highlighted MuiPaper-elevation1 MuiPaper-rounded']"
    ).click()
    cy.contains("polygon")

    cy.log("Move polygon point")
    cy.get("div[id='root']").trigger("mousemove", 150, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mousedown", 150, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mousemove", 300, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mouseup", 300, 80, { button: 0 })

    cy.log("Add a new polygon point")
    cy.get("div[id='root']").trigger("mousemove", 250, 140, { button: 0 })
    cy.get("div[id='root']").trigger("mousedown", 250, 140, { button: 0 })
    cy.get("div[id='root']").trigger("mouseup", 250, 140, { button: 0 })
    cy.get("div[id='root']").trigger("mousedown", 250, 140, { button: 0 })
    cy.get("div[id='root']").trigger("mousemove", 450, 140, { button: 0 })
    cy.get("div[id='root']").trigger("mouseup", 450, 140, { button: 0 })

    cy.matchImageSnapshot("PolygonCreated", {
      failureThreshold: 0.01,
    })
  })
  it("Add expanding line", () => {
    goToEditor("Image Segmentation", 0)
    clickOnLeftSidebar("Add Expanding Line")
    cy.get("div[id='root']").trigger("mousemove", 400, 400, { button: 0 })
    cy.get("div[id='root']").trigger("mousedown", 400, 400, { button: 0 })
    cy.get("div[id='root']").trigger("mouseup", 400, 400, { button: 0 })

    cy.get("div[id='root']").trigger("mousemove", 400, 500, { button: 0 })
    cy.get("div[id='root']").trigger("mousedown", 400, 500, { button: 0 })
    cy.get("div[id='root']").trigger("mousemove", 500, 500, { button: 0 })
    cy.get("div[id='root']").trigger("mouseup", 500, 500, { button: 0 })

    cy.get("div[id='root']").trigger("keydown", 400, 500, {
      code: 27,
      key: "Escape",
      keyCode: 27,
    })
    cy.get("div[id='root']").trigger("keypress", 400, 500, {
      code: 27,
      key: "Escape",
      keyCode: 27,
    })
    cy.get("div[id='root']").trigger("keyup", 400, 500, {
      code: 27,
      key: "Escape",
      keyCode: 27,
    })

    cy.get(
      "div[class='MuiPaper-root makeStyles-regionInfo-160 highlighted MuiPaper-elevation1 MuiPaper-rounded']"
    ).click()
    cy.contains("expanding-line")
    cy.matchImageSnapshot("ExpandingLineCreated", {
      failureThreshold: 0.01,
    })
  })
}
export default tests
