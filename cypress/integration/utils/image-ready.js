const test = (src) => {
  cy.get('[src="' + src + '"]', { timeout: 10000 })
    .should("be.visible")
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
}
export default test
