describe("Newsletter subscribe form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input").type("tom.test@test.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message")
      .should("exist")
      .contains("tom.test@test.com")
  })

  it("shows an error message when the email is invalid", () => {
    cy.getByData("email-input").type("tom.test")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("shows an error message when the email already exists", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("john@example.com already exists")
  })
})
