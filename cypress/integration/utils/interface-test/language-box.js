const setLanguage = (language, langChar) => {
  cy.log("should be able to set the language to " + language)
  cy.get('input[id="react-select-2-input"]')
    .focus()
    .type(language)
    .type("{enter}")
    .should(() => {
      cy.expect(localStorage.getItem("i18nextLng"), {
        timeout: 2000,
      }).to.be.equal(langChar)
    })
}

const test = () => {
  it("Should be able to set english language from text", () => {
    setLanguage("English", "en")
  })
  it("Should be able to set french language from text", () => {
    setLanguage("Français", "fr")
  })
  it("Should be able to set chinese language from text", () => {
    setLanguage("汉语", "cn")
  })
  it("Should be able to set portugese language from text", () => {
    setLanguage("Português", "pt")
  })
  it("Should be able to set dutch language from text", () => {
    setLanguage("Néerlandais", "nl")
  })
}

export default test
