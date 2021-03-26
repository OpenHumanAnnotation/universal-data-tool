import goToEditor from "../go-to-editor"
import clickLeftSideBar from "../click-on-left-sidebar"
const tests = () => {
  it("See the class for the annotation", () => {
    goToEditor("Image Segmentation", 0)
    cy.get(
      "button[class='MuiButtonBase-root WithStyles(ForwardRef(ButtonBase))-root-157']"
    ).click()
    cy.get(
      "button[class='MuiButtonBase-root MuiIconButton-root makeStyles-expandButton-144']"
    )
      .eq(0)
      .click()
    cy.contains("Classifications")
    cy.contains("Valid")
    cy.contains("Invalid")
    cy.contains("Key [1]")
  })
  it("Check lock button (Regions)", () => {
    goToEditor("Image Segmentation", 0)
    cy.get(
      "button[class='MuiButtonBase-root WithStyles(ForwardRef(ButtonBase))-root-157']"
    ).click()
    cy.get(
      "button[class='MuiButtonBase-root MuiIconButton-root makeStyles-expandButton-144']"
    )
      .eq(1)
      .click()
    clickLeftSideBar("Add Point")
    cy.get("div[id='root']").trigger("mousemove", 150, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mousedown", 150, 80, { button: 0 })
    cy.contains("#1")
    cy.get("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1']")
      .eq(4)
      .click()
    cy.get("div[class='MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded']")
    cy.get("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1']")
      .eq(4)
      .click()
    cy.contains("point")
  })
  it("Check eye button", () => {
    goToEditor("Image Segmentation", 0)
    cy.get(
      "button[class='MuiButtonBase-root WithStyles(ForwardRef(ButtonBase))-root-157']"
    ).click()
    cy.get(
      "button[class='MuiButtonBase-root MuiIconButton-root makeStyles-expandButton-144']"
    )
      .eq(1)
      .click()
    clickLeftSideBar("Add Point")
    cy.get("div[id='root']").trigger("mousemove", 150, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mousedown", 150, 80, { button: 0 })
    cy.contains("#1")
    cy.get("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1']")
      .eq(5)
      .click()
    cy.get(
      "g[transform='translate(18.47619047619048 26.47619047619048)']"
    ).should("not.exist")
    cy.get("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1']")
      .eq(5)
      .click()
    cy.get(
      "g[transform='translate(18.47619047619048 26.47619047619048)']"
    ).should("exist")
  })
  it("Check thrash button", () => {
    goToEditor("Image Segmentation", 0)
    cy.get(
      "button[class='MuiButtonBase-root WithStyles(ForwardRef(ButtonBase))-root-157']"
    ).click()
    cy.get(
      "button[class='MuiButtonBase-root MuiIconButton-root makeStyles-expandButton-144']"
    )
      .eq(1)
      .click()
    clickLeftSideBar("Add Point")
    cy.get("div[id='root']").trigger("mousemove", 150, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mousedown", 150, 80, { button: 0 })
    cy.contains("#1")
    cy.contains("point")
    cy.get("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1']")
      .eq(3)
      .click()
    cy.contains("point").should("not.exist")
  })
  it("Back in history", () => {
    goToEditor("Image Segmentation", 0)
    cy.get(
      "button[class='MuiButtonBase-root WithStyles(ForwardRef(ButtonBase))-root-157']"
    ).click()
    cy.get(
      "button[class='MuiButtonBase-root MuiIconButton-root makeStyles-expandButton-144']"
    )
      .eq(2)
      .click()
    clickLeftSideBar("Add Point")
    cy.get("div[id='root']").trigger("mousemove", 150, 80, { button: 0 })
    cy.get("div[id='root']").trigger("mousedown", 150, 80, { button: 0 })
    cy.contains("Create Point")
    cy.contains("point")
    cy.get("button[class='MuiButtonBase-root MuiIconButton-root']")
      .last()
      .click()
    cy.contains("Create Point").should("not.exist")
    cy.contains("point").should("not.exist")
  })
}
export default tests
