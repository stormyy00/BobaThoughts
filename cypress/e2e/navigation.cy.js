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
    cy.get('a[href="/yelp"]').click(); // Click on the Gallery link
    cy.url().should("eq", Cypress.config().baseUrl + "/yelp"); // Assert that the URL is the Gallery page URL
  });

  it("should navigate to Contact page when Contact link is clicked", () => {
    cy.get('a[href="/signin"]').click(); // Click on the Contact link
    cy.url().should("eq", Cypress.config().baseUrl + "/signin"); // Assert that the URL is the Contact page URL
  });

  // Add assertions here to validate the form submission result on the main page

  // Add more tests for other navigation links and functionality as needed
});
