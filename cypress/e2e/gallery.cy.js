describe("Gallery", () => {
  it("performs a search and displays results", () => {
    // Visit the page
    cy.visit("/gallery");

    // Wait for results to load
    cy.wait(2000); // Adjust this wait time as needed, or use more specific waits
  });
});
