describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("hero section", () => {
    it("has h1 that contains the correct text", () => {
      cy.get('[data-test="hero-heading"] > .block')
        .should("exist")
        .contains("Testing Next.js Applications with Cypress")
    })

    it("has features correctly", () => {
      cy.get("dt").eq(0).contains("4 Courses")
    })
  })

  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      // Use eq(n) sparingly (brittle!)
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })

    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})
