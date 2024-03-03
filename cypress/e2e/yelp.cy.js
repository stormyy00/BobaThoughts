describe("YelpSearch", () => {
  it("performs a search and displays results", () => {
    // Visit the page
    cy.visit("/yelp");

    // Enter search term and location
    cy.get('[data-testid="search-term"]').type("restaurant");
    cy.get('[data-testid="location"]').type("New York");

    cy.get('[data-testid="search-button"]').click();

    // Wait for results to load
    cy.wait(2000); // Adjust this wait time as needed, or use more specific waits

    // Verify that results are displayed
    cy.get('[data-testid="search-results"]').should("exist");
  });
});
