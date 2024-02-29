import repsonse from "../fixtures/input.json";

describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/"); // Visit the page where the Navigation component is rendered
  });

  it("should navigate to Home page when Home link is clicked", () => {
    cy.wait(2000); // Wait for 2 seconds for the page to fully render (adjust the wait time as needed)
    cy.get('a[href="/"]').click(); // Click on the Home link
    cy.url().should("eq", Cypress.config().baseUrl + "/"); // Assert that the URL is the Home page URL
  });

  it("should navigate to Gallery page when Gallery link is clicked", () => {
    cy.get('a[href="/gallery"]').click(); // Click on the Gallery link
    cy.url().should("eq", Cypress.config().baseUrl + "/gallery"); // Assert that the URL is the Gallery page URL
  });

  it("should navigate to Contact page when Contact link is clicked", () => {
    cy.get('a[href="/contact"]').click(); // Click on the Contact link
    cy.url().should("eq", Cypress.config().baseUrl + "/contact"); // Assert that the URL is the Contact page URL
  });

  it("should type information into the textbox and submit", () => {
    cy.fixture("input").then((response) => {
      const { name } = response;

      cy.get('input[name="name"]').type(name); // Assuming the name input has name attribute "name"

      cy.get('button[type="submit"]').click(); // Assuming the submit button type is "submit"
    });

    // Add assertions here to validate the form submission result on the main page
  });

  // Add more tests for other navigation links and functionality as needed
});
